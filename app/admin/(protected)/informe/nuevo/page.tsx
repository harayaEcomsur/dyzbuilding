'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { InformeData, EquipRow, StatusKey, makeId } from '@/lib/informes-store'
import { apiFetchRecord, apiCreateRecord, apiUpdateRecord } from '@/lib/informes-api'

const STATUS_LABELS: Record<StatusKey, string> = {
  optimo: 'Óptimo',
  regular: 'Regular',
  requiere: 'Requiere intervención',
}
const STATUS_COLORS: Record<StatusKey, { bg: string; text: string }> = {
  optimo: { bg: '#d4edda', text: '#155724' },
  regular: { bg: '#fff3cd', text: '#856404' },
  requiere: { bg: '#f8d7da', text: '#721c24' },
}

let nextRowId = 4

function makeDefaultData(): InformeData {
  return {
    meta: {
      codigo: `IT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`,
      fecha: '',
      cliente: '',
      tecnico: '',
      proyecto: '',
    },
    objeto: 'Inspección y diagnóstico del sistema de climatización instalado en las dependencias del cliente, con el fin de evaluar su estado operativo y recomendar las acciones de mantención correspondientes.',
    rows: [
      { id: 1, equipo: 'Unidad Exterior VRF', marca: 'LG', modelo: 'ARUN080LAS5', status: 'optimo' },
      { id: 2, equipo: 'Unidad Interior Cassette', marca: 'LG', modelo: 'ARNU18GTJC2', status: 'regular' },
      { id: 3, equipo: 'Equipo Refrigeración', marca: 'Gree', modelo: 'GWH12ACC', status: 'requiere' },
    ],
    observaciones: '',
    conclusiones: '',
    nota: 'Este informe es de carácter técnico y confidencial. Su uso está restringido al cliente y personal autorizado de D&Z Building.',
  }
}

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

export default function NuevoInforme() {
  const [data, setData] = useState<InformeData>(makeDefaultData)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [initialized, setInitialized] = useState(false)

  const editingIdRef = useRef<string | null>(null)
  const estadoRef = useRef<'borrador' | 'emitido'>('borrador')
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const set = useCallback((patch: Partial<InformeData>) => setData(d => ({ ...d, ...patch })), [])
  const setMeta = useCallback((patch: Partial<InformeData['meta']>) =>
    setData(d => ({ ...d, meta: { ...d.meta, ...patch } })), [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    const shouldPrint = params.get('print') === '1'
    if (id) {
      apiFetchRecord(id).then(record => {
        if (record) {
          setData(record.data)
          setEditingId(id)
          editingIdRef.current = id
          estadoRef.current = record.estado
        }
        setInitialized(true)
        if (shouldPrint) {
          window.history.replaceState({}, '', `/admin/informe/nuevo?id=${id}`)
          setTimeout(() => window.print(), 600)
        }
      }).catch(() => setInitialized(true))
    } else {
      setInitialized(true)
    }
  }, [])

  useEffect(() => {
    if (!initialized) return
    clearTimeout(saveTimer.current)
    setSaveStatus('saving')
    saveTimer.current = setTimeout(() => { void doAutoSave(data) }, 800)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, initialized])

  async function doAutoSave(snapshot: InformeData) {
    const id = editingIdRef.current
    try {
      if (id) {
        await apiUpdateRecord(id, snapshot, estadoRef.current)
      } else {
        const newId = makeId()
        await apiCreateRecord(newId, snapshot, 'borrador')
        setEditingId(newId)
        editingIdRef.current = newId
        window.history.replaceState({}, '', `/admin/informe/nuevo?id=${newId}`)
      }
      setSaveStatus('saved')
    } catch {
      setSaveStatus('error')
    }
  }

  async function commitToServer(estado: 'borrador' | 'emitido') {
    clearTimeout(saveTimer.current)
    const id = editingIdRef.current
    try {
      if (id) {
        await apiUpdateRecord(id, data, estado)
      } else {
        const newId = makeId()
        await apiCreateRecord(newId, data, estado)
        setEditingId(newId)
        editingIdRef.current = newId
        window.history.replaceState({}, '', `/admin/informe/nuevo?id=${newId}`)
      }
      estadoRef.current = estado
      setSaveStatus('saved')
    } catch {
      setSaveStatus('error')
    }
  }

  async function handlePrint() {
    await commitToServer('emitido')
    window.print()
  }

  function addRow() {
    set({ rows: [...data.rows, { id: nextRowId++, equipo: '', marca: '', modelo: '', status: 'optimo' }] })
  }
  function removeRow(id: number) {
    set({ rows: data.rows.filter(x => x.id !== id) })
  }
  function updateRow(id: number, field: keyof EquipRow, value: string) {
    set({ rows: data.rows.map(x => x.id === id ? { ...x, [field]: value } : x) })
  }

  const previewRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

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

  const saveLabel =
    saveStatus === 'saving' ? 'Guardando…'
    : saveStatus === 'saved' ? 'Guardado'
    : saveStatus === 'error' ? 'Error al guardar'
    : ''

  const saveColor =
    saveStatus === 'error' ? '#e05555'
    : saveStatus === 'saved' ? 'rgba(200,168,75,0.7)'
    : 'var(--dim)'

  return (
    <>
      <style>{`
        @media print {
          * { visibility: hidden !important; }
          #it-print, #it-print * { visibility: visible !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          #it-print { position: fixed !important; inset: 0 !important; background: #fff !important; }
          #it-print .it-page { box-shadow: none !important; zoom: 1 !important; margin: 0 !important; }
          @page { size: A4; margin: 0; }
        }
        .it-layout { display: flex; height: 100%; overflow: hidden; }
        .it-form {
          width: 850px; flex-shrink: 0; overflow-y: auto;
          border-right: 1px solid var(--border);
          padding: 28px 36px;
          display: flex; flex-direction: column; gap: 18px;
        }
        .it-preview {
          flex: 1; min-width: 0;
          overflow-y: auto; overflow-x: hidden;
          background: #888; padding: 24px;
        }
        .it-field label {
          display: block;
          font-family: Josefin Sans, sans-serif; font-size: 7.5px;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--dim); margin-bottom: 6px;
        }
        .it-field input, .it-field textarea, .it-field select {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          color: var(--text); padding: 9px 12px;
          font-family: Outfit, sans-serif; font-size: 12px; font-weight: 300;
          outline: none; width: 100%; box-sizing: border-box; transition: border-color 0.2s;
        }
        .it-field input:focus, .it-field textarea:focus { border-color: rgba(200,168,75,0.45); }
        .it-field select option { background: #1a1a1a; }
        .equip-table { width: 100%; border-collapse: collapse; font-size: 11px; }
        .equip-table th {
          background: rgba(200,168,75,0.1); padding: 7px 8px; text-align: left;
          font-family: Josefin Sans, sans-serif; font-size: 7px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--dim); border-bottom: 1px solid var(--border);
        }
        .equip-table td { padding: 6px 8px; border-bottom: 1px solid var(--border); vertical-align: middle; }
        .equip-table input, .equip-table select {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          color: var(--text); padding: 5px 7px; font-family: Outfit, sans-serif;
          font-size: 11px; outline: none; width: 100%; box-sizing: border-box;
        }
        .equip-table select option { background: #1a1a1a; }
        @media (max-width: 1280px) { .it-form { width: 520px; padding: 24px 28px; } }
        @media (max-width: 900px) {
          .it-layout { flex-direction: column; }
          .it-form { width: 100%; max-height: 56vh; border-right: none; border-bottom: 1px solid var(--border); }
        }
      `}</style>

      <div className="it-layout">
        <div className="it-form">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
              <Link href="/admin/informe" style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}>
                ← Historial
              </Link>
              {saveLabel && (
                <span style={{ marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif', fontSize: 7, letterSpacing: '0.22em', textTransform: 'uppercase', color: saveColor }}>
                  {saveLabel}
                </span>
              )}
            </div>
            <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 20, fontWeight: 200, letterSpacing: '0.06em' }}>
              {editingId ? `Editando ${data.meta.codigo}` : 'Nuevo Informe Técnico'}
            </h1>
          </div>

          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Datos del informe</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {(['codigo', 'fecha', 'cliente', 'tecnico'] as const).map(k => (
              <div key={k} className="it-field">
                <label>{k === 'codigo' ? 'Código' : k === 'fecha' ? 'Fecha' : k === 'cliente' ? 'Cliente' : 'Técnico'}</label>
                <input value={data.meta[k]} onChange={e => setMeta({ [k]: e.target.value })} />
              </div>
            ))}
          </div>
          <div className="it-field">
            <label>Proyecto</label>
            <input value={data.meta.proyecto} onChange={e => setMeta({ proyecto: e.target.value })} />
          </div>

          <div className="it-field">
            <label>01 · Objeto del informe</label>
            <textarea style={{ minHeight: 88, resize: 'vertical' }} value={data.objeto} onChange={e => set({ objeto: e.target.value })} />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>02 · Equipos</span>
              <button onClick={addRow} style={{
                fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                background: 'rgba(200,168,75,0.1)', color: 'var(--accent)', border: '1px solid rgba(200,168,75,0.2)',
                padding: '5px 10px', cursor: 'pointer',
              }}>+ Agregar</button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="equip-table">
                <thead><tr><th>Equipo</th><th>Marca</th><th>Modelo</th><th>Estado</th><th></th></tr></thead>
                <tbody>
                  {data.rows.map(r => (
                    <tr key={r.id}>
                      <td><input value={r.equipo} onChange={e => updateRow(r.id, 'equipo', e.target.value)} placeholder="Nombre" /></td>
                      <td><input value={r.marca} onChange={e => updateRow(r.id, 'marca', e.target.value)} style={{ width: 68 }} /></td>
                      <td><input value={r.modelo} onChange={e => updateRow(r.id, 'modelo', e.target.value)} /></td>
                      <td>
                        <select value={r.status} onChange={e => updateRow(r.id, 'status', e.target.value as StatusKey)}>
                          {(Object.keys(STATUS_LABELS) as StatusKey[]).map(k => <option key={k} value={k}>{STATUS_LABELS[k]}</option>)}
                        </select>
                      </td>
                      <td>
                        <button onClick={() => removeRow(r.id)} style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 16, lineHeight: 1, padding: '0 4px' }}>×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="it-field">
            <label>04 · Observaciones</label>
            <textarea style={{ minHeight: 72, resize: 'vertical' }} value={data.observaciones} onChange={e => set({ observaciones: e.target.value })} />
          </div>

          <div className="it-field">
            <label>05 · Conclusiones</label>
            <textarea style={{ minHeight: 72, resize: 'vertical' }} value={data.conclusiones} onChange={e => set({ conclusiones: e.target.value })} />
          </div>

          <div className="it-field">
            <label>Nota legal</label>
            <textarea style={{ minHeight: 56, resize: 'vertical' }} value={data.nota} onChange={e => set({ nota: e.target.value })} />
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => void commitToServer('borrador')} className="btn-outline" style={{ flex: 1, textAlign: 'center', padding: '13px' }}>
              Guardar borrador
            </button>
            <button onClick={() => void handlePrint()} className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '13px' }}>
              Descargar PDF
            </button>
          </div>
        </div>

        <div ref={previewRef} id="it-print" className="it-preview">
          <div className="it-page" style={{
            width: 794, minHeight: 1123, background: '#fff',
            fontFamily: 'Arial, Helvetica, sans-serif', color: '#1a1a1a',
            position: 'relative', boxShadow: '0 4px 28px rgba(0,0,0,0.35)',
            zoom: scale, margin: '0 auto',
            WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact',
          } as React.CSSProperties}>
            <div style={{ background: '#0c0c0c', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#C8A84B', fontSize: 7, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Informe Técnico</div>
                <div style={{ color: '#555', fontSize: 9, marginTop: 3, fontFamily: 'Courier New, monospace' }}>{data.meta.codigo}</div>
              </div>
            </div>
            <div style={{ background: '#C8A84B', height: 3 }} />

            <div style={{ background: '#f9f9f9', borderBottom: '1px solid #e8e8e8', padding: '12px 40px', display: 'flex', gap: 36, flexWrap: 'wrap' }}>
              {[['Cliente', data.meta.cliente], ['Técnico', data.meta.tecnico], ['Fecha', data.meta.fecha], ['Proyecto', data.meta.proyecto]].map(([lbl, val]) => (
                <div key={lbl}>
                  <div style={{ fontSize: 7, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: 2 }}>{lbl}</div>
                  <div style={{ fontSize: 11, color: '#333', fontWeight: 600 }}>{val || '—'}</div>
                </div>
              ))}
            </div>

            <div style={{ padding: '28px 40px', paddingBottom: 80 }}>
              <Section num="01" title="Objeto del informe">
                <p style={{ fontSize: 11, lineHeight: 1.7, color: '#444', margin: 0 }}>{data.objeto}</p>
              </Section>

              <Section num="02" title="Equipos inspeccionados">
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
                  <thead>
                    <tr style={{ background: '#f2f2f2' }}>
                      {['#', 'Equipo', 'Marca', 'Modelo', 'Estado'].map(h => (
                        <th key={h} style={{ padding: '7px 10px', textAlign: 'left', fontSize: 7, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', borderBottom: '2px solid #ddd' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.rows.map((r, i) => (
                      <tr key={r.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <td style={{ padding: '7px 10px', color: '#aaa' }}>{i + 1}</td>
                        <td style={{ padding: '7px 10px', fontWeight: 600 }}>{r.equipo || '—'}</td>
                        <td style={{ padding: '7px 10px', color: '#555' }}>{r.marca}</td>
                        <td style={{ padding: '7px 10px', color: '#555', fontFamily: 'Courier New, monospace', fontSize: 9 }}>{r.modelo}</td>
                        <td style={{ padding: '6px 10px' }}>
                          <span style={{ background: STATUS_COLORS[r.status].bg, color: STATUS_COLORS[r.status].text, padding: '2px 8px', borderRadius: 2, fontSize: 9, fontWeight: 700 }}>
                            {STATUS_LABELS[r.status]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Section>

              <Section num="03" title="Recomendaciones">
                {data.rows.filter(r => r.status !== 'optimo').length === 0 ? (
                  <p style={{ fontSize: 11, color: '#155724', background: '#d4edda', padding: '10px 14px', margin: 0 }}>Todos los equipos se encuentran en estado óptimo.</p>
                ) : (
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {data.rows.filter(r => r.status !== 'optimo').map(r => (
                      <li key={r.id} style={{ fontSize: 11, color: '#444', marginBottom: 4, lineHeight: 1.5 }}>
                        <strong>{r.equipo}</strong> ({r.marca} {r.modelo}): {r.status === 'regular' ? 'Programar mantención preventiva.' : 'Requiere intervención inmediata.'}
                      </li>
                    ))}
                  </ul>
                )}
              </Section>

              {data.observaciones && (
                <Section num="04" title="Observaciones">
                  <p style={{ fontSize: 11, lineHeight: 1.7, color: '#444', margin: 0, whiteSpace: 'pre-wrap' }}>{data.observaciones}</p>
                </Section>
              )}

              {data.conclusiones && (
                <Section num="05" title="Conclusiones">
                  <p style={{ fontSize: 11, lineHeight: 1.7, color: '#444', margin: 0, whiteSpace: 'pre-wrap' }}>{data.conclusiones}</p>
                </Section>
              )}

              <div style={{ background: '#fffbf0', border: '1px solid #C8A84B', padding: '12px 16px' }}>
                <p style={{ fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9B6920', marginBottom: 4, fontWeight: 700 }}>Nota</p>
                <p style={{ fontSize: 10, color: '#666', margin: 0, lineHeight: 1.5 }}>{data.nota}</p>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
              <div style={{ background: '#C8A84B', height: 2 }} />
              <div style={{ background: '#0c0c0c', padding: '10px 40px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#888', fontSize: 8 }}>D&Z Building SpA</span>
                <span style={{ color: '#888', fontSize: 8 }}>www.dyzbuilding.cl</span>
                <span style={{ color: '#888', fontSize: 8, fontFamily: 'Courier New, monospace' }}>{data.meta.codigo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
        <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 20, color: '#e0e0e0', fontWeight: 700, lineHeight: 1 }}>{num}</span>
        <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#666', fontWeight: 700 }}>{title}</span>
      </div>
      {children}
    </div>
  )
}
