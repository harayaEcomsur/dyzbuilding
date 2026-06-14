import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET() {
  const session = await getSession()
  if (!session?.role) return unauth()

  const rows = await sql`
    SELECT
      id, asunto, destinatario,
      ciudad_fecha AS "ciudadFecha",
      estado, data,
      created_at   AS "createdAt",
      updated_at   AS "updatedAt",
      parent_id    AS "parentId"
    FROM membretes
    ORDER BY updated_at DESC
  `
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()

  const { id, asunto, destinatario, ciudadFecha, estado, data, parentId } =
    await req.json()

  const [row] = await sql`
    INSERT INTO membretes
      (id, asunto, destinatario, ciudad_fecha, estado, data, parent_id)
    VALUES
      (${id}, ${asunto ?? ''}, ${destinatario ?? ''}, ${ciudadFecha ?? ''},
       ${estado}, ${JSON.stringify(data)}, ${parentId ?? null})
    RETURNING
      id, asunto, destinatario,
      ciudad_fecha AS "ciudadFecha",
      estado,
      created_at   AS "createdAt",
      updated_at   AS "updatedAt",
      parent_id    AS "parentId"
  `
  return NextResponse.json(row, { status: 201 })
}
