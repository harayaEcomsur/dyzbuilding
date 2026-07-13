'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ContratoData, Clausula, Parte, Firmante,
  makeId, TIPOS_CONTRATO, ContratoTipo, getDefaultClausulas,
} from '@/lib/contratos-store'
import { apiFetchRecord, apiCreateRecord, apiUpdateRecord } from '@/lib/contratos-api'

function getTodayStr() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function fmtDateLong(iso: string) {
  try {
    return new Date(iso + 'T12:00:00').toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return iso }
}

const defaultMandante: Parte = {
  nombre: 'D&Z Building SpA',
  rut: '76.XXX.XXX-X',
  tipo: 'empresa',
  representante: '',
  cargoRep: 'Gerente General',
  direccion: 'Santiago, Chile',
  ciudad: 'Santiago',
  email: 'contacto@dyzbuilding.cl',
}

function makeDefaultData(): ContratoData {
  return {
    meta: {
      numero: `CTR-${new Date().getFullYear()}-000`,
      fecha: getTodayStr(),
      ciudad: 'Santiago',
      tipo: 'prestacion_servicios',
    },
    partes: {
      mandante: { ...defaultMandante },
      contratista: {
        nombre: '', rut: '', tipo: 'empresa',
        representante: '', cargoRep: '', direccion: '', ciudad: 'Santiago', email: '',
      },
    },
    clausulas: getDefaultClausulas('prestacion_servicios'),
    firmantes: [
      { id: 1, nombre: '', rut: '', cargo: 'Gerente General', parteLabel: 'EL MANDANTE' },
      { id: 2, nombre: '', rut: '', cargo: '', parteLabel: 'EL CONTRATISTA' },
    ],
  }
}

let clausulaCounter = 100
let firmanteCounter = 10

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

export default function NuevoContrato() {
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form')
  const [data, setData] = useState<ContratoData>(makeDefaultData)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [initialized, setInitialized] = useState(false)

  const editingIdRef = useRef<string | null>(null)
  const estadoRef = useRef<'borrador' | 'emitido'>('borrador')
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const previewRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  const set = useCallback((patch: Partial<ContratoData>) => setData(d => ({ ...d, ...patch })), [])

  useEffect(() => {
    const num = String(Math.floor(Math.random() * 900) + 100)
    setData(d => d.meta.numero.endsWith('-000')
      ? { ...d, meta: { ...d.meta, numero: `CTR-${new Date().getFullYear()}-${num}` } }
      : d
    )
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    const shouldPrint = params.get('print') === '1'
    if (id) {
      apiFetchRecord(id).then(record => {
        if (record) {
          setData(record.data)
          editingIdRef.current = id
          estadoRef.current = record.estado
        }
        setInitialized(true)
        if (shouldPrint) {
          window.history.replaceState({}, '', `/admin/contratos/nuevo?id=${id}`)
          setTimeout(() => window.print(), 600)
        }
      }).catch(() => setInitialized(true))
    } else {
      setInitialized(true)
    }
  }, [])

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

  const doAutoSave = useCallback(async (d: ContratoData) => {
    if (!initialized) return
    try {
      setSaveStatus('saving')
      if (!editingIdRef.current) {
        const newId = makeId()
        await apiCreateRecord(newId, d, 'borrador')
        editingIdRef.current = newId
        window.history.replaceState({}, '', `/admin/contratos/nuevo?id=${newId}`)
      } else {
        await apiUpdateRecord(editingIdRef.current, d, estadoRef.current)
      }
      setSaveStatus('saved')
    } catch {
      setSaveStatus('error')
    }
  }, [initialized])

  useEffect(() => {
    if (!initialized) return
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => void doAutoSave(data), 800)
    return () => clearTimeout(saveTimer.current)
  }, [data, initialized, doAutoSave])

  async function commitToServer(estado: 'borrador' | 'emitido') {
    clearTimeout(saveTimer.current)
    estadoRef.current = estado
    await doAutoSave(data)
  }

  function setMeta(patch: Partial<ContratoData['meta']>) {
    set({ meta: { ...data.meta, ...patch } })
  }

  function setMandante(patch: Partial<Parte>) {
    set({ partes: { ...data.partes, mandante: { ...data.partes.mandante, ...patch } } })
  }

  function setContratista(patch: Partial<Parte>) {
    set({ partes: { ...data.partes, contratista: { ...data.partes.contratista, ...patch } } })
  }

  function handleTipoChange(tipo: ContratoTipo) {
    if (!confirm(`¿Cambiar tipo de contrato a "${TIPOS_CONTRATO[tipo]}"?\n\nEsto reemplazará las cláusulas actuales con la plantilla correspondiente.`)) return
    set({ meta: { ...data.meta, tipo }, clausulas: getDefaultClausulas(tipo) })
  }

  function restoreTemplate() {
    if (!confirm('¿Restaurar cláusulas a la plantilla original? Se perderán todos los cambios en las cláusulas.')) return
    set({ clausulas: getDefaultClausulas(data.meta.tipo) })
  }

  function updateClausula(id: number, patch: Partial<Clausula>) {
    set({ clausulas: data.clausulas.map(c => c.id === id ? { ...c, ...patch } : c) })
  }

  function addClausula() {
    const newId = clausulaCounter++
    set({ clausulas: [...data.clausulas, { id: newId, titulo: 'NUEVA CLÁUSULA', contenido: '' }] })
  }

  function removeClausula(id: number) {
    if (data.clausulas.length <= 1) return
    set({ clausulas: data.clausulas.filter(c => c.id !== id) })
  }

  function moveClausula(id: number, dir: -1 | 1) {
    const idx = data.clausulas.findIndex(c => c.id === id)
    if (idx < 0) return
    const next = idx + dir
    if (next < 0 || next >= data.clausulas.length) return
    const arr = [...data.clausulas]
    ;[arr[idx], arr[next]] = [arr[next], arr[idx]]
    set({ clausulas: arr })
  }

  function updateFirmante(id: number, patch: Partial<Firmante>) {
    set({ firmantes: data.firmantes.map(f => f.id === id ? { ...f, ...patch } : f) })
  }

  function addFirmante() {
    const newId = firmanteCounter++
    set({ firmantes: [...data.firmantes, { id: newId, nombre: '', rut: '', cargo: '', parteLabel: 'TESTIGO' }] })
  }

  function removeFirmante(id: number) {
    if (data.firmantes.length <= 1) return
    set({ firmantes: data.firmantes.filter(f => f.id !== id) })
  }

  // ── Helpers para partes en texto ──
  function parteEnTexto(label: string, p: Parte): string {
    if (p.tipo === 'empresa') {
      let txt = `${label}: ${p.nombre || '[Nombre empresa]'}, RUT ${p.rut || '[RUT]'}`
      if (p.representante) txt += `, representada por ${p.representante}${p.cargoRep ? ', en calidad de ' + p.cargoRep : ''}`
      if (p.direccion) txt += `, con domicilio en ${p.direccion}`
      return txt
    }
    return `${label}: ${p.nombre || '[Nombre]'}, RUT ${p.rut || '[RUT]'}${p.direccion ? ', domiciliado en ' + p.direccion : ''}`
  }

  const docTextStyle: React.CSSProperties = {
    fontFamily: 'Times New Roman, Times, serif',
    fontSize: 10.5,
    lineHeight: 1.6,
    color: '#1a1a1a',
    textAlign: 'justify' as const,
  }

  return (
    <>
      <div className="admin-editor-tabs">
        <button type="button" className={`admin-editor-tab${mobileTab === 'form' ? ' active' : ''}`} onClick={() => setMobileTab('form')}>Formulario</button>
        <button type="button" className={`admin-editor-tab${mobileTab === 'preview' ? ' active' : ''}`} onClick={() => setMobileTab('preview')}>Vista previa</button>
      </div>

      <div className="ctr-layout">
        {/* ── FORM PANEL ── */}
        <div className={`ctr-form${mobileTab === 'preview' ? ' admin-mobile-hidden' : ''}`}>

          <div className="editor-topbar">
            <Link href="/admin/contratos" className="back-link">← Contratos</Link>
            <div className="editor-status">
              {saveStatus === 'saving' && <span className="status-saving">Guardando…</span>}
              {saveStatus === 'saved' && <span className="status-saved">Guardado</span>}
              {saveStatus === 'error' && <span className="status-error">Error al guardar</span>}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn-secondary" onClick={() => void commitToServer('borrador')}>
                Guardar borrador
              </button>
              <button className="btn-primary" onClick={async () => {
                await commitToServer('emitido')
                window.print()
              }}>
                Descargar PDF
              </button>
            </div>
          </div>

          {/* Meta */}
          <div className="editor-section">
            <div className="editor-section-title">Datos del contrato</div>
            <div className="editor-row">
              <label>Número<input value={data.meta.numero} onChange={e => setMeta({ numero: e.target.value })} /></label>
              <label>Fecha<input type="date" value={data.meta.fecha} onChange={e => setMeta({ fecha: e.target.value })} /></label>
              <label>Ciudad<input value={data.meta.ciudad} onChange={e => setMeta({ ciudad: e.target.value })} /></label>
            </div>
            <div className="editor-row">
              <label>Tipo de contrato
                <select value={data.meta.tipo} onChange={e => handleTipoChange(e.target.value as ContratoTipo)}>
                  {Object.entries(TIPOS_CONTRATO).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </label>
            </div>
          </div>

          {/* Mandante */}
          <div className="editor-section">
            <div className="editor-section-title">EL MANDANTE (quién encarga)</div>
            <div className="editor-row">
              <label>Nombre / Razón social<input value={data.partes.mandante.nombre} onChange={e => setMandante({ nombre: e.target.value })} /></label>
              <label>RUT<input value={data.partes.mandante.rut} onChange={e => setMandante({ rut: e.target.value })} /></label>
            </div>
            <div className="editor-row">
              <label>Tipo
                <select value={data.partes.mandante.tipo} onChange={e => setMandante({ tipo: e.target.value as 'empresa' | 'persona' })}>
                  <option value="empresa">Empresa / Persona jurídica</option>
                  <option value="persona">Persona natural</option>
                </select>
              </label>
              {data.partes.mandante.tipo === 'empresa' && (
                <>
                  <label>Representante legal<input value={data.partes.mandante.representante} onChange={e => setMandante({ representante: e.target.value })} /></label>
                  <label>Cargo<input value={data.partes.mandante.cargoRep} onChange={e => setMandante({ cargoRep: e.target.value })} /></label>
                </>
              )}
            </div>
            <div className="editor-row">
              <label>Domicilio<input value={data.partes.mandante.direccion} onChange={e => setMandante({ direccion: e.target.value })} /></label>
              <label>Ciudad<input value={data.partes.mandante.ciudad} onChange={e => setMandante({ ciudad: e.target.value })} /></label>
            </div>
            <label>Email<input type="email" value={data.partes.mandante.email} onChange={e => setMandante({ email: e.target.value })} /></label>
          </div>

          {/* Contratista */}
          <div className="editor-section">
            <div className="editor-section-title">EL CONTRATISTA (quién presta)</div>
            <div className="editor-row">
              <label>Nombre / Razón social<input value={data.partes.contratista.nombre} onChange={e => setContratista({ nombre: e.target.value })} /></label>
              <label>RUT<input value={data.partes.contratista.rut} onChange={e => setContratista({ rut: e.target.value })} /></label>
            </div>
            <div className="editor-row">
              <label>Tipo
                <select value={data.partes.contratista.tipo} onChange={e => setContratista({ tipo: e.target.value as 'empresa' | 'persona' })}>
                  <option value="empresa">Empresa / Persona jurídica</option>
                  <option value="persona">Persona natural</option>
                </select>
              </label>
              {data.partes.contratista.tipo === 'empresa' && (
                <>
                  <label>Representante legal<input value={data.partes.contratista.representante} onChange={e => setContratista({ representante: e.target.value })} /></label>
                  <label>Cargo<input value={data.partes.contratista.cargoRep} onChange={e => setContratista({ cargoRep: e.target.value })} /></label>
                </>
              )}
            </div>
            <div className="editor-row">
              <label>Domicilio<input value={data.partes.contratista.direccion} onChange={e => setContratista({ direccion: e.target.value })} /></label>
              <label>Ciudad<input value={data.partes.contratista.ciudad} onChange={e => setContratista({ ciudad: e.target.value })} /></label>
            </div>
            <label>Email<input type="email" value={data.partes.contratista.email} onChange={e => setContratista({ email: e.target.value })} /></label>
          </div>

          {/* Cláusulas */}
          <div className="editor-section">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div className="editor-section-title" style={{ margin: 0 }}>Cláusulas del contrato</div>
              <button className="btn-secondary" style={{ fontSize: 11, padding: '4px 10px' }} onClick={restoreTemplate} title="Restaurar cláusulas a la plantilla original del tipo seleccionado">
                ↺ Restaurar plantilla
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {data.clausulas.map((cl, idx) => (
                <div key={cl.id} style={{ border: '1px solid var(--border)', padding: '14px 16px', background: 'rgba(255,255,255,.02)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <input
                      value={cl.titulo}
                      onChange={e => updateClausula(cl.id, { titulo: e.target.value })}
                      style={{ flex: 1, fontFamily: 'Josefin Sans, sans-serif', fontSize: 11, letterSpacing: '0.04em', fontWeight: 600 }}
                    />
                    <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                      <button title="Subir" onClick={() => moveClausula(cl.id, -1)} disabled={idx === 0} style={{ background: 'none', border: '1px solid var(--border)', color: idx === 0 ? 'var(--dim)' : 'var(--text)', cursor: idx === 0 ? 'default' : 'pointer', padding: '2px 7px', fontSize: 11 }}>↑</button>
                      <button title="Bajar" onClick={() => moveClausula(cl.id, 1)} disabled={idx === data.clausulas.length - 1} style={{ background: 'none', border: '1px solid var(--border)', color: idx === data.clausulas.length - 1 ? 'var(--dim)' : 'var(--text)', cursor: idx === data.clausulas.length - 1 ? 'default' : 'pointer', padding: '2px 7px', fontSize: 11 }}>↓</button>
                      <button title="Eliminar cláusula" onClick={() => removeClausula(cl.id)} style={{ background: 'none', border: '1px solid rgba(180,60,60,.3)', color: '#c05050', cursor: 'pointer', padding: '2px 8px', fontSize: 11 }}>×</button>
                    </div>
                  </div>
                  <textarea
                    value={cl.contenido}
                    onChange={e => updateClausula(cl.id, { contenido: e.target.value })}
                    rows={5}
                    style={{ width: '100%', resize: 'vertical', fontSize: 13 }}
                  />
                </div>
              ))}
            </div>
            <button className="btn-secondary" style={{ marginTop: 12, fontSize: 12, padding: '6px 14px' }} onClick={addClausula}>
              + Agregar cláusula
            </button>
          </div>

          {/* Firmantes */}
          <div className="editor-section">
            <div className="editor-section-title">Firmantes</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {data.firmantes.map(f => (
                <div key={f.id} style={{ border: '1px solid var(--border)', padding: '14px 16px', background: 'rgba(255,255,255,.02)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <label style={{ margin: 0 }}>
                      Parte
                      <input value={f.parteLabel} onChange={e => updateFirmante(f.id, { parteLabel: e.target.value })} style={{ width: 180 }} placeholder="EL MANDANTE, EL CONTRATISTA, TESTIGO…" />
                    </label>
                    <button onClick={() => removeFirmante(f.id)} disabled={data.firmantes.length <= 1} style={{ background: 'none', border: '1px solid rgba(180,60,60,.3)', color: '#c05050', cursor: data.firmantes.length <= 1 ? 'default' : 'pointer', padding: '2px 8px', fontSize: 11 }}>× Eliminar</button>
                  </div>
                  <div className="editor-row">
                    <label>Nombre<input value={f.nombre} onChange={e => updateFirmante(f.id, { nombre: e.target.value })} /></label>
                    <label>RUT<input value={f.rut} onChange={e => updateFirmante(f.id, { rut: e.target.value })} /></label>
                    <label>Cargo<input value={f.cargo} onChange={e => updateFirmante(f.id, { cargo: e.target.value })} /></label>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-secondary" style={{ marginTop: 12, fontSize: 12, padding: '6px 14px' }} onClick={addFirmante}>
              + Agregar firmante
            </button>
          </div>
        </div>

        {/* ── PREVIEW PANEL ── */}
        <div ref={previewRef} id="ctr-print" className={`ctr-preview${mobileTab === 'form' ? ' admin-mobile-hidden' : ''}`}>
          <div className="ctr-page" style={{
            width: 794,
            background: '#fff',
            fontFamily: 'Times New Roman, Times, serif',
            color: '#1a1a1a',
            boxShadow: '0 4px 28px rgba(0,0,0,0.35)',
            zoom: scale,
            margin: '0 auto',
            WebkitPrintColorAdjust: 'exact',
            printColorAdjust: 'exact',
          } as React.CSSProperties}>

            {/* Header */}
            <div style={{ padding: '32px 50px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ background: '#0c0c0c', padding: '14px 18px', display: 'inline-block' }}>
                <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#1a1a1a' }}>
                  Contrato de {TIPOS_CONTRATO[data.meta.tipo]}
                </div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: '#C8A84B', fontWeight: 600, marginTop: 4, letterSpacing: '0.04em' }}>
                  {data.meta.numero || 'CTR-YYYY-NNN'}
                </div>
              </div>
            </div>

            {/* Gold accent bar */}
            <div style={{ height: 3, background: 'linear-gradient(90deg, #C8A84B, #e8c86a, #C8A84B)', margin: '16px 50px 0' }} />

            {/* Intro */}
            <div style={{ padding: '20px 50px 0', ...docTextStyle }}>
              <p style={{ marginBottom: 16 }}>
                En <strong>{data.meta.ciudad || '[ciudad]'}</strong>, a {data.meta.fecha ? fmtDateLong(data.meta.fecha) : '[fecha]'},
                entre:
              </p>

              <p style={{ marginBottom: 10 }}>
                <strong>EL MANDANTE:</strong>{' '}
                {data.partes.mandante.nombre || '[Nombre mandante]'}, RUT {data.partes.mandante.rut || '[RUT]'}
                {data.partes.mandante.tipo === 'empresa' && data.partes.mandante.representante && (
                  <>, representada por {data.partes.mandante.representante}{data.partes.mandante.cargoRep && `, en calidad de ${data.partes.mandante.cargoRep}`}</>
                )}
                {data.partes.mandante.direccion && <>, con domicilio en {data.partes.mandante.direccion}</>}
                {'; y'}
              </p>

              <p style={{ marginBottom: 16 }}>
                <strong>EL CONTRATISTA:</strong>{' '}
                {data.partes.contratista.nombre || '[Nombre contratista]'}, RUT {data.partes.contratista.rut || '[RUT]'}
                {data.partes.contratista.tipo === 'empresa' && data.partes.contratista.representante && (
                  <>, representada por {data.partes.contratista.representante}{data.partes.contratista.cargoRep && `, en calidad de ${data.partes.contratista.cargoRep}`}</>
                )}
                {data.partes.contratista.direccion && <>, con domicilio en {data.partes.contratista.direccion}</>}
                {'.'}
              </p>

              <p style={{ marginBottom: 20 }}>
                <strong>SE HA CONVENIDO</strong> el siguiente contrato:
              </p>
            </div>

            {/* Separator */}
            <div style={{ margin: '0 50px', borderTop: '1px solid #ddd' }} />

            {/* Clauses */}
            <div style={{ padding: '16px 50px 0', ...docTextStyle }}>
              {data.clausulas.map((cl, idx) => (
                <div key={cl.id} style={{ marginBottom: 16 }}>
                  <p style={{ fontWeight: 700, marginBottom: 4, fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {cl.titulo}
                  </p>
                  <p style={{ whiteSpace: 'pre-line', textIndent: '1.2em' }}>
                    {cl.contenido || <span style={{ color: '#bbb', fontStyle: 'italic' }}>[Sin contenido]</span>}
                  </p>
                </div>
              ))}
              {data.clausulas.length === 0 && (
                <p style={{ color: '#bbb', fontStyle: 'italic' }}>Sin cláusulas.</p>
              )}
            </div>

            {/* Separador antes de firmas */}
            <div style={{ margin: '20px 50px 0', borderTop: '1px solid #ddd' }} />

            {/* Signature block */}
            <div style={{ padding: '20px 50px 40px' }}>
              <p style={{ ...docTextStyle, marginBottom: 24 }}>
                En conformidad con todo lo expuesto, las partes suscriben el presente instrumento en {Math.max(data.firmantes.length, 1)} ejemplar{data.firmantes.length > 1 ? 'es' : ''} del mismo tenor y fecha, en la ciudad indicada.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
                {data.firmantes.map(f => (
                  <div key={f.id} style={{ minWidth: 200, flex: 1 }}>
                    <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 8, marginTop: 48, fontFamily: 'Arial, sans-serif' }}>
                      <div style={{ fontSize: 10, fontWeight: 700 }}>{f.nombre || '[Nombre]'}</div>
                      {f.rut && <div style={{ fontSize: 8.5, color: '#555' }}>RUT {f.rut}</div>}
                      {f.cargo && <div style={{ fontSize: 8.5, color: '#555' }}>{f.cargo}</div>}
                      <div style={{ fontSize: 8, color: '#888', marginTop: 2, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{f.parteLabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div style={{ borderTop: '1px solid #eee', padding: '10px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 7.5, color: '#bbb' }}>D&Z Building SpA · contacto@dyzbuilding.cl · www.dyzbuilding.cl</div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 7.5, color: '#bbb' }}>{data.meta.numero}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
