import { NextResponse } from 'next/server'
import { getCatalogoPublico } from '@/lib/catalogo-data'

// Endpoint público (sin sesión) para el catálogo /repuestos. Solo selecciona
// columnas seguras para mostrar al público — nunca stock, costo ni ubicación,
// ni siquiera en la query SQL, para que no puedan filtrarse por error.
export async function GET() {
  const rows = await getCatalogoPublico()
  return NextResponse.json(rows)
}
