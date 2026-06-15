'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CotizacionRecord, makeId } from '@/lib/cotizaciones-store'
import { apiFetchHistory, apiCreateRecord, apiDeleteRecord } from '@/lib/cotizaciones-api'
import { EditIcon, PdfIcon, VersionIcon, TrashIcon } from '@/components/DocIcons'

const SYM: Record<string, string> = { CLP: '$', USD: 'US$', UF: 'UF' }

function fmt(total: number, moneda: string) {
  if (moneda === 'UF') return `UF ${total.toFixed(2)}`
  return `${SYM[moneda] ?? '$'} ${total.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`
}

function fmtDate(iso: string) {
  try {
    return new Date(iso.length === 10 ? iso + 'T12:00:00' : iso)
      .toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch { return iso }
}

export default function Cotizaciones() {
  const router = useRouter()
  const [records, setRecords] = useState<CotizacionRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'borrador' | 'emitida'>('all')
  const [search, setSearch] = useState('')

  async function load() {
    try { setRecords(await apiFetchHistory()) }
    catch { /* silently fail */ }
    finally { setLoading(false) }
  }

  useEffect(() => { void load() }, [])

  async function handleDelete(id: string, numero: string) {
    if (!confirm(`¿Eliminar la cotización ${numero}? Esta acción no se puede deshacer.`)) return
    await apiDeleteRecord(id)
    setRecords(r => r.filter(x => x.id !== id))
  }

  async function handleNuevaVersion(record: CotizacionRecord) {
    const base = record.numero.replace(/-V\d+$/, '')
    const count = records.filter(r => r.numero.startsWith(base)).length
    const newNum = `${base}-V${count + 1}`
    const newId = makeId()
    await apiCreateRecord(newId, { ...record.data, numero: newNum }, 'borrador', record.id)
    router.push(`/admin/cotizaciones/nueva?id=${newId}`)
  }

  const visible = records.filter(r => {
    if (filter !== 'all' && r.estado !== filter) return false
    if (search) {
      const q = search.toLowerCase()
      return r.numero.toLowerCase().includes(q)
        || r.clienteNombre.toLowerCase().includes(q)
        || r.clienteEmpresa.toLowerCase().includes(q)
    }
    return true
  })

  return (
    <>
      <style>{`
        .cot-wrap { padding: 32px 40px; display: flex; flex-direction: column; gap: 32px; }

        /* Nueva cotización card */
        .cot-nueva {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 28px;
          border: 1px solid var(--border);
          background: rgba(200,168,75,0.03);
        }
        .cot-nueva-text h2 {
          font-family: Josefin Sans, sans-serif; font-size: 18px;
          font-weight: 200; letter-spacing: 0.06em; margin-bottom: 5px;
        }
        .cot-nueva-text p {
          font-size: 14px; color: var(--dim); margin: 0;
        }

        /* Table */
        .cot-table { width: 100%; border-collapse: collapse; min-width: 640px; }
        .cot-table th {
          font-family: Josefin Sans, sans-serif; font-size: 9.5px;
          letter-spacing: 0.32em; text-transform: uppercase;
          color: var(--dim); font-weight: 400;
          padding: 0 12px 10px; text-align: left;
          border-bottom: 1px solid var(--border);
        }
        .cot-table td {
          padding: 12px 12px; font-size: 14.5px;
          border-bottom: 1px solid var(--border);
          vertical-align: middle;
        }
        .cot-table tr:hover td { background: rgba(255,255,255,.02); }
        /* Filters */
        .cot-filters { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-bottom: 16px; }
        .cot-search {
          background: rgba(255,255,255,.04); border: 1px solid var(--border);
          color: var(--text); padding: 0 14px; height: 40px;
          font-family: Outfit, sans-serif; font-size: 14px;
          outline: none; width: 240px; transition: border-color .2s;
        }
        .cot-search:focus { border-color: rgba(200,168,75,.4); }
        .fbtn {
          font-family: Josefin Sans, sans-serif; font-size: 9.5px;
          letter-spacing: 0.22em; text-transform: uppercase;
          display: inline-flex; align-items: center; justify-content: center;
          background: none; border: 1px solid var(--border);
          color: var(--dim); height: 40px; padding: 0 14px; cursor: pointer; transition: all .15s;
        }
        .fbtn.on { background: rgba(200,168,75,.08); border-color: rgba(200,168,75,.35); color: var(--accent); }

        @media (max-width: 800px) {
          .cot-wrap { padding: 20px 18px; }
          .col-empresa, .col-updated, .col-version { display: none; }
          .cot-nueva { flex-direction: column; align-items: flex-start; gap: 14px; }
        }
        @media (max-width: 640px) {
          .cot-filters { flex-direction: column; align-items: stretch; }
          .cot-search { width: 100%; }
          .cot-filters-count { margin-left: 0 !important; }
        }
      `}</style>

      <div className="cot-wrap">

        {/* Header */}
        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Documentos</div>
          <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 24, fontWeight: 200, letterSpacing: '0.06em' }}>Cotizaciones</h1>
        </div>

        {/* Nueva cotización — sección de creación */}
        <div className="cot-nueva">
          <div className="cot-nueva-text">
            <h2>Nueva Cotización</h2>
            <p>Genera un documento PDF listo para enviar al cliente</p>
          </div>
          <Link href="/admin/cotizaciones/nueva" className="btn-primary">
            + Crear cotización
          </Link>
        </div>

        {/* Historial */}
        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 16 }}>
            Historial
          </div>

          <div className="cot-filters">
            <input
              className="cot-search"
              placeholder="Buscar número, cliente…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div style={{ display: 'flex', gap: 6 }}>
              {(['all', 'emitida', 'borrador'] as const).map(f => (
                <button key={f} className={`fbtn${filter === f ? ' on' : ''}`} onClick={() => setFilter(f)}>
                  {f === 'all' ? 'Todas' : f === 'emitida' ? 'Emitidas' : 'Borradores'}
                </button>
              ))}
            </div>
            <span className="cot-filters-count" style={{ marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)' }}>
              {loading ? 'Cargando…' : `${visible.length} ${visible.length === 1 ? 'cotización' : 'cotizaciones'}`}
            </span>
          </div>

          {loading ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)', fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Cargando…
            </div>
          ) : visible.length === 0 ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--dim)', fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
              {records.length === 0 ? 'Aún no hay cotizaciones guardadas' : 'Sin resultados para esta búsqueda'}
            </div>
          ) : (
            <div className="admin-table-wrap">
              <table className="cot-table">
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Cliente</th>
                  <th className="col-empresa">Empresa</th>
                  <th>Fecha</th>
                  <th className="col-updated">Modificado</th>
                  <th style={{ textAlign: 'right' }}>Total</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {visible.map(r => (
                  <tr key={r.id}>
                    <td style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 13, letterSpacing: '0.06em', color: 'var(--text)' }}>
                      {r.numero}
                      {r.parentId && <span style={{ fontSize: 10.5, color: 'var(--dim)', marginLeft: 6 }}>v</span>}
                    </td>
                    <td style={{ color: r.clienteNombre ? 'var(--text)' : 'var(--dim)' }}>
                      {r.clienteNombre || '—'}
                    </td>
                    <td className="col-empresa" style={{ color: 'var(--dim)', fontSize: 14 }}>
                      {r.clienteEmpresa || '—'}
                    </td>
                    <td style={{ color: 'var(--dim)', fontSize: 13.5 }}>{fmtDate(r.fecha)}</td>
                    <td className="col-updated" style={{ color: 'rgba(255,255,255,.3)', fontSize: 13 }}>
                      {fmtDate(r.updatedAt)}
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: 'Josefin Sans, sans-serif', fontSize: 13.5, color: r.total > 0 ? 'var(--text)' : 'var(--dim)' }}>
                      {r.total > 0 ? fmt(r.total, r.moneda) : '—'}
                    </td>
                    <td>
                      <span className={`badge badge-${r.estado}`}>{r.estado}</span>
                    </td>
                    <td>
                      <div className="admin-doc-actions">
                        <Link href={`/admin/cotizaciones/nueva?id=${r.id}`} className="doc-btn">
                          <EditIcon /> Editar
                        </Link>
                        <Link href={`/admin/cotizaciones/nueva?id=${r.id}&print=1`} className="doc-btn doc-btn-accent">
                          <PdfIcon /> PDF
                        </Link>
                        <button className="doc-btn col-version" onClick={() => void handleNuevaVersion(r)}>
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
