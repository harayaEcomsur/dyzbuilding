'use client'

import Image from 'next/image'
import { useState } from 'react'

const CARD_W = 322
const CARD_H = 208

export default function TarjetaPage() {
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form')
  const [nombre, setNombre] = useState('Nombre Apellido')
  const [cargo, setCargo] = useState('Cargo · D&Z Building')
  const [telefono, setTelefono] = useState('+56 9 1234 5678')
  const [email, setEmail] = useState('nombre@dyzbuilding.cl')

  return (
    <>
      <style>{`
        @media print {
          * { visibility: hidden !important; }
          #tc-print, #tc-print * { visibility: visible !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          #tc-print { position: fixed !important; inset: 0 !important; background: #fff !important;
            display: flex !important; flex-wrap: wrap; gap: 0; align-content: flex-start; }
          #tc-print .tc-card { box-shadow: none !important; outline: 1px dashed #ccc; }
          @page { size: 322mm 416mm; margin: 0; }
        }
        #tc-print { display: none; }
        .tc-layout { display: flex; height: 100%; overflow: hidden; }
        .tc-form {
          width: 300px; flex-shrink: 0; overflow-y: auto;
          border-right: 1px solid var(--border);
          padding: 28px 28px;
          display: flex; flex-direction: column; gap: 16px;
        }
        .tc-canvas {
          flex: 1; min-width: 0;
          overflow-y: auto; overflow-x: auto;
          background: var(--bg); padding: 32px 28px;
          display: flex; flex-direction: column; gap: 32px;
        }
        .tc-field label {
          display: block;
          font-family: Josefin Sans, sans-serif; font-size: 9.5px;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--dim); margin-bottom: 6px;
        }
        .tc-field input {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          color: var(--text); padding: 9px 12px;
          font-family: Outfit, sans-serif; font-size: 14px; font-weight: 300;
          outline: none; width: 100%; box-sizing: border-box; transition: border-color 0.2s;
        }
        .tc-field input:focus { border-color: rgba(200,168,75,0.45); }
        .tc-group-label {
          font-family: Josefin Sans, sans-serif; font-size: 9.5px;
          letter-spacing: 0.28em; text-transform: uppercase; color: rgba(255,255,255,0.35);
          margin-bottom: 10px;
        }
        .tc-row { display: flex; gap: 16px; flex-wrap: wrap; }
        @media (max-width: 900px) {
          .admin-editor-tabs { display: flex; }
          .tc-layout { flex-direction: column; }
          .tc-form { width: 100%; max-height: none; border-right: none; border-bottom: none; }
          .tc-canvas { padding: 20px 16px; min-height: 50vh; }
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

      <div className="tc-layout">
        {/* LEFT — editor */}
        <div className={`tc-form${mobileTab === 'preview' ? ' admin-mobile-hidden' : ''}`}>
          <div>
            <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Identidad</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 22, fontWeight: 200, letterSpacing: '0.06em' }}>Tarjeta</h1>
              <button onClick={() => window.print()} style={{
                fontFamily: 'Josefin Sans, sans-serif', fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase',
                background: 'var(--accent)', color: '#0c0c0c', border: 'none', padding: '9px 16px', cursor: 'pointer',
              }}>Imprimir</button>
            </div>
          </div>

          {[
            ['Nombre completo', nombre, setNombre],
            ['Cargo', cargo, setCargo],
            ['Teléfono', telefono, setTelefono],
            ['Email', email, setEmail],
          ].map(([label, val, setter]) => (
            <div key={label as string} className="tc-field">
              <label>{label as string}</label>
              <input value={val as string} onChange={e => (setter as (v: string) => void)(e.target.value)} />
            </div>
          ))}

          <div style={{ background: 'rgba(200,168,75,.06)', border: '1px solid rgba(200,168,75,.15)', padding: '12px 14px', marginTop: 4 }}>
            <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Impresión</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: 0 }}>
              Formato: 85 × 54 mm<br />
              Papel: couché 300 g/m²<br />
              Imprimir las 4 caras en una hoja
            </p>
          </div>
        </div>

        {/* RIGHT — card previews */}
        <div className={`tc-canvas${mobileTab === 'form' ? ' admin-mobile-hidden' : ''}`}>
          <div>
            <div className="tc-group-label">Variante A — Oscura</div>
            <div className="tc-row">
              <div>
                <div className="tc-group-label" style={{ marginBottom: 6 }}>Anverso</div>
                <CardFrontDark nombre={nombre} cargo={cargo} />
              </div>
              <div>
                <div className="tc-group-label" style={{ marginBottom: 6 }}>Reverso</div>
                <CardBackDark telefono={telefono} email={email} />
              </div>
            </div>
          </div>

          <div>
            <div className="tc-group-label">Variante B — Clara</div>
            <div className="tc-row">
              <div>
                <div className="tc-group-label" style={{ marginBottom: 6 }}>Anverso</div>
                <CardFrontLight nombre={nombre} cargo={cargo} />
              </div>
              <div>
                <div className="tc-group-label" style={{ marginBottom: 6 }}>Reverso</div>
                <CardBackLight telefono={telefono} email={email} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print output — 4 cards */}
      <div id="tc-print">
        <div className="tc-card"><CardFrontDark nombre={nombre} cargo={cargo} /></div>
        <div className="tc-card"><CardBackDark telefono={telefono} email={email} /></div>
        <div className="tc-card"><CardFrontLight nombre={nombre} cargo={cargo} /></div>
        <div className="tc-card"><CardBackLight telefono={telefono} email={email} /></div>
      </div>
    </>
  )
}

function CardFrontDark({ nombre, cargo }: { nombre: string; cargo: string }) {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#0c0c0c', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.6)', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#C8A84B' }} />
      <div style={{ padding: '30px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
        <div style={{ width: 100, height: 46 }}>
          <Image
            src="/logo.png"
            alt="D&Z Building"
            width={650}
            height={300}
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left center' }}
          />
        </div>
        <div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, fontWeight: 700, color: '#f0eeeb', letterSpacing: '0.02em', marginBottom: 5 }}>{nombre}</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8A84B', marginBottom: 8 }}>{cargo}</div>
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333' }}>Climatización · Refrigeración · Todo Chile</div>
        </div>
      </div>
    </div>
  )
}

function CardBackDark({ telefono, email }: { telefono: string; email: string }) {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#111', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.6)', flexShrink: 0 }}>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#C8A84B' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: '#C8A84B' }} />
      <div style={{ padding: '28px 26px 28px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', boxSizing: 'border-box', gap: 13 }}>
        {[['📞', telefono], ['✉', email], ['🌐', 'www.dyzbuilding.cl']].map(([icon, val]) => (
          <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 13, width: 18, textAlign: 'center' }}>{icon}</span>
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: '#aaa' }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CardFrontLight({ nombre, cargo }: { nombre: string; cargo: string }) {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fff', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', flexShrink: 0 }}>
      {/* Franja oscura superior con logo */}
      <div style={{ background: '#0c0c0c', padding: '18px 24px 16px', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 110, height: 48 }}>
          <Image
            src="/logo.png"
            alt="D&Z Building"
            width={650}
            height={300}
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left center' }}
          />
        </div>
      </div>
      {/* Barra dorada */}
      <div style={{ background: '#C8A84B', height: 3 }} />
      {/* Cuerpo blanco con nombre/cargo */}
      <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.02em', marginBottom: 5 }}>{nombre}</div>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8A84B', marginBottom: 10 }}>{cargo}</div>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb' }}>Climatización · Refrigeración · Todo Chile</div>
      </div>
    </div>
  )
}

function CardBackLight({ telefono, email }: { telefono: string; email: string }) {
  return (
    <div style={{ width: CARD_W, height: CARD_H, background: '#fafafa', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.25)', flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: '#C8A84B' }} />
      <div style={{ padding: '28px 26px 28px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', boxSizing: 'border-box', gap: 13 }}>
        {[['📞', telefono], ['✉', email], ['🌐', 'www.dyzbuilding.cl']].map(([icon, val]) => (
          <div key={val} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 13, width: 18, textAlign: 'center' }}>{icon}</span>
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: '#555' }}>{val}</span>
          </div>
        ))}
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#bbb', marginTop: 4 }}>D&Z Building SpA · Santiago, Chile</div>
      </div>
    </div>
  )
}
