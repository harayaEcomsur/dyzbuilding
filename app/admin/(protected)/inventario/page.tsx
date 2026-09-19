'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { InventarioItem } from '@/lib/inventario-store'
import { apiFetchInventario, apiCreateInventarioItem, apiDeleteInventarioItem } from '@/lib/inventario-api'
import { EditIcon, TrashIcon, PlusIcon } from '@/components/DocIcons'

const UNIDADES = ['un', 'kg', 'm', 'm2', 'm3', 'lt', 'gl.', 'caja', 'par']

function emptyForm() {
  return { sku: '', nombre: '', categoria: '', unidad: 'un', stockMinimo: '0', costoUnitario: '', ubicacion: '', notas: '' }
}

export default function InventarioPage() {
  const [items, setItems] = useState<InventarioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [creating, setCreating] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState(emptyForm())

  async function load() {
    try { setItems(await apiFetchInventario()) }
    catch { /* silently fail */ }
    finally { setLoading(false) }
  }

  useEffect(() => { void load() }, [])

  async function handleCreate() {
    if (!form.nombre.trim()) return
    setSaving(true)
    try {
      const created = await apiCreateInventarioItem({
        sku: form.sku.trim(),
        nombre: form.nombre.trim(),
        categoria: form.categoria.trim(),
        unidad: form.unidad,
        stockMinimo: parseFloat(form.stockMinimo) || 0,
        costoUnitario: form.costoUnitario ? parseFloat(form.costoUnitario) : null,
        ubicacion: form.ubicacion.trim(),
        notas: form.notas.trim(),
      })
      setItems(prev => [...prev, created].sort((a, b) => a.nombre.localeCompare(b.nombre)))
      setForm(emptyForm())
      setCreating(false)
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al crear el ítem')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string, nombre: string) {
    if (!confirm(`¿Eliminar "${nombre || 'este ítem'}"? Se borra también su historial de movimientos. Esta acción no se puede deshacer.`)) return
    await apiDeleteInventarioItem(id)
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const visible = items.filter(i => {
    if (!search) return true
    const q = search.toLowerCase()
    return i.nombre.toLowerCase().includes(q) || i.sku.toLowerCase().includes(q) || i.categoria.toLowerCase().includes(q)
  })

  return (
    <>
      <style>{`
        .inv-wrap { padding: 32px 40px; display: flex; flex-direction: column; gap: 32px; }
        .inv-nueva { display: flex; align-items: center; justify-content: space-between; padding: 24px 28px; border: 1px solid var(--border); background: rgba(200,168,75,0.03); flex-wrap: wrap; gap: 14px; }
        .inv-nueva-text h2 { font-family: Josefin Sans, sans-serif; font-size: 18px; font-weight: 200; letter-spacing: 0.06em; margin-bottom: 5px; }
        .inv-nueva-text p { font-size: 14px; color: var(--dim); margin: 0; }
        .inv-table { width: 100%; border-collapse: collapse; min-width: 620px; }
        .inv-table th { font-family: Josefin Sans, sans-serif; font-size: 9.5px; letter-spacing: 0.32em; text-transform: uppercase; color: var(--dim); font-weight: 400; padding: 0 12px 10px; text-align: left; border-bottom: 1px solid var(--border); }
        .inv-table td { padding: 12px 12px; font-size: 14.5px; border-bottom: 1px solid var(--border); vertical-align: middle; }
        .inv-table tr:hover td { background: rgba(255,255,255,.02); }
        .inv-search { background: rgba(255,255,255,.04); border: 1px solid var(--border); color: var(--text); padding: 0 14px; height: 40px; font-family: Outfit, sans-serif; font-size: 14px; outline: none; width: 240px; transition: border-color .2s; }
        .inv-search:focus { border-color: rgba(200,168,75,.4); }
        .inv-stock-low { color: #e0a95c; font-weight: 600; }
        .inv-stock-out { color: #e05555; font-weight: 600; }
        .inv-form-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        @media (max-width: 900px) { .inv-form-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 800px) { .inv-wrap { padding: 20px 18px; } .col-categoria, .col-ubicacion { display: none; } .inv-nueva { flex-direction: column; align-items: flex-start; } }
      `}</style>

      <div className="inv-wrap">
        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Inventario</div>
          <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 22, fontWeight: 200, letterSpacing: '0.06em' }}>Stock e Inventario</h1>
        </div>

        <div className="inv-nueva">
          <div className="inv-nueva-text">
            <h2>Nuevo Ítem</h2>
            <p>Repuestos, insumos y equipos con control de stock y movimientos</p>
          </div>
          <button className="btn-primary" onClick={() => setCreating(v => !v)}>
            <PlusIcon /> {creating ? 'Cancelar' : 'Nuevo ítem'}
          </button>
        </div>

        {creating && (
          <div style={{ border: '1px solid var(--border)', padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="inv-form-grid">
              <div className="field"><label>Nombre</label><input value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} placeholder="Ej. Compresor Rotativo LG 5HP" /></div>
              <div className="field"><label>SKU</label><input value={form.sku} onChange={e => setForm(f => ({ ...f, sku: e.target.value }))} /></div>
              <div className="field"><label>Categoría</label><input value={form.categoria} onChange={e => setForm(f => ({ ...f, categoria: e.target.value }))} placeholder="Repuestos, Insumos…" /></div>
              <div className="field"><label>Unidad</label>
                <select value={form.unidad} onChange={e => setForm(f => ({ ...f, unidad: e.target.value }))}>
                  {UNIDADES.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="field"><label>Stock mínimo</label><input type="number" value={form.stockMinimo} onChange={e => setForm(f => ({ ...f, stockMinimo: e.target.value }))} /></div>
              <div className="field"><label>Costo unitario (opcional)</label><input type="number" value={form.costoUnitario} onChange={e => setForm(f => ({ ...f, costoUnitario: e.target.value }))} /></div>
              <div className="field"><label>Ubicación</label><input value={form.ubicacion} onChange={e => setForm(f => ({ ...f, ubicacion: e.target.value }))} placeholder="Bodega, estante…" /></div>
              <div className="field"><label>Notas</label><input value={form.notas} onChange={e => setForm(f => ({ ...f, notas: e.target.value }))} /></div>
            </div>
            <div>
              <button className="btn-primary" disabled={!form.nombre.trim() || saving} onClick={() => void handleCreate()}>
                {saving ? 'Guardando…' : 'Crear ítem'}
              </button>
            </div>
          </div>
        )}

        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 16 }}>
            Stock actual
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
            <input className="inv-search" placeholder="Buscar nombre, SKU, categoría…" value={search} onChange={e => setSearch(e.target.value)} />
            <span style={{ marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)' }}>
              {loading ? 'Cargando…' : `${visible.length} ${visible.length === 1 ? 'ítem' : 'ítems'}`}
            </span>
          </div>

          {loading ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)', fontFamily: 'Josefin Sans, sans-serif', fontSize: 8.5, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Cargando…</div>
          ) : visible.length === 0 ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)', fontFamily: 'Josefin Sans, sans-serif', fontSize: 8.5, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
              {items.length === 0 ? 'Aún no hay ítems en inventario' : 'Sin resultados para esta búsqueda'}
            </div>
          ) : (
            <div className="admin-table-wrap">
              <table className="inv-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>SKU</th>
                    <th className="col-categoria">Categoría</th>
                    <th>Stock</th>
                    <th className="col-ubicacion">Ubicación</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map(item => {
                    const low = item.stockActual <= 0
                    const warn = !low && item.stockActual <= item.stockMinimo
                    return (
                      <tr key={item.id}>
                        <td style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 12.5, letterSpacing: '0.03em', color: 'var(--text)' }}>{item.nombre || '—'}</td>
                        <td style={{ color: 'var(--dim)', fontSize: 12 }}>{item.sku || '—'}</td>
                        <td className="col-categoria" style={{ color: 'var(--dim)', fontSize: 12 }}>{item.categoria || '—'}</td>
                        <td className={low ? 'inv-stock-out' : warn ? 'inv-stock-low' : undefined} style={{ fontSize: 13 }}>
                          {item.stockActual} {item.unidad}
                          {(low || warn) && <span style={{ fontSize: 10, marginLeft: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{low ? 'sin stock' : 'stock bajo'}</span>}
                        </td>
                        <td className="col-ubicacion" style={{ color: 'rgba(255,255,255,.3)', fontSize: 11 }}>{item.ubicacion || '—'}</td>
                        <td>
                          <div className="admin-doc-actions">
                            <Link href={`/admin/inventario/${item.id}`} className="doc-btn">
                              <EditIcon /> Ver / Editar
                            </Link>
                            <button className="doc-btn doc-btn-danger" onClick={() => void handleDelete(item.id, item.nombre)}>
                              <TrashIcon /> Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
