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
}: {
  nombre: string
  email: string
  telefono: string
  mensaje: string
  tipo: string
}) {
  const { apiKey, from, to, cc } = getEmailConfig()
  const resend = new Resend(apiKey)

  const safeNombre = escapeHtml(nombre)
  const safeEmail = escapeHtml(email)
  const safeTelefono = escapeHtml(telefono)
  const safeTipo = escapeHtml(tipo)
  const safeMensaje = escapeHtml(mensaje).replace(/\n/g, '<br>')

  const payload = {
    from,
    to,
    cc: cc !== to ? cc : undefined,
    replyTo: email,
    subject: `[D&Z Building] ${tipo === 'cotizacion' ? 'Solicitud de cotización' : 'Contacto'} — ${nombre}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0c0c0c;color:#f0eeeb;">
        <div style="border-bottom:1px solid rgba(200,168,75,0.3);padding-bottom:20px;margin-bottom:24px;">
          <h2 style="font-family:sans-serif;font-size:18px;font-weight:300;letter-spacing:0.1em;color:#C8A84B;margin:0;">
            D&amp;Z BUILDING
          </h2>
          <p style="font-size:11px;color:#666;letter-spacing:0.08em;margin:4px 0 0;">
            ${tipo === 'cotizacion' ? 'SOLICITUD DE COTIZACIÓN' : 'MENSAJE DE CONTACTO'}
          </p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:13px;">
          <tr><td style="padding:8px 0;color:#666;width:120px;">Nombre</td><td style="padding:8px 0;color:#f0eeeb;">${safeNombre}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;color:#f0eeeb;">${safeEmail}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Teléfono</td><td style="padding:8px 0;color:#f0eeeb;">${safeTelefono}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Tipo</td><td style="padding:8px 0;color:#C8A84B;">${safeTipo}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);">
          <p style="margin:0;font-size:13px;line-height:1.7;color:#ccc;">${safeMensaje}</p>
        </div>
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
