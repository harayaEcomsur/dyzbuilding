import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, sendAutoReplyEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      nombre, email, telefono, mensaje, tipo, lang, website,
      empresa, tipo_servicio, tipo_inmueble, superficie,
      ciudad, presupuesto, urgencia, descripcion,
    } = body

    // Honeypot: bots fill hidden 'website' field; silently accept to avoid revealing detection
    if (website) return NextResponse.json({ ok: true })

    if (!nombre || !email) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    // For cotizacion, require at least a description; for contacto, require mensaje
    if (tipo === 'cotizacion' ? !descripcion && !mensaje : !mensaje) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    await sendContactEmail({
      nombre, email,
      telefono: telefono ?? '',
      mensaje: mensaje ?? '',
      tipo: tipo ?? 'contacto',
      empresa, tipo_servicio, tipo_inmueble, superficie,
      ciudad, presupuesto, urgencia, descripcion,
    })

    // Auto-reply al lead — no bloquea la respuesta al usuario si falla
    sendAutoReplyEmail({ nombre, email, tipo: tipo ?? 'contacto', lang: lang === 'en' ? 'en' : 'es', tipo_servicio, ciudad }).catch(
      (e: unknown) => console.error('[auto-reply]', e instanceof Error ? e.message : e),
    )

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error desconocido'
    console.error('[contact]', message)
    const isConfig = message.includes('RESEND_API_KEY')
    return NextResponse.json(
      { error: isConfig ? message : 'Error al enviar mensaje' },
      { status: isConfig ? 503 : 500 },
    )
  }
}
