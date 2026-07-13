'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { OrdenCompraData, OrdenItem, makeId, calcTotal } from '@/lib/ordenes-store'
import { apiFetchRecord, apiCreateRecord, apiUpdateRecord } from '@/lib/ordenes-api'

const MONEDAS: Record<string, { sym: string; label: string }> = {
  CLP: { sym: '$', label: 'CLP — Pesos Chilenos' },
  USD: { sym: 'US$', label: 'USD — Dólares' },
  UF: { sym: 'UF', label: 'UF — Unidad de Fomento' },
}

function formatNum(val: number, sym: string) {
  if (isNaN(val) || val === 0) return `${sym} 0`
  if (sym === 'UF') return `UF ${val.toFixed(2)}`
  return `${sym} ${val.toLocaleString('es-CL')}`
}

function calcItemSubtotal(item: OrdenItem): number {
  const q = item.cantidad || 0
  const p = parseFloat(String(item.precioUnitario).replace(/[^\d.]/g, '')) || 0
  return q * p
}

let itemCounter = 3

function getTodayStr() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function fmtDateLong(iso: string) {
  try {
    return new Date(iso + 'T12:00:00').toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return iso }
}

function makeDefaultData(): OrdenCompraData {
  return {
    meta: {
      numero: `OC-${new Date().getFullYear()}-000`,
      fecha: getTodayStr(),
      moneda: 'CLP',
      lugarEntrega: '',
      plazoEntrega: '',
      formaPago: '50% anticipo, 50% contra entrega',
    },
    proveedor: {
      empresa: '',
      nombre: '',
      rut: '',
      direccion: '',
      email: '',
      telefono: '',
      ciudad: 'Santiago',
    },
    items: [
      { id: 1, descripcion: '', cantidad: 1, unidad: 'un.', precioUnitario: '' },
      { id: 2, descripcion: '', cantidad: 1, unidad: 'un.', precioUnitario: '' },
    ],
    incluirIva: true,
    notas: '',
    firmante: {
      nombre: '',
      cargo: 'Gerente General',
      rut: '',
    },
  }
}

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

export default function NuevaOrden() {
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form')
  const [data, setData] = useState<OrdenCompraData>(makeDefaultData)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [initialized, setInitialized] = useState(false)

  const editingIdRef = useRef<string | null>(null)
  const estadoRef = useRef<'borrador' | 'emitida'>('borrador')
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const previewRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  const set = useCallback((patch: Partial<OrdenCompraData>) => setData(d => ({ ...d, ...patch })), [])

  useEffect(() => {
    const num = String(Math.floor(Math.random() * 900) + 100)
    setData(d => d.meta.numero.endsWith('-000')
      ? { ...d, meta: { ...d.meta, numero: `OC-${new Date().getFullYear()}-${num}` } }
      : d
    )
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    const shouldPrint = params.get('print') === '1'
    if (id) {
      apiFetchRecord(id).then(record => {
        if (record) {
          setData(record.data)
          editingIdRef.current = id
          estadoRef.current = record.estado
        }
        setInitialized(true)
        if (shouldPrint) {
          window.history.replaceState({}, '', `/admin/ordenes/nueva?id=${id}`)
          setTimeout(() => window.print(), 600)
        }
      }).catch(() => setInitialized(true))
    } else {
      setInitialized(true)
    }
  }, [])

  useEffect(() => {
    const el = previewRef.current
    if (!el) return
    const update = () => {
      const available = el.clientWidth - 48
      if (available > 0) setScale(Math.min(1, available / 794))
    }
    update()
    const obs = new ResizeObserver(update)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const doAutoSave = useCallback(async (d: OrdenCompraData) => {
    if (!initialized) return
    const total = calcTotal(d)
    try {
      setSaveStatus('saving')
      if (!editingIdRef.current) {
        const newId = makeId()
        await apiCreateRecord(newId, d, 'borrador', total)
        editingIdRef.current = newId
        window.history.replaceState({}, '', `/admin/ordenes/nueva?id=${newId}`)
      } else {
        await apiUpdateRecord(editingIdRef.current, d, estadoRef.current, total)
      }
      setSaveStatus('saved')
    } catch {
      setSaveStatus('error')
    }
  }, [initialized])

  useEffect(() => {
    if (!initialized) return
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => void doAutoSave(data), 800)
    return () => clearTimeout(saveTimer.current)
  }, [data, initialized, doAutoSave])

  async function commitToServer(estado: 'borrador' | 'emitida') {
    clearTimeout(saveTimer.current)
    estadoRef.current = estado
    await doAutoSave(data)
  }

  function addItem() {
    setData(d => ({
      ...d,
      items: [...d.items, { id: itemCounter++, descripcion: '', cantidad: 1, unidad: 'un.', precioUnitario: '' }],
    }))
  }

  function removeItem(id: number) {
    setData(d => ({ ...d, items: d.items.filter(i => i.id !== id) }))
  }

  function updateItem(id: number, patch: Partial<OrdenItem>) {
    setData(d => ({
      ...d,
      items: d.items.map(i => i.id === id ? { ...i, ...patch } : i),
    }))
  }

  const sym = MONEDAS[data.meta.moneda]?.sym ?? '$'
  const subtotal = data.items.reduce((s, i) => s + calcItemSubtotal(i), 0)
  const iva = data.incluirIva ? subtotal * 0.19 : 0
  const total = subtotal + iva

  // ── Document styles ──
  const docStyle: React.CSSProperties = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: '#1a1a1a',
    fontSize: 10,
    lineHeight: 1.4,
  }
  const labelStyle: React.CSSProperties = {
    fontSize: 7,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: '#888',
    marginBottom: 2,
  }

  return (
    <>
      <div className="admin-editor-tabs">
        <button type="button" className={`admin-editor-tab${mobileTab === 'form' ? ' active' : ''}`} onClick={() => setMobileTab('form')}>Formulario</button>
        <button type="button" className={`admin-editor-tab${mobileTab === 'preview' ? ' active' : ''}`} onClick={() => setMobileTab('preview')}>Vista previa</button>
      </div>

      <div className="oc-layout">
        {/* ── FORM PANEL ── */}
        <div className={`oc-form${mobileTab === 'preview' ? ' admin-mobile-hidden' : ''}`}>

          <div className="editor-topbar">
            <Link href="/admin/ordenes" className="back-link">← Órdenes</Link>
            <div className="editor-status">
              {saveStatus === 'saving' && <span className="status-saving">Guardando…</span>}
              {saveStatus === 'saved' && <span className="status-saved">Guardado</span>}
              {saveStatus === 'error' && <span className="status-error">Error al guardar</span>}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn-secondary" onClick={() => void commitToServer('borrador')}>
                Guardar borrador
              </button>
              <button className="btn-primary" onClick={async () => {
                await commitToServer('emitida')
                window.print()
              }}>
                Descargar PDF
              </button>
            </div>
          </div>

          {/* Meta */}
          <div className="editor-section">
            <div className="editor-section-title">Datos del documento</div>
            <div className="editor-row">
              <label>Número<input value={data.meta.numero} onChange={e => set({ meta: { ...data.meta, numero: e.target.value } })} /></label>
              <label>Fecha<input type="date" value={data.meta.fecha} onChange={e => set({ meta: { ...data.meta, fecha: e.target.value } })} /></label>
              <label>Moneda
                <select value={data.meta.moneda} onChange={e => set({ meta: { ...data.meta, moneda: e.target.value as 'CLP' | 'USD' | 'UF' } })}>
                  {Object.entries(MONEDAS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                </select>
              </label>
            </div>
          </div>

          {/* Proveedor */}
          <div className="editor-section">
            <div className="editor-section-title">Proveedor</div>
            <div className="editor-row">
              <label>Empresa / Razón social<input value={data.proveedor.empresa} onChange={e => set({ proveedor: { ...data.proveedor, empresa: e.target.value } })} /></label>
              <label>RUT<input value={data.proveedor.rut} onChange={e => set({ proveedor: { ...data.proveedor, rut: e.target.value } })} /></label>
            </div>
            <div className="editor-row">
              <label>Nombre contacto<input value={data.proveedor.nombre} onChange={e => set({ proveedor: { ...data.proveedor, nombre: e.target.value } })} /></label>
              <label>Teléfono<input value={data.proveedor.telefono} onChange={e => set({ proveedor: { ...data.proveedor, telefono: e.target.value } })} /></label>
            </div>
            <div className="editor-row">
              <label>Email<input type="email" value={data.proveedor.email} onChange={e => set({ proveedor: { ...data.proveedor, email: e.target.value } })} /></label>
              <label>Ciudad<input value={data.proveedor.ciudad} onChange={e => set({ proveedor: { ...data.proveedor, ciudad: e.target.value } })} /></label>
            </div>
            <label>Dirección<input value={data.proveedor.direccion} onChange={e => set({ proveedor: { ...data.proveedor, direccion: e.target.value } })} /></label>
          </div>

          {/* Condiciones */}
          <div className="editor-section">
            <div className="editor-section-title">Condiciones de entrega</div>
            <div className="editor-row">
              <label>Lugar de entrega<input value={data.meta.lugarEntrega} onChange={e => set({ meta: { ...data.meta, lugarEntrega: e.target.value } })} /></label>
              <label>Plazo de entrega<input value={data.meta.plazoEntrega} placeholder="Ej: 15 días hábiles" onChange={e => set({ meta: { ...data.meta, plazoEntrega: e.target.value } })} /></label>
            </div>
            <label>Forma de pago<input value={data.meta.formaPago} onChange={e => set({ meta: { ...data.meta, formaPago: e.target.value } })} /></label>
          </div>

          {/* Items */}
          <div className="editor-section">
            <div className="editor-section-title">Detalle de la orden</div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 540 }}>
                <thead>
                  <tr>
                    {['Descripción', 'Cant.', 'Unidad', 'Precio unit.', ''].map(h => (
                      <th key={h} style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', fontWeight: 400, paddingBottom: 8, textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.items.map((item) => (
                    <tr key={item.id}>
                      <td style={{ paddingTop: 8, paddingRight: 8 }}>
                        <input value={item.descripcion} onChange={e => updateItem(item.id, { descripcion: e.target.value })} style={{ width: '100%' }} placeholder="Descripción del ítem" />
                      </td>
                      <td style={{ paddingTop: 8, paddingRight: 8, width: 70 }}>
                        <input type="number" value={item.cantidad} min={0} onChange={e => updateItem(item.id, { cantidad: parseFloat(e.target.value) || 0 })} style={{ width: '100%' }} />
                      </td>
                      <td style={{ paddingTop: 8, paddingRight: 8, width: 80 }}>
                        <input value={item.unidad} onChange={e => updateItem(item.id, { unidad: e.target.value })} style={{ width: '100%' }} />
                      </td>
                      <td style={{ paddingTop: 8, paddingRight: 8, width: 130 }}>
                        <input value={item.precioUnitario} onChange={e => updateItem(item.id, { precioUnitario: e.target.value })} placeholder="0" style={{ width: '100%' }} />
                      </td>
                      <td style={{ paddingTop: 8, width: 28 }}>
                        <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 16, padding: '0 4px' }} title="Eliminar fila">×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
              <button className="btn-secondary" style={{ fontSize: 12, padding: '6px 14px' }} onClick={addItem}>+ Agregar ítem</button>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--dim)', cursor: 'pointer' }}>
                <input type="checkbox" checked={data.incluirIva} onChange={e => set({ incluirIva: e.target.checked })} />
                Incluir IVA (19%)
              </label>
            </div>
          </div>

          {/* Notas */}
          <div className="editor-section">
            <div className="editor-section-title">Notas y observaciones</div>
            <textarea
              value={data.notas}
              onChange={e => set({ notas: e.target.value })}
              rows={3}
              style={{ width: '100%', resize: 'vertical' }}
              placeholder="Instrucciones adicionales, condiciones especiales, etc."
            />
          </div>

          {/* Firmante */}
          <div className="editor-section">
            <div className="editor-section-title">Firmante (D&Z Building)</div>
            <div className="editor-row">
              <label>Nombre<input value={data.firmante.nombre} onChange={e => set({ firmante: { ...data.firmante, nombre: e.target.value } })} /></label>
              <label>Cargo<input value={data.firmante.cargo} onChange={e => set({ firmante: { ...data.firmante, cargo: e.target.value } })} /></label>
            </div>
            <label>RUT<input value={data.firmante.rut} onChange={e => set({ firmante: { ...data.firmante, rut: e.target.value } })} style={{ maxWidth: 200 }} /></label>
          </div>
        </div>

        {/* ── PREVIEW PANEL ── */}
        <div ref={previewRef} id="oc-print" className={`oc-preview${mobileTab === 'form' ? ' admin-mobile-hidden' : ''}`}>
          <div className="oc-page" style={{
            width: 794,
            background: '#fff',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: '#1a1a1a',
            boxShadow: '0 4px 28px rgba(0,0,0,0.35)',
            zoom: scale,
            margin: '0 auto',
            WebkitPrintColorAdjust: 'exact',
            printColorAdjust: 'exact',
          } as React.CSSProperties}>

            {/* Header */}
            <div style={{ padding: '32px 40px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ background: '#0c0c0c', padding: '14px 18px', display: 'inline-block' }}>
                <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, fontWeight: 700, letterSpacing: '0.08em', color: '#1a1a1a', textTransform: 'uppercase' }}>Orden de Compra</div>
                <div style={{ fontSize: 13, color: '#C8A84B', fontWeight: 600, marginTop: 4, letterSpacing: '0.04em' }}>{data.meta.numero || 'OC-YYYY-NNN'}</div>
                <div style={{ fontSize: 10, color: '#888', marginTop: 6 }}>{data.meta.fecha ? fmtDateLong(data.meta.fecha) : '—'}</div>
              </div>
            </div>

            {/* Gold accent bar */}
            <div style={{ height: 3, background: 'linear-gradient(90deg, #C8A84B, #e8c86a, #C8A84B)', margin: '0 40px' }} />

            {/* Parties */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, margin: '0 40px', borderBottom: '1px solid #e8e8e8' }}>
              <div style={{ padding: '16px 20px 16px 0', borderRight: '1px solid #e8e8e8', ...docStyle }}>
                <div style={labelStyle}>Solicitado por</div>
                <div style={{ fontWeight: 700, fontSize: 11 }}>D&Z Building SpA</div>
                <div style={{ color: '#555', fontSize: 9, marginTop: 2 }}>RUT 76.XXX.XXX-X</div>
                <div style={{ color: '#555', fontSize: 9 }}>Santiago, Chile</div>
                <div style={{ color: '#555', fontSize: 9 }}>contacto@dyzbuilding.cl</div>
              </div>
              <div style={{ padding: '16px 0 16px 20px', ...docStyle }}>
                <div style={labelStyle}>Proveedor</div>
                <div style={{ fontWeight: 700, fontSize: 11 }}>{data.proveedor.empresa || 'Empresa del Proveedor'}</div>
                {data.proveedor.rut && <div style={{ color: '#555', fontSize: 9, marginTop: 2 }}>RUT {data.proveedor.rut}</div>}
                {data.proveedor.nombre && <div style={{ color: '#555', fontSize: 9 }}>Contacto: {data.proveedor.nombre}</div>}
                {data.proveedor.telefono && <div style={{ color: '#555', fontSize: 9 }}>{data.proveedor.telefono}</div>}
                {data.proveedor.email && <div style={{ color: '#555', fontSize: 9 }}>{data.proveedor.email}</div>}
                {data.proveedor.direccion && <div style={{ color: '#555', fontSize: 9 }}>{data.proveedor.direccion}</div>}
              </div>
            </div>

            {/* Conditions bar */}
            <div style={{ margin: '0 40px', padding: '10px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, borderBottom: '1px solid #e8e8e8', background: '#fafafa' }}>
              {[
                { label: 'Moneda', value: MONEDAS[data.meta.moneda]?.label || data.meta.moneda },
                { label: 'Lugar de entrega', value: data.meta.lugarEntrega || '—' },
                { label: 'Plazo de entrega', value: data.meta.plazoEntrega || '—' },
              ].map(({ label, value }) => (
                <div key={label} style={{ padding: '4px 12px', borderRight: '1px solid #e8e8e8', ...docStyle }}>
                  <div style={labelStyle}>{label}</div>
                  <div style={{ fontSize: 9.5, color: '#333' }}>{value}</div>
                </div>
              ))}
            </div>
            <div style={{ margin: '0 40px', padding: '8px 0 12px', borderBottom: '1px solid #e8e8e8' }}>
              <div style={{ padding: '0 12px', ...docStyle }}>
                <div style={labelStyle}>Forma de pago</div>
                <div style={{ fontSize: 9.5, color: '#333' }}>{data.meta.formaPago || '—'}</div>
              </div>
            </div>

            {/* Items table */}
            <div style={{ margin: '0 40px', paddingTop: 16 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', ...docStyle }}>
                <thead>
                  <tr style={{ background: '#1a1a1a' }}>
                    <th style={{ padding: '7px 10px', textAlign: 'left', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>N°</th>
                    <th style={{ padding: '7px 10px', textAlign: 'left', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>Descripción</th>
                    <th style={{ padding: '7px 10px', textAlign: 'center', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, width: 50 }}>Cant.</th>
                    <th style={{ padding: '7px 10px', textAlign: 'center', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, width: 50 }}>Und.</th>
                    <th style={{ padding: '7px 10px', textAlign: 'right', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, width: 90 }}>P. Unit.</th>
                    <th style={{ padding: '7px 10px', textAlign: 'right', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, width: 90 }}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {data.items.filter(i => i.descripcion || i.precioUnitario).map((item, idx) => (
                    <tr key={item.id} style={{ background: idx % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                      <td style={{ padding: '6px 10px', fontSize: 9, color: '#888', borderBottom: '1px solid #eee' }}>{idx + 1}</td>
                      <td style={{ padding: '6px 10px', fontSize: 10, borderBottom: '1px solid #eee' }}>{item.descripcion}</td>
                      <td style={{ padding: '6px 10px', textAlign: 'center', fontSize: 10, borderBottom: '1px solid #eee' }}>{item.cantidad}</td>
                      <td style={{ padding: '6px 10px', textAlign: 'center', fontSize: 10, borderBottom: '1px solid #eee', color: '#888' }}>{item.unidad}</td>
                      <td style={{ padding: '6px 10px', textAlign: 'right', fontSize: 10, borderBottom: '1px solid #eee' }}>{formatNum(parseFloat(String(item.precioUnitario).replace(/[^\d.]/g, '')) || 0, sym)}</td>
                      <td style={{ padding: '6px 10px', textAlign: 'right', fontSize: 10, fontWeight: 500, borderBottom: '1px solid #eee' }}>{formatNum(calcItemSubtotal(item), sym)}</td>
                    </tr>
                  ))}
                  {data.items.filter(i => i.descripcion || i.precioUnitario).length === 0 && (
                    <tr><td colSpan={6} style={{ padding: '16px 10px', color: '#bbb', fontSize: 9, textAlign: 'center' }}>Sin ítems</td></tr>
                  )}
                </tbody>
              </table>

              {/* Totals */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
                <table style={{ fontSize: 10, ...docStyle }}>
                  <tbody>
                    <tr>
                      <td style={{ padding: '4px 16px 4px 0', color: '#888', textAlign: 'right', minWidth: 120 }}>Subtotal</td>
                      <td style={{ padding: '4px 0', textAlign: 'right', minWidth: 110 }}>{formatNum(subtotal, sym)}</td>
                    </tr>
                    {data.incluirIva && (
                      <tr>
                        <td style={{ padding: '4px 16px 4px 0', color: '#888', textAlign: 'right' }}>IVA (19%)</td>
                        <td style={{ padding: '4px 0', textAlign: 'right' }}>{formatNum(iva, sym)}</td>
                      </tr>
                    )}
                    <tr style={{ borderTop: '2px solid #1a1a1a' }}>
                      <td style={{ padding: '8px 16px 8px 0', fontWeight: 700, fontSize: 12, textAlign: 'right' }}>TOTAL</td>
                      <td style={{ padding: '8px 0', fontWeight: 700, fontSize: 12, textAlign: 'right', color: '#C8A84B' }}>{formatNum(total, sym)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notas */}
            {data.notas && (
              <div style={{ margin: '16px 40px 0', padding: '12px', background: '#f9f9f9', borderLeft: '3px solid #C8A84B', ...docStyle }}>
                <div style={{ ...labelStyle, marginBottom: 6 }}>Notas</div>
                <div style={{ fontSize: 9, color: '#555', whiteSpace: 'pre-line' }}>{data.notas}</div>
              </div>
            )}

            {/* Firma */}
            <div style={{ margin: '32px 40px 40px', paddingTop: 16, borderTop: '1px solid #e8e8e8' }}>
              <div style={{ width: 240, ...docStyle }}>
                <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 8, marginTop: 40 }}>
                  <div style={{ fontSize: 10, fontWeight: 600 }}>{data.firmante.nombre || 'Nombre del firmante'}</div>
                  <div style={{ fontSize: 9, color: '#555' }}>{data.firmante.cargo || 'Cargo'}</div>
                  {data.firmante.rut && <div style={{ fontSize: 9, color: '#888' }}>RUT {data.firmante.rut}</div>}
                  <div style={{ fontSize: 9, color: '#555', marginTop: 2 }}>D&Z Building SpA</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ borderTop: '1px solid #e8e8e8', padding: '10px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 8, color: '#bbb' }}>D&Z Building SpA · contacto@dyzbuilding.cl · www.dyzbuilding.cl</div>
              <div style={{ fontSize: 8, color: '#bbb' }}>{data.meta.numero}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
