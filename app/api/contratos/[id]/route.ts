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
      id, numero, contraparte, fecha, tipo,
      estado, data,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
    FROM contratos
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
  const { numero, contraparte, fecha, tipo, estado, data } = await req.json()

  const rows = await sql`
    UPDATE contratos SET
      numero      = ${numero ?? ''},
      contraparte = ${contraparte ?? ''},
      fecha       = ${fecha ?? ''},
      tipo        = ${tipo ?? 'prestacion_servicios'},
      estado      = ${estado},
      data        = ${JSON.stringify(data)},
      updated_at  = NOW()
    WHERE id = ${id}
    RETURNING
      id, numero, contraparte, fecha, tipo, estado,
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
  await sql`DELETE FROM contratos WHERE id = ${id}`
  return NextResponse.json({ ok: true })
}
