import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureMarcasTable } from '@/lib/db-init'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureMarcasTable()

  const { id } = await params
  const { nombre, logoUrl, orden } = await req.json()

  const rows = await sql`
    UPDATE marcas SET
      nombre   = ${nombre ?? ''},
      logo_url = ${logoUrl ?? ''},
      orden    = ${orden ?? 0}
    WHERE id = ${id}
    RETURNING id, nombre, logo_url AS "logoUrl", orden, created_at AS "createdAt"
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
  await ensureMarcasTable()

  const { id } = await params
  await sql`DELETE FROM marcas WHERE id = ${id}`
  return NextResponse.json({ ok: true })
}
