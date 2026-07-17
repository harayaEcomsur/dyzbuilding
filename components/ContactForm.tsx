'use client'

import { useState } from 'react'

const SERVICES_ES = [
  'Climatización Comercial / VRF',
  'Refrigeración Comercial',
  'Ventilación y Extracción',
  'Mantenimiento Preventivo',
  'Proyecto Llave en Mano',
  'Análisis Operacional VRV/VRF',
  'Eficiencia Energética HVAC',
  'Asesoría de Ingeniería',
]

const SERVICES_EN = [
  'Commercial HVAC / VRF',
  'Commercial Refrigeration',
  'Ventilation & Extraction',
  'Preventive Maintenance',
  'Turnkey Project',
  'VRV/VRF Operational Analysis',
  'HVAC Energy Efficiency',
  'Engineering Consultancy',
]

const CF = {
  es: {
    tabContacto: 'Contacto', tabCotizacion: 'Solicitar Cotización',
    nombre: 'Nombre y empresa', email: 'Email', telefono: 'Teléfono',
    mensaje: 'Mensaje', msgPlaceholder: '¿En qué podemos ayudarte?',
    nombrePlaceholder: 'Nombre — Empresa S.A.',
    especialidad: 'Especialidad requerida', descripcion: 'Descripción del proyecto',
    descPlaceholder: 'Describa brevemente su necesidad...',
    seleccionar: 'Seleccionar...',
    enviando: 'Enviando...', enviarMsg: 'Enviar mensaje', enviarSol: 'Enviar solicitud',
    enviado: 'MENSAJE ENVIADO', gracias: 'Gracias por contactarnos. Te responderemos a la brevedad.',
    otroMensaje: 'Enviar otro mensaje',
  },
  en: {
    tabContacto: 'Contact', tabCotizacion: 'Request a Quote',
    nombre: 'Name and company', email: 'Email', telefono: 'Phone',
    mensaje: 'Message', msgPlaceholder: 'How can we help you?',
    nombrePlaceholder: 'Name — Company Inc.',
    especialidad: 'Service required', descripcion: 'Project description',
    descPlaceholder: 'Briefly describe your needs...',
    seleccionar: 'Select...',
    enviando: 'Sending...', enviarMsg: 'Send message', enviarSol: 'Send request',
    enviado: 'MESSAGE SENT', gracias: 'Thank you for contacting us. We will get back to you shortly.',
    otroMensaje: 'Send another message',
  },
}

export default function ContactForm({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const tx = CF[lang]
  const SERVICES = lang === 'en' ? SERVICES_EN : SERVICES_ES
  const [tab, setTab] = useState<'contacto' | 'cotizacion'>('contacto')
  const [tabKey, setTabKey] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const [contactData, setContactData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [cotData, setCotData] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    tipo_servicio: SERVICES[0], ubicacion: '', descripcion: '', moneda: 'CLP',
  })

  function reset() {
    setStatus('idle')
    setErrorMsg('')
    setContactData({ nombre: '', email: '', telefono: '', mensaje: '' })
    setCotData({
      nombre: '', empresa: '', email: '', telefono: '',
      tipo_servicio: SERVICES[0], ubicacion: '', descripcion: '', moneda: 'CLP',
    })
  }

  function switchTab(t: 'contacto' | 'cotizacion') {
    setTab(t)
    setTabKey(k => k + 1)
    setStatus('idle')
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag === 'function') w.gtag('event', 'form_tab_switched', { tab: t, lang })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const payload = tab === 'contacto'
      ? { ...contactData, tipo: 'contacto' }
      : {
          nombre: cotData.nombre,
          email: cotData.email,
          telefono: cotData.telefono,
          mensaje: `Empresa: ${cotData.empresa}\nServicio: ${cotData.tipo_servicio}\nUbicación: ${cotData.ubicacion}\nMoneda: ${cotData.moneda}\n\n${cotData.descripcion}`,
          tipo: 'cotizacion',
        }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Error')
      }
      setStatus('success')
      const w = window as unknown as { gtag?: (...args: unknown[]) => void }
      if (typeof w.gtag === 'function') {
        w.gtag('event', tab === 'cotizacion' ? 'quote_requested' : 'contact_submitted', {
          form_lang: lang,
          service_type: tab === 'cotizacion' ? cotData.tipo_servicio : undefined,
        })
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error al enviar'
      setStatus('error')
      setErrorMsg(msg)
      const w = window as unknown as { gtag?: (...args: unknown[]) => void }
      if (typeof w.gtag === 'function') w.gtag('event', 'contact_error', { form_type: tab, error: msg, lang })
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" style={{ padding: '48px 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
          {tx.enviado}
        </p>
        <p style={{ fontSize: 13, color: 'var(--dim)', fontWeight: 300, marginBottom: 28 }}>
          {tx.gracias}
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            fontFamily: 'Josefin Sans, sans-serif',
            fontSize: 8.5,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--dim)',
            background: 'transparent',
            border: '1px solid var(--border)',
            padding: '10px 22px',
            cursor: 'pointer',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(200,168,75,0.35)'
            e.currentTarget.style.color = 'var(--text)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--dim)'
          }}
        >
          {tx.otroMensaje}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Tabs */}
      <div role="tablist" style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: 24 }}>
        {(['contacto', 'cotizacion'] as const).map(t => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tab === t}
            onClick={() => switchTab(t)}
            style={{
              fontFamily: 'Josefin Sans, sans-serif',
              fontSize: 8.5,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              padding: '10px 20px',
              background: 'none',
              border: 'none',
              borderBottom: tab === t ? '1px solid var(--accent)' : '1px solid transparent',
              color: tab === t ? 'var(--accent)' : 'var(--dim)',
              cursor: 'pointer',
              marginBottom: -1,
              transition: 'color 0.2s',
            }}
          >
            {t === 'contacto' ? tx.tabContacto : tx.tabCotizacion}
          </button>
        ))}
      </div>

      <div key={tabKey} style={{ animation: 'fadeUp .18s ease-out both' }}>
      {tab === 'contacto' ? (
        <>
          <div className="fg">
            <label htmlFor="cf-nombre">{tx.nombre}</label>
            <input
              id="cf-nombre"
              type="text" required
              placeholder={tx.nombrePlaceholder}
              value={contactData.nombre}
              onChange={e => setContactData(p => ({ ...p, nombre: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label htmlFor="cf-email">{tx.email}</label>
            <input
              id="cf-email"
              type="email" required
              placeholder="tu@email.com"
              value={contactData.email}
              onChange={e => setContactData(p => ({ ...p, email: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label htmlFor="cf-telefono">{tx.telefono}</label>
            <input
              id="cf-telefono"
              type="tel"
              placeholder="+56 9 xxxx xxxx"
              value={contactData.telefono}
              onChange={e => setContactData(p => ({ ...p, telefono: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label htmlFor="cf-mensaje">{tx.mensaje}</label>
            <textarea
              id="cf-mensaje"
              required
              placeholder={tx.msgPlaceholder}
              value={contactData.mensaje}
              onChange={e => setContactData(p => ({ ...p, mensaje: e.target.value }))}
            />
          </div>
        </>
      ) : (
        <>
          <div className="fg">
            <label htmlFor="cot-nombre">{tx.nombre}</label>
            <input
              id="cot-nombre"
              type="text" required
              placeholder={tx.nombrePlaceholder}
              value={`${cotData.nombre}${cotData.empresa ? ` — ${cotData.empresa}` : ''}`}
              onChange={e => {
                const parts = e.target.value.split(' — ')
                setCotData(p => ({ ...p, nombre: parts[0] ?? '', empresa: parts[1] ?? '' }))
              }}
            />
          </div>
          <div className="fg">
            <label htmlFor="cot-email">{tx.email}</label>
            <input
              id="cot-email"
              type="email" required
              placeholder="tu@email.com"
              value={cotData.email}
              onChange={e => setCotData(p => ({ ...p, email: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label htmlFor="cot-especialidad">{tx.especialidad}</label>
            <select
              id="cot-especialidad"
              value={cotData.tipo_servicio}
              onChange={e => setCotData(p => ({ ...p, tipo_servicio: e.target.value }))}
            >
              <option value="">{tx.seleccionar}</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="fg">
            <label htmlFor="cot-descripcion">{tx.descripcion}</label>
            <textarea
              id="cot-descripcion"
              required
              placeholder={tx.descPlaceholder}
              value={cotData.descripcion}
              onChange={e => setCotData(p => ({ ...p, descripcion: e.target.value }))}
            />
          </div>
        </>
      )}
      </div>

      {status === 'error' && (
        <p style={{ color: '#e55', fontSize: 12, marginBottom: 14 }}>{errorMsg}</p>
      )}

      <button
        className="btn-p"
        type="submit"
        disabled={status === 'loading'}
        style={{ width: '100%', opacity: status === 'loading' ? 0.6 : 1 }}
      >
        {status === 'loading' ? tx.enviando : tab === 'cotizacion' ? tx.enviarSol : tx.enviarMsg}
      </button>
    </form>
  )
}
