import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { ensureInventarioTables } from '@/lib/db-init'

// Endpoint público (sin sesión) para el catálogo /repuestos. Solo selecciona
// columnas seguras para mostrar al público — nunca stock, costo ni ubicación,
// ni siquiera en la query SQL, para que no puedan filtrarse por error.
export async function GET() {
  await ensureInventarioTables()

  const rows = await sql`
    SELECT id, nombre, categoria, unidad, marca, imagenes, compatibilidad
    FROM inventario_items
    WHERE publicado = true
    ORDER BY marca ASC, nombre ASC
  `
  return NextResponse.json(rows)
}
