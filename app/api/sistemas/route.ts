import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureSistemasTable } from '@/lib/db-init'
import type { SistemaTipo } from '@/lib/sistemas-store'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

function isTipo(v: string | null): v is SistemaTipo {
  return v === 'vrv' || v === 'rooftop'
}

export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureSistemasTable()

  const tipo = req.nextUrl.searchParams.get('tipo')
  if (!isTipo(tipo)) {
    return NextResponse.json({ error: 'Parámetro "tipo" inválido (vrv | rooftop)' }, { status: 400 })
  }

  const rows = await sql`
    SELECT
      id, tipo, codigo, cliente, fecha,
      estado, data,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
    FROM informes_sistemas
    WHERE tipo = ${tipo}
    ORDER BY updated_at DESC
  `
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureSistemasTable()

  const { id, tipo, codigo, cliente, fecha, estado, data, parentId } = await req.json()
  if (!isTipo(tipo)) {
    return NextResponse.json({ error: 'Parámetro "tipo" inválido (vrv | rooftop)' }, { status: 400 })
  }

  const [row] = await sql`
    INSERT INTO informes_sistemas
      (id, tipo, codigo, cliente, fecha, estado, data, parent_id)
    VALUES
      (${id}, ${tipo}, ${codigo ?? ''}, ${cliente ?? ''}, ${fecha ?? ''},
       ${estado}, ${JSON.stringify(data)}, ${parentId ?? null})
    RETURNING
      id, tipo, codigo, cliente, fecha, estado,
      created_at AS "createdAt",
      updated_at AS "updatedAt",
      parent_id  AS "parentId"
  `
  return NextResponse.json(row, { status: 201 })
}
