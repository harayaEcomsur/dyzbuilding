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
      id, numero,
      cliente_nombre  AS "clienteNombre",
      cliente_empresa AS "clienteEmpresa",
      fecha, moneda,
      total::float    AS total,
      estado, data,
      created_at      AS "createdAt",
      updated_at      AS "updatedAt",
      parent_id       AS "parentId"
    FROM cotizaciones
    ORDER BY updated_at DESC
  `
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()

  const { id, numero, clienteNombre, clienteEmpresa, fecha, moneda, total, estado, data, parentId } =
    await req.json()

  const [row] = await sql`
    INSERT INTO cotizaciones
      (id, numero, cliente_nombre, cliente_empresa, fecha, moneda, total, estado, data, parent_id)
    VALUES
      (${id}, ${numero}, ${clienteNombre ?? ''}, ${clienteEmpresa ?? ''},
       ${fecha}, ${moneda}, ${total}, ${estado},
       ${JSON.stringify(data)}, ${parentId ?? null})
    RETURNING
      id, numero,
      cliente_nombre  AS "clienteNombre",
      cliente_empresa AS "clienteEmpresa",
      fecha, moneda,
      total::float    AS total,
      estado,
      created_at      AS "createdAt",
      updated_at      AS "updatedAt",
      parent_id       AS "parentId"
  `
  return NextResponse.json(row, { status: 201 })
}
