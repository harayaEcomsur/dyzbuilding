import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureGuiasDespachoTable } from '@/lib/db-init'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET() {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureGuiasDespachoTable()

  const rows = await sql`
    SELECT
      id, numero, receptor, fecha,
      estado, data,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
    FROM guias_despacho
    ORDER BY updated_at DESC
  `
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureGuiasDespachoTable()

  const { id, numero, receptor, fecha, estado, data, parentId } = await req.json()

  const [row] = await sql`
    INSERT INTO guias_despacho
      (id, numero, receptor, fecha, estado, data, parent_id)
    VALUES
      (${id}, ${numero ?? ''}, ${receptor ?? ''}, ${fecha ?? ''},
       ${estado}, ${JSON.stringify(data)}, ${parentId ?? null})
    RETURNING
      id, numero, receptor, fecha, estado,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
  `
  return NextResponse.json(row, { status: 201 })
}
