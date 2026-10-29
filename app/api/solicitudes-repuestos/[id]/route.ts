import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureSolicitudesRepuestosTable } from '@/lib/db-init'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureSolicitudesRepuestosTable()

  const { id } = await params
  const { estado, guiaDespachoId } = await req.json()
  if (estado && !['nueva', 'en_proceso', 'descartada'].includes(estado)) {
    return NextResponse.json({ error: 'estado inválido' }, { status: 400 })
  }

  const rows = await sql`
    UPDATE solicitudes_repuestos SET
      estado           = COALESCE(${estado ?? null}, estado),
      guia_despacho_id = COALESCE(${guiaDespachoId ?? null}, guia_despacho_id),
      updated_at       = NOW()
    WHERE id = ${id}
    RETURNING id, estado, guia_despacho_id AS "guiaDespachoId"
  `
  if (!rows[0]) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(rows[0])
}
