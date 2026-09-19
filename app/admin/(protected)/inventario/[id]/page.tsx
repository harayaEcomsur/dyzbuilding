'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { InventarioItem, InventarioMovimiento, MovimientoTipo } from '@/lib/inventario-store'
import {
  apiFetchInventarioItem, apiUpdateInventarioItem,
  apiFetchMovimientos, apiRegistrarMovimiento,
} from '@/lib/inventario-api'

const UNIDADES = ['un', 'kg', 'm', 'm2', 'm3', 'lt', 'gl.', 'caja', 'par']
const TIPO_LABEL: Record<MovimientoTipo, string> = { ingreso: 'Ingreso', salida: 'Salida', ajuste: 'Ajuste' }

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleString('es-CL', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch { return iso }
}

export default function InventarioItemPage() {
  const params = useParams<{ id: string }>()
  const id = params.id

  const [item, setItem] = useState<InventarioItem | null>(null)
  const [movimientos, setMovimientos] = useState<InventarioMovimiento[]>([])
  const [loading, setLoading] = useState(true)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  const [movTipo, setMovTipo] = useState<MovimientoTipo>('ingreso')
  const [movCantidad, setMovCantidad] = useState('')
  const [movMotivo, setMovMotivo] = useState('')
  const [registrando, setRegistrando] = useState(false)

  const load = useCallback(async () => {
    try {
      const [fetchedItem, fetchedMov] = await Promise.all([apiFetchInventarioItem(id), apiFetchMovimientos(id)])
      setItem(fetchedItem)
      setMovimientos(fetchedMov)
    } catch { /* silently fail */ }
    finally { setLoading(false) }
  }, [id])

  useEffect(() => { void load() }, [load])

  function set(patch: Partial<InventarioItem>) {
    setItem(prev => prev ? { ...prev, ...patch } : prev)
    if (saveStatus === 'saved') setSaveStatus('idle')
  }

  async function handleSave() {
    if (!item) return
    setSaveStatus('saving')
    try {
      const updated = await apiUpdateInventarioItem(item.id, {
        sku: item.sku, nombre: item.nombre, categoria: item.categoria, unidad: item.unidad,
        stockMinimo: item.stockMinimo, costoUnitario: item.costoUnitario,
        ubicacion: item.ubicacion, notas: item.notas,
      })
      setItem(updated)
      setSaveStatus('saved')
    } catch {
      setSaveStatus('error')
    }
  }

  async function handleRegistrarMovimiento() {
    if (!item) return
    const cant = parseFloat(movCantidad)
    if (!Number.isFinite(cant) || cant <= 0) return
    setRegistrando(true)
    try {
      const { item: updatedItem, movimiento } = await apiRegistrarMovimiento(item.id, movTipo, cant, movMotivo.trim() || TIPO_LABEL[movTipo])
      setItem(updatedItem)
      setMovimientos(prev => [movimiento, ...prev])
      setMovCantidad('')
      setMovMotivo('')
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al registrar el movimiento')
    } finally {
      setRegistrando(false)
    }
  }

  if (loading) {
    return (
      <div style={{ padding: '48px 40px', color: 'var(--dim)', fontFamily: 'Josefin Sans, sans-serif', fontSize: 8.5, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
        Cargando…
      </div>
    )
  }

  if (!item) {
    return (
      <div style={{ padding: '48px 40px' }}>
        <p style={{ color: 'var(--dim)', marginBottom: 16 }}>Ítem no encontrado.</p>
        <Link href="/admin/inventario" className="btn-outline">← Volver a Inventario</Link>
      </div>
    )
  }

  const saveLabel = saveStatus === 'saving' ? 'Guardando…' : saveStatus === 'saved' ? 'Guardado' : saveStatus === 'error' ? 'Error al guardar' : ''
  const saveColor = saveStatus === 'error' ? '#e05555' : saveStatus === 'saved' ? 'rgba(200,168,75,0.7)' : 'var(--dim)'
  const low = item.stockActual <= 0
  const warn = !low && item.stockActual <= item.stockMinimo

  return (
    <>
      <style>{`
        .invd-wrap { padding: 32px 40px; display: flex; flex-direction: column; gap: 28px; max-width: 920px; }
        .invd-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .invd-mov-table { width: 100%; border-collapse: collapse; }
        .invd-mov-table th { font-family: Josefin Sans, sans-serif; font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--dim); font-weight: 400; padding: 0 10px 8px; text-align: left; border-bottom: 1px solid var(--border); }
        .invd-mov-table td { padding: 10px; font-size: 13.5px; border-bottom: 1px solid var(--border); }
        @media (max-width: 700px) { .invd-grid { grid-template-columns: 1fr 1fr; } .invd-wrap { padding: 20px 18px; } }
      `}</style>

      <div className="invd-wrap">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
            <Link href="/admin/inventario" style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}>← Inventario</Link>
            {saveLabel && <span style={{ marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: saveColor }}>{saveLabel}</span>}
          </div>
          <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 22, fontWeight: 200, letterSpacing: '0.06em' }}>{item.nombre || 'Ítem sin nombre'}</h1>
          <div style={{ marginTop: 8, fontFamily: 'Josefin Sans, sans-serif', fontSize: 13, color: (low || warn) ? (low ? '#e05555' : '#e0a95c') : 'var(--text)' }}>
            Stock actual: <strong>{item.stockActual} {item.unidad}</strong>
            {low && ' — sin stock'}
            {warn && ' — bajo el mínimo'}
          </div>
        </div>

        {/* Datos del ítem */}
        <section>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Datos del Ítem</div>
          <div className="invd-grid">
            <div className="field"><label>Nombre</label><input value={item.nombre} onChange={e => set({ nombre: e.target.value })} /></div>
            <div className="field"><label>SKU</label><input value={item.sku} onChange={e => set({ sku: e.target.value })} /></div>
            <div className="field"><label>Categoría</label><input value={item.categoria} onChange={e => set({ categoria: e.target.value })} /></div>
            <div className="field"><label>Unidad</label>
              <select value={item.unidad} onChange={e => set({ unidad: e.target.value })}>
                {UNIDADES.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
            <div className="field"><label>Stock mínimo</label><input type="number" value={item.stockMinimo} onChange={e => set({ stockMinimo: parseFloat(e.target.value) || 0 })} /></div>
            <div className="field"><label>Costo unitario</label><input type="number" value={item.costoUnitario ?? ''} onChange={e => set({ costoUnitario: e.target.value ? parseFloat(e.target.value) : null })} /></div>
            <div className="field"><label>Ubicación</label><input value={item.ubicacion} onChange={e => set({ ubicacion: e.target.value })} /></div>
            <div className="field" style={{ gridColumn: 'span 2' }}><label>Notas</label><input value={item.notas} onChange={e => set({ notas: e.target.value })} /></div>
          </div>
          <div style={{ marginTop: 14 }}>
            <button className="btn-primary" onClick={() => void handleSave()}>Guardar cambios</button>
          </div>
        </section>

        {/* Registrar movimiento */}
        <section>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Registrar Movimiento</div>
          <div style={{ display: 'grid', gridTemplateColumns: '140px 120px 1fr auto', gap: 12, alignItems: 'end' }}>
            <div className="field"><label>Tipo</label>
              <select value={movTipo} onChange={e => setMovTipo(e.target.value as MovimientoTipo)}>
                <option value="ingreso">Ingreso</option>
                <option value="salida">Salida</option>
                <option value="ajuste">Ajuste (fija stock)</option>
              </select>
            </div>
            <div className="field"><label>Cantidad</label><input type="number" min="0" value={movCantidad} onChange={e => setMovCantidad(e.target.value)} /></div>
            <div className="field"><label>Motivo</label><input value={movMotivo} onChange={e => setMovMotivo(e.target.value)} placeholder="Ej. Compra a proveedor, uso en instalación…" /></div>
            <button className="btn-outline" disabled={!movCantidad || registrando} onClick={() => void handleRegistrarMovimiento()} style={{ padding: '9px 18px', height: 40 }}>
              {registrando ? 'Guardando…' : 'Registrar'}
            </button>
          </div>
        </section>

        {/* Historial */}
        <section>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Historial de Movimientos</div>
          {movimientos.length === 0 ? (
            <div style={{ color: 'var(--dim)', fontSize: 13 }}>Aún no hay movimientos registrados.</div>
          ) : (
            <div className="admin-table-wrap">
              <table className="invd-mov-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                    <th>Motivo</th>
                    <th>Stock resultante</th>
                  </tr>
                </thead>
                <tbody>
                  {movimientos.map(m => (
                    <tr key={m.id}>
                      <td style={{ color: 'var(--dim)' }}>{fmtDate(m.createdAt)}</td>
                      <td>{TIPO_LABEL[m.tipo]}</td>
                      <td>{m.tipo === 'salida' ? '−' : m.tipo === 'ingreso' ? '+' : ''}{m.cantidad} {item.unidad}</td>
                      <td style={{ color: 'var(--dim)' }}>{m.motivo || '—'}{m.referencia && ` (${m.referencia})`}</td>
                      <td>{m.stockResultante} {item.unidad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
