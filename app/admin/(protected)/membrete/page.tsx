'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const today = () => new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })

export default function MembretePage() {
  const [remitente, setRemitente] = useState('D&Z Building SpA')
  const [destinatario, setDestinatario] = useState('')
  const [ciudadFecha, setCiudadFecha] = useState(`Santiago, ${today()}`)
  const [asunto, setAsunto] = useState('')
  const [cuerpo, setCuerpo] = useState(
    'Estimados señores,\n\nPor medio de la presente, nos comunicamos con ustedes para...\n\n\n\nSin otro particular, saluda atentamente,'
  )
  const [firmante, setFirmante] = useState('Nombre Apellido\nCargo · D&Z Building')

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
          font-family: Josefin Sans, sans-serif; font-size: 7.5px;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--dim); margin-bottom: 6px;
        }
        .mb-field input, .mb-field textarea {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          color: var(--text); padding: 9px 12px;
          font-family: Outfit, sans-serif; font-size: 12px; font-weight: 300;
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
        {/* LEFT — editor */}
        <div className="mb-form">
          <div>
            <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Documentos</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 20, fontWeight: 200, letterSpacing: '0.06em' }}>Membrete</h1>
              <button onClick={() => window.print()} style={{
                fontFamily: 'Josefin Sans, sans-serif', fontSize: 8.5, letterSpacing: '0.22em', textTransform: 'uppercase',
                background: 'var(--accent)', color: '#0c0c0c', border: 'none', padding: '9px 18px', cursor: 'pointer',
              }}>Imprimir</button>
            </div>
          </div>

          {[
            ['Remitente', remitente, setRemitente, false],
            ['Destinatario', destinatario, setDestinatario, false],
            ['Ciudad y fecha', ciudadFecha, setCiudadFecha, false],
            ['Asunto', asunto, setAsunto, false],
            ['Cuerpo', cuerpo, setCuerpo, true],
            ['Firmante (nombre y cargo)', firmante, setFirmante, true],
          ].map(([label, val, setter, multi]) => (
            <div key={label as string} className="mb-field">
              <label>{label as string}</label>
              {multi ? (
                <textarea
                  style={{ minHeight: label === 'Cuerpo' ? 160 : 68 }}
                  value={val as string}
                  onChange={e => (setter as (v: string) => void)(e.target.value)}
                />
              ) : (
                <input value={val as string} onChange={e => (setter as (v: string) => void)(e.target.value)} />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT — A4 preview */}
        <div ref={previewRef} id="mb-print" className="mb-preview">
          <div className="mb-page" style={{
            width: 794, minHeight: 1123, background: '#fff',
            fontFamily: 'Arial, Helvetica, sans-serif', color: '#1a1a1a',
            position: 'relative', boxShadow: '0 4px 28px rgba(0,0,0,0.35)',
            zoom: scale, margin: '0 auto',
            WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact',
          } as React.CSSProperties}>
            {/* Header */}
            <div style={{ background: '#0c0c0c', padding: '22px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ height: 44, width: 'auto', objectFit: 'contain', display: 'block' }} />
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: '#C8A84B', fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Climatización · Refrigeración</div>
                <div style={{ color: '#888', fontSize: 8, marginTop: 3 }}>www.dyzbuilding.cl</div>
              </div>
            </div>
            <div style={{ background: '#0BBDD4', height: 3 }} />

            {/* Body */}
            <div style={{ padding: '36px 48px', minHeight: 960 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: 4 }}>De</div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{remitente || '—'}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: 4 }}>Fecha</div>
                  <div style={{ fontSize: 11, color: '#555' }}>{ciudadFecha || '—'}</div>
                </div>
              </div>

              <div style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: 4 }}>Para</div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{destinatario || '—'}</div>
              </div>

              {asunto && (
                <div style={{ background: '#f7f4ec', borderLeft: '3px solid #C8A84B', padding: '10px 16px', marginBottom: 24 }}>
                  <span style={{ fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginRight: 8 }}>RE:</span>
                  <span style={{ fontSize: 12, fontWeight: 600 }}>{asunto}</span>
                </div>
              )}

              <div style={{ background: '#0BBDD4', height: 1, marginBottom: 28, opacity: 0.35 }} />

              <div style={{ fontSize: 11, lineHeight: 1.75, color: '#333', whiteSpace: 'pre-wrap', marginBottom: 56 }}>{cuerpo}</div>

              <div>
                {firmante.split('\n').map((line, i) => (
                  <div key={i} style={{ fontSize: i === 0 ? 12 : 10, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? '#1a1a1a' : '#C8A84B', letterSpacing: i === 1 ? '0.15em' : 0 }}>{line}</div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
              <div style={{ background: '#0BBDD4', height: 2 }} />
              <div style={{ background: '#0c0c0c', padding: '10px 48px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#888', fontSize: 8 }}>contacto@dyzbuilding.cl</span>
                <span style={{ color: '#888', fontSize: 8 }}>www.dyzbuilding.cl</span>
                <span style={{ color: '#888', fontSize: 8 }}>Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
