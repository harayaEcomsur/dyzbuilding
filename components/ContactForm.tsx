'use client'

import { useState, useEffect, useRef } from 'react'

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

const PROPERTY_TYPES_ES = ['Oficina / Edificio', 'Hotel / Apart Hotel', 'Supermercado / Retail', 'Industria / Bodega', 'Clínica / Hospital', 'Centro Comercial', 'Planta Minera / Faena', 'Agroindustria / Frigorífico', 'Data Center', 'Otro']
const PROPERTY_TYPES_EN = ['Office / Building', 'Hotel / Apart Hotel', 'Supermarket / Retail', 'Industry / Warehouse', 'Clinic / Hospital', 'Shopping Center', 'Mining Plant / Site', 'Agro-industry / Cold Storage', 'Data Center', 'Other']
const URGENCY_ES = ['Normal (sin fecha límite)', 'En evaluación / Diseño', 'Urgente (menos de 30 días)']
const URGENCY_EN = ['Normal (no deadline)', 'Under evaluation / Design', 'Urgent (less than 30 days)']

const CIUDADES_ES = [
  'Santiago (Región Metropolitana)', 'Valparaíso', 'Concepción / Biobío',
  'Antofagasta', 'La Serena / Coquimbo', 'Rancagua / O\'Higgins',
  'Talca / Maule', 'Temuco / Araucanía', 'Puerto Montt / Los Lagos',
  'Iquique / Tarapacá', 'Arica / Parinacota', 'Otra región',
]
const CIUDADES_EN = [
  'Santiago (Metropolitan Region)', 'Valparaíso', 'Concepción / Biobío',
  'Antofagasta', 'La Serena / Coquimbo', 'Rancagua / O\'Higgins',
  'Talca / Maule', 'Temuco / Araucanía', 'Puerto Montt / Los Lagos',
  'Iquique / Tarapacá', 'Arica / Parinacota', 'Other region',
]

const PRESUPUESTO_ES = [
  'Menos de UF 300 (~$10M CLP)',
  'UF 300 – 1.000 (~$10M–$33M CLP)',
  'UF 1.000 – 5.000 (~$33M–$165M CLP)',
  'UF 5.000 – 20.000 (~$165M–$660M CLP)',
  'Más de UF 20.000 (proyecto mayor)',
  'Por definir',
]
const PRESUPUESTO_EN = [
  'Less than UF 300 (~USD 11K)',
  'UF 300 – 1,000 (~USD 11K–36K)',
  'UF 1,000 – 5,000 (~USD 36K–180K)',
  'UF 5,000 – 20,000 (~USD 180K–720K)',
  'Over UF 20,000 (major project)',
  'To be defined',
]

const CF = {
  es: {
    tabContacto: 'Contacto', tabCotizacion: 'Solicitar Cotización',
    nombre: 'Nombre', empresa: 'Empresa', email: 'Email', telefono: 'Teléfono',
    mensaje: 'Mensaje', msgPlaceholder: '¿En qué podemos ayudarte?',
    nombrePlaceholder: 'Tu nombre', empresaPlaceholder: 'Empresa S.A.',
    especialidad: 'Especialidad requerida', descripcion: 'Descripción del proyecto',
    descPlaceholder: 'Describa brevemente su necesidad: número de zonas, marca preferida, plazos, etc.',
    tipoInmueble: 'Tipo de inmueble', superficie: 'Superficie aproximada (m²)',
    superficiePlaceholder: 'Ej: 1.200 m²', urgencia: 'Urgencia del proyecto',
    ciudad: 'Ciudad / Región', presupuesto: 'Presupuesto estimado',
    seleccionar: 'Seleccionar...',
    enviando: 'Enviando...', enviarMsg: 'Enviar mensaje', enviarSol: 'Enviar solicitud',
    enviado: 'SOLICITUD RECIBIDA',
    gracias: 'Un especialista revisará su proyecto y responderá en menos de 24 horas hábiles.',
    urgente: '¿Necesita respuesta urgente?', waBtn: 'Escribir por WhatsApp →',
    otroMensaje: 'Enviar otra consulta', errorEnvio: 'Error al enviar. Por favor intenta nuevamente.',
    sinCompromiso: 'Sin compromiso · Diagnóstico gratuito',
  },
  en: {
    tabContacto: 'Contact', tabCotizacion: 'Request a Quote',
    nombre: 'Name', empresa: 'Company', email: 'Email', telefono: 'Phone',
    mensaje: 'Message', msgPlaceholder: 'How can we help you?',
    nombrePlaceholder: 'Your name', empresaPlaceholder: 'Company Inc.',
    especialidad: 'Service required', descripcion: 'Project description',
    descPlaceholder: 'Briefly describe your needs: number of zones, preferred brand, timeline, etc.',
    tipoInmueble: 'Property type', superficie: 'Approximate area (m²)',
    superficiePlaceholder: 'e.g. 1,200 m²', urgencia: 'Project urgency',
    ciudad: 'City / Region', presupuesto: 'Estimated budget',
    seleccionar: 'Select...',
    enviando: 'Sending...', enviarMsg: 'Send message', enviarSol: 'Send request',
    enviado: 'REQUEST RECEIVED',
    gracias: 'A specialist will review your project and respond within 24 business hours.',
    urgente: 'Need it sooner?', waBtn: 'Chat on WhatsApp →',
    otroMensaje: 'Send another request', errorEnvio: 'Error sending your message. Please try again.',
    sinCompromiso: 'No commitment · Free assessment',
  },
}

export default function ContactForm({ lang = 'es', waUrl }: { lang?: 'es' | 'en'; waUrl?: string }) {
  const tx = CF[lang]
  const SERVICES = lang === 'en' ? SERVICES_EN : SERVICES_ES
  const [tab, setTab] = useState<'contacto' | 'cotizacion'>('cotizacion')
  const [tabKey, setTabKey] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const successRef = useRef<HTMLDivElement>(null)

  const [contactData, setContactData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [honeypot, setHoneypot] = useState('')
  const [cotData, setCotData] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    tipo_servicio: SERVICES[0], tipo_inmueble: '', superficie: '',
    ciudad: '', presupuesto: '', urgencia: '', descripcion: '',
  })

  useEffect(() => {
    try {
      const idx = sessionStorage.getItem('preselect_service_idx')
      if (idx !== null) {
        sessionStorage.removeItem('preselect_service_idx')
        const i = parseInt(idx, 10)
        const services = lang === 'en' ? SERVICES_EN : SERVICES_ES
        if (i >= 0 && i < services.length) {
          setTab('cotizacion')
          setCotData(p => ({ ...p, tipo_servicio: services[i] }))
        }
      }
      // Sector card pre-fill: maps sector index to tipo_inmueble
      // Order: 0→Retail(2), 1→Salud(4), 2→Minería(6), 3→Hotel(1), 4→DataCenter(8), 5→Agro(7)
      const sectorIdx = sessionStorage.getItem('preselect_sector_idx')
      if (sectorIdx !== null) {
        sessionStorage.removeItem('preselect_sector_idx')
        const si = parseInt(sectorIdx, 10)
        const SECTOR_TO_PROP: Record<number, number> = { 0: 2, 1: 4, 2: 6, 3: 1, 4: 8, 5: 7 }
        const propIdx = SECTOR_TO_PROP[si]
        const propTypes = lang === 'en' ? PROPERTY_TYPES_EN : PROPERTY_TYPES_ES
        if (propIdx !== undefined && propIdx < propTypes.length) {
          setTab('cotizacion')
          setCotData(p => ({ ...p, tipo_inmueble: propTypes[propIdx] }))
        }
      }
    } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function reset() {
    setStatus('idle')
    setErrorMsg('')
    setContactData({ nombre: '', email: '', telefono: '', mensaje: '' })
    setCotData({
      nombre: '', empresa: '', email: '', telefono: '',
      tipo_servicio: SERVICES[0], tipo_inmueble: '', superficie: '',
      ciudad: '', presupuesto: '', urgencia: '', descripcion: '',
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
    if (honeypot) return
    setStatus('loading')
    setErrorMsg('')

    const payload = tab === 'contacto'
      ? { ...contactData, tipo: 'contacto', lang }
      : {
          nombre: cotData.nombre,
          empresa: cotData.empresa,
          email: cotData.email,
          telefono: cotData.telefono,
          tipo_servicio: cotData.tipo_servicio,
          tipo_inmueble: cotData.tipo_inmueble,
          superficie: cotData.superficie,
          ciudad: cotData.ciudad,
          presupuesto: cotData.presupuesto,
          urgencia: cotData.urgencia,
          descripcion: cotData.descripcion,
          tipo: 'cotizacion',
          lang,
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
      // Move keyboard focus to success message for screen readers (WCAG 2.4.3)
      setTimeout(() => successRef.current?.focus(), 50)
      const w = window as unknown as { gtag?: (...args: unknown[]) => void }
      if (typeof w.gtag === 'function') {
        if (tab === 'cotizacion') {
          w.gtag('event', 'quote_requested', {
            form_lang: lang,
            service_type: cotData.tipo_servicio,
            property_type: cotData.tipo_inmueble || 'not_specified',
            has_area: cotData.superficie ? 'yes' : 'no',
            ciudad: cotData.ciudad || 'not_specified',
            presupuesto: cotData.presupuesto || 'not_specified',
            urgency: cotData.urgencia || 'not_specified',
          })
        } else {
          w.gtag('event', 'contact_submitted', { form_lang: lang })
        }
      }
    } catch (err) {
      const rawMsg = err instanceof Error ? err.message : 'error'
      setStatus('error')
      setErrorMsg(tx.errorEnvio)
      const w = window as unknown as { gtag?: (...args: unknown[]) => void }
      if (typeof w.gtag === 'function') w.gtag('event', 'contact_error', { form_type: tab, error: rawMsg, lang })
    }
  }

  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} className="form-success" role="status" aria-live="polite" style={{ padding: '48px 0', textAlign: 'center', outline: 'none' }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" style={{ margin: '0 auto 16px', display: 'block' }}>
          <circle cx="14" cy="14" r="13" stroke="rgba(200,168,75,0.35)" strokeWidth="1.2" />
          <path d="M8.5 14.5l3.5 3.5 7.5-8" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
          {tx.enviado}
        </p>
        <p style={{ fontSize: 13.5, color: 'var(--dim)', fontWeight: 300, lineHeight: 1.7, marginBottom: 28, maxWidth: 320, margin: '0 auto 28px' }}>
          {tx.gracias}
        </p>
        {waUrl && (
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', opacity: 0.6, marginBottom: 10 }}>
              {tx.urgente}
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ga-event="whatsapp_clicked"
              data-ga-location="form_success"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontFamily: 'Josefin Sans, sans-serif', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--accent)', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8' }}
            >
              {tx.waBtn}
            </a>
          </div>
        )}
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
      {/* Honeypot anti-spam — hidden from humans, bots fill it in */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
      </div>
      {/* Tabs */}
      <div role="tablist" style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: 24 }}>
        {(['contacto', 'cotizacion'] as const).map(t => (
          <button
            key={t}
            id={`cf-tab-${t}`}
            type="button"
            role="tab"
            aria-selected={tab === t}
            aria-controls="cf-tabpanel"
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

      <div id="cf-tabpanel" key={tabKey} role="tabpanel" aria-labelledby={`cf-tab-${tab}`} style={{ animation: 'fadeUp .18s ease-out both' }}>
      {tab === 'contacto' ? (
        <>
          <div className="fg">
            <label htmlFor="cf-nombre">{tx.nombre}</label>
            <input
              id="cf-nombre"
              name="nombre"
              type="text" required aria-required="true"
              autoComplete="name"
              placeholder={tx.nombrePlaceholder}
              value={contactData.nombre}
              onChange={e => setContactData(p => ({ ...p, nombre: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label htmlFor="cf-email">{tx.email}</label>
            <input
              id="cf-email"
              name="email"
              type="email" required aria-required="true"
              autoComplete="email"
              placeholder="tu@email.com"
              value={contactData.email}
              onChange={e => setContactData(p => ({ ...p, email: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label htmlFor="cf-telefono">{tx.telefono}</label>
            <input
              id="cf-telefono"
              name="telefono"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+56 9 xxxx xxxx"
              value={contactData.telefono}
              onChange={e => setContactData(p => ({ ...p, telefono: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label htmlFor="cf-mensaje">{tx.mensaje}</label>
            <textarea
              id="cf-mensaje"
              name="mensaje"
              required aria-required="true"
              placeholder={tx.msgPlaceholder}
              value={contactData.mensaje}
              onChange={e => setContactData(p => ({ ...p, mensaje: e.target.value }))}
            />
          </div>
        </>
      ) : (
        <>
          <div className="form-grid-2">
            <div className="fg">
              <label htmlFor="cot-nombre">{tx.nombre}</label>
              <input
                id="cot-nombre"
                name="nombre"
                type="text" required aria-required="true"
                autoComplete="name"
                placeholder={tx.nombrePlaceholder}
                value={cotData.nombre}
                onChange={e => setCotData(p => ({ ...p, nombre: e.target.value }))}
              />
            </div>
            <div className="fg">
              <label htmlFor="cot-empresa">{tx.empresa}</label>
              <input
                id="cot-empresa"
                name="empresa"
                type="text"
                autoComplete="organization"
                placeholder={tx.empresaPlaceholder}
                value={cotData.empresa}
                onChange={e => setCotData(p => ({ ...p, empresa: e.target.value }))}
              />
            </div>
          </div>
          <div className="form-grid-2">
            <div className="fg">
              <label htmlFor="cot-email">{tx.email}</label>
              <input
                id="cot-email"
                name="email"
                type="email" required aria-required="true"
                autoComplete="email"
                placeholder="tu@email.com"
                value={cotData.email}
                onChange={e => setCotData(p => ({ ...p, email: e.target.value }))}
              />
            </div>
            <div className="fg">
              <label htmlFor="cot-telefono">{tx.telefono}</label>
              <input
                id="cot-telefono"
                name="telefono"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+56 9 xxxx xxxx"
                value={cotData.telefono}
                onChange={e => setCotData(p => ({ ...p, telefono: e.target.value }))}
              />
            </div>
          </div>
          <div className="fg">
            <label htmlFor="cot-especialidad">{tx.especialidad}</label>
            <select
              id="cot-especialidad"
              name="tipo_servicio"
              required aria-required="true"
              value={cotData.tipo_servicio}
              onChange={e => setCotData(p => ({ ...p, tipo_servicio: e.target.value }))}
            >
              <option value="">{tx.seleccionar}</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-grid-2">
            <div className="fg">
              <label htmlFor="cot-inmueble">{tx.tipoInmueble}</label>
              <select
                id="cot-inmueble"
                name="tipo_inmueble"
                value={cotData.tipo_inmueble}
                onChange={e => setCotData(p => ({ ...p, tipo_inmueble: e.target.value }))}
              >
                <option value="">{tx.seleccionar}</option>
                {(lang === 'en' ? PROPERTY_TYPES_EN : PROPERTY_TYPES_ES).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="fg">
              <label htmlFor="cot-superficie">{tx.superficie}</label>
              <input
                id="cot-superficie"
                name="superficie"
                type="text"
                inputMode="decimal"
                placeholder={tx.superficiePlaceholder}
                value={cotData.superficie}
                onChange={e => setCotData(p => ({ ...p, superficie: e.target.value }))}
              />
            </div>
          </div>
          <div className="fg">
            <label htmlFor="cot-urgencia">{tx.urgencia}</label>
            <select
              id="cot-urgencia"
              name="urgencia"
              value={cotData.urgencia}
              onChange={e => setCotData(p => ({ ...p, urgencia: e.target.value }))}
            >
              <option value="">{tx.seleccionar}</option>
              {(lang === 'en' ? URGENCY_EN : URGENCY_ES).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-grid-2">
            <div className="fg">
              <label htmlFor="cot-ciudad">{tx.ciudad}</label>
              <select
                id="cot-ciudad"
                name="ciudad"
                value={cotData.ciudad}
                onChange={e => setCotData(p => ({ ...p, ciudad: e.target.value }))}
              >
                <option value="">{tx.seleccionar}</option>
                {(lang === 'en' ? CIUDADES_EN : CIUDADES_ES).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="fg">
              <label htmlFor="cot-presupuesto">{tx.presupuesto}</label>
              <select
                id="cot-presupuesto"
                name="presupuesto"
                value={cotData.presupuesto}
                onChange={e => setCotData(p => ({ ...p, presupuesto: e.target.value }))}
              >
                <option value="">{tx.seleccionar}</option>
                {(lang === 'en' ? PRESUPUESTO_EN : PRESUPUESTO_ES).map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>
          <div className="fg">
            <label htmlFor="cot-descripcion">{tx.descripcion}</label>
            <textarea
              id="cot-descripcion"
              name="descripcion"
              required aria-required="true"
              placeholder={tx.descPlaceholder}
              value={cotData.descripcion}
              onChange={e => setCotData(p => ({ ...p, descripcion: e.target.value }))}
            />
          </div>
        </>
      )}
      </div>

      {status === 'error' && (
        <p role="alert" style={{ color: '#e55', fontSize: 12, marginBottom: 14 }}>{errorMsg}</p>
      )}

      <button
        className="btn-p"
        type="submit"
        disabled={status === 'loading'}
        style={{ width: '100%', opacity: status === 'loading' ? 0.6 : 1 }}
      >
        {status === 'loading' ? tx.enviando : tab === 'cotizacion' ? tx.enviarSol : tx.enviarMsg}
      </button>
      {tab === 'cotizacion' && (
        <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--dim)', textAlign: 'center', marginTop: 10, opacity: .6 }}>
          {tx.sinCompromiso}
        </p>
      )}
    </form>
  )
}
