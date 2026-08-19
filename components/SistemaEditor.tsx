'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import FileUploadButton from '@/components/FileUploadButton'
import {
  SistemaData, SistemaTipo, SistemaRecord, CircuitoMedicion,
  SISTEMA_LABELS, makeId, makeCircuito, makeDefaultSistemaData, migrateSistemaData,
} from '@/lib/sistemas-store'
import {
  apiFetchSistemaRecord, apiCreateSistemaRecord, apiUpdateSistemaRecord,
  apiFetchSistemaHistory, apiUploadFoto,
} from '@/lib/sistemas-api'
import {
  REFRIGERANTES, RefrigeranteKey, computeSuperheat, computeSubcool,
  rangeStatus, RangeStatus, SUPERHEAT_RANGE, SUBCOOL_RANGE,
} from '@/lib/refrigerant-pt'

const RANGE_COLORS: Record<RangeStatus, { bg: string; text: string; label: string }> = {
  ok: { bg: '#d4edda', text: '#155724', label: 'Normal' },
  bajo: { bg: '#fff3cd', text: '#856404', label: 'Bajo' },
  alto: { bg: '#f8d7da', text: '#721c24', label: 'Alto' },
  na: { bg: '#eee', text: '#888', label: '—' },
}

let nextCircuitoId = 2

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'
type NumField = 'tempAmbiente' | 'presionAlta' | 'presionBaja' | 'tempSatEvap' | 'tempSatCond' | 'tempLiquido' | 'tempSuccion' | 'tempDescarga' | 'frecuencia' | 'corriente'

function fmtDate(iso: string) {
  try {
    return new Date(iso.length === 10 ? iso + 'T12:00:00' : iso)
      .toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch { return iso }
}

export default function SistemaEditor({ tipo }: { tipo: SistemaTipo }) {
  const label = SISTEMA_LABELS[tipo]
  const basePath = `/admin/informe-${tipo}`

  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form')
  const [data, setData] = useState<SistemaData>(makeDefaultSistemaData)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [initialized, setInitialized] = useState(false)
  const [uploadingDiagrama, setUploadingDiagrama] = useState(false)
  const [uploadingFotoOf, setUploadingFotoOf] = useState<string | null>(null)
  const [prevRecord, setPrevRecord] = useState<SistemaRecord | null>(null)
  const [loadingPrev, setLoadingPrev] = useState(false)

  const editingIdRef = useRef<string | null>(null)
  const estadoRef = useRef<'borrador' | 'emitido'>('borrador')
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const printingRef = useRef(false)

  const set = useCallback((patch: Partial<SistemaData>) => setData(d => ({ ...d, ...patch })), [])
  const setMeta = useCallback((patch: Partial<SistemaData['meta']>) =>
    setData(d => ({ ...d, meta: { ...d.meta, ...patch } })), [])

  useEffect(() => {
    const num = String(Math.floor(Math.random() * 900) + 100)
    setData(d => d.meta.codigo === ''
      ? { ...d, meta: { ...d.meta, codigo: `${label.prefix}-${new Date().getFullYear()}-${num}` } }
      : d
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    const shouldPrint = params.get('print') === '1'
    let printTimer: ReturnType<typeof setTimeout> | undefined
    if (id) {
      apiFetchSistemaRecord(id).then(record => {
        if (record) {
          setData(migrateSistemaData(record.data))
          setEditingId(id)
          editingIdRef.current = id
          estadoRef.current = record.estado
        }
        setInitialized(true)
        if (shouldPrint) {
          window.history.replaceState({}, '', `${basePath}/nuevo?id=${id}`)
          printTimer = setTimeout(() => window.print(), 600)
        }
      }).catch(() => setInitialized(true))
    } else {
      setInitialized(true)
    }
    return () => clearTimeout(printTimer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!initialized) return
    clearTimeout(saveTimer.current)
    setSaveStatus('saving')
    saveTimer.current = setTimeout(() => { void doAutoSave(data) }, 800)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, initialized])

  async function doAutoSave(snapshot: SistemaData) {
    const id = editingIdRef.current
    try {
      if (id) {
        await apiUpdateSistemaRecord(id, snapshot, estadoRef.current)
      } else {
        const newId = makeId()
        await apiCreateSistemaRecord(newId, tipo, snapshot, 'borrador')
        setEditingId(newId)
        editingIdRef.current = newId
        window.history.replaceState({}, '', `${basePath}/nuevo?id=${newId}`)
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
        await apiUpdateSistemaRecord(id, data, estado)
      } else {
        const newId = makeId()
        await apiCreateSistemaRecord(newId, tipo, data, estado)
        setEditingId(newId)
        editingIdRef.current = newId
        window.history.replaceState({}, '', `${basePath}/nuevo?id=${newId}`)
      }
      estadoRef.current = estado
      setSaveStatus('saved')
    } catch {
      setSaveStatus('error')
    }
  }

  async function handlePrint() {
    if (printingRef.current) return
    printingRef.current = true
    await commitToServer('emitido')
    window.print()
    printingRef.current = false
  }

  async function handleCargarReferencia() {
    if (!data.meta.cliente.trim()) return
    setLoadingPrev(true)
    try {
      const history = await apiFetchSistemaHistory(tipo)
      const match = history
        .filter(r => r.id !== editingId)
        .filter(r => r.cliente.trim().toLowerCase() === data.meta.cliente.trim().toLowerCase())
        .filter(r => !data.meta.proyecto.trim() || r.data.meta.proyecto.trim().toLowerCase() === data.meta.proyecto.trim().toLowerCase())
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0]
      setPrevRecord(match ?? null)
    } finally {
      setLoadingPrev(false)
    }
  }

  function addCircuito() {
    set({ circuitos: [...data.circuitos, makeCircuito(String(nextCircuitoId++))] })
  }
  function removeCircuito(id: string) {
    set({ circuitos: data.circuitos.filter(c => c.id !== id) })
  }
  function updateCircuito(id: string, patch: Partial<CircuitoMedicion>) {
    set({ circuitos: data.circuitos.map(c => c.id === id ? { ...c, ...patch } : c) })
  }
  function updateNum(id: string, field: NumField, raw: string) {
    const value = raw === '' ? null : Number(raw)
    updateCircuito(id, { [field]: Number.isFinite(value) ? value : null } as Partial<CircuitoMedicion>)
  }

  async function handleDiagramasUpload(files: FileList) {
    setUploadingDiagrama(true)
    try {
      const urls: string[] = []
      for (const file of Array.from(files)) {
        urls.push(await apiUploadFoto(file, `informes-sistemas/${tipo}/diagramas`))
      }
      set({ diagramas: [...data.diagramas, ...urls] })
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al subir el diagrama')
    } finally {
      setUploadingDiagrama(false)
    }
  }
  function removeDiagrama(url: string) {
    set({ diagramas: data.diagramas.filter(d => d !== url) })
  }

  async function handleFotosUpload(circuitoId: string, files: FileList) {
    setUploadingFotoOf(circuitoId)
    try {
      const urls: string[] = []
      for (const file of Array.from(files)) {
        urls.push(await apiUploadFoto(file, `informes-sistemas/${tipo}/fotos`))
      }
      const circuito = data.circuitos.find(c => c.id === circuitoId)
      if (circuito) updateCircuito(circuitoId, { fotos: [...circuito.fotos, ...urls] })
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al subir fotos')
    } finally {
      setUploadingFotoOf(null)
    }
  }
  function removeFoto(circuitoId: string, url: string) {
    const circuito = data.circuitos.find(c => c.id === circuitoId)
    if (circuito) updateCircuito(circuitoId, { fotos: circuito.fotos.filter(f => f !== url) })
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

  const isEN = data.lang === 'en'

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
        #sy-print .sy-page { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .sy-layout { display: flex; height: 100%; overflow: hidden; }
        .sy-form {
          width: 850px; flex-shrink: 0; overflow-y: auto;
          border-right: 1px solid var(--border);
          padding: 28px 36px;
          display: flex; flex-direction: column; gap: 18px;
        }
        .sy-preview {
          flex: 1; min-width: 0;
          overflow-y: auto; overflow-x: hidden;
          background: #888; padding: 24px;
        }
        .sy-field label {
          display: block;
          font-family: Josefin Sans, sans-serif; font-size: 7.5px;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--dim); margin-bottom: 6px;
        }
        .sy-field input, .sy-field textarea, .sy-field select {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          color: var(--text); padding: 9px 12px;
          font-family: Outfit, sans-serif; font-size: 12px; font-weight: 300;
          outline: none; width: 100%; box-sizing: border-box; transition: border-color 0.2s;
        }
        .sy-field input:focus, .sy-field textarea:focus, .sy-field select:focus { border-color: rgba(200,168,75,0.45); }
        .sy-field select option { background: #1a1a1a; }
        .sy-circuito {
          border: 1px solid var(--border); padding: 16px; display: flex; flex-direction: column; gap: 12px;
          background: rgba(255,255,255,0.015);
        }
        .sy-grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .sy-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .sy-badge { display: inline-block; padding: 2px 8px; border-radius: 2px; font-size: 10px; font-weight: 700; }
        .sy-fotos { display: flex; flex-wrap: wrap; gap: 8px; }
        .sy-foto-thumb { position: relative; width: 56px; height: 56px; border: 1px solid var(--border); overflow: hidden; }
        .sy-foto-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .sy-foto-remove {
          position: absolute; top: 0; right: 0; background: rgba(0,0,0,.7); color: #fff;
          border: none; width: 16px; height: 16px; font-size: 11px; line-height: 1; cursor: pointer;
        }
        @media (max-width: 1280px) { .sy-form { width: 520px; padding: 24px 28px; } .sy-grid4 { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 900px) {
          .admin-editor-tabs { display: flex; }
          .sy-layout { flex-direction: column; }
          .sy-form { width: 100%; max-height: none; border-right: none; border-bottom: none; }
          .sy-preview { flex: 1; min-height: 50vh; }
          .sy-meta-grid { grid-template-columns: 1fr !important; }
          .admin-mobile-hidden { display: none !important; }
        }
      `}</style>

      <div className="admin-editor-tabs">
        {(['form', 'preview'] as const).map(tab => (
          <button
            key={tab}
            type="button"
            className={`admin-editor-tab${mobileTab === tab ? ' active' : ''}`}
            onClick={() => setMobileTab(tab)}
          >
            {tab === 'form' ? 'Formulario' : 'Vista previa'}
          </button>
        ))}
      </div>

      <div className="sy-layout">
        <div className={`sy-form${mobileTab === 'preview' ? ' admin-mobile-hidden' : ''}`}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
              <Link href={basePath} style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}>
                ← Historial
              </Link>
              {saveLabel && (
                <span style={{ marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif', fontSize: 7, letterSpacing: '0.22em', textTransform: 'uppercase', color: saveColor }}>
                  {saveLabel}
                </span>
              )}
            </div>
            <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 20, fontWeight: 200, letterSpacing: '0.06em' }}>
              {editingId ? `Editando ${data.meta.codigo}` : `Nuevo ${label.es}`}
            </h1>
          </div>

          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>Datos del informe</div>
          <div className="sy-meta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {(['codigo', 'fecha', 'cliente', 'tecnico'] as const).map(k => (
              <div key={k} className="sy-field">
                <label>{k === 'codigo' ? 'Código' : k === 'fecha' ? 'Fecha' : k === 'cliente' ? 'Cliente' : 'Técnico'}</label>
                <input type={k === 'fecha' ? 'date' : 'text'} value={data.meta[k]} onChange={e => setMeta({ [k]: e.target.value })} />
              </div>
            ))}
          </div>
          <div className="sy-grid2">
            <div className="sy-field">
              <label>Proyecto</label>
              <input value={data.meta.proyecto} onChange={e => setMeta({ proyecto: e.target.value })} />
            </div>
            <div className="sy-field">
              <label>Mediciones anteriores</label>
              <button
                type="button"
                onClick={() => void handleCargarReferencia()}
                disabled={!data.meta.cliente.trim() || loadingPrev}
                className="btn-outline"
                style={{ width: '100%', padding: '9px 12px', fontSize: 10.5, opacity: data.meta.cliente.trim() ? 1 : 0.4 }}
              >
                {loadingPrev ? 'Buscando…' : prevRecord ? `Cargado: ${prevRecord.codigo}` : 'Cargar referencia'}
              </button>
            </div>
          </div>
          {prevRecord && (
            <div style={{ fontSize: 10.5, color: 'var(--dim)', marginTop: -6 }}>
              Comparando contra informe <strong style={{ color: 'var(--text)' }}>{prevRecord.codigo}</strong> del {fmtDate(prevRecord.fecha || prevRecord.updatedAt)}.
            </div>
          )}

          <div className="sy-field">
            <label>01 · Objeto del informe</label>
            <textarea style={{ minHeight: 72, resize: 'vertical' }} value={data.objeto} onChange={e => set({ objeto: e.target.value })} />
          </div>

          <div className="sy-field">
            <label>02 · Diagramas de flujo del ciclo de refrigeración</label>
            {data.diagramas.length > 0 && (
              <div className="sy-fotos" style={{ marginBottom: 8 }}>
                {data.diagramas.map(url => (
                  <div key={url} className="sy-foto-thumb" style={{ width: 72, height: 72 }}>
                    <img src={url} alt="Diagrama" />
                    <button className="sy-foto-remove" onClick={() => removeDiagrama(url)}>×</button>
                  </div>
                ))}
              </div>
            )}
            <FileUploadButton
              label={data.diagramas.length ? 'Agregar otro diagrama' : 'Subir diagrama'}
              busyLabel="Subiendo diagrama…"
              busy={uploadingDiagrama}
              accept="image/*"
              multiple
              onFiles={files => void handleDiagramasUpload(files)}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)' }}>03 · Circuitos / Unidades</span>
              <button onClick={addCircuito} style={{
                fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.18em', textTransform: 'uppercase',
                background: 'rgba(200,168,75,0.1)', color: 'var(--accent)', border: '1px solid rgba(200,168,75,0.2)',
                padding: '5px 10px', cursor: 'pointer',
              }}>+ Agregar circuito</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {data.circuitos.map((c, idx) => {
                const sh = computeSuperheat(c.tempSuccion, c.tempSatEvap)
                const sc = computeSubcool(c.tempSatCond, c.tempLiquido)
                const shStatus = rangeStatus(sh, SUPERHEAT_RANGE)
                const scStatus = rangeStatus(sc, SUBCOOL_RANGE)
                const prevCircuito = prevRecord?.data.circuitos.find(
                  pc => pc.nombre.trim().toLowerCase() === c.nombre.trim().toLowerCase() && c.nombre.trim() !== ''
                )
                const prevSh = prevCircuito ? computeSuperheat(prevCircuito.tempSuccion, prevCircuito.tempSatEvap) : null
                const prevSc = prevCircuito ? computeSubcool(prevCircuito.tempSatCond, prevCircuito.tempLiquido) : null

                return (
                  <div key={c.id} className="sy-circuito">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 10, letterSpacing: '0.1em', color: 'var(--dim)' }}>
                        Circuito {idx + 1}
                      </span>
                      {data.circuitos.length > 1 && (
                        <button onClick={() => removeCircuito(c.id)} style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 15 }}>× Quitar</button>
                      )}
                    </div>

                    <div className="sy-grid4">
                      <div className="sy-field">
                        <label>Nombre unidad</label>
                        <input value={c.nombre} onChange={e => updateCircuito(c.id, { nombre: e.target.value })} placeholder={tipo === 'vrv' ? 'UE-1' : 'Rooftop 1'} />
                      </div>
                      <div className="sy-field">
                        <label>Marca</label>
                        <input value={c.marca} onChange={e => updateCircuito(c.id, { marca: e.target.value })} />
                      </div>
                      <div className="sy-field">
                        <label>Modelo</label>
                        <input value={c.modelo} onChange={e => updateCircuito(c.id, { modelo: e.target.value })} />
                      </div>
                      <div className="sy-field">
                        <label>Refrigerante</label>
                        <select value={c.refrigerante} onChange={e => updateCircuito(c.id, { refrigerante: e.target.value as RefrigeranteKey })}>
                          {REFRIGERANTES.map(r => <option key={r.key} value={r.key}>{r.label}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="sy-grid4">
                      <div className="sy-field">
                        <label>Presión alta (psig)</label>
                        <input type="number" value={c.presionAlta ?? ''} onChange={e => updateNum(c.id, 'presionAlta', e.target.value)} />
                      </div>
                      <div className="sy-field">
                        <label>Presión baja (psig)</label>
                        <input type="number" value={c.presionBaja ?? ''} onChange={e => updateNum(c.id, 'presionBaja', e.target.value)} />
                      </div>
                      <div className="sy-field">
                        <label>Frecuencia (Hz)</label>
                        <input type="number" value={c.frecuencia ?? ''} onChange={e => updateNum(c.id, 'frecuencia', e.target.value)} />
                      </div>
                      <div className="sy-field">
                        <label>Corriente (A)</label>
                        <input type="number" step="0.1" value={c.corriente ?? ''} onChange={e => updateNum(c.id, 'corriente', e.target.value)} />
                      </div>
                    </div>

                    <div className="sy-grid4">
                      <div className="sy-field">
                        <label title="Leída de la escala de temperatura del manómetro o de la tabla P-T del fabricante">Temp. saturación evap. (°C)</label>
                        <input type="number" step="0.1" value={c.tempSatEvap ?? ''} onChange={e => updateNum(c.id, 'tempSatEvap', e.target.value)} />
                      </div>
                      <div className="sy-field">
                        <label>Temp. succión (°C)</label>
                        <input type="number" step="0.1" value={c.tempSuccion ?? ''} onChange={e => updateNum(c.id, 'tempSuccion', e.target.value)} />
                      </div>
                      <div className="sy-field">
                        <label title="Leída de la escala de temperatura del manómetro o de la tabla P-T del fabricante">Temp. saturación cond. (°C)</label>
                        <input type="number" step="0.1" value={c.tempSatCond ?? ''} onChange={e => updateNum(c.id, 'tempSatCond', e.target.value)} />
                      </div>
                      <div className="sy-field">
                        <label>Temp. línea líquido (°C)</label>
                        <input type="number" step="0.1" value={c.tempLiquido ?? ''} onChange={e => updateNum(c.id, 'tempLiquido', e.target.value)} />
                      </div>
                    </div>

                    <div className="sy-grid2">
                      <div className="sy-field">
                        <label>Temp. ambiente (°C)</label>
                        <input type="number" step="0.1" value={c.tempAmbiente ?? ''} onChange={e => updateNum(c.id, 'tempAmbiente', e.target.value)} />
                      </div>
                      <div className="sy-field">
                        <label>Temp. descarga (°C)</label>
                        <input type="number" step="0.1" value={c.tempDescarga ?? ''} onChange={e => updateNum(c.id, 'tempDescarga', e.target.value)} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                      <div>
                        <div style={{ fontSize: 8.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 4 }}>Superheat (calc.)</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 15, color: 'var(--text)' }}>{sh != null ? `${sh} °C` : '—'}</span>
                          <span className="sy-badge" style={{ background: RANGE_COLORS[shStatus].bg, color: RANGE_COLORS[shStatus].text }}>{RANGE_COLORS[shStatus].label}</span>
                        </div>
                        {prevSh != null && <div style={{ fontSize: 9.5, color: 'var(--dim)', marginTop: 3 }}>Anterior: {prevSh} °C</div>}
                      </div>
                      <div>
                        <div style={{ fontSize: 8.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 4 }}>Subcool (calc.)</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 15, color: 'var(--text)' }}>{sc != null ? `${sc} °C` : '—'}</span>
                          <span className="sy-badge" style={{ background: RANGE_COLORS[scStatus].bg, color: RANGE_COLORS[scStatus].text }}>{RANGE_COLORS[scStatus].label}</span>
                        </div>
                        {prevSc != null && <div style={{ fontSize: 9.5, color: 'var(--dim)', marginTop: 3 }}>Anterior: {prevSc} °C</div>}
                      </div>
                    </div>

                    <div className="sy-field">
                      <label>Fotos</label>
                      <div className="sy-fotos" style={{ marginBottom: 8 }}>
                        {c.fotos.map(url => (
                          <div key={url} className="sy-foto-thumb">
                            <img src={url} alt="" />
                            <button className="sy-foto-remove" onClick={() => removeFoto(c.id, url)}>×</button>
                          </div>
                        ))}
                      </div>
                      <FileUploadButton
                        label={c.fotos.length ? 'Agregar más fotos' : 'Subir fotos'}
                        busyLabel="Subiendo fotos…"
                        busy={uploadingFotoOf === c.id}
                        accept="image/*"
                        multiple
                        onFiles={files => void handleFotosUpload(c.id, files)}
                      />
                    </div>

                    <div className="sy-field">
                      <label>Observaciones del circuito</label>
                      <textarea style={{ minHeight: 52, resize: 'vertical' }} value={c.observaciones} onChange={e => updateCircuito(c.id, { observaciones: e.target.value })} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="sy-field">
            <label>04 · Observaciones generales</label>
            <textarea style={{ minHeight: 64, resize: 'vertical' }} value={data.observaciones} onChange={e => set({ observaciones: e.target.value })} />
          </div>

          <div className="sy-field">
            <label>05 · Conclusiones</label>
            <textarea style={{ minHeight: 64, resize: 'vertical' }} value={data.conclusiones} onChange={e => set({ conclusiones: e.target.value })} />
          </div>

          <div className="sy-field">
            <label>Nota legal</label>
            <textarea style={{ minHeight: 52, resize: 'vertical' }} value={data.nota} onChange={e => set({ nota: e.target.value })} />
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={() => set({ lang: isEN ? 'es' : 'en' })}
              className="btn-outline"
              title={isEN ? 'Cambiar a Español' : 'Switch to English'}
              style={{ padding: '13px 18px', fontFamily: 'Josefin Sans, sans-serif', fontSize: 10, letterSpacing: '0.22em' }}
            >
              {isEN ? '🇨🇱 ES' : '🇬🇧 EN'}
            </button>
            <button onClick={() => void commitToServer('borrador')} className="btn-outline" style={{ flex: 1, textAlign: 'center', padding: '13px' }}>
              Guardar borrador
            </button>
            <button onClick={() => void handlePrint()} className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '13px' }}>
              Descargar PDF
            </button>
          </div>
        </div>

        <div ref={previewRef} id="sy-print" className={`sy-preview${mobileTab === 'form' ? ' admin-mobile-hidden' : ''}`}>
          <div className="sy-page" style={{
            width: 794, background: '#fff',
            fontFamily: 'Arial, Helvetica, sans-serif', color: '#1a1a1a',
            boxShadow: '0 4px 28px rgba(0,0,0,0.35)',
            zoom: scale, margin: '0 auto',
            WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact',
          } as React.CSSProperties}>
            <div style={{ background: '#0c0c0c', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#C8A84B', fontSize: 7, letterSpacing: '0.3em', textTransform: 'uppercase' }}>{isEN ? label.en : label.es}</div>
                <div style={{ color: '#555', fontSize: 9, marginTop: 3, fontFamily: 'Courier New, monospace' }}>{data.meta.codigo}</div>
              </div>
            </div>
            <div style={{ background: '#C8A84B', height: 3 }} />

            <div style={{ background: '#f9f9f9', borderBottom: '1px solid #e8e8e8', padding: '12px 40px', display: 'flex', gap: 36, flexWrap: 'wrap' }}>
              {[[isEN ? 'Client' : 'Cliente', data.meta.cliente], [isEN ? 'Technician' : 'Técnico', data.meta.tecnico], [isEN ? 'Date' : 'Fecha', data.meta.fecha], [isEN ? 'Project' : 'Proyecto', data.meta.proyecto]].map(([lbl, val]) => (
                <div key={lbl}>
                  <div style={{ fontSize: 7, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: 2 }}>{lbl}</div>
                  <div style={{ fontSize: 11, color: '#333', fontWeight: 600 }}>{val || '—'}</div>
                </div>
              ))}
            </div>

            <div style={{ padding: '28px 40px 32px' }}>
              <Section num="01" title={isEN ? 'Report Subject' : 'Objeto del informe'}>
                <p style={{ fontSize: 11, lineHeight: 1.7, color: '#444', margin: 0 }}>{data.objeto}</p>
              </Section>

              {data.diagramas.length > 0 && (
                <Section num="02" title={isEN ? 'Refrigeration Cycle Diagrams' : 'Diagramas del ciclo de refrigeración'}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {data.diagramas.map(url => (
                      <img key={url} src={url} alt="Diagrama del ciclo de refrigeración" style={{ maxWidth: data.diagramas.length > 1 ? 'calc(50% - 5px)' : '100%', border: '1px solid #eee' }} />
                    ))}
                  </div>
                </Section>
              )}

              <Section num="03" title={isEN ? 'Circuit Measurements' : 'Mediciones por circuito'}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {data.circuitos.map((c, i) => {
                    const sh = computeSuperheat(c.tempSuccion, c.tempSatEvap)
                    const sc = computeSubcool(c.tempSatCond, c.tempLiquido)
                    const shStatus = rangeStatus(sh, SUPERHEAT_RANGE)
                    const scStatus = rangeStatus(sc, SUBCOOL_RANGE)
                    return (
                      <div key={c.id} style={{ border: '1px solid #eee' }}>
                        <div style={{ background: '#f2f2f2', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', fontSize: 10 }}>
                          <strong>{c.nombre || `Circuito ${i + 1}`}</strong>
                          <span style={{ color: '#888' }}>{c.marca} {c.modelo} · {c.refrigerante}</span>
                        </div>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 9.5 }}>
                          <tbody>
                            <tr>
                              <Td label={isEN ? 'High pressure' : 'Presión alta'} value={fmtPsig(c.presionAlta)} />
                              <Td label={isEN ? 'Low pressure' : 'Presión baja'} value={fmtPsig(c.presionBaja)} />
                              <Td label={isEN ? 'Sat. temp (evap)' : 'Temp. sat. evap.'} value={fmtC(c.tempSatEvap)} />
                              <Td label={isEN ? 'Sat. temp (cond)' : 'Temp. sat. cond.'} value={fmtC(c.tempSatCond)} />
                            </tr>
                            <tr>
                              <Td label={isEN ? 'Suction temp' : 'Temp. succión'} value={fmtC(c.tempSuccion)} />
                              <Td label={isEN ? 'Liquid temp' : 'Temp. línea líquido'} value={fmtC(c.tempLiquido)} />
                              <Td label={isEN ? 'Ambient' : 'Ambiente'} value={fmtC(c.tempAmbiente)} />
                              <Td label={isEN ? 'Discharge temp' : 'Temp. descarga'} value={fmtC(c.tempDescarga)} />
                            </tr>
                            <tr>
                              <Td label={isEN ? 'Frequency' : 'Frecuencia'} value={c.frecuencia != null ? `${c.frecuencia} Hz` : '—'} />
                              <Td label={isEN ? 'Current' : 'Corriente'} value={c.corriente != null ? `${c.corriente} A` : '—'} />
                              <td style={{ padding: '6px 10px' }} />
                              <td style={{ padding: '6px 10px' }} />
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ display: 'flex', gap: 10, padding: '8px 12px', borderTop: '1px solid #eee' }}>
                          <span style={{ fontSize: 10 }}>
                            Superheat: <strong>{sh != null ? `${sh} °C` : '—'}</strong>{' '}
                            <span style={{ background: RANGE_COLORS[shStatus].bg, color: RANGE_COLORS[shStatus].text, padding: '1px 6px', borderRadius: 2, fontSize: 8.5, fontWeight: 700 }}>{RANGE_COLORS[shStatus].label}</span>
                          </span>
                          <span style={{ fontSize: 10 }}>
                            Subcool: <strong>{sc != null ? `${sc} °C` : '—'}</strong>{' '}
                            <span style={{ background: RANGE_COLORS[scStatus].bg, color: RANGE_COLORS[scStatus].text, padding: '1px 6px', borderRadius: 2, fontSize: 8.5, fontWeight: 700 }}>{RANGE_COLORS[scStatus].label}</span>
                          </span>
                        </div>
                        {c.fotos.length > 0 && (
                          <div style={{ display: 'flex', gap: 6, padding: '8px 12px', flexWrap: 'wrap', borderTop: '1px solid #eee' }}>
                            {c.fotos.map(url => (
                              <img key={url} src={url} alt="" style={{ width: 64, height: 64, objectFit: 'cover', border: '1px solid #eee' }} />
                            ))}
                          </div>
                        )}
                        {c.observaciones && (
                          <p style={{ fontSize: 10, color: '#555', padding: '8px 12px', margin: 0, borderTop: '1px solid #eee' }}>{c.observaciones}</p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </Section>

              {data.observaciones && (
                <Section num="04" title={isEN ? 'Observations' : 'Observaciones'}>
                  <p style={{ fontSize: 11, lineHeight: 1.7, color: '#444', margin: 0, whiteSpace: 'pre-wrap' }}>{data.observaciones}</p>
                </Section>
              )}

              {data.conclusiones && (
                <Section num="05" title={isEN ? 'Conclusions' : 'Conclusiones'}>
                  <p style={{ fontSize: 11, lineHeight: 1.7, color: '#444', margin: 0, whiteSpace: 'pre-wrap' }}>{data.conclusiones}</p>
                </Section>
              )}

              <div style={{ background: '#fffbf0', border: '1px solid #C8A84B', padding: '12px 16px' }}>
                <p style={{ fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9B6920', marginBottom: 4, fontWeight: 700 }}>{isEN ? 'Note' : 'Nota'}</p>
                <p style={{ fontSize: 10, color: '#666', margin: 0, lineHeight: 1.5 }}>{data.nota}</p>
                <p style={{ fontSize: 8.5, color: '#999', margin: '8px 0 0', lineHeight: 1.5 }}>
                  {isEN
                    ? 'Superheat/subcool are calculated from the saturation temperatures entered by the technician (read from the gauge P-T scale or the refrigerant manufacturer chart), not estimated by this system.'
                    : 'Superheat y subcool se calculan a partir de las temperaturas de saturación ingresadas por el técnico (leídas de la escala del manómetro o de la tabla del fabricante del refrigerante), no son estimadas por este sistema.'}
                </p>
              </div>
            </div>

            <div>
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

function fmtC(v: number | null) { return v != null ? `${v} °C` : '—' }
function fmtPsig(v: number | null) { return v != null ? `${v} psig` : '—' }

function Td({ label, value }: { label: string; value: string }) {
  return (
    <td style={{ padding: '6px 10px', borderBottom: '1px solid #f5f5f5' }}>
      <div style={{ fontSize: 7.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999' }}>{label}</div>
      <div style={{ fontWeight: 600 }}>{value}</div>
    </td>
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
