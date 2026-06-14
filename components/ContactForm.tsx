'use client'

import { useState } from 'react'

const SERVICIOS = [
  'Climatización Comercial / VRF',
  'Refrigeración Comercial (Vitrinas & Góndolas)',
  'Ventilación y Extracción',
  'Mantenimiento Preventivo y Correctivo',
  'Proyectos Llave en Mano',
  'Asesoría de Ingeniería',
  'Eficiencia Energética HVAC',
  'Análisis Operacional VRV/VRF',
]

export default function ContactForm() {
  const [tab, setTab] = useState<'contacto' | 'cotizacion'>('contacto')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [contactData, setContactData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [cotizData, setCotizData] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    tipo_servicio: '', ubicacion: '', descripcion: '', moneda: 'CLP',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const payload = tab === 'contacto'
        ? { ...contactData, tipo: 'contacto' }
        : { ...cotizData, nombre: cotizData.nombre, mensaje: cotizData.descripcion, tipo: 'cotizacion' }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '48px 32px', textAlign: 'center', border: '1px solid rgba(200,168,75,0.2)', background: 'rgba(200,168,75,0.04)' }}>
        <div style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.44em', textTransform: 'uppercase', color: '#C8A84B', marginBottom: 16 }}>Mensaje Enviado</div>
        <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 300, color: '#f0eeeb', lineHeight: 1.7 }}>
          ¡Mensaje enviado! Te contactaremos pronto.
        </p>
        <button className="btn-outline" style={{ marginTop: 24 }} onClick={() => setStatus('idle')}>
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 28, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {(['contacto', 'cotizacion'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              fontFamily: 'Josefin Sans, sans-serif',
              fontSize: 8,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: tab === t ? '#C8A84B' : '#666',
              background: 'none',
              border: 'none',
              borderBottom: tab === t ? '1px solid #C8A84B' : '1px solid transparent',
              padding: '10px 20px 10px 0',
              cursor: 'pointer',
              marginBottom: -1,
              transition: 'color 0.2s',
            }}
          >
            {t === 'contacto' ? 'Contacto' : 'Solicitar Cotización'}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {tab === 'contacto' ? (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="field">
                <label>Nombre</label>
                <input required value={contactData.nombre} onChange={e => setContactData(p => ({ ...p, nombre: e.target.value }))} placeholder="Tu nombre" />
              </div>
              <div className="field">
                <label>Email</label>
                <input required type="email" value={contactData.email} onChange={e => setContactData(p => ({ ...p, email: e.target.value }))} placeholder="tu@email.com" />
              </div>
            </div>
            <div className="field">
              <label>Teléfono</label>
              <input value={contactData.telefono} onChange={e => setContactData(p => ({ ...p, telefono: e.target.value }))} placeholder="+56 9 XXXX XXXX" />
            </div>
            <div className="field">
              <label>Mensaje</label>
              <textarea required rows={4} value={contactData.mensaje} onChange={e => setContactData(p => ({ ...p, mensaje: e.target.value }))} placeholder="¿En qué podemos ayudarte?" />
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="field">
                <label>Nombre</label>
                <input required value={cotizData.nombre} onChange={e => setCotizData(p => ({ ...p, nombre: e.target.value }))} placeholder="Tu nombre" />
              </div>
              <div className="field">
                <label>Empresa</label>
                <input value={cotizData.empresa} onChange={e => setCotizData(p => ({ ...p, empresa: e.target.value }))} placeholder="Nombre empresa" />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="field">
                <label>Email</label>
                <input required type="email" value={cotizData.email} onChange={e => setCotizData(p => ({ ...p, email: e.target.value }))} placeholder="tu@email.com" />
              </div>
              <div className="field">
                <label>Teléfono</label>
                <input value={cotizData.telefono} onChange={e => setCotizData(p => ({ ...p, telefono: e.target.value }))} placeholder="+56 9 XXXX XXXX" />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="field">
                <label>Tipo de Servicio</label>
                <select value={cotizData.tipo_servicio} onChange={e => setCotizData(p => ({ ...p, tipo_servicio: e.target.value }))}>
                  <option value="">Seleccionar...</option>
                  {SERVICIOS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="field">
                <label>Moneda</label>
                <select value={cotizData.moneda} onChange={e => setCotizData(p => ({ ...p, moneda: e.target.value }))}>
                  <option value="CLP">CLP — Pesos Chilenos</option>
                  <option value="USD">USD — Dólares</option>
                  <option value="UF">UF — Unidad de Fomento</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Ubicación del Proyecto</label>
              <input value={cotizData.ubicacion} onChange={e => setCotizData(p => ({ ...p, ubicacion: e.target.value }))} placeholder="Ciudad, Región" />
            </div>
            <div className="field">
              <label>Descripción del Proyecto</label>
              <textarea required rows={4} value={cotizData.descripcion} onChange={e => setCotizData(p => ({ ...p, descripcion: e.target.value }))} placeholder="Describe el proyecto o equipamiento requerido..." />
            </div>
          </>
        )}

        {status === 'error' && (
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#e05252', margin: 0 }}>
            Error al enviar. Por favor intenta nuevamente.
          </p>
        )}

        <button
          type="submit"
          className="btn-primary"
          disabled={status === 'loading'}
          style={{ alignSelf: 'flex-start', opacity: status === 'loading' ? 0.6 : 1 }}
        >
          {status === 'loading' ? 'Enviando...' : tab === 'contacto' ? 'Enviar Mensaje' : 'Solicitar Cotización'}
        </button>
      </form>
    </div>
  )
}
