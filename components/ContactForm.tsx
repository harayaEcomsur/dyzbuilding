'use client'

import { useState } from 'react'

const SERVICES = [
  'Climatización Comercial / VRF',
  'Refrigeración Comercial',
  'Ventilación y Extracción',
  'Mantenimiento Preventivo',
  'Proyecto Llave en Mano',
  'Análisis Operacional VRV/VRF',
  'Eficiencia Energética HVAC',
  'Asesoría de Ingeniería',
]

export default function ContactForm() {
  const [tab, setTab] = useState<'contacto' | 'cotizacion'>('contacto')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const [contactData, setContactData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [cotData, setCotData] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    tipo_servicio: SERVICES[0], ubicacion: '', descripcion: '', moneda: 'CLP',
  })

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
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Error al enviar')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '48px 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
          MENSAJE ENVIADO
        </p>
        <p style={{ fontSize: 13, color: 'var(--dim)', fontWeight: 300 }}>
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: 24 }}>
        {(['contacto', 'cotizacion'] as const).map(t => (
          <button
            key={t}
            type="button"
            onClick={() => { setTab(t); setStatus('idle') }}
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
            {t === 'contacto' ? 'Contacto' : 'Solicitar Cotización'}
          </button>
        ))}
      </div>

      {tab === 'contacto' ? (
        <>
          <div className="fg">
            <label>Nombre y empresa</label>
            <input
              type="text" required
              placeholder="Nombre — Empresa S.A."
              value={contactData.nombre}
              onChange={e => setContactData(p => ({ ...p, nombre: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label>Email</label>
            <input
              type="email" required
              placeholder="tu@email.com"
              value={contactData.email}
              onChange={e => setContactData(p => ({ ...p, email: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label>Teléfono</label>
            <input
              type="tel"
              placeholder="+56 9 xxxx xxxx"
              value={contactData.telefono}
              onChange={e => setContactData(p => ({ ...p, telefono: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label>Mensaje</label>
            <textarea
              required
              placeholder="¿En qué podemos ayudarte?"
              value={contactData.mensaje}
              onChange={e => setContactData(p => ({ ...p, mensaje: e.target.value }))}
            />
          </div>
        </>
      ) : (
        <>
          <div className="fg">
            <label>Nombre y empresa</label>
            <input
              type="text" required
              placeholder="Nombre — Empresa S.A."
              value={`${cotData.nombre}${cotData.empresa ? ` — ${cotData.empresa}` : ''}`}
              onChange={e => {
                const parts = e.target.value.split(' — ')
                setCotData(p => ({ ...p, nombre: parts[0] ?? '', empresa: parts[1] ?? '' }))
              }}
            />
          </div>
          <div className="fg">
            <label>Email</label>
            <input
              type="email" required
              placeholder="tu@email.com"
              value={cotData.email}
              onChange={e => setCotData(p => ({ ...p, email: e.target.value }))}
            />
          </div>
          <div className="fg">
            <label>Especialidad requerida</label>
            <select
              value={cotData.tipo_servicio}
              onChange={e => setCotData(p => ({ ...p, tipo_servicio: e.target.value }))}
            >
              <option value="">Seleccionar...</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="fg">
            <label>Descripción del proyecto</label>
            <textarea
              required
              placeholder="Describa brevemente su necesidad..."
              value={cotData.descripcion}
              onChange={e => setCotData(p => ({ ...p, descripcion: e.target.value }))}
            />
          </div>
        </>
      )}

      {status === 'error' && (
        <p style={{ color: '#e55', fontSize: 12, marginBottom: 14 }}>{errorMsg}</p>
      )}

      <button
        className="btn-p"
        type="submit"
        disabled={status === 'loading'}
        style={{ width: '100%', opacity: status === 'loading' ? 0.6 : 1 }}
      >
        {status === 'loading' ? 'Enviando...' : tab === 'cotizacion' ? 'Enviar solicitud' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
