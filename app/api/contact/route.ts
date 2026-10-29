import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, sendAutoReplyEmail } from '@/lib/email'
import { sql } from '@/lib/db'
import { ensureSolicitudesRepuestosTable } from '@/lib/db-init'
import { makeId } from '@/lib/solicitudes-repuestos-store'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      nombre, email, telefono, mensaje, tipo, lang, website,
      empresa, tipo_servicio, tipo_inmueble, superficie,
      ciudad, presupuesto, urgencia, descripcion,
      equipo, items, itemsLibres,
    } = body

    // Honeypot: bots fill hidden 'website' field; silently accept to avoid revealing detection
    if (website) return NextResponse.json({ ok: true })

    if (!nombre || !email) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    if (tipo === 'cotizacion_repuestos') {
      // Requiere al menos un ítem seleccionado del catálogo o un ítem libre
      if ((!Array.isArray(items) || items.length === 0) && (!Array.isArray(itemsLibres) || itemsLibres.length === 0)) {
        return NextResponse.json({ error: 'Selecciona al menos un repuesto o agrega uno' }, { status: 400 })
      }
    } else if (tipo === 'cotizacion' ? !descripcion && !mensaje : !mensaje) {
      // For cotizacion, require at least a description; for contacto, require mensaje
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    await sendContactEmail({
      nombre, email,
      telefono: telefono ?? '',
      mensaje: mensaje ?? '',
      tipo: tipo ?? 'contacto',
      empresa, tipo_servicio, tipo_inmueble, superficie,
      ciudad, presupuesto, urgencia, descripcion,
      equipo, items, itemsLibres,
    })

    if (tipo === 'cotizacion_repuestos') {
      // Persiste la solicitud para que el admin pueda generar la guía de
      // despacho desde ella — el email por sí solo no queda en ningún listado.
      try {
        await ensureSolicitudesRepuestosTable()
        await sql`
          INSERT INTO solicitudes_repuestos
            (id, nombre, empresa, email, telefono, equipo, urgencia, items, items_libres, lang)
          VALUES
            (${makeId()}, ${nombre}, ${empresa ?? ''}, ${email}, ${telefono ?? ''},
             ${equipo ?? ''}, ${urgencia ?? ''},
             ${JSON.stringify(items ?? [])}, ${JSON.stringify(itemsLibres ?? [])},
             ${lang === 'en' ? 'en' : 'es'})
        `
      } catch (err) {
        console.error('[solicitudes-repuestos]', err instanceof Error ? err.message : err)
      }
    }

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
