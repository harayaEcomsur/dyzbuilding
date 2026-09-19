import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureGuiasDespachoTable } from '@/lib/db-init'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureGuiasDespachoTable()

  const { id } = await params
  const rows = await sql`
    SELECT
      id, numero, receptor, fecha,
      estado, data,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
    FROM guias_despacho
    WHERE id = ${id}
  `
  if (!rows[0]) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(rows[0])
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureGuiasDespachoTable()

  const { id } = await params
  const { numero, receptor, fecha, estado, data } = await req.json()

  const rows = await sql`
    UPDATE guias_despacho SET
      numero     = ${numero ?? ''},
      receptor   = ${receptor ?? ''},
      fecha      = ${fecha ?? ''},
      estado     = ${estado},
      data       = ${JSON.stringify(data)},
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING
      id, numero, receptor, fecha, estado,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
  `
  if (!rows[0]) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(rows[0])
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureGuiasDespachoTable()

  const { id } = await params
  await sql`DELETE FROM guias_despacho WHERE id = ${id}`
  return NextResponse.json({ ok: true })
}
