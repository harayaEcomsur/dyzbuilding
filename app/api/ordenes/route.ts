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
      id, numero, proveedor, fecha, moneda, total,
      estado, data,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
    FROM ordenes_compra
    ORDER BY updated_at DESC
  `
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()

  const { id, numero, proveedor, fecha, moneda, total, estado, data, parentId } = await req.json()

  const [row] = await sql`
    INSERT INTO ordenes_compra
      (id, numero, proveedor, fecha, moneda, total, estado, data, parent_id)
    VALUES
      (${id}, ${numero ?? ''}, ${proveedor ?? ''}, ${fecha ?? ''},
       ${moneda ?? 'CLP'}, ${total ?? 0}, ${estado}, ${JSON.stringify(data)}, ${parentId ?? null})
    RETURNING
      id, numero, proveedor, fecha, moneda, total, estado,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
  `
  return NextResponse.json(row, { status: 201 })
}
