import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureInventarioTables } from '@/lib/db-init'
import { makeId, type MovimientoTipo } from '@/lib/inventario-store'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

const TIPOS: MovimientoTipo[] = ['ingreso', 'salida', 'ajuste']

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
      id,
      item_id          AS "itemId",
      tipo, cantidad, motivo, referencia,
      stock_resultante AS "stockResultante",
      created_at       AS "createdAt"
    FROM inventario_movimientos
    WHERE item_id = ${id}
    ORDER BY created_at DESC
  `
  return NextResponse.json(rows)
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getSession()
  if (!session?.role) return unauth()
  await ensureInventarioTables()

  const { id } = await params
  const { tipo, cantidad, motivo, referencia } = await req.json()

  if (!TIPOS.includes(tipo)) {
    return NextResponse.json({ error: 'Tipo de movimiento inválido' }, { status: 400 })
  }
  const cant = Number(cantidad)
  if (!Number.isFinite(cant) || cant < 0) {
    return NextResponse.json({ error: 'Cantidad inválida' }, { status: 400 })
  }

  const [item] = await sql`
    UPDATE inventario_items SET
      stock_actual = CASE
        WHEN ${tipo} = 'ingreso' THEN stock_actual + ${cant}
        WHEN ${tipo} = 'salida'  THEN stock_actual - ${cant}
        ELSE ${cant}
      END,
      updated_at = NOW()
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
  if (!item) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })

  const [movimiento] = await sql`
    INSERT INTO inventario_movimientos
      (id, item_id, tipo, cantidad, motivo, referencia, stock_resultante)
    VALUES
      (${makeId()}, ${id}, ${tipo}, ${cant}, ${motivo ?? ''}, ${referencia ?? null}, ${item.stockActual})
    RETURNING
      id,
      item_id          AS "itemId",
      tipo, cantidad, motivo, referencia,
      stock_resultante AS "stockResultante",
      created_at       AS "createdAt"
  `

  return NextResponse.json({ item, movimiento }, { status: 201 })
}
