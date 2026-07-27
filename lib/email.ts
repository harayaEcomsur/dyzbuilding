import { Resend } from 'resend'

const RETRY_ATTEMPTS = 3
const RETRY_DELAY_MS = 500

function env(name: string, fallback?: string) {
  const value = process.env[name]?.trim()
  return value || fallback
}

function getEmailConfig() {
  const apiKey = env('RESEND_API_KEY')
  const from = env('EMAIL_FROM', 'D&Z Building <onboarding@resend.dev>')!
  const to = env('EMAIL_TO', 'duzzam@gmail.com')!
  const cc = env('EMAIL_CC', 'duzzam@gmail.com')!

  if (!apiKey) {
    throw new Error('RESEND_API_KEY no está configurada. Agrégala en Vercel → Settings → Environment Variables.')
  }

  return { apiKey, from, to, cc }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function sendContactEmail({
  nombre, email, telefono, mensaje, tipo,
  empresa, tipo_servicio, tipo_inmueble, superficie,
  ciudad, presupuesto, urgencia, descripcion,
}: {
  nombre: string
  email: string
  telefono: string
  mensaje: string
  tipo: string
  empresa?: string
  tipo_servicio?: string
  tipo_inmueble?: string
  superficie?: string
  ciudad?: string
  presupuesto?: string
  urgencia?: string
  descripcion?: string
}) {
  const { apiKey, from, to, cc } = getEmailConfig()
  const resend = new Resend(apiKey)

  const isCotizacion = tipo === 'cotizacion'
  const tipoLabel = isCotizacion ? 'Solicitud de Cotización' : 'Contacto General'
  const isUrgent = /urgente|urgent/i.test(urgencia ?? '')
  const isMajorProject = /UF 5[\.\s]?000|UF 20[\.\s]?000|major project/i.test(presupuesto ?? '')

  const safeNombre = escapeHtml(nombre)
  const safeEmail = escapeHtml(email)
  const safeTelefono = escapeHtml(telefono)

  const row = (label: string, value: string, accent = false) =>
    `<tr style="border-bottom:1px solid rgba(255,255,255,0.04)">
      <td style="padding:9px 0;color:#666;width:140px;vertical-align:top">${label}</td>
      <td style="padding:9px 0;color:${accent ? '#C8A84B' : '#f0eeeb'}">${value}</td>
    </tr>`

  const urgencyRow = urgencia
    ? isUrgent
      ? `<tr style="border-bottom:1px solid rgba(255,255,255,0.04);background:rgba(220,60,60,0.08)">
          <td style="padding:9px 0;color:#666;width:140px;vertical-align:top">Urgencia</td>
          <td style="padding:9px 0;color:#e06060;font-weight:500">⚠ ${escapeHtml(urgencia)}</td>
        </tr>`
      : row('Urgencia', escapeHtml(urgencia))
    : ''

  const contentSection = isCotizacion && (tipo_servicio || descripcion)
    ? `<table style="width:100%;border-collapse:collapse;font-size:13px;margin-top:16px;">
        ${empresa ? row('Empresa', escapeHtml(empresa)) : ''}
        ${tipo_servicio ? row('Servicio', escapeHtml(tipo_servicio), true) : ''}
        ${tipo_inmueble ? row('Inmueble', escapeHtml(tipo_inmueble)) : ''}
        ${ciudad ? row('Ciudad / Región', escapeHtml(ciudad)) : ''}
        ${superficie ? row('Superficie', escapeHtml(superficie)) : ''}
        ${presupuesto ? row('Presupuesto', escapeHtml(presupuesto), true) : ''}
        ${urgencyRow}
      </table>
      ${descripcion ? `<div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);">
        <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#555">Descripción del proyecto</p>
        <p style="margin:0;font-size:13px;line-height:1.7;color:#ccc">${escapeHtml(descripcion).replace(/\n/g, '<br>')}</p>
      </div>` : ''}`
    : `<div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);">
        <p style="margin:0;font-size:13px;line-height:1.7;color:#ccc">${escapeHtml(mensaje).replace(/\n/g, '<br>')}</p>
      </div>`

  const payload = {
    from,
    to,
    cc: cc !== to ? cc : undefined,
    replyTo: email,
    subject: `[D&Z Building] ${isCotizacion ? `Solicitud de cotización${isUrgent ? ' ⚠ URGENTE' : ''}${isMajorProject ? ' 🏗 PROYECTO MAYOR' : ''}` : 'Contacto'} — ${nombre}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0c0c0c;color:#f0eeeb;">
        <div style="border-bottom:1px solid rgba(200,168,75,0.3);padding-bottom:20px;margin-bottom:24px;">
          <h2 style="font-family:sans-serif;font-size:18px;font-weight:300;letter-spacing:0.1em;color:#C8A84B;margin:0;">
            D&amp;Z BUILDING
          </h2>
          <p style="font-size:11px;color:#666;letter-spacing:0.08em;margin:4px 0 0;">
            ${isCotizacion ? 'SOLICITUD DE COTIZACIÓN' : 'MENSAJE DE CONTACTO'}
          </p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          ${row('Nombre', safeNombre)}
          ${row('Email', safeEmail)}
          ${row('Teléfono', safeTelefono)}
          ${row('Tipo', escapeHtml(tipoLabel), true)}
        </table>
        ${contentSection}
      </div>
    `,
  }

  let lastError: string | undefined

  for (let attempt = 1; attempt <= RETRY_ATTEMPTS; attempt++) {
    const { data, error } = await resend.emails.send(payload)

    if (data) return

    lastError = error?.message ?? 'Error desconocido'
    console.error(`[email] Intento ${attempt}/${RETRY_ATTEMPTS} fallido: ${lastError}`)

    if (attempt < RETRY_ATTEMPTS) {
      await sleep(RETRY_DELAY_MS * attempt)
    }
  }

  throw new Error(lastError)
}

export async function sendAutoReplyEmail({
  nombre, email, tipo, lang = 'es', tipo_servicio, ciudad,
}: {
  nombre: string
  email: string
  tipo: string
  lang?: 'es' | 'en'
  tipo_servicio?: string
  ciudad?: string
}) {
  const { apiKey, from } = getEmailConfig()
  const resend = new Resend(apiKey)

  const isCot = tipo === 'cotizacion'
  const safeNombre = escapeHtml(nombre.split(' ')[0] ?? nombre)
  const safeService = tipo_servicio ? escapeHtml(tipo_servicio) : ''
  const safeCiudad = ciudad ? escapeHtml(ciudad) : ''

  const es = {
    subject: isCot
      ? `Recibimos tu solicitud de cotización — D&Z Building`
      : `Gracias por contactarnos — D&Z Building`,
    greeting: `Hola ${safeNombre},`,
    body: isCot
      ? `Recibimos tu solicitud${safeService ? ` de <strong>${safeService}</strong>` : ' de cotización'}${safeCiudad ? ` para <strong>${safeCiudad}</strong>` : ''}. Nuestro equipo técnico la revisará y te contactará con una propuesta detallada.`
      : `Recibimos tu mensaje. Te responderemos a la brevedad, en horario hábil de lunes a viernes.`,
    footer: `Si necesitas una respuesta urgente, escríbenos directamente a <a href="mailto:contacto@dyzbuilding.cl" style="color:#C8A84B;">contacto@dyzbuilding.cl</a> o llámanos al teléfono publicado en nuestro sitio.`,
    tagline: 'Climatización Comercial · Refrigeración Industrial · Distribuidor LG · Samsung · Gree',
    note: 'Este es un mensaje automático. No es necesario responderlo.',
  }

  const en = {
    subject: isCot
      ? `We received your quote request — D&Z Building`
      : `Thank you for contacting us — D&Z Building`,
    greeting: `Hi ${safeNombre},`,
    body: isCot
      ? `We received your${safeService ? ` <strong>${safeService}</strong>` : ''} quote request${safeCiudad ? ` for <strong>${safeCiudad}</strong>` : ''}. Our technical team will review it and get back to you with a detailed proposal.`
      : `We received your message and will get back to you shortly during business hours, Monday to Friday.`,
    footer: `For an urgent response, email us at <a href="mailto:contacto@dyzbuilding.cl" style="color:#C8A84B;">contacto@dyzbuilding.cl</a> or call the phone number listed on our website.`,
    tagline: 'Commercial HVAC · Industrial Refrigeration · Official Distributor LG · Samsung · Gree',
    note: 'This is an automated message. No reply is needed.',
  }

  const t = lang === 'en' ? en : es

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:36px 32px;background:#0c0c0c;color:#f0eeeb;">
      <div style="border-bottom:1px solid rgba(200,168,75,0.25);padding-bottom:18px;margin-bottom:24px;">
        <p style="font-family:sans-serif;font-size:11px;font-weight:300;letter-spacing:0.15em;color:#C8A84B;margin:0;text-transform:uppercase;">D&amp;Z Building</p>
      </div>
      <p style="font-size:14px;color:#f0eeeb;margin:0 0 16px;">${t.greeting}</p>
      <p style="font-size:14px;color:#aaa;line-height:1.7;margin:0 0 24px;">${t.body}</p>
      <p style="font-size:13px;color:#666;line-height:1.7;margin:0 0 32px;">${t.footer}</p>
      <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:20px;">
        <p style="font-size:10px;letter-spacing:0.08em;color:#444;margin:0 0 6px;text-transform:uppercase;">${t.tagline}</p>
        <p style="font-size:10px;color:#333;margin:0;">${t.note}</p>
      </div>
    </div>
  `

  const { error } = await resend.emails.send({
    from,
    to: email,
    replyTo: 'contacto@dyzbuilding.cl',
    subject: t.subject,
    html,
  })

  if (error) {
    console.error('[auto-reply]', error.message)
  }
}
