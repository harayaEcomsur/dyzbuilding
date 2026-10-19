import 'server-only'
import { sql } from './db'
import { ensureInventarioTables, ensureMarcasTable } from './db-init'

// Datos públicos del catálogo de repuestos (/repuestos, /en/parts) — compartido
// entre las API routes y el render en servidor de las páginas públicas, para
// que el contenido (productos y marcas) esté en el HTML inicial y sea
// indexable, no solo cargado por fetch del lado del cliente.

export interface CatalogoItem {
  id: string
  nombre: string
  categoria: string
  unidad: string
  marca: string
  imagenes: string[]
  compatibilidad: string
}

export interface MarcaLite {
  id: string
  nombre: string
  logoUrl: string
  orden: number
  createdAt: string
}

export async function getCatalogoPublico(): Promise<CatalogoItem[]> {
  await ensureInventarioTables()
  const rows = await sql`
    SELECT id, nombre, categoria, unidad, marca, imagenes, compatibilidad
    FROM inventario_items
    WHERE publicado = true
    ORDER BY marca ASC, nombre ASC
  `
  return rows as unknown as CatalogoItem[]
}

export async function getMarcasPublicas(): Promise<MarcaLite[]> {
  await ensureMarcasTable()
  const rows = await sql`
    SELECT id, nombre, logo_url AS "logoUrl", orden, created_at AS "createdAt"
    FROM marcas
    ORDER BY orden ASC, nombre ASC
  `
  return rows as unknown as MarcaLite[]
}
