import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { ensureCotizacionesColumns, ensureInventarioTables, ensureGuiasDespachoTable, ensureSolicitudesRepuestosTable } from '@/lib/db-init'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET() {
  const session = await getSession()
  if (!session?.role) return unauth()

  await Promise.all([
    ensureCotizacionesColumns(),
    ensureInventarioTables(),
    ensureGuiasDespachoTable(),
    ensureSolicitudesRepuestosTable(),
  ])

  const [cotStats] = await sql`
    SELECT
      COUNT(*)::int                                                  AS "total",
      COUNT(*) FILTER (WHERE estado = 'borrador')::int                AS "borradores",
      COUNT(*) FILTER (WHERE estado = 'emitida')::int                 AS "emitidas",
      COUNT(*) FILTER (WHERE estado = 'emitida' AND estado_cliente = 'pendiente')::int  AS "pendientes",
      COUNT(*) FILTER (WHERE estado_cliente = 'aprobada')::int        AS "aprobadas",
      COUNT(*) FILTER (WHERE estado_cliente = 'rechazada')::int       AS "rechazadas",
      COALESCE(AVG(total) FILTER (WHERE estado = 'emitida' AND total > 0), 0)::float     AS "montoPromedio",
      COALESCE(SUM(total) FILTER (WHERE estado_cliente = 'aprobada'), 0)::float          AS "montoAprobado"
    FROM cotizaciones
  `

  const recientes = await sql`
    SELECT
      id, numero,
      cliente_nombre  AS "clienteNombre",
      cliente_empresa AS "clienteEmpresa",
      total::float    AS total,
      moneda,
      estado,
      estado_cliente  AS "estadoCliente",
      updated_at      AS "updatedAt"
    FROM cotizaciones
    ORDER BY updated_at DESC
    LIMIT 5
  `

  const [ordenesStats] = await sql`
    SELECT
      COUNT(*)::int                                            AS "total",
      COUNT(*) FILTER (WHERE estado = 'borrador')::int          AS "borradores",
      COALESCE(SUM(total) FILTER (WHERE estado = 'emitida'), 0)::float AS "montoTotal"
    FROM ordenes_compra
  `

  const [contratosStats] = await sql`
    SELECT
      COUNT(*)::int                                   AS "total",
      COUNT(*) FILTER (WHERE estado = 'borrador')::int AS "borradores",
      COUNT(*) FILTER (WHERE estado = 'emitido')::int  AS "emitidos"
    FROM contratos
  `

  const [inventarioStats] = await sql`
    SELECT
      COUNT(*)::int                                                AS "total",
      COUNT(*) FILTER (WHERE stock_actual <= stock_minimo)::int     AS "bajoStock",
      COUNT(*) FILTER (WHERE publicado)::int                        AS "publicados"
    FROM inventario_items
  `

  const [guiasStats] = await sql`
    SELECT
      COUNT(*)::int                                                              AS "total",
      COUNT(*) FILTER (WHERE created_at >= date_trunc('month', NOW()))::int      AS "esteMes"
    FROM guias_despacho
  `

  const [solicitudesStats] = await sql`
    SELECT
      COUNT(*)::int                                     AS "total",
      COUNT(*) FILTER (WHERE estado = 'nueva')::int      AS "nuevas",
      COUNT(*) FILTER (WHERE estado = 'en_proceso')::int AS "enProceso"
    FROM solicitudes_repuestos
  `

  return NextResponse.json({
    cotizaciones: cotStats,
    cotizacionesRecientes: recientes,
    ordenes: ordenesStats,
    contratos: contratosStats,
    inventario: inventarioStats,
    guiasDespacho: guiasStats,
    solicitudesRepuestos: solicitudesStats,
  })
}
