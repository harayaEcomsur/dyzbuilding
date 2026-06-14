import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession()
  if (!session?.role) return unauth()

  const { id } = await params
  const rows = await sql`
    SELECT
      id, codigo, cliente, fecha,
      estado, data,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
    FROM informes
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

  const { id } = await params
  const { codigo, cliente, fecha, estado, data } = await req.json()

  const rows = await sql`
    UPDATE informes SET
      codigo     = ${codigo ?? ''},
      cliente    = ${cliente ?? ''},
      fecha      = ${fecha ?? ''},
      estado     = ${estado},
      data       = ${JSON.stringify(data)},
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING
      id, codigo, cliente, fecha, estado,
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

  const { id } = await params
  await sql`DELETE FROM informes WHERE id = ${id}`
  return NextResponse.json({ ok: true })
}
