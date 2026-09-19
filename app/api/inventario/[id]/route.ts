import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureInventarioTables } from '@/lib/db-init'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureInventarioTables()

  const { id } = await params
  const rows = await sql`
    SELECT
      id, sku, nombre, categoria, unidad,
      stock_actual   AS "stockActual",
      stock_minimo   AS "stockMinimo",
      costo_unitario AS "costoUnitario",
      ubicacion, notas,
      created_at AS "createdAt",
      updated_at AS "updatedAt"
    FROM inventario_items
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
  await ensureInventarioTables()

  const { id } = await params
  const { sku, nombre, categoria, unidad, stockMinimo, costoUnitario, ubicacion, notas } = await req.json()

  const rows = await sql`
    UPDATE inventario_items SET
      sku            = ${sku ?? ''},
      nombre         = ${nombre ?? ''},
      categoria      = ${categoria ?? ''},
      unidad         = ${unidad ?? 'un'},
      stock_minimo   = ${stockMinimo ?? 0},
      costo_unitario = ${costoUnitario ?? null},
      ubicacion      = ${ubicacion ?? ''},
      notas          = ${notas ?? ''},
      updated_at     = NOW()
    WHERE id = ${id}
    RETURNING
      id, sku, nombre, categoria, unidad,
      stock_actual   AS "stockActual",
      stock_minimo   AS "stockMinimo",
      costo_unitario AS "costoUnitario",
      ubicacion, notas,
      created_at AS "createdAt",
      updated_at AS "updatedAt"
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
  await ensureInventarioTables()

  const { id } = await params
  await sql`DELETE FROM inventario_items WHERE id = ${id}`
  return NextResponse.json({ ok: true })
}
