'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { MembreteData, makeId } from '@/lib/membretes-store'
import { apiFetchRecord, apiCreateRecord, apiUpdateRecord } from '@/lib/membretes-api'

const today = () => new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })

function makeDefaultData(): MembreteData {
  return {
    remitente: 'D&Z Building SpA',
    destinatario: '',
    ciudadFecha: `Santiago, ${today()}`,
    asunto: '',
    cuerpo: 'Estimados señores,\n\nPor medio de la presente, nos comunicamos con ustedes para...\n\n\n\nSin otro particular, saluda atentamente,',
    firmante: 'Nombre Apellido\nCargo · D&Z Building',
  }
}

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

export default function NuevoMembrete() {
  const [data, setData] = useState<MembreteData>(makeDefaultData)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [initialized, setInitialized] = useState(false)

  const editingIdRef = useRef<string | null>(null)
  const estadoRef = useRef<'borrador' | 'emitido'>('borrador')
  const saveTimer = useRef<ReturnType<typeof setTimeout>>()

  const set = useCallback((patch: Partial<MembreteData>) => setData(d => ({ ...d, ...patch })), [])

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
          window.history.replaceState({}, '', `/admin/membrete/nuevo?id=${id}`)
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

  async function doAutoSave(snapshot: MembreteData) {
    const id = editingIdRef.current
    try {
      if (id) {
        await apiUpdateRecord(id, snapshot, estadoRef.current)
      } else {
        const newId = makeId()
        await apiCreateRecord(newId, snapshot, 'borrador')
        setEditingId(newId)
        editingIdRef.current = newId
        window.history.replaceState({}, '', `/admin/membrete/nuevo?id=${newId}`)
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
        window.history.replaceState({}, '', `/admin/membrete/nuevo?id=${newId}`)
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
          #mb-print, #mb-print * { visibility: visible !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          #mb-print { position: fixed !important; inset: 0 !important; background: #fff !important; }
          #mb-print .mb-page { box-shadow: none !important; zoom: 1 !important; margin: 0 !important; }
          @page { size: A4; margin: 0; }
        }
        .mb-layout { display: flex; height: 100%; overflow: hidden; }
        .mb-form {
          width: 850px; flex-shrink: 0; overflow-y: auto;
          border-right: 1px solid var(--border);
          padding: 28px 36px;
          display: flex; flex-direction: column; gap: 18px;
        }
        .mb-preview {
          flex: 1; min-width: 0;
          overflow-y: auto; overflow-x: hidden;
          background: #888; padding: 24px;
        }
        .mb-field label {
          display: block;
          font-family: Josefin Sans, sans-serif; font-size: 9.5px;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--dim); margin-bottom: 6px;
        }
        .mb-field input, .mb-field textarea {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          color: var(--text); padding: 9px 12px;
          font-family: Outfit, sans-serif; font-size: 14px; font-weight: 300;
          outline: none; width: 100%; box-sizing: border-box; transition: border-color 0.2s;
          resize: vertical;
        }
        .mb-field input:focus, .mb-field textarea:focus { border-color: rgba(200,168,75,0.45); }
        @media (max-width: 1280px) { .mb-form { width: 520px; padding: 24px 28px; } }
        @media (max-width: 900px) {
          .mb-layout { flex-direction: column; }
          .mb-form { width: 100%; max-height: 56vh; border-right: none; border-bottom: 1px solid var(--border); }
        }
      `}</style>

      <div className="mb-layout">
        <div className="mb-form">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
              <Link href="/admin/membrete" style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}>
                ← Historial
              </Link>
              {saveLabel && (
                <span style={{ marginLeft: 'auto', fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: saveColor }}>
                  {saveLabel}
                </span>
              )}
            </div>
            <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 22, fontWeight: 200, letterSpacing: '0.06em' }}>
              {editingId ? `Editando membrete` : 'Nuevo Membrete'}
            </h1>
          </div>

          {([
            ['Remitente', 'remitente', false],
            ['Destinatario', 'destinatario', false],
            ['Ciudad y fecha', 'ciudadFecha', false],
            ['Asunto', 'asunto', false],
            ['Cuerpo', 'cuerpo', true],
            ['Firmante (nombre y cargo)', 'firmante', true],
          ] as [string, keyof MembreteData, boolean][]).map(([label, key, multi]) => (
            <div key={key} className="mb-field">
              <label>{label}</label>
              {multi ? (
                <textarea
                  style={{ minHeight: key === 'cuerpo' ? 160 : 68 }}
                  value={data[key] as string}
                  onChange={e => set({ [key]: e.target.value })}
                />
              ) : (
                <input value={data[key] as string} onChange={e => set({ [key]: e.target.value })} />
              )}
            </div>
          ))}

          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => void commitToServer('borrador')} className="btn-outline" style={{ flex: 1, textAlign: 'center', padding: '13px' }}>
              Guardar borrador
            </button>
            <button onClick={() => void handlePrint()} className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '13px' }}>
              Descargar PDF
            </button>
          </div>
        </div>

        <div ref={previewRef} id="mb-print" className="mb-preview">
          <div className="mb-page" style={{
            width: 794, minHeight: 1123, background: '#fff',
            fontFamily: 'Arial, Helvetica, sans-serif', color: '#1a1a1a',
            position: 'relative', boxShadow: '0 4px 28px rgba(0,0,0,0.35)',
            zoom: scale, margin: '0 auto',
            WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact',
          } as React.CSSProperties}>
            <div style={{ background: '#0c0c0c', padding: '22px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 44, width: 'auto', objectFit: 'contain', display: 'block' }} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#C8A84B', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Climatización · Refrigeración</div>
                <div style={{ color: '#888', fontSize: 10, marginTop: 3 }}>www.dyzbuilding.cl</div>
              </div>
            </div>
            <div style={{ background: '#0BBDD4', height: 3 }} />

            <div style={{ padding: '36px 48px', minHeight: 960 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: 4 }}>De</div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{data.remitente || '—'}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: 4 }}>Fecha</div>
                  <div style={{ fontSize: 13, color: '#555' }}>{data.ciudadFecha || '—'}</div>
                </div>
              </div>

              <div style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: 4 }}>Para</div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{data.destinatario || '—'}</div>
              </div>

              {data.asunto && (
                <div style={{ background: '#f7f4ec', borderLeft: '3px solid #C8A84B', padding: '10px 16px', marginBottom: 24 }}>
                  <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginRight: 8 }}>RE:</span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{data.asunto}</span>
                </div>
              )}

              <div style={{ background: '#0BBDD4', height: 1, marginBottom: 28, opacity: 0.35 }} />

              <div style={{ fontSize: 13, lineHeight: 1.75, color: '#333', whiteSpace: 'pre-wrap', marginBottom: 56 }}>{data.cuerpo}</div>

              <div>
                {data.firmante.split('\n').map((line, i) => (
                  <div key={i} style={{ fontSize: i === 0 ? 12 : 10, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? '#1a1a1a' : '#C8A84B', letterSpacing: i === 1 ? '0.15em' : 0 }}>{line}</div>
                ))}
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
              <div style={{ background: '#0BBDD4', height: 2 }} />
              <div style={{ background: '#0c0c0c', padding: '10px 48px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#888', fontSize: 10 }}>contacto@dyzbuilding.cl</span>
                <span style={{ color: '#888', fontSize: 10 }}>www.dyzbuilding.cl</span>
                <span style={{ color: '#888', fontSize: 10 }}>Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
