import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureMarcasTable } from '@/lib/db-init'
import { makeId } from '@/lib/marcas-store'
import { getMarcasPublicas } from '@/lib/catalogo-data'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

// Lectura pública — la usa tanto el admin como el catálogo público /repuestos.
// No contiene datos sensibles (solo nombre + logo).
export async function GET() {
  const rows = await getMarcasPublicas()
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureMarcasTable()

  const { nombre, logoUrl, orden } = await req.json()

  const [row] = await sql`
    INSERT INTO marcas (id, nombre, logo_url, orden)
    VALUES (${makeId()}, ${nombre ?? ''}, ${logoUrl ?? ''}, ${orden ?? 0})
    RETURNING id, nombre, logo_url AS "logoUrl", orden, created_at AS "createdAt"
  `
  return NextResponse.json(row, { status: 201 })
}
