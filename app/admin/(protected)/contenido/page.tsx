'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { SiteContent, defaultContent, normalizeSiteContent } from '@/lib/site-content-types'

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

export default function ContenidoPage() {
  const [cfg, setCfg] = useState<SiteContent>(defaultContent)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    fetch('/api/site-content')
      .then(r => r.json())
      .then((data: Partial<SiteContent>) => {
        if (data && typeof data === 'object' && Object.keys(data).length > 0) {
          setCfg(normalizeSiteContent(data))
        }
      })
      .catch(() => {/* use defaults */})
      .finally(() => setReady(true))
  }, [])

  if (!ready) {
    return (
      <div style={{ height: '100%', overflowY: 'auto', padding: '28px 36px' }}>
        <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 22, fontWeight: 200, color: 'var(--text)' }}>
          Cargando…
        </div>
      </div>
    )
  }

  function set(path: string, value: string) {
    setCfg(prev => {
      const next = JSON.parse(JSON.stringify(prev)) as SiteContent
      const keys = path.split('.')
      let cur: Record<string, unknown> = next as unknown as Record<string, unknown>
      for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]] as Record<string, unknown>
      cur[keys[keys.length - 1]] = value
      return next
    })
    if (saveStatus === 'saved') setSaveStatus('idle')
  }

  async function handleSave() {
    setSaveStatus('saving')
    try {
      const res = await fetch('/api/site-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cfg),
      })
      if (!res.ok) throw new Error()
      setSaveStatus('saved')
    } catch {
      setSaveStatus('error')
    }
  }

  const saveLabel =
    saveStatus === 'saving' ? 'Guardando…'
    : saveStatus === 'saved' ? '✓ Guardado — sitio actualizado'
    : saveStatus === 'error' ? 'Error al guardar'
    : 'Guardar cambios'

  const saveBg =
    saveStatus === 'saving' ? 'rgba(200,168,75,0.5)'
    : saveStatus === 'saved' ? '#2e7d32'
    : saveStatus === 'error' ? '#b71c1c'
    : 'var(--accent)'

  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <style>{`
        .cn-page { padding: 28px 36px; max-width: 900px; display: flex; flex-direction: column; gap: 32px; }
        .cn-section-title { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .cn-section-title span { font-family: Josefin Sans, sans-serif; font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--accent); white-space: nowrap; }
        .cn-section-title hr { flex: 1; border: none; border-top: 1px solid var(--border); margin: 0; }
        .cn-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .cn-fields { display: flex; flex-direction: column; gap: 12px; }
        .cn-field label { display: block; font-family: Josefin Sans, sans-serif; font-size: 9.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--dim); margin-bottom: 6px; }
        .cn-field input, .cn-field textarea {
          background: rgba(255,255,255,0.04); border: 1px solid var(--border);
          color: var(--text); padding: 9px 12px;
          font-family: Outfit, sans-serif; font-size: 14px; font-weight: 300;
          outline: none; width: 100%; box-sizing: border-box; transition: border-color 0.2s; resize: vertical;
        }
        .cn-field input:focus, .cn-field textarea:focus { border-color: rgba(200,168,75,0.45); }
        .cn-info { background: rgba(200,168,75,0.04); border: 1px solid rgba(200,168,75,0.15); padding: 12px 16px; font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.6; }
        @media (max-width: 640px) { .cn-grid-2 { grid-template-columns: 1fr; } .cn-page { padding: 20px 18px; } }
      `}</style>

      <div className="cn-page">
        <div>
          <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.36em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>Sitio Web</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
            <h1 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 22, fontWeight: 200, letterSpacing: '0.06em', color: 'var(--text)' }}>
              Contenido del Sitio
            </h1>
            <button
              onClick={() => void handleSave()}
              disabled={saveStatus === 'saving'}
              style={{
                fontFamily: 'Josefin Sans, sans-serif', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
                background: saveBg, color: saveStatus === 'saving' ? '#0c0c0c' : saveStatus === 'saved' ? '#fff' : saveStatus === 'error' ? '#fff' : '#0c0c0c',
                border: 'none', padding: '11px 24px', cursor: saveStatus === 'saving' ? 'not-allowed' : 'pointer',
                transition: 'background 0.3s',
              }}
            >
              {saveLabel}
            </button>
          </div>
          <div className="cn-info" style={{ marginTop: 12 }}>
            Los cambios se publican en el sitio web de forma inmediata al guardar — no es necesario hacer deploy.
          </div>
        </div>

        {/* SEO */}
        <div>
          <SectionTitle>SEO y metadatos</SectionTitle>
          <div className="cn-info" style={{ marginBottom: 16 }}>
            Estos campos controlan cómo aparece el sitio en Google. El <strong style={{ color: 'var(--text)' }}>título</strong> es lo primero que ven los usuarios en los resultados de búsqueda. La <strong style={{ color: 'var(--text)' }}>descripción</strong> es el texto que aparece debajo — debe incluir palabras clave y terminar con una llamada a la acción.
          </div>
          <div className="cn-fields">
            <CharField cfg={cfg} path="seo.titulo" label="Título (meta title)" set={set} optimal={[50, 60]} hint="Óptimo 50–60 caracteres. Incluye la keyword principal al inicio." />
            <CharField cfg={cfg} path="seo.descripcion" label="Descripción (meta description)" set={set} optimal={[140, 160]} multiline hint="Óptimo 140–160 caracteres. Incluye keywords + llamada a acción (ej: 'Cotización gratuita')." />
            <Field cfg={cfg} path="seo.keywords" label="Keywords secundarias (separadas por coma)" set={set} />
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

        {/* Especialidades */}
        <div>
          <SectionTitle>Especialidades</SectionTitle>
          <div className="cn-fields" style={{ marginBottom: 16 }}>
            <Field cfg={cfg} path="servicios.eyebrow" label="Texto pequeño (eyebrow)" set={set} />
            <Field cfg={cfg} path="servicios.titulo" label="Título de sección" set={set} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {cfg.servicios.items.map((item, i) => (
              <div key={i} style={{ border: '1px solid var(--border)', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 8, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 2 }}>
                  Especialidad {i + 1}
                </div>
                <div className="cn-field">
                  <label>Nombre</label>
                  <input value={item.titulo} onChange={e => set(`servicios.items.${i}.titulo`, e.target.value)} />
                </div>
                <div className="cn-field">
                  <label>Descripción</label>
                  <textarea style={{ minHeight: 52 }} value={item.descripcion} onChange={e => set(`servicios.items.${i}.descripcion`, e.target.value)} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nosotros */}
        <div>
          <SectionTitle>Sobre Nosotros</SectionTitle>
          <div className="cn-info" style={{ marginBottom: 16 }}>
            El título admite saltos de línea — presiona Enter para dividirlo en dos líneas en el sitio.
          </div>
          <div className="cn-fields">
            <Field cfg={cfg} path="nosotros.titulo" label="Título de sección" set={set} multiline />
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
              {['Renombra tu nuevo logo como logo.png', 'Reemplázalo en /public/logo.png en el repositorio', 'Haz push — Vercel redesployará en ~30 segundos'].map((s, i) => (
                <li key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
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
  cfg: SiteContent; path: string; label: string
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

function CharField({ cfg, path, label, set, optimal, multiline, hint }: {
  cfg: SiteContent; path: string; label: string
  set: (p: string, v: string) => void
  optimal: [number, number]; multiline?: boolean; hint?: string
}) {
  const keys = path.split('.')
  let val: unknown = cfg
  for (const k of keys) val = (val as Record<string, unknown>)[k]
  const str = (val as string) ?? ''
  const len = str.length
  const [min, max] = optimal
  const color = len === 0 ? 'var(--dim)' : len < min ? '#f59e0b' : len <= max ? '#22c55e' : '#ef4444'
  const status = len === 0 ? '' : len < min ? 'muy corto' : len <= max ? 'óptimo' : 'muy largo'

  return (
    <div className="cn-field">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <label style={{ margin: 0 }}>{label}</label>
        <span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase', color }}>
          {len} chars{status ? ` · ${status}` : ''}
        </span>
      </div>
      {multiline ? (
        <textarea style={{ minHeight: 72 }} value={str} onChange={e => set(path, e.target.value)} />
      ) : (
        <input value={str} onChange={e => set(path, e.target.value)} />
      )}
      {hint && <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.3)', marginTop: 5, lineHeight: 1.5 }}>{hint}</div>}
    </div>
  )
}
