'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'

const SERVICES = [
  'Climatización Comercial / VRF',
  'Refrigeración Comercial',
  'Ventilación y Extracción',
  'Mantenimiento Preventivo y Correctivo',
  'Proyectos Llave en Mano',
  'Asesoría de Ingeniería',
  'Eficiencia Energética HVAC',
  'Análisis Operacional VRV/VRF',
]

interface Item {
  id: number
  descripcion: string
  cantidad: number
  precio: number
}

const today = new Date().toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' })
const nextMonth = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' })
const cotNum = `COT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100).padStart(3, '0')}`

function fmt(n: number, moneda: string) {
  if (moneda === 'UF') return `UF ${n.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  if (moneda === 'USD') return `USD ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  return `$ ${n.toLocaleString('es-CL', { minimumFractionDigits: 0 })}`
}

export default function NuevaCotizacion() {
  const [cliente, setCliente] = useState({ nombre: '', empresa: '', rut: '', email: '', telefono: '', direccion: '' })
  const [moneda, setMoneda] = useState('CLP')
  const [iva, setIva] = useState(true)
  const [notas, setNotas] = useState('Precios no incluyen traslado fuera del área metropolitana. Válido por 30 días.')
  const [items, setItems] = useState<Item[]>([{ id: 1, descripcion: '', cantidad: 1, precio: 0 }])

  const addItem = useCallback(() => {
    setItems(prev => [...prev, { id: Date.now(), descripcion: '', cantidad: 1, precio: 0 }])
  }, [])

  const removeItem = useCallback((id: number) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const updateItem = useCallback((id: number, field: keyof Item, value: string | number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i))
  }, [])

  const subtotal = items.reduce((acc, i) => acc + i.cantidad * i.precio, 0)
  const ivaAmt = iva ? subtotal * 0.19 : 0
  const total = subtotal + ivaAmt

  const fieldStyle = { display: 'flex', flexDirection: 'column' as const, gap: 5 }
  const labelStyle = {
    fontFamily: 'var(--font-josefin), sans-serif',
    fontSize: 7.5, letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'var(--dim)',
  }
  const inputStyle = {
    background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
    color: 'var(--text)', padding: '9px 12px',
    fontFamily: 'var(--font-outfit), sans-serif', fontSize: 12, fontWeight: 300,
    outline: 'none', width: '100%',
  }

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          body > * { display: none !important; }
          #print-preview { display: block !important; position: fixed !important; inset: 0 !important; background: white !important; }
          #print-preview * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>

        {/* ── LEFT: FORM ───────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 7.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 }}>
              Nueva Cotización
            </p>
            <h1 style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 22, fontWeight: 300, letterSpacing: '-0.01em' }}>
              {cotNum}
            </h1>
          </div>

          {/* Cliente */}
          <section style={{ border: '1px solid var(--border)', padding: 20 }}>
            <p style={{ ...labelStyle, marginBottom: 14 }}>Datos del Cliente</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {([['nombre', 'Nombre *'], ['empresa', 'Empresa'], ['rut', 'RUT'], ['email', 'Email'], ['telefono', 'Teléfono'], ['direccion', 'Dirección']] as const).map(([key, lbl]) => (
                <div key={key} style={fieldStyle}>
                  <label style={labelStyle}>{lbl}</label>
                  <input style={inputStyle} value={cliente[key]} onChange={e => setCliente(p => ({ ...p, [key]: e.target.value }))} />
                </div>
              ))}
            </div>
          </section>

          {/* Config */}
          <section style={{ border: '1px solid var(--border)', padding: 20 }}>
            <p style={{ ...labelStyle, marginBottom: 14 }}>Configuración</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignItems: 'center' }}>
              <div style={fieldStyle}>
                <label style={labelStyle}>Moneda</label>
                <select style={inputStyle} value={moneda} onChange={e => setMoneda(e.target.value)}>
                  <option value="CLP">CLP — Peso Chileno</option>
                  <option value="USD">USD — Dólar</option>
                  <option value="UF">UF — Unidad de Fomento</option>
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 18 }}>
                <input type="checkbox" id="iva" checked={iva} onChange={e => setIva(e.target.checked)} style={{ accentColor: 'var(--accent)', width: 14, height: 14 }} />
                <label htmlFor="iva" style={{ ...labelStyle, cursor: 'pointer' }}>Incluir IVA 19%</label>
              </div>
            </div>
          </section>

          {/* Items */}
          <section style={{ border: '1px solid var(--border)', padding: 20 }}>
            <p style={{ ...labelStyle, marginBottom: 14 }}>Ítems</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {items.map((item, idx) => (
                <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '1fr 60px 90px 24px', gap: 8, alignItems: 'center' }}>
                  <input
                    style={inputStyle} placeholder={`Ítem ${idx + 1}`}
                    value={item.descripcion} onChange={e => updateItem(item.id, 'descripcion', e.target.value)}
                  />
                  <input
                    style={{ ...inputStyle, textAlign: 'center' }} type="number" min={1}
                    value={item.cantidad} onChange={e => updateItem(item.id, 'cantidad', Number(e.target.value))}
                  />
                  <input
                    style={{ ...inputStyle, textAlign: 'right' }} type="number" min={0} placeholder="0"
                    value={item.precio || ''} onChange={e => updateItem(item.id, 'precio', Number(e.target.value))}
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 14, padding: 0, lineHeight: 1 }}
                    title="Eliminar"
                  >×</button>
                </div>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 90px 24px', gap: 8 }}>
                <span style={{ ...labelStyle, paddingTop: 2 }}>Descripción</span>
                <span style={{ ...labelStyle, textAlign: 'center' }}>Cant.</span>
                <span style={{ ...labelStyle, textAlign: 'right' }}>P. Unit.</span>
                <span />
              </div>
            </div>
            <button onClick={addItem} style={{
              marginTop: 12, background: 'none', border: '1px dashed rgba(200,168,75,0.25)',
              color: 'var(--accent)', padding: '8px 0', width: '100%', cursor: 'pointer',
              fontFamily: 'var(--font-josefin), sans-serif', fontSize: 8.5, letterSpacing: '0.22em', textTransform: 'uppercase',
            }}>
              + Agregar Ítem
            </button>
          </section>

          {/* Notas */}
          <section style={{ border: '1px solid var(--border)', padding: 20 }}>
            <p style={{ ...labelStyle, marginBottom: 10 }}>Notas / Condiciones</p>
            <textarea
              rows={3} style={{ ...inputStyle, resize: 'vertical' }}
              value={notas} onChange={e => setNotas(e.target.value)}
            />
          </section>

          <button
            onClick={() => window.print()}
            className="btn-primary"
            style={{ alignSelf: 'flex-start' }}
          >
            Descargar PDF
          </button>
        </div>

        {/* ── RIGHT: A4 PREVIEW ────────────────────── */}
        <div>
          <p style={{ ...labelStyle, marginBottom: 12 }}>Vista Previa</p>
          <div id="print-preview" style={{
            background: 'white', color: '#1a1a1a',
            width: '100%', aspectRatio: '210/297',
            fontFamily: 'Georgia, serif', fontSize: 11,
            boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
            overflow: 'hidden', display: 'flex', flexDirection: 'column',
          }}>
            {/* Header */}
            <div style={{ background: '#0c0c0c', padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexShrink: 0 }}>
              <div>
                <Image src="/logo.png" alt="D&Z Building" width={100} height={32} style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
                <p style={{ fontFamily: 'sans-serif', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginTop: 6 }}>
                  Climatización · Refrigeración · Chile
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: 'sans-serif', fontSize: 16, fontWeight: 200, color: '#C8A84B', letterSpacing: '-0.01em', margin: 0 }}>COTIZACIÓN</p>
                <p style={{ fontFamily: 'sans-serif', fontSize: 9, letterSpacing: '0.1em', color: '#999', margin: '2px 0 0' }}>{cotNum}</p>
              </div>
            </div>

            {/* Gold rule */}
            <div style={{ height: 2, background: 'linear-gradient(90deg, #C8A84B, rgba(200,168,75,0.3))', flexShrink: 0 }} />

            {/* Body */}
            <div style={{ flex: 1, padding: '20px 28px', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Meta */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <p style={{ fontFamily: 'sans-serif', fontSize: 7, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C8A84B', marginBottom: 6 }}>CLIENTE</p>
                  <p style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 600, color: '#1a1a1a', margin: '0 0 2px' }}>{cliente.nombre || '—'}</p>
                  {cliente.empresa && <p style={{ fontFamily: 'sans-serif', fontSize: 10, color: '#555', margin: '0 0 2px' }}>{cliente.empresa}</p>}
                  {cliente.rut && <p style={{ fontFamily: 'sans-serif', fontSize: 10, color: '#555', margin: 0 }}>RUT: {cliente.rut}</p>}
                  {cliente.email && <p style={{ fontFamily: 'sans-serif', fontSize: 10, color: '#555', margin: 0 }}>{cliente.email}</p>}
                  {cliente.telefono && <p style={{ fontFamily: 'sans-serif', fontSize: 10, color: '#555', margin: 0 }}>{cliente.telefono}</p>}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontFamily: 'sans-serif', fontSize: 7, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C8A84B', marginBottom: 6 }}>DETALLES</p>
                  {[['Fecha', today], ['Validez', nextMonth], ['Moneda', moneda]].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 2 }}>
                      <span style={{ fontFamily: 'sans-serif', fontSize: 9, color: '#999' }}>{k}</span>
                      <span style={{ fontFamily: 'sans-serif', fontSize: 9, color: '#1a1a1a', fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(200,168,75,0.2)', flexShrink: 0 }} />

              {/* Items table */}
              <div style={{ flex: 1 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'sans-serif', fontSize: 9.5 }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                      {['Descripción', 'Cant.', 'P. Unit.', 'Total'].map((h, i) => (
                        <th key={h} style={{
                          padding: '6px 8px', textAlign: i === 0 ? 'left' : 'right',
                          fontSize: 7.5, letterSpacing: '0.22em', textTransform: 'uppercase',
                          color: '#C8A84B', fontWeight: 400,
                        }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)', background: i % 2 ? 'rgba(0,0,0,0.018)' : 'transparent' }}>
                        <td style={{ padding: '7px 8px', color: '#1a1a1a' }}>{item.descripcion || `Ítem ${i + 1}`}</td>
                        <td style={{ padding: '7px 8px', textAlign: 'right', color: '#555' }}>{item.cantidad}</td>
                        <td style={{ padding: '7px 8px', textAlign: 'right', color: '#555' }}>{fmt(item.precio, moneda)}</td>
                        <td style={{ padding: '7px 8px', textAlign: 'right', color: '#1a1a1a', fontWeight: 600 }}>{fmt(item.cantidad * item.precio, moneda)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 12 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, fontFamily: 'sans-serif' }}>
                  <div style={{ display: 'flex', gap: 32 }}>
                    <span style={{ fontSize: 9, color: '#999' }}>Subtotal</span>
                    <span style={{ fontSize: 9, color: '#1a1a1a', minWidth: 100, textAlign: 'right' }}>{fmt(subtotal, moneda)}</span>
                  </div>
                  {iva && (
                    <div style={{ display: 'flex', gap: 32 }}>
                      <span style={{ fontSize: 9, color: '#999' }}>IVA 19%</span>
                      <span style={{ fontSize: 9, color: '#1a1a1a', minWidth: 100, textAlign: 'right' }}>{fmt(ivaAmt, moneda)}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: 32, borderTop: '1px solid #C8A84B', paddingTop: 6, marginTop: 2 }}>
                    <span style={{ fontSize: 11, color: '#C8A84B', fontWeight: 600 }}>TOTAL</span>
                    <span style={{ fontSize: 11, color: '#1a1a1a', fontWeight: 700, minWidth: 100, textAlign: 'right' }}>{fmt(total, moneda)}</span>
                  </div>
                </div>
              </div>

              {/* Notas */}
              {notas && (
                <div style={{ background: 'rgba(200,168,75,0.04)', border: '1px solid rgba(200,168,75,0.15)', padding: '10px 12px', borderRadius: 2 }}>
                  <p style={{ fontFamily: 'sans-serif', fontSize: 7.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A84B', marginBottom: 5 }}>Notas</p>
                  <p style={{ fontFamily: 'sans-serif', fontSize: 9, color: '#666', lineHeight: 1.5, margin: 0 }}>{notas}</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', padding: '10px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
              <p style={{ fontFamily: 'sans-serif', fontSize: 8, color: '#aaa', margin: 0 }}>contacto@dyzbuilding.cl</p>
              <p style={{ fontFamily: 'sans-serif', fontSize: 8, color: '#aaa', margin: 0 }}>D&Z Building · Todo Chile · 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
