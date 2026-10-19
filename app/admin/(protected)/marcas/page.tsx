'use client'

import { useState, useEffect } from 'react'
import { Marca } from '@/lib/marcas-store'
import { apiFetchMarcas, apiCreateMarca, apiDeleteMarca } from '@/lib/marcas-api'
import { apiUploadFoto } from '@/lib/sistemas-api'
import FileUploadButton from '@/components/FileUploadButton'
import { TrashIcon, PlusIcon } from '@/components/DocIcons'

export default function MarcasPage() {
  const [marcas, setMarcas] = useState<Marca[]>([])
  const [loading, setLoading] = useState(true)
  const [nombre, setNombre] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)

  async function load() {
    try { setMarcas(await apiFetchMarcas()) }
    catch { /* silently fail */ }
    finally { setLoading(false) }
  }

  useEffect(() => { void load() }, [])

  async function handleLogoUpload(files: FileList) {
    const file = files[0]
    if (!file) return
    setUploading(true)
    try {
      setLogoUrl(await apiUploadFoto(file, 'marcas/logos', { maxDimension: 800, quality: 0.9 }))
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al subir el logo')
    } finally {
      setUploading(false)
    }
  }

  async function handleCreate() {
    if (!nombre.trim()) return
    setSaving(true)
    try {
      const created = await apiCreateMarca(nombre.trim(), logoUrl, marcas.length)
      setMarcas(prev => [...prev, created])
      setNombre('')
      setLogoUrl('')
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al crear la marca')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string, n: string) {
    if (!confirm(`¿Eliminar la marca "${n}"? Los ítems de inventario que la usan quedarán sin marca asignada.`)) return
    await apiDeleteMarca(id)
    setMarcas(prev => prev.filter(m => m.id !== id))
  }

  return (
    <>
      <style>{`
        .mk-wrap { padding: 32px 40px; display: flex; flex-direction: column; gap: 28px; max-width: 760px; }
        .mk-form { display: flex; gap: 14px; align-items: flex-end; flex-wrap: wrap; border: 1px solid var(--border); padding: 20px; }
        .mk-list { display: flex; flex-direction: column; gap: 1px; }
        .mk-row { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid var(--border); }
        .mk-logo { width: 44px; height: 44px; object-fit: contain; background: rgba(255,255,255,.04); border: 1px solid var(--border); }
      `}</style>

      <div className="mk-wrap">
        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Inventario</div>
          <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 22, fontWeight: 200, letterSpacing: '0.06em' }}>Marcas</h1>
          <p style={{ color: 'var(--dim)', fontSize: 13.5, marginTop: 8 }}>Las marcas aparecen como filtro en el catálogo público de repuestos (/repuestos).</p>
        </div>

        <div className="mk-form">
          <div className="field" style={{ flex: 1, minWidth: 180 }}>
            <label>Nombre</label>
            <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="LG, Samsung, Gree…" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {logoUrl && <img src={logoUrl} alt="" className="mk-logo" />}
            <FileUploadButton
              label={logoUrl ? 'Cambiar logo' : 'Subir logo'}
              busyLabel="Subiendo…"
              busy={uploading}
              accept="image/*"
              onFiles={files => void handleLogoUpload(files)}
            />
          </div>
          <button className="btn-primary" disabled={!nombre.trim() || saving} onClick={() => void handleCreate()}>
            <PlusIcon /> {saving ? 'Guardando…' : 'Agregar marca'}
          </button>
        </div>

        <div>
          {loading ? (
            <div style={{ color: 'var(--dim)', fontSize: 13 }}>Cargando…</div>
          ) : marcas.length === 0 ? (
            <div style={{ color: 'var(--dim)', fontSize: 13 }}>Aún no hay marcas cargadas.</div>
          ) : (
            <div className="mk-list">
              {marcas.map(m => (
                <div key={m.id} className="mk-row">
                  {m.logoUrl ? <img src={m.logoUrl} alt="" className="mk-logo" /> : <div className="mk-logo" />}
                  <span style={{ flex: 1, fontFamily: 'Josefin Sans, sans-serif', fontSize: 13, color: 'var(--text)' }}>{m.nombre}</span>
                  <button className="doc-btn doc-btn-danger" onClick={() => void handleDelete(m.id, m.nombre)}>
                    <TrashIcon /> Eliminar
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
