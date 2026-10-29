'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SolicitudRepuestosRecord, SolicitudEstado } from '@/lib/solicitudes-repuestos-store'
import { apiFetchSolicitudesRepuestos, apiUpdateSolicitudRepuestos } from '@/lib/solicitudes-repuestos-api'
import { apiFetchInventario } from '@/lib/inventario-api'
import { InventarioItem } from '@/lib/inventario-store'
import { makeId as makeGuiaId } from '@/lib/guias-despacho-store'
import { apiCreateRecord as apiCreateGuia } from '@/lib/guias-despacho-api'
import type { GuiaDespachoData, GuiaItem } from '@/lib/guias-despacho-store'

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch { return iso }
}

function getTodayStr() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

const ESTADO_LABEL: Record<SolicitudEstado, string> = {
  nueva: 'Nueva',
  en_proceso: 'En proceso',
  descartada: 'Descartada',
}

export default function SolicitudesRepuestos() {
  const router = useRouter()
  const [records, setRecords] = useState<SolicitudRepuestosRecord[]>([])
  const [inventario, setInventario] = useState<InventarioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | SolicitudEstado>('all')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [generando, setGenerando] = useState<string | null>(null)

  async function load() {
    try {
      const [sols, inv] = await Promise.all([apiFetchSolicitudesRepuestos(), apiFetchInventario()])
      setRecords(sols)
      setInventario(inv)
    } catch { /* silently fail */ }
    finally { setLoading(false) }
  }

  useEffect(() => { void load() }, [])

  async function handleDescartar(id: string) {
    if (!confirm('¿Marcar esta solicitud como descartada?')) return
    setRecords(r => r.map(x => x.id === id ? { ...x, estado: 'descartada' } : x))
    try { await apiUpdateSolicitudRepuestos(id, { estado: 'descartada' }) } catch { void load() }
  }

  async function handleGenerarGuia(sol: SolicitudRepuestosRecord) {
    setGenerando(sol.id)
    try {
      const items: GuiaItem[] = []
      let counter = 1
      for (const it of sol.items) {
        const inv = it.id ? inventario.find(i => i.id === it.id) : undefined
        items.push({
          id: counter++,
          inventarioItemId: inv?.id ?? null,
          sku: inv?.sku ?? '',
          descripcion: inv?.nombre ?? it.nombre,
          cantidad: it.cantidad,
          unidad: inv?.unidad ?? 'un.',
          precioUnitario: '',
        })
      }
      for (const libre of sol.itemsLibres) {
        items.push({ id: counter++, inventarioItemId: null, sku: '', descripcion: libre, cantidad: 1, unidad: 'un.', precioUnitario: '' })
      }
      if (items.length === 0) {
        items.push({ id: counter++, inventarioItemId: null, sku: '', descripcion: '', cantidad: 1, unidad: 'un.', precioUnitario: '' })
      }

      const data: GuiaDespachoData = {
        meta: {
          numero: `GD-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`,
          fecha: getTodayStr(),
          tipoDespacho: 'venta',
          motivoTraslado: `Despacho de repuestos solicitados por ${sol.nombre}${sol.equipo ? ` (equipo: ${sol.equipo})` : ''}`,
        },
        receptor: {
          nombre: sol.empresa || sol.nombre,
          rut: '',
          direccion: '',
          ciudad: '',
          email: sol.email,
          telefono: sol.telefono,
        },
        transporte: { transportista: '', rutTransportista: '', patente: '', chofer: '', rutChofer: '' },
        items,
        incluirValores: false,
        notas: sol.urgencia ? `Urgencia indicada por el cliente: ${sol.urgencia}` : '',
        firmante: { nombre: '', cargo: '', rut: '' },
        stockDescontado: false,
        lang: sol.lang,
      }

      const newId = makeGuiaId()
      await apiCreateGuia(newId, data, 'borrador')
      await apiUpdateSolicitudRepuestos(sol.id, { estado: 'en_proceso', guiaDespachoId: newId })
      router.push(`/admin/guias-despacho/nueva?id=${newId}`)
    } catch {
      alert('No se pudo generar la guía de despacho.')
      setGenerando(null)
    }
  }

  const visible = records.filter(r => filter === 'all' || r.estado === filter)

  return (
    <>
      <style>{`
        .sr-wrap { padding: 32px 40px; display: flex; flex-direction: column; gap: 24px; }
        .sr-card { border: 1px solid var(--border); background: var(--bg2); }
        .sr-head {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 16px 20px; cursor: pointer; flex-wrap: wrap;
        }
        .sr-head:hover { background: rgba(255,255,255,.02); }
        .sr-detail { padding: 0 20px 20px; border-top: 1px solid var(--border); }
        .sr-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
        @media (max-width: 700px) { .sr-wrap { padding: 20px 18px; } }
      `}</style>

      <div className="sr-wrap">
        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Inventario</div>
          <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 24, fontWeight: 200, letterSpacing: '0.06em' }}>Solicitudes de Repuestos</h1>
          <p style={{ color: 'var(--dim)', fontSize: 13.5, marginTop: 8 }}>
            Cotizaciones de repuestos enviadas desde el catálogo público del sitio.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
          {(['all', 'nueva', 'en_proceso', 'descartada'] as const).map(f => (
            <button
              key={f}
              className={`fbtn${filter === f ? ' on' : ''}`}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase',
                background: filter === f ? 'rgba(200,168,75,.08)' : 'none',
                border: `1px solid ${filter === f ? 'rgba(200,168,75,.35)' : 'var(--border)'}`,
                color: filter === f ? 'var(--accent)' : 'var(--dim)',
                height: 36, padding: '0 14px', cursor: 'pointer',
              }}
            >
              {f === 'all' ? 'Todas' : ESTADO_LABEL[f]}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)' }}>
            {loading ? 'Cargando…' : `${visible.length} ${visible.length === 1 ? 'solicitud' : 'solicitudes'}`}
          </span>
        </div>

        {loading ? (
          <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)' }}>Cargando…</div>
        ) : visible.length === 0 ? (
          <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)' }}>
            {records.length === 0 ? 'Aún no hay solicitudes de repuestos.' : 'Sin resultados para este filtro.'}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {visible.map(r => {
              const isOpen = expanded === r.id
              const totalItems = r.items.length + r.itemsLibres.length
              return (
                <div className="sr-card" key={r.id}>
                  <div className="sr-head" onClick={() => setExpanded(isOpen ? null : r.id)}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'center', minWidth: 0 }}>
                      <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 14, color: 'var(--text)' }}>
                        {r.empresa || r.nombre}
                      </span>
                      {r.empresa && <span style={{ fontSize: 13, color: 'var(--dim)' }}>{r.nombre}</span>}
                      <span style={{ fontSize: 12.5, color: 'var(--dim)' }}>{totalItems} ítem{totalItems !== 1 ? 's' : ''}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 12.5, color: 'var(--dim)' }}>{fmtDate(r.createdAt)}</span>
                      <span className={`badge ${r.estado === 'en_proceso' ? 'badge-emitida' : r.estado === 'descartada' ? 'badge-rechazada' : 'badge-pendiente'}`}>
                        {ESTADO_LABEL[r.estado]}
                      </span>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="sr-detail">
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12, padding: '16px 0' }}>
                        <div><div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 4 }}>Email</div><div style={{ fontSize: 13.5 }}>{r.email}</div></div>
                        <div><div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 4 }}>Teléfono</div><div style={{ fontSize: 13.5 }}>{r.telefono || '—'}</div></div>
                        <div><div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 4 }}>Equipo</div><div style={{ fontSize: 13.5 }}>{r.equipo || '—'}</div></div>
                        <div><div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 4 }}>Urgencia</div><div style={{ fontSize: 13.5, color: /urgente/i.test(r.urgencia) ? '#dc6464' : 'var(--text)' }}>{r.urgencia || '—'}</div></div>
                      </div>

                      <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 8 }}>Ítems solicitados</div>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: 'var(--text)', lineHeight: 1.8 }}>
                        {r.items.map((it, i) => (
                          <li key={`it-${i}`}>{it.nombre}{it.marca ? ` (${it.marca})` : ''} — cant. {it.cantidad}</li>
                        ))}
                        {r.itemsLibres.map((l, i) => (
                          <li key={`libre-${i}`} style={{ color: 'var(--dim)' }}>{l} <em>(no listado en catálogo)</em></li>
                        ))}
                      </ul>

                      <div className="sr-actions">
                        {r.guiaDespachoId ? (
                          <a href={`/admin/guias-despacho/nueva?id=${r.guiaDespachoId}`} className="btn-secondary" style={{ fontSize: 12.5 }}>
                            Ver guía de despacho →
                          </a>
                        ) : (
                          <button
                            className="btn-primary"
                            style={{ fontSize: 12.5 }}
                            disabled={generando === r.id}
                            onClick={() => void handleGenerarGuia(r)}
                          >
                            {generando === r.id ? 'Generando…' : 'Generar guía de despacho'}
                          </button>
                        )}
                        {r.estado !== 'descartada' && (
                          <button className="btn-secondary" style={{ fontSize: 12.5 }} onClick={() => void handleDescartar(r.id)}>
                            Descartar
                          </button>
                        )}
                        <a href={`mailto:${r.email}`} className="btn-secondary" style={{ fontSize: 12.5 }}>
                          Escribir al cliente
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
