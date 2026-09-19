import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureInventarioTables } from '@/lib/db-init'
import { makeId } from '@/lib/inventario-store'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET() {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureInventarioTables()

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
    ORDER BY nombre ASC
  `
  return NextResponse.json(rows)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureInventarioTables()

  const { sku, nombre, categoria, unidad, stockMinimo, costoUnitario, ubicacion, notas } = await req.json()

  const [row] = await sql`
    INSERT INTO inventario_items
      (id, sku, nombre, categoria, unidad, stock_actual, stock_minimo, costo_unitario, ubicacion, notas)
    VALUES
      (${makeId()}, ${sku ?? ''}, ${nombre ?? ''}, ${categoria ?? ''}, ${unidad ?? 'un'},
       0, ${stockMinimo ?? 0}, ${costoUnitario ?? null}, ${ubicacion ?? ''}, ${notas ?? ''})
    RETURNING
      id, sku, nombre, categoria, unidad,
      stock_actual   AS "stockActual",
      stock_minimo   AS "stockMinimo",
      costo_unitario AS "costoUnitario",
      ubicacion, notas,
      created_at AS "createdAt",
      updated_at AS "updatedAt"
  `
  return NextResponse.json(row, { status: 201 })
}
