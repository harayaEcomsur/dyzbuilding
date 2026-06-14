'use client'

import Image from 'next/image'
import { useState } from 'react'
import { siteConfig } from '@/lib/site-config'

type Config = typeof siteConfig

export default function ContenidoPage() {
  const [cfg, setCfg] = useState<Config>(JSON.parse(JSON.stringify(siteConfig)))
  const [copied, setCopied] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [code, setCode] = useState('')

  function set(path: string, value: string) {
    setCfg(prev => {
      const next = JSON.parse(JSON.stringify(prev))
      const keys = path.split('.')
      let cur: Record<string, unknown> = next
      for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]] as Record<string, unknown>
      cur[keys[keys.length - 1]] = value
      return next
    })
    setGenerated(false)
  }

  function generateCode() {
    const c = cfg
    const out = `export const siteConfig = {
  empresa: {
    nombre: ${JSON.stringify(c.empresa.nombre)},
    email: ${JSON.stringify(c.empresa.email)},
    telefono: ${JSON.stringify(c.empresa.telefono)},
    web: ${JSON.stringify(c.empresa.web)},
    direccion: ${JSON.stringify(c.empresa.direccion)},
    horario: ${JSON.stringify(c.empresa.horario)},
    rut: ${JSON.stringify(c.empresa.rut)},
  },
  hero: {
    eyebrow: ${JSON.stringify(c.hero.eyebrow)},
    titulo: ${JSON.stringify(c.hero.titulo)},
    subtitulo: ${JSON.stringify(c.hero.subtitulo)},
  },
  nosotros: {
    titulo: ${JSON.stringify(c.nosotros.titulo)},
    p1: ${JSON.stringify(c.nosotros.p1)},
    p2: ${JSON.stringify(c.nosotros.p2)},
  },
}
`
    setCode(out)
    setGenerated(true)
  }

  async function copyCode() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <style>{`
        .cn-page { padding: 28px 36px; max-width: 900px; display: flex; flex-direction: column; gap: 32px; }
        .cn-section-title { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .cn-section-title span { font-family: Josefin Sans, sans-serif; font-size: 8.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--accent); white-space: nowrap; }
        .cn-section-title hr { flex: 1; border: none; border-top: 1px solid var(--border); margin: 0; }
        .cn-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .cn-fields { display: flex; flex-direction: column; gap: 12px; }
        .cn-field label { display: block; font-family: Josefin Sans, sans-serif; font-size: 7.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--dim); margin-bottom: 6px; }
        .cn-field input, .cn-field textarea {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          color: var(--text); padding: 9px 12px;
          font-family: Outfit, sans-serif; font-size: 12px; font-weight: 300;
          outline: none; width: 100%; box-sizing: border-box; transition: border-color 0.2s; resize: vertical;
        }
        .cn-field input:focus, .cn-field textarea:focus { border-color: rgba(200,168,75,0.45); }
        @media (max-width: 640px) { .cn-grid-2 { grid-template-columns: 1fr; } .cn-page { padding: 20px 18px; } }
      `}</style>

      <div className="cn-page">
        {/* Header */}
        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Sitio Web</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
            <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 20, fontWeight: 200, letterSpacing: '0.06em', color: 'var(--text)' }}>Contenido del Sitio</h1>
            <button onClick={generateCode} style={{
              fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase',
              background: 'var(--accent)', color: '#0c0c0c', border: 'none', padding: '11px 24px', cursor: 'pointer',
            }}>Generar código</button>
          </div>
        </div>

        {/* Empresa */}
        <div>
          <SectionTitle>Empresa</SectionTitle>
          <div className="cn-grid-2">
            <Field cfg={cfg} path="empresa.nombre" label="Nombre de la empresa" set={set} />
            <Field cfg={cfg} path="empresa.email" label="Email de contacto" set={set} />
            <Field cfg={cfg} path="empresa.telefono" label="Teléfono" set={set} />
            <Field cfg={cfg} path="empresa.web" label="Sitio web" set={set} />
            <Field cfg={cfg} path="empresa.direccion" label="Dirección" set={set} />
            <Field cfg={cfg} path="empresa.horario" label="Horario de atención" set={set} />
            <Field cfg={cfg} path="empresa.rut" label="RUT" set={set} />
          </div>
        </div>

        {/* Hero */}
        <div>
          <SectionTitle>Hero (portada)</SectionTitle>
          <div className="cn-fields">
            <Field cfg={cfg} path="hero.eyebrow" label="Texto pequeño (eyebrow)" set={set} />
            <Field cfg={cfg} path="hero.titulo" label="Título principal" set={set} multiline />
            <Field cfg={cfg} path="hero.subtitulo" label="Subtítulo / bajada" set={set} multiline />
          </div>
        </div>

        {/* Nosotros */}
        <div>
          <SectionTitle>Sobre Nosotros</SectionTitle>
          <div className="cn-fields">
            <Field cfg={cfg} path="nosotros.titulo" label="Título de sección" set={set} />
            <Field cfg={cfg} path="nosotros.p1" label="Párrafo 1" set={set} multiline />
            <Field cfg={cfg} path="nosotros.p2" label="Párrafo 2" set={set} multiline />
          </div>
        </div>

        {/* Logo */}
        <div>
          <SectionTitle>Logo</SectionTitle>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ background: '#0c0c0c', padding: '14px 20px', border: '1px solid var(--border)', flexShrink: 0 }}>
              <Image src="/logo.png" alt="Logo actual" width={650} height={300} style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block' }} />
            </div>
            <ol style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 5, margin: 0 }}>
              {['Renombra tu nuevo logo como logo.png', 'Reemplázalo en /public/logo.png en el repositorio', 'Haz push — Vercel desplegará en ~30 segundos'].map((s, i) => (
                <li key={i} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{s}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Generated code */}
        {generated && (
          <div>
            <SectionTitle>Código generado</SectionTitle>
            <div style={{ border: '1px solid rgba(200,168,75,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid var(--border)', background: 'rgba(200,168,75,0.06)' }}>
                <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 7.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>lib/site-config.ts — reemplaza el archivo completo</span>
                <button onClick={copyCode} style={{
                  fontFamily: 'Josefin Sans, sans-serif', fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase',
                  background: copied ? '#2e7d32' : 'var(--accent)', color: copied ? '#fff' : '#0c0c0c',
                  border: 'none', padding: '6px 14px', cursor: 'pointer', transition: 'background 0.3s',
                }}>{copied ? '¡Copiado!' : 'Copiar'}</button>
              </div>
              <div style={{ padding: 16, overflowX: 'auto' }}>
                <pre style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: 'rgba(255,255,255,0.5)', whiteSpace: 'pre', margin: 0, lineHeight: 1.6 }}>{code}</pre>
              </div>
            </div>
            <div style={{ marginTop: 14, background: 'rgba(200,168,75,.04)', border: '1px solid rgba(200,168,75,.12)', padding: '14px 18px' }}>
              <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 8, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 10 }}>Cómo aplicar</p>
              <ol style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 5, margin: 0 }}>
                {['Copia el código de arriba', 'Abre lib/site-config.ts en el repo y reemplaza todo el contenido', 'Haz commit y push al repo de GitHub', 'Vercel detectará el cambio y redesployará en ~30 segundos'].map((s, i) => (
                  <li key={i} style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{s}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="cn-section-title">
      <span>{children}</span>
      <hr />
    </div>
  )
}

function Field({ cfg, path, label, set, multiline }: {
  cfg: Config; path: string; label: string
  set: (p: string, v: string) => void; multiline?: boolean
}) {
  const keys = path.split('.')
  let val: unknown = cfg
  for (const k of keys) val = (val as Record<string, unknown>)[k]
  return (
    <div className="cn-field">
      <label>{label}</label>
      {multiline ? (
        <textarea style={{ minHeight: 68 }} value={val as string} onChange={e => set(path, e.target.value)} />
      ) : (
        <input value={val as string} onChange={e => set(path, e.target.value)} />
      )}
    </div>
  )
}
