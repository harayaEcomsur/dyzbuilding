'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  GuiaDespachoData, GuiaItem, TipoDespacho, TIPOS_DESPACHO,
  makeId, calcTotal, calcItemSubtotal,
} from '@/lib/guias-despacho-store'
import { apiFetchRecord, apiCreateRecord, apiUpdateRecord } from '@/lib/guias-despacho-api'
import { apiFetchEmpresa } from '@/lib/site-content-api'
import { defaultContent } from '@/lib/site-content-types'
import { InventarioItem } from '@/lib/inventario-store'
import { apiFetchInventario, apiRegistrarMovimiento } from '@/lib/inventario-api'

function formatNum(val: number) {
  if (isNaN(val) || val === 0) return '$ 0'
  return `$ ${val.toLocaleString('es-CL')}`
}

let itemCounter = 3

function getTodayStr() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function fmtDateLong(iso: string, locale = 'es-CL') {
  try {
    return new Date(iso + 'T12:00:00').toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return iso }
}

function makeDefaultData(): GuiaDespachoData {
  return {
    meta: {
      numero: `GD-${new Date().getFullYear()}-000`,
      fecha: getTodayStr(),
      tipoDespacho: 'venta',
      motivoTraslado: '',
    },
    receptor: { nombre: '', rut: '', direccion: '', ciudad: '', email: '', telefono: '' },
    transporte: { transportista: '', rutTransportista: '', patente: '', chofer: '', rutChofer: '' },
    items: [
      { id: 1, inventarioItemId: null, sku: '', descripcion: '', cantidad: 1, unidad: 'un.', precioUnitario: '' },
      { id: 2, inventarioItemId: null, sku: '', descripcion: '', cantidad: 1, unidad: 'un.', precioUnitario: '' },
    ],
    incluirValores: false,
    notas: '',
    firmante: { nombre: '', cargo: '', rut: '' },
    stockDescontado: false,
  }
}

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

export default function NuevaGuiaDespacho() {
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form')
  const [data, setData] = useState<GuiaDespachoData>(makeDefaultData)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [initialized, setInitialized] = useState(false)
  const [empresa, setEmpresa] = useState(defaultContent.empresa)
  const [inventario, setInventario] = useState<InventarioItem[]>([])

  const editingIdRef = useRef<string | null>(null)
  const estadoRef = useRef<'borrador' | 'emitida'>('borrador')
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const previewRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  const set = useCallback((patch: Partial<GuiaDespachoData>) => setData(d => ({ ...d, ...patch })), [])

  useEffect(() => {
    const num = String(Math.floor(Math.random() * 900) + 100)
    setData(d => d.meta.numero.endsWith('-000')
      ? { ...d, meta: { ...d.meta, numero: `GD-${new Date().getFullYear()}-${num}` } }
      : d
    )
  }, [])

  useEffect(() => {
    apiFetchEmpresa().then(e => { if (e) setEmpresa(e) }).catch(() => {})
    apiFetchInventario().then(setInventario).catch(() => {})
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
          window.history.replaceState({}, '', `/admin/guias-despacho/nueva?id=${id}`)
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

  const doAutoSave = useCallback(async (d: GuiaDespachoData) => {
    if (!initialized) return
    try {
      setSaveStatus('saving')
      if (!editingIdRef.current) {
        const newId = makeId()
        await apiCreateRecord(newId, d, 'borrador')
        editingIdRef.current = newId
        window.history.replaceState({}, '', `/admin/guias-despacho/nueva?id=${newId}`)
      } else {
        await apiUpdateRecord(editingIdRef.current, d, estadoRef.current)
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

  // Descuenta stock del inventario la primera vez que la guía pasa a "emitida".
  async function descontarStock(d: GuiaDespachoData): Promise<GuiaDespachoData> {
    if (d.stockDescontado) return d
    const vinculados = d.items.filter(i => i.inventarioItemId && i.cantidad > 0)
    for (const item of vinculados) {
      try {
        await apiRegistrarMovimiento(item.inventarioItemId!, 'salida', item.cantidad, `Guía de despacho ${d.meta.numero}`, editingIdRef.current)
      } catch (err) {
        alert(`No se pudo descontar stock de "${item.descripcion || item.sku}": ${err instanceof Error ? err.message : 'error desconocido'}`)
      }
    }
    return { ...d, stockDescontado: true }
  }

  async function commitToServer(estado: 'borrador' | 'emitida') {
    clearTimeout(saveTimer.current)
    let toSave = data
    if (estado === 'emitida' && estadoRef.current === 'borrador') {
      toSave = await descontarStock(data)
      setData(toSave)
    }
    estadoRef.current = estado
    await doAutoSave(toSave)
  }

  function addItem() {
    setData(d => ({
      ...d,
      items: [...d.items, { id: itemCounter++, inventarioItemId: null, sku: '', descripcion: '', cantidad: 1, unidad: 'un.', precioUnitario: '' }],
    }))
  }

  function removeItem(id: number) {
    setData(d => ({ ...d, items: d.items.filter(i => i.id !== id) }))
  }

  function updateItem(id: number, patch: Partial<GuiaItem>) {
    setData(d => ({ ...d, items: d.items.map(i => i.id === id ? { ...i, ...patch } : i) }))
  }

  function handleVincularInventario(id: string, invId: string) {
    if (!invId) {
      updateItem(Number(id), { inventarioItemId: null })
      return
    }
    const inv = inventario.find(i => i.id === invId)
    if (!inv) return
    updateItem(Number(id), { inventarioItemId: inv.id, sku: inv.sku, descripcion: inv.nombre, unidad: inv.unidad })
  }

  const subtotal = data.items.reduce((s, i) => s + calcItemSubtotal(i), 0)
  const total = calcTotal(data)
  const showSku = data.items.some(i => i.sku?.trim())

  const isEN = data.lang === 'en'
  const gdT = isEN ? {
    title: 'Delivery Note', internalNote: 'Internal dispatch control document — not a valid SII electronic delivery note.',
    recipient: 'Recipient', issuedBy: 'Issued by', transport: 'Transport', type: 'Type', reason: 'Reason for transfer',
    subtotal: 'Subtotal', total: 'TOTAL', notes: 'Notes', authorizedBy: 'Authorized by', driver: 'Driver', plate: 'Plate',
  } : {
    title: 'Guía de Despacho', internalNote: 'Documento interno de control de despacho — no constituye guía de despacho electrónica SII.',
    recipient: 'Receptor', issuedBy: 'Emisor', transport: 'Transporte', type: 'Tipo de traslado', reason: 'Motivo del traslado',
    subtotal: 'Subtotal', total: 'TOTAL', notes: 'Notas', authorizedBy: 'Autorizado por', driver: 'Chofer', plate: 'Patente',
  }

  const docStyle: React.CSSProperties = { fontFamily: 'Arial, Helvetica, sans-serif', color: '#1a1a1a', fontSize: 10, lineHeight: 1.4 }
  const labelStyle: React.CSSProperties = { fontSize: 7, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#888', marginBottom: 2 }

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
            <Link href="/admin/guias-despacho" className="back-link">← Guías de Despacho</Link>
            <div className="editor-status">
              {saveStatus === 'saving' && <span className="status-saving">Guardando…</span>}
              {saveStatus === 'saved' && <span className="status-saved">Guardado</span>}
              {saveStatus === 'error' && <span className="status-error">Error al guardar</span>}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                className="btn-secondary"
                onClick={() => set({ lang: data.lang === 'en' ? 'es' : 'en' })}
                title={data.lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10, letterSpacing: '0.22em' }}
              >
                {data.lang === 'en' ? '🇨🇱 ES' : '🇬🇧 EN'}
              </button>
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

          <div className="editor-section" style={{ borderColor: 'rgba(200,168,75,0.35)' }}>
            <p style={{ fontSize: 12.5, color: 'var(--dim)', margin: 0 }}>{gdT.internalNote}</p>
          </div>

          {/* Meta */}
          <div className="editor-section">
            <div className="editor-section-title">Datos del documento</div>
            <div className="editor-row">
              <label>Número<input value={data.meta.numero} onChange={e => set({ meta: { ...data.meta, numero: e.target.value } })} /></label>
              <label>Fecha<input type="date" value={data.meta.fecha} onChange={e => set({ meta: { ...data.meta, fecha: e.target.value } })} /></label>
              <label>Tipo de traslado
                <select value={data.meta.tipoDespacho} onChange={e => set({ meta: { ...data.meta, tipoDespacho: e.target.value as TipoDespacho } })}>
                  {Object.entries(TIPOS_DESPACHO).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </label>
            </div>
            <label>Motivo del traslado (opcional)<input value={data.meta.motivoTraslado} onChange={e => set({ meta: { ...data.meta, motivoTraslado: e.target.value } })} placeholder="Ej: Entrega de repuestos por mantención programada" /></label>
          </div>

          {/* Receptor */}
          <div className="editor-section">
            <div className="editor-section-title">Receptor</div>
            <div className="editor-row">
              <label>Nombre / Empresa<input value={data.receptor.nombre} onChange={e => set({ receptor: { ...data.receptor, nombre: e.target.value } })} /></label>
              <label>RUT<input value={data.receptor.rut} onChange={e => set({ receptor: { ...data.receptor, rut: e.target.value } })} /></label>
            </div>
            <div className="editor-row">
              <label>Email<input type="email" value={data.receptor.email} onChange={e => set({ receptor: { ...data.receptor, email: e.target.value } })} /></label>
              <label>Teléfono<input value={data.receptor.telefono} onChange={e => set({ receptor: { ...data.receptor, telefono: e.target.value } })} /></label>
            </div>
            <div className="editor-row">
              <label>Dirección de destino<input value={data.receptor.direccion} onChange={e => set({ receptor: { ...data.receptor, direccion: e.target.value } })} /></label>
              <label>Ciudad<input value={data.receptor.ciudad} onChange={e => set({ receptor: { ...data.receptor, ciudad: e.target.value } })} /></label>
            </div>
          </div>

          {/* Transporte */}
          <div className="editor-section">
            <div className="editor-section-title">Transporte (opcional)</div>
            <div className="editor-row">
              <label>Transportista<input value={data.transporte.transportista} onChange={e => set({ transporte: { ...data.transporte, transportista: e.target.value } })} /></label>
              <label>RUT transportista<input value={data.transporte.rutTransportista} onChange={e => set({ transporte: { ...data.transporte, rutTransportista: e.target.value } })} /></label>
            </div>
            <div className="editor-row">
              <label>Patente<input value={data.transporte.patente} onChange={e => set({ transporte: { ...data.transporte, patente: e.target.value } })} /></label>
              <label>{gdT.driver}<input value={data.transporte.chofer} onChange={e => set({ transporte: { ...data.transporte, chofer: e.target.value } })} /></label>
              <label>RUT chofer<input value={data.transporte.rutChofer} onChange={e => set({ transporte: { ...data.transporte, rutChofer: e.target.value } })} /></label>
            </div>
          </div>

          {/* Items */}
          <div className="editor-section">
            <div className="editor-section-title">Ítems a despachar</div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
                <thead>
                  <tr>
                    {['Inventario (opcional)', 'Descripción', 'SKU', 'Cant.', 'Unidad', 'Precio unit.', ''].map(h => (
                      <th key={h} style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', fontWeight: 400, paddingBottom: 8, textAlign: 'left', borderBottom: '1px solid var(--border)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.items.map((item) => {
                    const linked = item.inventarioItemId ? inventario.find(i => i.id === item.inventarioItemId) : null
                    const overStock = linked && item.cantidad > linked.stockActual
                    return (
                      <tr key={item.id}>
                        <td style={{ paddingTop: 8, paddingRight: 8, width: 170 }}>
                          <select value={item.inventarioItemId ?? ''} onChange={e => handleVincularInventario(String(item.id), e.target.value)} style={{ width: '100%' }}>
                            <option value="">— Texto libre —</option>
                            {inventario.map(inv => <option key={inv.id} value={inv.id}>{inv.nombre} ({inv.stockActual} {inv.unidad})</option>)}
                          </select>
                          {overStock && <div style={{ fontSize: 9.5, color: '#e05555', marginTop: 3 }}>Stock insuficiente ({linked!.stockActual} {linked!.unidad})</div>}
                        </td>
                        <td style={{ paddingTop: 8, paddingRight: 8 }}>
                          <input value={item.descripcion} onChange={e => updateItem(item.id, { descripcion: e.target.value })} style={{ width: '100%' }} placeholder="Descripción del ítem" />
                        </td>
                        <td style={{ paddingTop: 8, paddingRight: 8, width: 90 }}>
                          <input value={item.sku ?? ''} onChange={e => updateItem(item.id, { sku: e.target.value })} style={{ width: '100%' }} placeholder="Opcional" />
                        </td>
                        <td style={{ paddingTop: 8, paddingRight: 8, width: 70 }}>
                          <input type="number" value={item.cantidad} min={0} onChange={e => updateItem(item.id, { cantidad: parseFloat(e.target.value) || 0 })} style={{ width: '100%' }} />
                        </td>
                        <td style={{ paddingTop: 8, paddingRight: 8, width: 80 }}>
                          <input value={item.unidad} onChange={e => updateItem(item.id, { unidad: e.target.value })} style={{ width: '100%' }} />
                        </td>
                        <td style={{ paddingTop: 8, paddingRight: 8, width: 130 }}>
                          <input value={item.precioUnitario} onChange={e => updateItem(item.id, { precioUnitario: e.target.value })} placeholder="0" style={{ width: '100%' }} disabled={!data.incluirValores} />
                        </td>
                        <td style={{ paddingTop: 8, width: 28 }}>
                          <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 16, padding: '0 4px' }} title="Eliminar fila">×</button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <button className="btn-secondary" style={{ fontSize: 12, padding: '6px 14px' }} onClick={addItem}>+ Agregar ítem</button>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--dim)', cursor: 'pointer' }}>
                <input type="checkbox" checked={data.incluirValores} onChange={e => set({ incluirValores: e.target.checked })} />
                Incluir valores comerciales
              </label>
            </div>
            {data.stockDescontado && (
              <p style={{ fontSize: 11.5, color: 'var(--accent)', marginTop: 10 }}>Stock ya descontado al emitir esta guía. Nuevas ediciones no vuelven a descontar.</p>
            )}
          </div>

          {/* Notas */}
          <div className="editor-section">
            <div className="editor-section-title">Notas y observaciones</div>
            <textarea
              value={data.notas}
              onChange={e => set({ notas: e.target.value })}
              rows={3}
              style={{ width: '100%', resize: 'vertical' }}
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

            <div style={{ padding: '32px 40px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ background: '#0c0c0c', padding: '14px 18px', display: 'inline-block' }}>
                <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, fontWeight: 700, letterSpacing: '0.08em', color: '#1a1a1a', textTransform: 'uppercase' }}>{gdT.title}</div>
                <div style={{ fontSize: 13, color: '#C8A84B', fontWeight: 600, marginTop: 4, letterSpacing: '0.04em' }}>{data.meta.numero || 'GD-YYYY-NNN'}</div>
                <div style={{ fontSize: 10, color: '#888', marginTop: 6 }}>{data.meta.fecha ? fmtDateLong(data.meta.fecha, isEN ? 'en-US' : 'es-CL') : '—'}</div>
              </div>
            </div>

            <div style={{ height: 3, background: 'linear-gradient(90deg, #C8A84B, #e8c86a, #C8A84B)', margin: '0 40px' }} />

            <div style={{ margin: '10px 40px 0', ...docStyle }}>
              <p style={{ fontSize: 8.5, color: '#999', fontStyle: 'italic', margin: 0 }}>{gdT.internalNote}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, margin: '12px 40px 0', borderBottom: '1px solid #e8e8e8' }}>
              <div style={{ padding: '16px 20px 16px 0', borderRight: '1px solid #e8e8e8', ...docStyle }}>
                <div style={labelStyle}>{gdT.issuedBy}</div>
                <div style={{ fontWeight: 700, fontSize: 11 }}>{empresa.nombre}</div>
                <div style={{ color: '#555', fontSize: 9, marginTop: 2 }}>RUT {empresa.rut}</div>
                <div style={{ color: '#555', fontSize: 9 }}>{empresa.direccion}</div>
                <div style={{ color: '#555', fontSize: 9 }}>{empresa.email}</div>
              </div>
              <div style={{ padding: '16px 0 16px 20px', ...docStyle }}>
                <div style={labelStyle}>{gdT.recipient}</div>
                <div style={{ fontWeight: 700, fontSize: 11 }}>{data.receptor.nombre || (isEN ? 'Recipient name' : 'Nombre del receptor')}</div>
                {data.receptor.rut && <div style={{ color: '#555', fontSize: 9, marginTop: 2 }}>RUT {data.receptor.rut}</div>}
                {data.receptor.direccion && <div style={{ color: '#555', fontSize: 9 }}>{data.receptor.direccion}{data.receptor.ciudad ? `, ${data.receptor.ciudad}` : ''}</div>}
                {data.receptor.telefono && <div style={{ color: '#555', fontSize: 9 }}>{data.receptor.telefono}</div>}
                {data.receptor.email && <div style={{ color: '#555', fontSize: 9 }}>{data.receptor.email}</div>}
              </div>
            </div>

            <div style={{ margin: '0 40px', padding: '10px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderBottom: '1px solid #e8e8e8', background: '#fafafa' }}>
              <div style={{ padding: '4px 12px', borderRight: '1px solid #e8e8e8', ...docStyle }}>
                <div style={labelStyle}>{gdT.type}</div>
                <div style={{ fontSize: 9.5, color: '#333' }}>{TIPOS_DESPACHO[data.meta.tipoDespacho]}</div>
              </div>
              <div style={{ padding: '4px 12px', ...docStyle }}>
                <div style={labelStyle}>{gdT.reason}</div>
                <div style={{ fontSize: 9.5, color: '#333' }}>{data.meta.motivoTraslado || '—'}</div>
              </div>
            </div>

            {(data.transporte.transportista || data.transporte.patente || data.transporte.chofer) && (
              <div style={{ margin: '0 40px', padding: '8px 0 12px', borderBottom: '1px solid #e8e8e8' }}>
                <div style={{ padding: '0 12px', ...docStyle }}>
                  <div style={labelStyle}>{gdT.transport}</div>
                  <div style={{ fontSize: 9.5, color: '#333' }}>
                    {[data.transporte.transportista, data.transporte.patente && `${gdT.plate}: ${data.transporte.patente}`, data.transporte.chofer && `${gdT.driver}: ${data.transporte.chofer}`].filter(Boolean).join(' · ') || '—'}
                  </div>
                </div>
              </div>
            )}

            <div style={{ margin: '0 40px', paddingTop: 16 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', ...docStyle }}>
                <thead>
                  <tr style={{ background: '#1a1a1a' }}>
                    <th style={{ padding: '7px 10px', textAlign: 'left', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>N°</th>
                    <th style={{ padding: '7px 10px', textAlign: 'left', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>Descripción</th>
                    {showSku && <th style={{ padding: '7px 10px', textAlign: 'left', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, width: 72 }}>SKU</th>}
                    <th style={{ padding: '7px 10px', textAlign: 'center', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, width: 50 }}>Cant.</th>
                    <th style={{ padding: '7px 10px', textAlign: 'center', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, width: 50 }}>Und.</th>
                    {data.incluirValores && <th style={{ padding: '7px 10px', textAlign: 'right', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, width: 90 }}>P. Unit.</th>}
                    {data.incluirValores && <th style={{ padding: '7px 10px', textAlign: 'right', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontWeight: 600, width: 90 }}>Subtotal</th>}
                  </tr>
                </thead>
                <tbody>
                  {data.items.filter(i => i.descripcion).map((item, idx) => (
                    <tr key={item.id} style={{ background: idx % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                      <td style={{ padding: '6px 10px', fontSize: 9, color: '#888', borderBottom: '1px solid #eee' }}>{idx + 1}</td>
                      <td style={{ padding: '6px 10px', fontSize: 10, borderBottom: '1px solid #eee' }}>{item.descripcion}</td>
                      {showSku && <td style={{ padding: '6px 10px', fontSize: 9, color: '#888', borderBottom: '1px solid #eee' }}>{item.sku || '—'}</td>}
                      <td style={{ padding: '6px 10px', textAlign: 'center', fontSize: 10, borderBottom: '1px solid #eee' }}>{item.cantidad}</td>
                      <td style={{ padding: '6px 10px', textAlign: 'center', fontSize: 10, borderBottom: '1px solid #eee', color: '#888' }}>{item.unidad}</td>
                      {data.incluirValores && <td style={{ padding: '6px 10px', textAlign: 'right', fontSize: 10, borderBottom: '1px solid #eee' }}>{formatNum(parseFloat(String(item.precioUnitario).replace(/[^\d.]/g, '')) || 0)}</td>}
                      {data.incluirValores && <td style={{ padding: '6px 10px', textAlign: 'right', fontSize: 10, fontWeight: 500, borderBottom: '1px solid #eee' }}>{formatNum(calcItemSubtotal(item))}</td>}
                    </tr>
                  ))}
                  {data.items.filter(i => i.descripcion).length === 0 && (
                    <tr><td colSpan={showSku ? (data.incluirValores ? 7 : 5) : (data.incluirValores ? 6 : 4)} style={{ padding: '16px 10px', color: '#bbb', fontSize: 9, textAlign: 'center' }}>Sin ítems</td></tr>
                  )}
                </tbody>
              </table>

              {data.incluirValores && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
                  <table style={{ fontSize: 10, ...docStyle }}>
                    <tbody>
                      <tr>
                        <td style={{ padding: '4px 16px 4px 0', color: '#888', textAlign: 'right', minWidth: 120 }}>{gdT.subtotal}</td>
                        <td style={{ padding: '4px 0', textAlign: 'right', minWidth: 110 }}>{formatNum(subtotal)}</td>
                      </tr>
                      <tr style={{ borderTop: '2px solid #1a1a1a' }}>
                        <td style={{ padding: '8px 16px 8px 0', fontWeight: 700, fontSize: 12, textAlign: 'right' }}>{gdT.total}</td>
                        <td style={{ padding: '8px 0', fontWeight: 700, fontSize: 12, textAlign: 'right', color: '#C8A84B' }}>{formatNum(total)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {data.notas && (
              <div style={{ margin: '16px 40px 0', padding: '12px', background: '#f9f9f9', borderLeft: '3px solid #C8A84B', ...docStyle }}>
                <div style={{ ...labelStyle, marginBottom: 6 }}>{gdT.notes}</div>
                <div style={{ fontSize: 9, color: '#555', whiteSpace: 'pre-line' }}>{data.notas}</div>
              </div>
            )}

            <div style={{ margin: '32px 40px 40px', paddingTop: 16, borderTop: '1px solid #e8e8e8' }}>
              <div style={{ ...labelStyle, marginBottom: 8 }}>{gdT.authorizedBy}</div>
              <div style={{ width: 240, ...docStyle }}>
                <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 8, marginTop: 40 }}>
                  <div style={{ fontSize: 10, fontWeight: 600 }}>{data.firmante.nombre || 'Nombre del firmante'}</div>
                  <div style={{ fontSize: 9, color: '#555' }}>{data.firmante.cargo || 'Cargo'}</div>
                  {data.firmante.rut && <div style={{ fontSize: 9, color: '#888' }}>RUT {data.firmante.rut}</div>}
                  <div style={{ fontSize: 9, color: '#555', marginTop: 2 }}>{empresa.nombre}</div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e8e8e8', padding: '10px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 8, color: '#bbb' }}>{empresa.nombre} · {empresa.email} · {empresa.web}</div>
              <div style={{ fontSize: 8, color: '#bbb' }}>{data.meta.numero}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
