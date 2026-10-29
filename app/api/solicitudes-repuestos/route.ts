import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureSolicitudesRepuestosTable } from '@/lib/db-init'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET() {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureSolicitudesRepuestosTable()

  const rows = await sql`
    SELECT
      id, nombre, empresa, email, telefono, equipo, urgencia,
      items, items_libres AS "itemsLibres",
      estado, guia_despacho_id AS "guiaDespachoId", lang,
      created_at AS "createdAt",
      updated_at AS "updatedAt"
    FROM solicitudes_repuestos
    ORDER BY created_at DESC
  `
  return NextResponse.json(rows)
}
