'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { QuotationData, LineItem, makeId, calcTotal } from '@/lib/cotizaciones-store'
import { apiFetchRecord, apiCreateRecord, apiUpdateRecord } from '@/lib/cotizaciones-api'

const MONEDAS: Record<string, { sym: string; label: string }> = {
  CLP: { sym: '$', label: 'CLP — Pesos Chilenos' },
  USD: { sym: 'US$', label: 'USD — Dólares' },
  UF: { sym: 'UF', label: 'UF — Unidad de Fomento' },
}

function formatNum(val: string, sym: string) {
  const n = parseFloat(val.replace(/[^\d.]/g, ''))
  if (isNaN(n)) return `${sym} —`
  if (sym === 'UF') return `UF ${n.toFixed(2)}`
  return `${sym} ${n.toLocaleString('es-CL')}`
}

function calcSubtotal(item: LineItem): number {
  const q = parseFloat(item.cantidad) || 0
  const p = parseFloat(item.precioUnitario.replace(/[^\d.]/g, '')) || 0
  return q * p
}

let idCounter = 3

function getTodayStr() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function makeDefaultData(): QuotationData {
  return {
    numero: `COT-${new Date().getFullYear()}-000`,
    fecha: getTodayStr(),
    validez: '30',
    moneda: 'CLP',
    clienteNombre: '',
    clienteEmpresa: '',
    clienteRut: '',
    clienteEmail: '',
    clienteTelefono: '',
    clienteDireccion: '',
    items: [
      { id: 1, descripcion: '', subtitulo: '', cantidad: '1', unidad: 'gl.', precioUnitario: '' },
      { id: 2, descripcion: '', subtitulo: '', cantidad: '1', unidad: 'gl.', precioUnitario: '' },
    ],
    incluirIva: true,
    notas: 'Precios no incluyen IVA (salvo indicación).\nValidez de la oferta: 30 días corridos desde la fecha de emisión.\nPlazo de entrega a confirmar según stock y logística.\nForma de pago: 50% anticipo, 50% contra entrega.',
  }
}

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

export default function NuevaCotizacion() {
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form')
  const [data, setData] = useState<QuotationData>(makeDefaultData)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [initialized, setInitialized] = useState(false)

  const editingIdRef = useRef<string | null>(null)
  const estadoRef = useRef<'borrador' | 'emitida'>('borrador')
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const set = useCallback((patch: Partial<QuotationData>) => setData(d => ({ ...d, ...patch })), [])

  // Número aleatorio solo client-side para evitar mismatch de hidratación
  useEffect(() => {
    const cotNum = String(Math.floor(Math.random() * 900) + 100)
    setData(d => d.numero.endsWith('-000')
      ? { ...d, numero: `COT-${new Date().getFullYear()}-${cotNum}` }
      : d
    )
  }, [])

  // Carga inicial desde URL param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    const shouldPrint = params.get('print') === '1'
    if (id) {
      apiFetchRecord(id).then(record => {
        if (record) {
          setData(record.data)
          setEditingId(id)
          editingIdRef.current = id
          estadoRef.current = record.estado
        }
        setInitialized(true)
        if (shouldPrint) {
          // Limpiar el param de la URL y disparar impresión
          window.history.replaceState({}, '', `/admin/cotizaciones/nueva?id=${id}`)
          setTimeout(() => window.print(), 600)
        }
      }).catch(() => setInitialized(true))
    } else {
      setInitialized(true)
    }
  }, [])

  // Auto-guardado con debounce
  useEffect(() => {
    if (!initialized) return
    clearTimeout(saveTimer.current)
    setSaveStatus('saving')
    saveTimer.current = setTimeout(() => { void doAutoSave(data) }, 800)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, initialized])

  async function doAutoSave(snapshot: QuotationData) {
    const id = editingIdRef.current
    try {
      if (id) {
        await apiUpdateRecord(id, snapshot, estadoRef.current)
      } else {
        const newId = makeId()
        await apiCreateRecord(newId, snapshot, 'borrador')
        setEditingId(newId)
        editingIdRef.current = newId
        window.history.replaceState({}, '', `/admin/cotizaciones/nueva?id=${newId}`)
      }
      setSaveStatus('saved')
    } catch {
      setSaveStatus('error')
    }
  }

  async function commitToServer(estado: 'borrador' | 'emitida') {
    clearTimeout(saveTimer.current)
    const id = editingIdRef.current
    try {
      if (id) {
        await apiUpdateRecord(id, data, estado)
      } else {
        const newId = makeId()
        await apiCreateRecord(newId, data, estado)
        setEditingId(newId)
        editingIdRef.current = newId
        window.history.replaceState({}, '', `/admin/cotizaciones/nueva?id=${newId}`)
      }
      estadoRef.current = estado
      setSaveStatus('saved')
    } catch {
      setSaveStatus('error')
    }
  }

  async function handleGuardar() {
    await commitToServer('borrador')
  }

  async function handlePrint() {
    await commitToServer('emitida')
    window.print()
  }

  const previewRef = useRef<HTMLDivElement>(null)
  const [previewScale, setPreviewScale] = useState(1)

  useEffect(() => {
    const el = previewRef.current
    if (!el) return
    const update = () => {
      if (el.clientWidth === 0) return
      setPreviewScale(Math.min(1, (el.clientWidth - 48) / 794))
    }
    update()
    const obs = new ResizeObserver(update)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (mobileTab === 'preview') {
      requestAnimationFrame(() => {
        const el = previewRef.current
        if (!el) return
        const available = el.clientWidth - 48
        if (available > 0) setPreviewScale(Math.min(1, available / 794))
      })
    }
  }, [mobileTab])

  function addItem() {
    set({ items: [...data.items, { id: ++idCounter, descripcion: '', subtitulo: '', cantidad: '1', unidad: 'gl.', precioUnitario: '' }] })
  }

  function removeItem(id: number) {
    if (data.items.length <= 1) return
    set({ items: data.items.filter(i => i.id !== id) })
  }

  function updateItem(id: number, patch: Partial<LineItem>) {
    set({ items: data.items.map(i => i.id === id ? { ...i, ...patch } : i) })
  }

  const sym = MONEDAS[data.moneda]?.sym ?? '$'
  const subtotalAll = data.items.reduce((acc, i) => acc + calcSubtotal(i), 0)
  const iva = data.incluirIva ? subtotalAll * 0.19 : 0
  const total = subtotalAll + iva

  const fechaDisplay = (() => {
    try {
      return new Date(data.fecha + 'T12:00:00').toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })
    } catch { return data.fecha }
  })()

  const saveLabel =
    saveStatus === 'saving' ? 'Guardando…'
    : saveStatus === 'saved' ? 'Guardado'
    : saveStatus === 'error' ? 'Error al guardar'
    : ''

  const saveColor =
    saveStatus === 'error' ? '#e05555'
    : saveStatus === 'saved' ? 'rgba(200,168,75,0.7)'
    : 'var(--dim)'

  return (
    <>
      <style>{`
        @media print {
          * { visibility: hidden !important; }
          #print-preview, #print-preview * {
            visibility: visible !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          #print-preview { position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; padding: 0 !important; background: #fff !important; }
          #print-preview .page { box-shadow: none !important; margin: 0 !important; width: 100% !important; zoom: 1 !important; }
        }
        #print-preview .page { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .cot-layout { display: flex; height: 100%; overflow: hidden; }
        .cot-form {
          width: 850px; flex-shrink: 0; overflow-y: auto;
          border-right: 1px solid var(--border);
          padding: 28px 36px;
          display: flex; flex-direction: column; gap: 24px;
        }
        .cot-preview {
          flex: 1; min-width: 0;
          overflow-y: auto; overflow-x: hidden;
          background: #888; padding: 24px;
        }
        .cot-mobile-tabs { display: none; }
        @media (max-width: 1280px) { .cot-form { width: 520px; padding: 24px 28px; } }
        @media (max-width: 900px) {
          .cot-layout { flex-direction: column; }
          .cot-form { width: 100%; max-height: 56vh; border-right: none; border-bottom: 1px solid var(--border); }
          .cot-preview { flex: 1; }
        }
        @media (max-width: 640px) {
          .cot-mobile-tabs { display: flex; border-bottom: 1px solid var(--border); }
          .cot-form { max-height: none; border-bottom: none; }
          .cot-layout { flex-direction: column; }
          .mobile-hidden { display: none !important; }
        }
      `}</style>

      <div className="cot-mobile-tabs">
        {(['form', 'preview'] as const).map(tab => (
          <button key={tab} type="button" onClick={() => setMobileTab(tab)} style={{
            flex: 1, fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            padding: '12px', background: 'none', border: 'none',
            borderBottom: mobileTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
            color: mobileTab === tab ? 'var(--accent)' : 'var(--dim)', cursor: 'pointer',
          }}>
            {tab === 'form' ? 'Formulario' : 'Vista previa'}
          </button>
        ))}
      </div>

      <div className="cot-layout">
        {/* LEFT — FORM */}
        <div className={`cot-form${mobileTab === 'preview' ? ' mobile-hidden' : ''}`}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
              <Link href="/admin/cotizaciones" style={{
                fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5,
                letterSpacing: '0.3em', textTransform: 'uppercase',
                color: 'var(--accent)', textDecoration: 'none',
              }}>← Historial</Link>
              {saveLabel && (
                <span style={{
                  marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif',
                  fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: saveColor,
                }}>{saveLabel}</span>
              )}
            </div>
            <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 22, fontWeight: 200, letterSpacing: '0.06em' }}>
              {editingId ? `Editando ${data.numero}` : 'Nueva Cotización'}
            </h1>
          </div>

          {/* Datos del documento */}
          <section>
            <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Datos del Documento</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div className="field"><label>Número</label><input value={data.numero} onChange={e => set({ numero: e.target.value })} /></div>
                <div className="field"><label>Moneda</label>
                  <select value={data.moneda} onChange={e => set({ moneda: e.target.value })}>
                    <option value="CLP">CLP</option>
                    <option value="USD">USD</option>
                    <option value="UF">UF</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div className="field"><label>Fecha</label><input type="date" value={data.fecha} onChange={e => set({ fecha: e.target.value })} /></div>
                <div className="field"><label>Validez (días)</label><input type="number" value={data.validez} onChange={e => set({ validez: e.target.value })} /></div>
              </div>
            </div>
          </section>

          {/* Cliente */}
          <section>
            <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Datos del Cliente</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div className="field"><label>Nombre</label><input value={data.clienteNombre} onChange={e => set({ clienteNombre: e.target.value })} placeholder="Nombre contacto" /></div>
                <div className="field"><label>Empresa</label><input value={data.clienteEmpresa} onChange={e => set({ clienteEmpresa: e.target.value })} placeholder="Razón social" /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div className="field"><label>RUT</label><input value={data.clienteRut} onChange={e => set({ clienteRut: e.target.value })} placeholder="XX.XXX.XXX-X" /></div>
                <div className="field"><label>Teléfono</label><input value={data.clienteTelefono} onChange={e => set({ clienteTelefono: e.target.value })} placeholder="+56 9 XXXX XXXX" /></div>
              </div>
              <div className="field"><label>Email</label><input type="email" value={data.clienteEmail} onChange={e => set({ clienteEmail: e.target.value })} placeholder="cliente@empresa.cl" /></div>
              <div className="field"><label>Dirección</label><input value={data.clienteDireccion} onChange={e => set({ clienteDireccion: e.target.value })} placeholder="Dirección, Ciudad" /></div>
            </div>
          </section>

          {/* Ítems */}
          <section>
            <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Ítems</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {data.items.map((item, idx) => (
                <div key={item.id} style={{ border: '1px solid var(--border)', padding: 14, position: 'relative' }}>
                  <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.25em', color: 'var(--dim)', marginBottom: 10 }}>ÍTEM {idx + 1}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div className="field"><label>Descripción</label><input value={item.descripcion} onChange={e => updateItem(item.id, { descripcion: e.target.value })} placeholder="Descripción del servicio o producto" /></div>
                    <div className="field"><label>Detalle (opcional)</label><input value={item.subtitulo} onChange={e => updateItem(item.id, { subtitulo: e.target.value })} placeholder="Especificaciones adicionales" /></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
                      <div className="field"><label>Cant.</label><input type="number" value={item.cantidad} onChange={e => updateItem(item.id, { cantidad: e.target.value })} /></div>
                      <div className="field"><label>Unidad</label><input value={item.unidad} onChange={e => updateItem(item.id, { unidad: e.target.value })} /></div>
                      <div className="field" style={{ gridColumn: 'span 2' }}><label>Precio Unitario</label><input value={item.precioUnitario} onChange={e => updateItem(item.id, { precioUnitario: e.target.value })} placeholder="0" /></div>
                    </div>
                    <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10, letterSpacing: '0.2em', color: 'var(--dim)', textAlign: 'right' }}>
                      Subtotal: <span style={{ color: 'var(--accent)' }}>{formatNum(String(calcSubtotal(item)), sym)}</span>
                    </div>
                  </div>
                  {data.items.length > 1 && (
                    <button onClick={() => removeItem(item.id)} style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>×</button>
                  )}
                </div>
              ))}
              <button onClick={addItem} className="btn-outline" style={{ alignSelf: 'flex-start', padding: '9px 18px', fontSize: 10 }}>+ Agregar ítem</button>
            </div>
          </section>

          {/* Totales */}
          <section>
            <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Totales</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Outfit, sans-serif', fontSize: 14, color: 'var(--dim)', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
                <span>Subtotal</span><span style={{ color: 'var(--text)' }}>{formatNum(String(subtotalAll), sym)}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                  <input type="checkbox" checked={data.incluirIva} onChange={e => set({ incluirIva: e.target.checked })} style={{ width: 'auto' }} />
                  <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--dim)' }}>IVA 19%</span>
                </label>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, color: 'var(--text)' }}>{formatNum(String(iva), sym)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text)' }}>Total</span>
                <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 20, fontWeight: 200, color: 'var(--accent)' }}>{formatNum(String(total), sym)}</span>
              </div>
            </div>
          </section>

          {/* Notas */}
          <section>
            <div className="field">
              <label>Notas y Condiciones</label>
              <textarea rows={6} value={data.notas} onChange={e => set({ notas: e.target.value })} />
            </div>
          </section>

          {/* Acciones */}
          <section style={{ display: 'flex', gap: 10, paddingBottom: 8 }}>
            <button onClick={handleGuardar} className="btn-outline" style={{ flex: 1, textAlign: 'center', padding: '13px' }}>
              Guardar borrador
            </button>
            <button onClick={handlePrint} className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '13px' }}>
              Descargar PDF
            </button>
          </section>
        </div>

        {/* RIGHT — PREVIEW */}
        <div ref={previewRef} id="print-preview" className={`cot-preview${mobileTab === 'form' ? ' mobile-hidden' : ''}`}>
          <div className="page" style={{
            width: 794, minHeight: 1123, background: '#fff', padding: '50px 52px 80px',
            position: 'relative', boxShadow: '0 4px 28px rgba(0,0,0,0.25)',
            fontFamily: 'Outfit, sans-serif', color: '#1a1a1a', fontSize: 16,
            zoom: previewScale, margin: '0 auto',
            WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact',
          } as React.CSSProperties}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 24 }}>
              <div style={{ background: '#0c0c0c', padding: '14px 18px', display: 'inline-block' }}>
                <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ textAlign: 'right', paddingTop: 2 }}>
                <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 30, fontWeight: 200, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0c0c0c', lineHeight: 1, marginBottom: 12 }}>Cotización</div>
                <div style={{ fontSize: 13.5, color: '#666', lineHeight: 1.9 }}>
                  <strong style={{ display: 'block', color: '#1a1a1a', fontWeight: 500, fontSize: 15 }}>N° {data.numero}</strong>
                  Fecha: {fechaDisplay}<br />
                  Validez: {data.validez} días corridos
                </div>
              </div>
            </div>

            <div style={{ height: 3, background: '#C8A84B', margin: '22px 0 28px' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 28 }}>
              <div>
                <h4 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#C8A84B', marginBottom: 9, fontWeight: 400 }}>Cliente</h4>
                <p style={{ fontSize: 14, lineHeight: 1.78, color: '#666' }}>
                  {data.clienteNombre && <strong style={{ display: 'block', fontSize: 15.5, color: '#1a1a1a', fontWeight: 500, marginBottom: 1 }}>{data.clienteNombre}</strong>}
                  {data.clienteEmpresa || '[Empresa / Razón social]'}<br />
                  {data.clienteDireccion || '[Dirección]'}<br />
                  {data.clienteRut && <>RUT: {data.clienteRut}<br /></>}
                  {data.clienteEmail || '[email@cliente.cl]'} · {data.clienteTelefono || '[Teléfono]'}
                </p>
              </div>
              <div>
                <h4 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#C8A84B', marginBottom: 9, fontWeight: 400 }}>Proveedor</h4>
                <p style={{ fontSize: 14, lineHeight: 1.78, color: '#666' }}>
                  <strong style={{ display: 'block', fontSize: 15.5, color: '#1a1a1a', fontWeight: 500, marginBottom: 1 }}>D&Z Building</strong>
                  Chile<br />
                  contacto@dyzbuilding.cl
                </p>
              </div>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 18 }}>
              <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#666' }}>Moneda:</span>
              <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 13, letterSpacing: '0.1em', background: 'rgba(200,168,75,0.1)', color: '#C8A84B', border: '1px solid rgba(200,168,75,0.25)', padding: '3px 10px' }}>
                {MONEDAS[data.moneda]?.label}
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
              <thead>
                <tr style={{ background: '#0c0c0c', color: '#fff' }}>
                  {['#', 'Descripción', 'Cant.', 'P. Unitario', 'Total'].map((h, i) => (
                    <th key={h} style={{
                      fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.26em',
                      textTransform: 'uppercase', fontWeight: 400, padding: '10px 11px',
                      textAlign: i === 0 ? 'left' : i === 1 ? 'left' : 'right',
                      width: i === 0 ? 26 : i === 2 ? 56 : i === 3 ? 90 : i === 4 ? 90 : undefined,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, idx) => {
                  const sub = calcSubtotal(item)
                  return (
                    <tr key={item.id} style={{ borderBottom: '1px solid #e2e2e2', background: idx % 2 === 1 ? '#fafafa' : '#fff' }}>
                      <td style={{ padding: '11px 11px', fontSize: 14, verticalAlign: 'top' }}>{idx + 1}</td>
                      <td style={{ padding: '11px 11px', fontSize: 14, verticalAlign: 'top' }}>
                        <div style={{ color: '#1a1a1a', fontWeight: 400 }}>{item.descripcion || <span style={{ color: '#ccc' }}>[Descripción del ítem]</span>}</div>
                        {item.subtitulo && <div style={{ fontSize: 12.5, color: '#999', marginTop: 2 }}>{item.subtitulo}</div>}
                      </td>
                      <td style={{ padding: '11px 11px', fontSize: 14, textAlign: 'right', verticalAlign: 'top' }}>{item.cantidad} {item.unidad}</td>
                      <td style={{ padding: '11px 11px', fontSize: 14, textAlign: 'right', verticalAlign: 'top' }}>{item.precioUnitario ? formatNum(item.precioUnitario, sym) : '—'}</td>
                      <td style={{ padding: '11px 11px', fontSize: 14, textAlign: 'right', verticalAlign: 'top' }}>{sub > 0 ? formatNum(String(sub), sym) : '—'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 28 }}>
              <div style={{ width: 256 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: 14, borderBottom: '1px solid #e2e2e2' }}>
                  <span style={{ color: '#666' }}>Subtotal</span><span>{formatNum(String(subtotalAll), sym)}</span>
                </div>
                {data.incluirIva && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', fontSize: 14, borderBottom: '1px solid #e2e2e2' }}>
                    <span style={{ color: '#666' }}>IVA (19%)</span><span>{formatNum(String(iva), sym)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0 7px', borderBottom: '2px solid #0c0c0c', borderTop: '2px solid #0c0c0c', marginTop: 4 }}>
                  <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1a1a1a' }}>Total</span>
                  <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 21, fontWeight: 200, color: '#C8A84B' }}>{formatNum(String(total), sym)}</span>
                </div>
              </div>
            </div>

            {data.notas && (
              <div style={{ background: '#f5f5f5', padding: '16px 20px', marginBottom: 32 }}>
                <h4 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#C8A84B', marginBottom: 10, fontWeight: 400 }}>Condiciones</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {data.notas.split('\n').filter(Boolean).map((line, i) => (
                    <li key={i} style={{ fontSize: 13, color: '#666', paddingLeft: 13, position: 'relative', lineHeight: 1.55 }}>
                      <span style={{ position: 'absolute', left: 0, color: '#C8A84B' }}>—</span>{line}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, marginBottom: 56 }}>
              {['Cliente', 'D&Z Building'].map(label => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ height: 52 }} />
                  <div style={{ height: 1, background: '#1a1a1a', marginBottom: 7 }} />
                  <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666' }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ position: 'absolute', bottom: 26, left: 52, right: 52, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid #e2e2e2' }}>
              <span style={{ fontSize: 11.5, color: '#bbb', letterSpacing: '0.06em' }}>D&Z Building · Chile</span>
              <span style={{ fontSize: 11.5, color: '#bbb', letterSpacing: '0.06em' }}>contacto@dyzbuilding.cl</span>
              <span style={{ fontSize: 11.5, color: '#bbb', letterSpacing: '0.06em' }}>{data.numero}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
