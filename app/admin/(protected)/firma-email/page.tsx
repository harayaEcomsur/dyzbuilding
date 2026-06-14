'use client'

import Image from 'next/image'
import { useState } from 'react'

const SIG_FIELDS = {
  nombre: '[Nombre Apellido]',
  cargo: '[Cargo · D&Z Building]',
  telefono: '[+56 X XXXX XXXX]',
  email: '[nombre@dyzbuilding.cl]',
  web: 'www.dyzbuilding.cl',
}

function buildSigHtml(f: typeof SIG_FIELDS, logoUrl: string) {
  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;width:580px;max-width:100%;">
  <tr>
    <td style="background:#0c0c0c;padding:16px 20px;vertical-align:middle;width:160px;">
      <img src="${logoUrl}" alt="D&amp;Z Building" width="110" style="display:block;width:110px;height:auto;">
    </td>
    <td style="background:#C8A84B;width:3px;"></td>
    <td style="padding:12px 18px;vertical-align:middle;border-top:1px solid #e8e8e8;border-bottom:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
      <p style="margin:0 0 2px 0;font-family:Arial,sans-serif;font-size:14px;font-weight:700;color:#1a1a1a;letter-spacing:0.03em;">${f.nombre}</p>
      <p style="margin:0 0 10px 0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#C8A84B;">${f.cargo}</p>
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding:2px 0;font-family:Arial,sans-serif;font-size:11px;color:#888;padding-right:6px;">📞</td>
          <td style="padding:2px 0;font-family:Arial,sans-serif;font-size:11px;color:#555;">${f.telefono}</td>
        </tr>
        <tr>
          <td style="padding:2px 0;font-family:Arial,sans-serif;font-size:11px;color:#888;padding-right:6px;">✉</td>
          <td style="padding:2px 0;font-family:Arial,sans-serif;font-size:11px;color:#555;"><a href="mailto:${f.email.replace(/[\[\]]/g,'')}" style="color:#9B6920;text-decoration:none;">${f.email}</a></td>
        </tr>
        <tr>
          <td style="padding:2px 0;font-family:Arial,sans-serif;font-size:11px;color:#888;padding-right:6px;">🌐</td>
          <td style="padding:2px 0;font-family:Arial,sans-serif;font-size:11px;"><a href="https://${f.web}" style="color:#9B6920;text-decoration:none;">${f.web}</a></td>
        </tr>
      </table>
      <p style="margin:10px 0 0 0;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:#bbb;">Climatización · Refrigeración · Todo Chile</p>
    </td>
  </tr>
</table>`
}

const LOGO_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`
  : 'https://dyzbuilding.cl/logo.png'

export default function FirmaEmailPage() {
  const [fields, setFields] = useState(SIG_FIELDS)
  const [copied, setCopied] = useState(false)

  const sigHtml = buildSigHtml(fields, LOGO_URL)

  async function copySig() {
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        const blob = new Blob([sigHtml], { type: 'text/html' })
        await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })])
      } else {
        await navigator.clipboard.writeText(sigHtml)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      await navigator.clipboard.writeText(sigHtml)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  const lbl: React.CSSProperties = {
    fontFamily: 'var(--font-josefin), sans-serif',
    fontSize: 7.5, letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'var(--dim)', display: 'block', marginBottom: 6,
  }
  const inp: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
    color: 'var(--text)', padding: '9px 12px',
    fontFamily: 'var(--font-outfit), sans-serif', fontSize: 12, fontWeight: 300,
    outline: 'none', width: '100%', transition: 'border-color 0.2s',
  }

  return (
    <div className="fe-root">
      <style>{`
        .fe-root { padding: 40px 48px; max-width: 960px; box-sizing: border-box; }
        .fe-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 36px; flex-wrap: wrap; gap: 16px; }
        .fe-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .fe-preview-box { overflow-x: auto; }
        @media (max-width: 900px) {
          .fe-header { flex-direction: column; align-items: flex-start; }
          .fe-fields { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .fe-root { padding: 24px 18px; }
        }
      `}</style>
      {/* Header */}
      <div className="fe-header">
        <div>
          <p style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 7.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 }}>
            Identidad Corporativa
          </p>
          <h1 style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 22, fontWeight: 300, letterSpacing: '-0.01em' }}>
            Firma de Email
          </h1>
        </div>
        <button
          onClick={copySig}
          style={{
            fontFamily: 'var(--font-josefin), sans-serif',
            fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase',
            background: copied ? '#2e7d32' : 'var(--accent)',
            color: copied ? '#fff' : '#0c0c0c',
            border: 'none', padding: '11px 24px', cursor: 'pointer', transition: 'background 0.3s, color 0.3s',
          }}
        >
          {copied ? '¡Copiado!' : 'Copiar firma HTML'}
        </button>
      </div>

      {/* Fields editor */}
      <div style={{ border: '1px solid var(--border)', padding: 20, marginBottom: 28 }}>
        <p style={{ ...lbl, marginBottom: 16 }}>Personalizar datos</p>
        <div className="fe-fields">
          {([
            ['nombre', 'Nombre completo'],
            ['cargo', 'Cargo'],
            ['telefono', 'Teléfono'],
            ['email', 'Email corporativo'],
          ] as const).map(([key, label]) => (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <label style={lbl}>{label}</label>
              <input
                style={inp}
                value={fields[key]}
                onChange={e => setFields(p => ({ ...p, [key]: e.target.value }))}
                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(200,168,75,0.45)' }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Preview — light */}
      <div style={{ marginBottom: 6 }}>
        <p style={{ ...lbl, marginBottom: 10 }}>Vista previa — fondo claro (Gmail, Outlook)</p>
      </div>
      <div className="fe-preview-box" style={{ background: '#fff', padding: 24, marginBottom: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
        <div dangerouslySetInnerHTML={{ __html: sigHtml }} />
      </div>

      {/* Preview — dark */}
      <div style={{ marginBottom: 6 }}>
        <p style={{ ...lbl, marginBottom: 10 }}>Vista previa — fondo oscuro (Apple Mail Dark Mode)</p>
      </div>
      <div className="fe-preview-box" style={{ background: '#1a1a2e', padding: 24, marginBottom: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
        <table cellPadding="0" cellSpacing="0" style={{ fontFamily: 'Arial,Helvetica,sans-serif', width: 580, maxWidth: '100%' }}>
          <tbody>
            <tr>
              <td style={{ background: '#0c0c0c', padding: '16px 20px', verticalAlign: 'middle', width: 160 }}>
                <Image src="/logo.png" alt="D&Z Building" width={650} height={300} style={{ display: 'block', width: 110, height: 'auto' }} />
              </td>
              <td style={{ background: '#C8A84B', width: 3 }} />
              <td style={{ padding: '12px 18px', verticalAlign: 'middle', border: '1px solid rgba(255,255,255,.08)', borderLeft: 'none', background: '#151515' }}>
                <p style={{ margin: '0 0 2px', fontFamily: 'Arial,sans-serif', fontSize: 14, fontWeight: 700, color: '#f0eeeb', letterSpacing: '0.03em' }}>{fields.nombre}</p>
                <p style={{ margin: '0 0 10px', fontFamily: 'Arial,sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A84B' }}>{fields.cargo}</p>
                <table cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr><td style={{ padding: '2px 6px 2px 0', fontFamily: 'Arial,sans-serif', fontSize: 11, color: '#666' }}>📞</td><td style={{ padding: '2px 0', fontFamily: 'Arial,sans-serif', fontSize: 11, color: '#999' }}>{fields.telefono}</td></tr>
                    <tr><td style={{ padding: '2px 6px 2px 0', fontFamily: 'Arial,sans-serif', fontSize: 11, color: '#666' }}>✉</td><td style={{ padding: '2px 0' }}><a href={`mailto:${fields.email}`} style={{ color: '#C8A84B', textDecoration: 'none', fontFamily: 'Arial,sans-serif', fontSize: 11 }}>{fields.email}</a></td></tr>
                    <tr><td style={{ padding: '2px 6px 2px 0', fontFamily: 'Arial,sans-serif', fontSize: 11, color: '#666' }}>🌐</td><td style={{ padding: '2px 0' }}><a href={`https://${fields.web}`} style={{ color: '#C8A84B', textDecoration: 'none', fontFamily: 'Arial,sans-serif', fontSize: 11 }}>{fields.web}</a></td></tr>
                  </tbody>
                </table>
                <p style={{ margin: '10px 0 0', fontFamily: 'Arial,sans-serif', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#444' }}>Climatización · Refrigeración · Todo Chile</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Code box */}
      <div style={{ border: '1px solid var(--border)', marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px', borderBottom: '1px solid var(--border)' }}>
          <span style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 8.5, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--dim)' }}>
            Código HTML — pegar en cliente de correo
          </span>
          <button
            onClick={copySig}
            style={{
              fontFamily: 'var(--font-josefin), sans-serif',
              fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase',
              background: copied ? '#2e7d32' : 'var(--accent)',
              color: copied ? '#fff' : '#0c0c0c',
              border: 'none', padding: '6px 14px', cursor: 'pointer', transition: 'background 0.3s',
            }}
          >
            {copied ? '¡Copiado!' : 'Copiar'}
          </button>
        </div>
        <div style={{ padding: 18, overflowX: 'auto' }}>
          <pre style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)', whiteSpace: 'pre-wrap', wordBreak: 'break-all', lineHeight: 1.6 }}>
            {sigHtml}
          </pre>
        </div>
      </div>

      {/* Instructions */}
      <div style={{ background: 'rgba(200,168,75,.06)', border: '1px solid rgba(200,168,75,.15)', padding: '16px 20px', marginBottom: 40 }}>
        <p style={{ fontFamily: 'var(--font-josefin), sans-serif', fontSize: 8.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
          Cómo instalar la firma
        </p>
        <ol style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            ['Gmail', 'Configuración → Ver toda la configuración → General → Firma → "Crear nueva" → pegar el HTML (modo fuente)'],
            ['Outlook', 'Archivo → Opciones → Correo → Firmas → pegar en el editor de firma'],
            ['Apple Mail', 'Preferencias → Firmas → arrastrar el HTML al campo de firma'],
            ['Personalizar', 'Edita los campos arriba para cada persona. Haz clic en "Copiar firma HTML" y pégala en tu cliente de correo.'],
          ].map(([title, desc]) => (
            <li key={title} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              <strong style={{ color: 'rgba(255,255,255,0.8)' }}>{title}:</strong> {desc}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
