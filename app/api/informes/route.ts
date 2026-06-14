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
      id, codigo, cliente, fecha,
      estado, data,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
    FROM informes
    ORDER BY updated_at DESC
  `
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()

  const { id, codigo, cliente, fecha, estado, data, parentId } = await req.json()

  const [row] = await sql`
    INSERT INTO informes
      (id, codigo, cliente, fecha, estado, data, parent_id)
    VALUES
      (${id}, ${codigo ?? ''}, ${cliente ?? ''}, ${fecha ?? ''},
       ${estado}, ${JSON.stringify(data)}, ${parentId ?? null})
    RETURNING
      id, codigo, cliente, fecha, estado,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
  `
  return NextResponse.json(row, { status: 201 })
}
