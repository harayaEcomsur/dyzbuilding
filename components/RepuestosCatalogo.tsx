'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { URGENCY_ES, URGENCY_EN } from '@/components/ContactForm'
import { gtagEvent } from '@/lib/gtag'

interface CatalogoItem {
  id: string
  nombre: string
  categoria: string
  unidad: string
  marca: string
  imagenes: string[]
  compatibilidad: string
}

interface MarcaLite {
  id: string
  nombre: string
  logoUrl: string
}

const TX = {
  es: {
    eyebrow: 'Catálogo', title: 'Solicitud de Repuestos', sub: 'Repuestos originales para LG, Samsung y Gree. Selecciona lo que necesitas y te enviamos una cotización — sin costo ni compromiso.',
    allBrands: 'Todas las marcas', noResults: 'No hay repuestos publicados para este filtro todavía.', loading: 'Cargando catálogo…',
    compat: 'Compatible con', add: '+ Agregar', added: 'Agregado ✓', qty: 'Cant.',
    notFoundTitle: '¿No encuentras tu repuesto?', notFoundDesc: 'Descríbelo y lo incluimos en tu solicitud de cotización.',
    notFoundPlaceholder: 'Ej. Placa electrónica PCB para LG ARUN100LTE5', notFoundAdd: 'Agregar a la solicitud',
    trayCount: (n: number) => `${n} ${n === 1 ? 'repuesto seleccionado' : 'repuestos seleccionados'}`,
    trayBtn: 'Solicitar cotización', formTitle: 'Completa tus datos', formSub: 'Revisamos tu selección y te respondemos con una propuesta.',
    nombre: 'Nombre', empresa: 'Empresa (opcional)', email: 'Email', telefono: 'Teléfono',
    equipo: 'Equipo (marca / modelo)', equipoPlaceholder: 'Ej. LG Multi V 5, 10HP',
    urgencia: 'Urgencia', seleccionar: 'Seleccionar...',
    resumen: 'Resumen de tu solicitud', sinRepuestos: 'Sin repuestos del catálogo seleccionados.',
    enviar: 'Enviar solicitud', enviando: 'Enviando…', errorEnvio: 'Error al enviar. Intenta nuevamente.',
    exitoTitle: 'SOLICITUD RECIBIDA', exitoDesc: 'Un especialista revisará tu solicitud y te contactará con una propuesta a la brevedad.',
    quitar: 'Quitar',
  },
  en: {
    eyebrow: 'Catalog', title: 'Parts Request', sub: 'Original parts for LG, Samsung and Gree. Select what you need and we’ll send you a quote — free, no commitment.',
    allBrands: 'All brands', noResults: 'No parts published for this filter yet.', loading: 'Loading catalog…',
    compat: 'Compatible with', add: '+ Add', added: 'Added ✓', qty: 'Qty.',
    notFoundTitle: 'Can’t find your part?', notFoundDesc: 'Describe it and we’ll include it in your quote request.',
    notFoundPlaceholder: 'E.g. PCB board for LG ARUN100LTE5', notFoundAdd: 'Add to request',
    trayCount: (n: number) => `${n} ${n === 1 ? 'part selected' : 'parts selected'}`,
    trayBtn: 'Request quote', formTitle: 'Your details', formSub: 'We’ll review your selection and get back to you with a proposal.',
    nombre: 'Name', empresa: 'Company (optional)', email: 'Email', telefono: 'Phone',
    equipo: 'Equipment (brand / model)', equipoPlaceholder: 'E.g. LG Multi V 5, 10HP',
    urgencia: 'Urgency', seleccionar: 'Select...',
    resumen: 'Request summary', sinRepuestos: 'No catalog parts selected.',
    enviar: 'Send request', enviando: 'Sending…', errorEnvio: 'Error sending. Please try again.',
    exitoTitle: 'REQUEST RECEIVED', exitoDesc: 'A specialist will review your request and get in touch shortly with a proposal.',
    quitar: 'Remove',
  },
}

interface RepuestosCatalogoProps {
  lang?: 'es' | 'en'
  initialItems?: CatalogoItem[]
  initialMarcas?: MarcaLite[]
}

export default function RepuestosCatalogo({ lang = 'es', initialItems, initialMarcas }: RepuestosCatalogoProps) {
  const t = TX[lang]
  const [items, setItems] = useState<CatalogoItem[]>(initialItems ?? [])
  const [marcas, setMarcas] = useState<MarcaLite[]>(initialMarcas ?? [])
  const [loading, setLoading] = useState(!initialItems)
  const [marcaFiltro, setMarcaFiltro] = useState<string>('')
  const [seleccion, setSeleccion] = useState<Record<string, number>>({})
  const [itemsLibres, setItemsLibres] = useState<string[]>([])
  const [libreInput, setLibreInput] = useState('')
  const [formOpen, setFormOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', equipo: '', urgencia: '' })
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (initialItems) return // ya vino renderizado desde el servidor
    Promise.all([
      fetch('/api/catalogo').then(r => r.ok ? r.json() : []),
      fetch('/api/marcas').then(r => r.ok ? r.json() : []),
    ]).then(([i, m]) => { setItems(i); setMarcas(m) }).catch(() => {}).finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const marcasConItems = useMemo(() => {
    const set = new Set(items.map(i => i.marca).filter(Boolean))
    return marcas.filter(m => set.has(m.nombre))
  }, [items, marcas])

  const visible = useMemo(() => marcaFiltro ? items.filter(i => i.marca === marcaFiltro) : items, [items, marcaFiltro])

  const totalSeleccionados = Object.keys(seleccion).length

  // GA4 ecommerce: la lista visible cambia al cargar y al filtrar por marca —
  // se reporta como view_item_list cada vez (patrón recomendado por GA4 para
  // "lista de productos cambió", no solo en el primer render).
  useEffect(() => {
    if (visible.length === 0) return
    gtagEvent('view_item_list', {
      item_list_id: marcaFiltro || 'all',
      item_list_name: marcaFiltro || t.allBrands,
      items: visible.map(it => ({ item_id: it.id, item_name: it.nombre, item_brand: it.marca, item_category: it.categoria })),
      lang,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, marcaFiltro])

  function toggleItem(id: string) {
    const item = items.find(i => i.id === id)
    const wasSelected = !!seleccion[id]
    setSeleccion(prev => {
      const next = { ...prev }
      if (next[id]) delete next[id]
      else next[id] = 1
      return next
    })
    // El evento se dispara fuera del updater de setState: los updaters deben
    // ser puros (React StrictMode los invoca 2 veces en dev para detectarlo),
    // así que un gtagEvent ahí adentro se dispararía doble en desarrollo.
    if (item) {
      if (wasSelected) {
        gtagEvent('remove_from_cart', { items: [{ item_id: item.id, item_name: item.nombre, item_brand: item.marca, item_category: item.categoria, quantity: seleccion[id] }], lang })
      } else {
        gtagEvent('add_to_cart', { items: [{ item_id: item.id, item_name: item.nombre, item_brand: item.marca, item_category: item.categoria, quantity: 1 }], lang })
      }
    }
  }
  function setCantidad(id: string, cantidad: number) {
    setSeleccion(prev => ({ ...prev, [id]: Math.max(1, cantidad) }))
  }
  function addLibre() {
    if (!libreInput.trim()) return
    const nombre = libreInput.trim()
    setItemsLibres(prev => [...prev, nombre])
    gtagEvent('add_custom_item_to_quote', { item_name: nombre, lang })
    setLibreInput('')
  }
  function removeLibre(idx: number) {
    const nombre = itemsLibres[idx]
    setItemsLibres(prev => prev.filter((_, i) => i !== idx))
    gtagEvent('remove_custom_item_from_quote', { item_name: nombre, lang })
  }

  function openForm() {
    setFormOpen(true)
    gtagEvent('begin_checkout', {
      items: Object.entries(seleccion).map(([id, cantidad]) => {
        const it = items.find(i => i.id === id)
        return { item_id: id, item_name: it?.nombre ?? id, item_brand: it?.marca, item_category: it?.categoria, quantity: cantidad }
      }),
      items_libres_count: itemsLibres.length,
      lang,
    })
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const selectedItems = Object.entries(seleccion).map(([id, cantidad]) => {
        const it = items.find(i => i.id === id)
        return { nombre: it?.nombre ?? id, marca: it?.marca, cantidad }
      })
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipo: 'cotizacion_repuestos',
          nombre: form.nombre, empresa: form.empresa, email: form.email, telefono: form.telefono,
          equipo: form.equipo, urgencia: form.urgencia, lang,
          items: selectedItems, itemsLibres,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      gtagEvent('quote_requested', {
        form_type: 'cotizacion_repuestos',
        form_lang: lang,
        items: selectedItems.map(it => ({ item_name: it.nombre, item_brand: it.marca, quantity: it.cantidad })),
        items_count: selectedItems.length,
        items_libres_count: itemsLibres.length,
        urgency: form.urgencia || 'not_specified',
        equipo: form.equipo || 'not_specified',
      })
    } catch (err) {
      const rawMsg = err instanceof Error ? err.message : 'error'
      setStatus('error')
      gtagEvent('contact_error', { form_type: 'cotizacion_repuestos', error: rawMsg, lang })
    }
  }

  const totalItems = totalSeleccionados + itemsLibres.length

  return (
    <>
      <style>{`
        .rp-filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 32px; }
        .rp-chip { font-family: 'Josefin Sans', sans-serif; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; min-height: 44px; display: inline-flex; align-items: center; padding: 0 16px; border: 1px solid var(--border); background: transparent; color: var(--dim); cursor: pointer; transition: all .18s; }
        .rp-chip:hover { color: var(--text); border-color: rgba(255,255,255,.25); }
        .rp-chip.active { color: var(--accent); border-color: rgba(200,168,75,.4); background: rgba(200,168,75,.06); }
        .rp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 20px; }
        .rp-card { border: 1px solid var(--border); background: rgba(255,255,255,.015); display: flex; flex-direction: column; transition: border-color .18s; }
        .rp-card.selected { border-color: rgba(200,168,75,.45); }
        .rp-card-img { width: 100%; aspect-ratio: 1; background: rgba(255,255,255,.03); display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .rp-card-img img { width: 100%; height: 100%; object-fit: cover; }
        .rp-card-body { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
        .rp-card-marca { font-family: 'Josefin Sans', sans-serif; font-size: 9px; letter-spacing: .15em; text-transform: uppercase; color: var(--accent); }
        .rp-card-nombre { font-family: 'Josefin Sans', sans-serif; font-size: 14.5px; font-weight: 400; color: var(--text); line-height: 1.3; }
        .rp-card-compat { font-size: 12px; color: var(--dim); line-height: 1.5; flex: 1; }
        .rp-card-footer { display: flex; align-items: center; gap: 8px; margin-top: 8px; }
        .rp-card-btn { flex: 1; font-family: 'Josefin Sans', sans-serif; font-size: 10.5px; letter-spacing: .1em; text-transform: uppercase; min-height: 44px; padding: 0 10px; border: 1px solid var(--border); background: transparent; color: var(--text); cursor: pointer; transition: all .18s; }
        .rp-card-btn.active { border-color: rgba(200,168,75,.5); color: var(--accent); background: rgba(200,168,75,.06); }
        .rp-card-qty { width: 52px; min-height: 44px; background: rgba(255,255,255,.04); border: 1px solid var(--border); color: var(--text); padding: 0 6px; font-size: 13px; text-align: center; }
        .rp-libre-row { display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; align-items: center; }
        .rp-libre-fg { flex: 1; min-width: 220px; margin-bottom: 0; }
        .rp-libre-btn { flex-shrink: 0; min-height: 44px; }
        .rp-libre-list { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; }
        .rp-libre-item { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 14px; background: rgba(255,255,255,.03); border: 1px solid var(--border); font-size: 13px; color: var(--text); }
        .rp-libre-item button { background: none; border: none; color: var(--dim); cursor: pointer; font-size: 13px; padding: 12px; margin: -12px -12px -12px 0; }
        .rp-tray { position: sticky; bottom: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 24px; background: rgba(12,12,12,.92); backdrop-filter: blur(8px); border-top: 1px solid rgba(200,168,75,.25); margin: 32px -24px -24px; flex-wrap: wrap; }
        .rp-form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) {
          .rp-form-grid-2 { grid-template-columns: 1fr; }
          .rp-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
          /* En mobile esta página tiene BottomTabBar fijo abajo (ver tab-bar
             en globals.css) — la bandeja sticky sube para no quedar tapada. */
          .rp-tray { bottom: calc(56px + env(safe-area-inset-bottom, 0px)); }
        }
      `}</style>

      <div className="sp-section" id={lang === 'en' ? 'catalog' : 'catalogo'}>
        {loading ? (
          <p style={{ color: 'var(--dim)', textAlign: 'center', padding: '48px 0' }}>{t.loading}</p>
        ) : (
          <>
            {marcasConItems.length > 0 && (
              <div className="rp-filters">
                <button className={`rp-chip${!marcaFiltro ? ' active' : ''}`} onClick={() => setMarcaFiltro('')}>{t.allBrands}</button>
                {marcasConItems.map(m => (
                  <button key={m.id} className={`rp-chip${marcaFiltro === m.nombre ? ' active' : ''}`} onClick={() => setMarcaFiltro(m.nombre)}>{m.nombre}</button>
                ))}
              </div>
            )}

            {visible.length === 0 ? (
              <p style={{ color: 'var(--dim)', textAlign: 'center', padding: '48px 0' }}>{t.noResults}</p>
            ) : (
              <div className="rp-grid">
                {visible.map(item => {
                  const isSelected = !!seleccion[item.id]
                  return (
                    <div key={item.id} className={`rp-card${isSelected ? ' selected' : ''}`}>
                      <div className="rp-card-img">
                        {item.imagenes[0] ? (
                          <img
                            src={item.imagenes[0]}
                            alt={item.marca ? `${item.nombre} — ${item.marca}` : item.nombre}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <span style={{ color: 'rgba(255,255,255,.15)', fontSize: 11, fontFamily: 'Josefin Sans, sans-serif', letterSpacing: '.1em', textTransform: 'uppercase' }}>{item.categoria || '—'}</span>
                        )}
                      </div>
                      <div className="rp-card-body">
                        {item.marca && <span className="rp-card-marca">{item.marca}</span>}
                        <span className="rp-card-nombre">{item.nombre}</span>
                        {item.compatibilidad && (
                          <span className="rp-card-compat">{t.compat}: {item.compatibilidad}</span>
                        )}
                        <div className="rp-card-footer">
                          <button className={`rp-card-btn${isSelected ? ' active' : ''}`} onClick={() => toggleItem(item.id)}>
                            {isSelected ? t.added : t.add}
                          </button>
                          {isSelected && (
                            <input
                              type="number" min={1} className="rp-card-qty"
                              value={seleccion[item.id]}
                              onChange={e => setCantidad(item.id, parseInt(e.target.value, 10) || 1)}
                              aria-label={t.qty}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}

        {/* No encuentras tu repuesto */}
        <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
          <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 'clamp(18px,2vw,24px)', fontWeight: 300, margin: '0 0 8px' }}>{t.notFoundTitle}</h3>
          <p style={{ color: 'var(--dim)', fontSize: 14, margin: '0 0 4px' }}>{t.notFoundDesc}</p>
          <div className="rp-libre-row">
            <div className="fg rp-libre-fg">
              <label htmlFor="rp-libre-input" className="sr-only">{t.notFoundPlaceholder}</label>
              <input
                id="rp-libre-input"
                value={libreInput}
                onChange={e => setLibreInput(e.target.value)}
                placeholder={t.notFoundPlaceholder}
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addLibre() } }}
              />
            </div>
            <button type="button" className="sp-hero-cta sp-hero-cta-outline rp-libre-btn" onClick={addLibre} disabled={!libreInput.trim()}>{t.notFoundAdd}</button>
          </div>
          {itemsLibres.length > 0 && (
            <div className="rp-libre-list">
              {itemsLibres.map((libre, i) => (
                <div key={i} className="rp-libre-item">
                  <span>{libre}</span>
                  <button type="button" onClick={() => removeLibre(i)}>{t.quitar} ×</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {totalItems > 0 && !formOpen && (
          <div className="rp-tray">
            <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 13, color: 'var(--text)' }}>{t.trayCount(totalItems)}</span>
            <button type="button" className="sp-hero-cta" onClick={openForm}>{t.trayBtn}</button>
          </div>
        )}

        {formOpen && (
          <div ref={formRef} style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>{t.exitoTitle}</p>
                <p style={{ color: 'var(--dim)', maxWidth: 380, margin: '0 auto', lineHeight: 1.7 }}>{t.exitoDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 'clamp(18px,2vw,24px)', fontWeight: 300, margin: '0 0 6px' }}>{t.formTitle}</h3>
                <p style={{ color: 'var(--dim)', fontSize: 14, margin: '0 0 24px' }}>{t.formSub}</p>

                <div style={{ marginBottom: 20, padding: 16, background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)' }}>
                  <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 10, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 10px' }}>{t.resumen}</p>
                  {totalSeleccionados === 0 && itemsLibres.length === 0 ? (
                    <p style={{ color: 'var(--dim)', fontSize: 13, margin: 0 }}>{t.sinRepuestos}</p>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--text)', fontSize: 13.5, lineHeight: 1.9 }}>
                      {Object.entries(seleccion).map(([id, cant]) => {
                        const it = items.find(i => i.id === id)
                        return <li key={id}>{it?.nombre ?? id} {it?.marca ? `(${it.marca})` : ''} × {cant}</li>
                      })}
                      {itemsLibres.map((l, i) => <li key={`libre-${i}`}>{l}</li>)}
                    </ul>
                  )}
                </div>

                <div className="fg"><label>{t.nombre}</label><input required value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} /></div>
                <div className="rp-form-grid-2">
                  <div className="fg"><label>{t.empresa}</label><input value={form.empresa} onChange={e => setForm(f => ({ ...f, empresa: e.target.value }))} /></div>
                  <div className="fg"><label>{t.email}</label><input type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
                </div>
                <div className="rp-form-grid-2">
                  <div className="fg"><label>{t.telefono}</label><input type="tel" value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} /></div>
                  <div className="fg"><label>{t.equipo}</label><input value={form.equipo} onChange={e => setForm(f => ({ ...f, equipo: e.target.value }))} placeholder={t.equipoPlaceholder} /></div>
                </div>
                <div className="fg">
                  <label>{t.urgencia}</label>
                  <select value={form.urgencia} onChange={e => setForm(f => ({ ...f, urgencia: e.target.value }))}>
                    <option value="">{t.seleccionar}</option>
                    {(lang === 'en' ? URGENCY_EN : URGENCY_ES).map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>

                {status === 'error' && <p role="alert" style={{ color: '#e55', fontSize: 12, marginBottom: 14 }}>{t.errorEnvio}</p>}

                <button className="btn-p" type="submit" disabled={status === 'loading'} style={{ width: '100%', opacity: status === 'loading' ? .6 : 1 }}>
                  {status === 'loading' ? t.enviando : t.enviar}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  )
}
