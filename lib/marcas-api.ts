import type { Marca } from './marcas-store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToMarca(r: any): Marca {
  return {
    id: r.id,
    nombre: r.nombre ?? '',
    logoUrl: r.logoUrl ?? r.logo_url ?? '',
    orden: Number(r.orden) || 0,
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
  }
}

export async function apiFetchMarcas(): Promise<Marca[]> {
  const res = await fetch('/api/marcas')
  if (!res.ok) throw new Error('Error al cargar marcas')
  const rows = await res.json()
  return rows.map(rowToMarca)
}

export async function apiCreateMarca(nombre: string, logoUrl: string, orden: number): Promise<Marca> {
  const res = await fetch('/api/marcas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, logoUrl, orden }),
  })
  if (!res.ok) throw new Error('Error al crear la marca')
  return rowToMarca(await res.json())
}

export async function apiUpdateMarca(id: string, nombre: string, logoUrl: string, orden: number): Promise<Marca> {
  const res = await fetch(`/api/marcas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, logoUrl, orden }),
  })
  if (!res.ok) throw new Error('Error al actualizar la marca')
  return rowToMarca(await res.json())
}

export async function apiDeleteMarca(id: string): Promise<void> {
  const res = await fetch(`/api/marcas/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar la marca')
}
