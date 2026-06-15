'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MembreteRecord, makeId } from '@/lib/membretes-store'
import { apiFetchHistory, apiCreateRecord, apiDeleteRecord } from '@/lib/membretes-api'
import { EditIcon, PdfIcon, VersionIcon, TrashIcon } from '@/components/DocIcons'

function fmtDate(iso: string) {
  try {
    return new Date(iso.length === 10 ? iso + 'T12:00:00' : iso)
      .toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch { return iso }
}

export default function MembretesHistorial() {
  const router = useRouter()
  const [records, setRecords] = useState<MembreteRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  async function load() {
    try { setRecords(await apiFetchHistory()) }
    catch { /* silently fail */ }
    finally { setLoading(false) }
  }

  useEffect(() => { void load() }, [])

  async function handleDelete(id: string, asunto: string) {
    if (!confirm(`¿Eliminar el membrete "${asunto || 'sin asunto'}"? Esta acción no se puede deshacer.`)) return
    await apiDeleteRecord(id)
    setRecords(r => r.filter(x => x.id !== id))
  }

  async function handleNuevaVersion(record: MembreteRecord) {
    const newId = makeId()
    await apiCreateRecord(newId, { ...record.data }, 'borrador', record.id)
    router.push(`/admin/membrete/nuevo?id=${newId}`)
  }

  const visible = records.filter(r => {
    if (!search) return true
    const q = search.toLowerCase()
    return r.asunto.toLowerCase().includes(q) || r.destinatario.toLowerCase().includes(q)
  })

  return (
    <>
      <style>{`
        .mb-wrap { padding: 32px 40px; display: flex; flex-direction: column; gap: 32px; }
        .mb-nueva {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 28px; border: 1px solid var(--border);
          background: rgba(200,168,75,0.03);
        }
        .mb-nueva-text h2 { font-family: Josefin Sans, sans-serif; font-size: 18px; font-weight: 200; letter-spacing: 0.06em; margin-bottom: 5px; }
        .mb-nueva-text p { font-size: 14px; color: var(--dim); margin: 0; }
        .mb-table { width: 100%; border-collapse: collapse; min-width: 560px; }
        .mb-table th {
          font-family: Josefin Sans, sans-serif; font-size: 9.5px;
          letter-spacing: 0.32em; text-transform: uppercase;
          color: var(--dim); font-weight: 400;
          padding: 0 12px 10px; text-align: left;
          border-bottom: 1px solid var(--border);
        }
        .mb-table td { padding: 12px 12px; font-size: 14.5px; border-bottom: 1px solid var(--border); vertical-align: middle; }
        .mb-table tr:hover td { background: rgba(255,255,255,.02); }
        .mb-search {
          background: rgba(255,255,255,.04); border: 1px solid var(--border);
          color: var(--text); padding: 0 14px; height: 40px;
          font-family: Outfit, sans-serif; font-size: 14px;
          outline: none; width: 240px; transition: border-color .2s;
        }
        .mb-search:focus { border-color: rgba(200,168,75,.4); }
        @media (max-width: 800px) { .mb-wrap { padding: 20px 18px; } .col-dest, .col-updated { display: none; } .mb-nueva { flex-direction: column; align-items: flex-start; gap: 14px; } }
        @media (max-width: 640px) {
          .mb-filters { flex-direction: column; align-items: stretch; }
          .mb-search { width: 100%; }
          .mb-filters-count { margin-left: 0 !important; }
        }
      `}</style>

      <div className="mb-wrap">
        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Documentos</div>
          <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 24, fontWeight: 200, letterSpacing: '0.06em' }}>Membretes</h1>
        </div>

        <div className="mb-nueva">
          <div className="mb-nueva-text">
            <h2>Nuevo Membrete</h2>
            <p>Carta formal con membrete corporativo lista para imprimir</p>
          </div>
          <Link href="/admin/membrete/nuevo" className="btn-primary">
            + Crear membrete
          </Link>
        </div>

        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 16 }}>
            Historial
          </div>

          <div className="mb-filters" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
            <input
              className="mb-search"
              placeholder="Buscar asunto, destinatario…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span className="mb-filters-count" style={{ marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)' }}>
              {loading ? 'Cargando…' : `${visible.length} ${visible.length === 1 ? 'membrete' : 'membretes'}`}
            </span>
          </div>

          {loading ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)', fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Cargando…
            </div>
          ) : visible.length === 0 ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)', fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
              {records.length === 0 ? 'Aún no hay membretes guardados' : 'Sin resultados para esta búsqueda'}
            </div>
          ) : (
            <div className="admin-table-wrap">
              <table className="mb-table">
              <thead>
                <tr>
                  <th>Asunto</th>
                  <th className="col-dest">Destinatario</th>
                  <th>Fecha</th>
                  <th className="col-updated">Modificado</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {visible.map(r => (
                  <tr key={r.id}>
                    <td style={{ color: r.asunto ? 'var(--text)' : 'var(--dim)' }}>
                      {r.asunto || '(sin asunto)'}
                      {r.parentId && <span style={{ fontSize: 10.5, color: 'var(--dim)', marginLeft: 6 }}>v</span>}
                    </td>
                    <td className="col-dest" style={{ color: 'var(--dim)', fontSize: 14 }}>
                      {r.destinatario || '—'}
                    </td>
                    <td style={{ color: 'var(--dim)', fontSize: 13.5 }}>{fmtDate(r.ciudadFecha || r.createdAt)}</td>
                    <td className="col-updated" style={{ color: 'rgba(255,255,255,.3)', fontSize: 13 }}>
                      {fmtDate(r.updatedAt)}
                    </td>
                    <td>
                      <span className={`badge badge-${r.estado}`}>{r.estado}</span>
                    </td>
                    <td>
                      <div className="admin-doc-actions">
                        <Link href={`/admin/membrete/nuevo?id=${r.id}`} className="doc-btn">
                          <EditIcon /> Editar
                        </Link>
                        <Link href={`/admin/membrete/nuevo?id=${r.id}&print=1`} className="doc-btn doc-btn-accent">
                          <PdfIcon /> PDF
                        </Link>
                        <button className="doc-btn" onClick={() => void handleNuevaVersion(r)}>
                          <VersionIcon /> Versión
                        </button>
                        <button className="doc-btn doc-btn-danger" onClick={() => void handleDelete(r.id, r.asunto)}>
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
