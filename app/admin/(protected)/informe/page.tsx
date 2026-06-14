'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

type StatusKey = 'optimo' | 'regular' | 'requiere'
type EquipRow = { id: number; equipo: string; marca: string; modelo: string; status: StatusKey }

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

let nextId = 4
const defaultRows: EquipRow[] = [
  { id: 1, equipo: 'Unidad Exterior VRF', marca: 'LG', modelo: 'ARUN080LAS5', status: 'optimo' },
  { id: 2, equipo: 'Unidad Interior Cassette', marca: 'LG', modelo: 'ARNU18GTJC2', status: 'regular' },
  { id: 3, equipo: 'Equipo Refrigeración', marca: 'Gree', modelo: 'GWH12ACC', status: 'requiere' },
]

export default function InformePage() {
  const [meta, setMeta] = useState({ codigo: 'IT-2026-001', fecha: '', cliente: '', tecnico: '', proyecto: '' })
  const [objeto, setObjeto] = useState('Inspección y diagnóstico del sistema de climatización instalado en las dependencias del cliente, con el fin de evaluar su estado operativo y recomendar las acciones de mantención correspondientes.')
  const [rows, setRows] = useState<EquipRow[]>(defaultRows)
  const [observaciones, setObservaciones] = useState('')
  const [conclusiones, setConclusiones] = useState('')
  const [nota, setNota] = useState('Este informe es de carácter técnico y confidencial. Su uso está restringido al cliente y personal autorizado de D&Z Building.')

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

  function addRow() { setRows(r => [...r, { id: nextId++, equipo: '', marca: '', modelo: '', status: 'optimo' }]) }
  function removeRow(id: number) { setRows(r => r.filter(x => x.id !== id)) }
  function updateRow(id: number, field: keyof EquipRow, value: string) {
    setRows(r => r.map(x => x.id === id ? { ...x, [field]: value } : x))
  }

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
        {/* LEFT — editor */}
        <div className="it-form">
          <div>
            <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Documentos</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 20, fontWeight: 200, letterSpacing: '0.06em' }}>Informe Técnico</h1>
              <button onClick={() => window.print()} style={{
                fontFamily: 'Josefin Sans, sans-serif', fontSize: 8.5, letterSpacing: '0.22em', textTransform: 'uppercase',
                background: 'var(--accent)', color: '#0c0c0c', border: 'none', padding: '9px 18px', cursor: 'pointer',
              }}>Imprimir</button>
            </div>
          </div>

          {/* Meta */}
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Datos del informe</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {(['codigo', 'fecha', 'cliente', 'tecnico'] as const).map(k => (
              <div key={k} className="it-field">
                <label>{k === 'codigo' ? 'Código' : k === 'fecha' ? 'Fecha' : k === 'cliente' ? 'Cliente' : 'Técnico'}</label>
                <input value={meta[k]} onChange={e => setMeta(m => ({ ...m, [k]: e.target.value }))} />
              </div>
            ))}
          </div>
          <div className="it-field">
            <label>Proyecto</label>
            <input value={meta.proyecto} onChange={e => setMeta(m => ({ ...m, proyecto: e.target.value }))} />
          </div>

          <div className="it-field">
            <label>01 · Objeto del informe</label>
            <textarea style={{ minHeight: 88, resize: 'vertical' }} value={objeto} onChange={e => setObjeto(e.target.value)} />
          </div>

          {/* Equipment table */}
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
                  {rows.map(r => (
                    <tr key={r.id}>
                      <td><input value={r.equipo} onChange={e => updateRow(r.id, 'equipo', e.target.value)} placeholder="Nombre" /></td>
                      <td><input value={r.marca} onChange={e => updateRow(r.id, 'marca', e.target.value)} style={{ width: 68 }} /></td>
                      <td><input value={r.modelo} onChange={e => updateRow(r.id, 'modelo', e.target.value)} /></td>
                      <td>
                        <select value={r.status} onChange={e => updateRow(r.id, 'status', e.target.value as StatusKey)}>
                          {(Object.keys(STATUS_LABELS) as StatusKey[]).map(k => <option key={k} value={k}>{STATUS_LABELS[k]}</option>)}
                        </select>
                      </td>
                      <td><button onClick={() => removeRow(r.id)} style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 16, lineHeight: 1, padding: '0 4px' }}>×</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="it-field">
            <label>04 · Observaciones</label>
            <textarea style={{ minHeight: 72, resize: 'vertical' }} value={observaciones} onChange={e => setObservaciones(e.target.value)} />
          </div>

          <div className="it-field">
            <label>05 · Conclusiones</label>
            <textarea style={{ minHeight: 72, resize: 'vertical' }} value={conclusiones} onChange={e => setConclusiones(e.target.value)} />
          </div>

          <div className="it-field">
            <label>Nota legal</label>
            <textarea style={{ minHeight: 56, resize: 'vertical' }} value={nota} onChange={e => setNota(e.target.value)} />
          </div>
        </div>

        {/* RIGHT — A4 preview */}
        <div ref={previewRef} id="it-print" className="it-preview">
          <div className="it-page" style={{
            width: 794, minHeight: 1123, background: '#fff',
            fontFamily: 'Arial, Helvetica, sans-serif', color: '#1a1a1a',
            position: 'relative', boxShadow: '0 4px 28px rgba(0,0,0,0.35)',
            zoom: scale, margin: '0 auto',
            WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact',
          } as React.CSSProperties}>
            {/* Header */}
            <div style={{ background: '#0c0c0c', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#C8A84B', fontSize: 7, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Informe Técnico</div>
                <div style={{ color: '#555', fontSize: 9, marginTop: 3, fontFamily: 'Courier New, monospace' }}>{meta.codigo}</div>
              </div>
            </div>
            <div style={{ background: '#C8A84B', height: 3 }} />

            {/* Meta bar */}
            <div style={{ background: '#f9f9f9', borderBottom: '1px solid #e8e8e8', padding: '12px 40px', display: 'flex', gap: 36, flexWrap: 'wrap' }}>
              {[['Cliente', meta.cliente], ['Técnico', meta.tecnico], ['Fecha', meta.fecha], ['Proyecto', meta.proyecto]].map(([lbl, val]) => (
                <div key={lbl}>
                  <div style={{ fontSize: 7, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: 2 }}>{lbl}</div>
                  <div style={{ fontSize: 11, color: '#333', fontWeight: 600 }}>{val || '—'}</div>
                </div>
              ))}
            </div>

            <div style={{ padding: '28px 40px', paddingBottom: 80 }}>
              {/* 01 */}
              <Section num="01" title="Objeto del informe">
                <p style={{ fontSize: 11, lineHeight: 1.7, color: '#444', margin: 0 }}>{objeto}</p>
              </Section>

              {/* 02 */}
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
                    {rows.map((r, i) => (
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

              {/* 03 */}
              <Section num="03" title="Recomendaciones">
                {rows.filter(r => r.status !== 'optimo').length === 0 ? (
                  <p style={{ fontSize: 11, color: '#155724', background: '#d4edda', padding: '10px 14px', margin: 0 }}>Todos los equipos se encuentran en estado óptimo.</p>
                ) : (
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {rows.filter(r => r.status !== 'optimo').map(r => (
                      <li key={r.id} style={{ fontSize: 11, color: '#444', marginBottom: 4, lineHeight: 1.5 }}>
                        <strong>{r.equipo}</strong> ({r.marca} {r.modelo}): {r.status === 'regular' ? 'Programar mantención preventiva.' : 'Requiere intervención inmediata.'}
                      </li>
                    ))}
                  </ul>
                )}
              </Section>

              {observaciones && (
                <Section num="04" title="Observaciones">
                  <p style={{ fontSize: 11, lineHeight: 1.7, color: '#444', margin: 0, whiteSpace: 'pre-wrap' }}>{observaciones}</p>
                </Section>
              )}

              {conclusiones && (
                <Section num="05" title="Conclusiones">
                  <p style={{ fontSize: 11, lineHeight: 1.7, color: '#444', margin: 0, whiteSpace: 'pre-wrap' }}>{conclusiones}</p>
                </Section>
              )}

              <div style={{ background: '#fffbf0', border: '1px solid #C8A84B', padding: '12px 16px' }}>
                <p style={{ fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9B6920', marginBottom: 4, fontWeight: 700 }}>Nota</p>
                <p style={{ fontSize: 10, color: '#666', margin: 0, lineHeight: 1.5 }}>{nota}</p>
              </div>
            </div>

            {/* Footer */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
              <div style={{ background: '#C8A84B', height: 2 }} />
              <div style={{ background: '#0c0c0c', padding: '10px 40px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#888', fontSize: 8 }}>D&Z Building SpA</span>
                <span style={{ color: '#888', fontSize: 8 }}>www.dyzbuilding.cl</span>
                <span style={{ color: '#888', fontSize: 8, fontFamily: 'Courier New, monospace' }}>{meta.codigo}</span>
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
