import { Resend } from 'resend'

const EMAIL_FROM = process.env.EMAIL_FROM ?? 'D&Z Building <onboarding@resend.dev>'
const EMAIL_TO = process.env.EMAIL_TO ?? 'duzzam@gmail.com'
const EMAIL_CC = process.env.EMAIL_CC ?? 'duzzam@gmail.com'

export async function sendContactEmail({
  nombre, email, telefono, mensaje, tipo,
}: {
  nombre: string
  email: string
  telefono: string
  mensaje: string
  tipo: string
}) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder')
  return resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    cc: EMAIL_CC !== EMAIL_TO ? EMAIL_CC : undefined,
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
          <tr><td style="padding:8px 0;color:#666;width:120px;">Nombre</td><td style="padding:8px 0;color:#f0eeeb;">${nombre}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;color:#f0eeeb;">${email}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Teléfono</td><td style="padding:8px 0;color:#f0eeeb;">${telefono}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">Tipo</td><td style="padding:8px 0;color:#C8A84B;">${tipo}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);">
          <p style="margin:0;font-size:13px;line-height:1.7;color:#ccc;">${mensaje.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
    `,
  })
}
