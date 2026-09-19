'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GuiaDespachoRecord, TIPOS_DESPACHO, makeId } from '@/lib/guias-despacho-store'
import { apiFetchHistory, apiCreateRecord, apiDeleteRecord } from '@/lib/guias-despacho-api'
import { EditIcon, PdfIcon, VersionIcon, TrashIcon } from '@/components/DocIcons'

function fmtDate(iso: string) {
  try {
    return new Date(iso.length === 10 ? iso + 'T12:00:00' : iso)
      .toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch { return iso }
}

export default function GuiasDespachoHistorial() {
  const router = useRouter()
  const [records, setRecords] = useState<GuiaDespachoRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  async function load() {
    try { setRecords(await apiFetchHistory()) }
    catch { /* silently fail */ }
    finally { setLoading(false) }
  }

  useEffect(() => { void load() }, [])

  async function handleDelete(id: string, numero: string) {
    if (!confirm(`¿Eliminar la guía "${numero || 'sin número'}"? Esta acción no se puede deshacer.`)) return
    await apiDeleteRecord(id)
    setRecords(r => r.filter(x => x.id !== id))
  }

  async function handleNuevaVersion(record: GuiaDespachoRecord) {
    const base = record.numero.replace(/-V\d+$/, '')
    const count = records.filter(r => r.numero.startsWith(base)).length
    const newNumero = `${base}-V${count + 1}`
    const newId = makeId()
    const newData = {
      ...record.data,
      meta: { ...record.data.meta, numero: newNumero },
      stockDescontado: false,
    }
    await apiCreateRecord(newId, newData, 'borrador', record.id)
    router.push(`/admin/guias-despacho/nueva?id=${newId}`)
  }

  const visible = records.filter(r => {
    if (!search) return true
    const q = search.toLowerCase()
    return r.numero.toLowerCase().includes(q) || r.receptor.toLowerCase().includes(q)
  })

  return (
    <>
      <style>{`
        .gd-wrap { padding: 32px 40px; display: flex; flex-direction: column; gap: 32px; }
        .gd-nueva {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 28px; border: 1px solid var(--border);
          background: rgba(200,168,75,0.03);
        }
        .gd-nueva-text h2 { font-family: Josefin Sans, sans-serif; font-size: 18px; font-weight: 200; letter-spacing: 0.06em; margin-bottom: 5px; }
        .gd-nueva-text p { font-size: 14px; color: var(--dim); margin: 0; }
        .gd-table { width: 100%; border-collapse: collapse; min-width: 620px; }
        .gd-table th {
          font-family: Josefin Sans, sans-serif; font-size: 9.5px;
          letter-spacing: 0.32em; text-transform: uppercase;
          color: var(--dim); font-weight: 400;
          padding: 0 12px 10px; text-align: left;
          border-bottom: 1px solid var(--border);
        }
        .gd-table td { padding: 12px 12px; font-size: 14.5px; border-bottom: 1px solid var(--border); vertical-align: middle; }
        .gd-table tr:hover td { background: rgba(255,255,255,.02); }
        .gd-search {
          background: rgba(255,255,255,.04); border: 1px solid var(--border);
          color: var(--text); padding: 0 14px; height: 40px;
          font-family: Outfit, sans-serif; font-size: 14px;
          outline: none; width: 240px; transition: border-color .2s;
        }
        .gd-search:focus { border-color: rgba(200,168,75,.4); }
        @media (max-width: 800px) { .gd-wrap { padding: 20px 18px; } .col-proveedor, .col-updated { display: none; } .gd-nueva { flex-direction: column; align-items: flex-start; gap: 14px; } }
      `}</style>

      <div className="gd-wrap">
        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Documentos</div>
          <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 22, fontWeight: 200, letterSpacing: '0.06em' }}>Guías de Despacho</h1>
        </div>

        <div className="gd-nueva">
          <div className="gd-nueva-text">
            <h2>Nueva Guía de Despacho</h2>
            <p>Documento interno de control de despacho — no constituye guía de despacho electrónica SII</p>
          </div>
          <Link href="/admin/guias-despacho/nueva" className="btn-primary">
            + Crear guía
          </Link>
        </div>

        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 16 }}>
            Historial
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
            <input
              className="gd-search"
              placeholder="Buscar número, receptor…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span style={{ marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)' }}>
              {loading ? 'Cargando…' : `${visible.length} ${visible.length === 1 ? 'guía' : 'guías'}`}
            </span>
          </div>

          {loading ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)', fontFamily: 'Josefin Sans, sans-serif', fontSize: 8.5, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Cargando…
            </div>
          ) : visible.length === 0 ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)', fontFamily: 'Josefin Sans, sans-serif', fontSize: 8.5, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
              {records.length === 0 ? 'Aún no hay guías guardadas' : 'Sin resultados para esta búsqueda'}
            </div>
          ) : (
            <div className="admin-table-wrap">
              <table className="gd-table">
                <thead>
                  <tr>
                    <th>Número</th>
                    <th className="col-proveedor">Receptor</th>
                    <th>Fecha</th>
                    <th>Tipo</th>
                    <th className="col-updated">Modificado</th>
                    <th>Estado</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map(r => (
                    <tr key={r.id}>
                      <td style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 11, letterSpacing: '0.06em', color: 'var(--text)' }}>
                        {r.numero || '—'}
                        {r.parentId && <span style={{ fontSize: 8.5, color: 'var(--dim)', marginLeft: 6 }}>v</span>}
                      </td>
                      <td className="col-proveedor" style={{ color: 'var(--dim)', fontSize: 12 }}>
                        {r.receptor || '—'}
                      </td>
                      <td style={{ color: 'var(--dim)', fontSize: 11.5 }}>{r.fecha ? fmtDate(r.fecha) : '—'}</td>
                      <td style={{ color: 'var(--dim)', fontSize: 11.5 }}>{TIPOS_DESPACHO[r.data.meta?.tipoDespacho] ?? '—'}</td>
                      <td className="col-updated" style={{ color: 'rgba(255,255,255,.3)', fontSize: 11 }}>
                        {fmtDate(r.updatedAt)}
                      </td>
                      <td>
                        <span className={`badge badge-${r.estado}`}>{r.estado}</span>
                      </td>
                      <td>
                        <div className="admin-doc-actions">
                          <Link href={`/admin/guias-despacho/nueva?id=${r.id}`} className="doc-btn">
                            <EditIcon /> Editar
                          </Link>
                          <Link href={`/admin/guias-despacho/nueva?id=${r.id}&print=1`} className="doc-btn doc-btn-accent">
                            <PdfIcon /> PDF
                          </Link>
                          <button className="doc-btn" onClick={() => void handleNuevaVersion(r)}>
                            <VersionIcon /> Versión
                          </button>
                          <button className="doc-btn doc-btn-danger" onClick={() => void handleDelete(r.id, r.numero)}>
                            <TrashIcon /> Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
