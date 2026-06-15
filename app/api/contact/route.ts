import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, email, telefono, mensaje, tipo } = body

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    await sendContactEmail({ nombre, email, telefono: telefono ?? '', mensaje, tipo: tipo ?? 'contacto' })
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
