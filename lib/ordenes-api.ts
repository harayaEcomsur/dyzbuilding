import type { OrdenCompraRecord, OrdenCompraData, OrdenEstado } from './ordenes-store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToRecord(r: any): OrdenCompraRecord {
  return {
    id: r.id,
    numero: r.numero ?? '',
    proveedor: r.proveedor ?? '',
    fecha: r.fecha ?? '',
    moneda: r.moneda ?? 'CLP',
    total: parseFloat(r.total) || 0,
    estado: r.estado,
    data: typeof r.data === 'string' ? JSON.parse(r.data) : (r.data ?? {}),
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
    updatedAt: r.updatedAt ?? (r.updated_at instanceof Date ? r.updated_at.toISOString() : String(r.updated_at)),
    parentId: r.parentId ?? r.parent_id ?? undefined,
  }
}

export async function apiFetchHistory(): Promise<OrdenCompraRecord[]> {
  const res = await fetch('/api/ordenes')
  if (!res.ok) throw new Error('Error al cargar historial')
  const rows = await res.json()
  return rows.map(rowToRecord)
}

export async function apiFetchRecord(id: string): Promise<OrdenCompraRecord | null> {
  const res = await fetch(`/api/ordenes/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Error al cargar orden de compra')
  return rowToRecord(await res.json())
}

export async function apiCreateRecord(
  id: string,
  data: OrdenCompraData,
  estado: OrdenEstado,
  total: number,
  parentId?: string,
): Promise<OrdenCompraRecord> {
  const res = await fetch('/api/ordenes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      numero: data.meta.numero,
      proveedor: data.proveedor.empresa,
      fecha: data.meta.fecha,
      moneda: data.meta.moneda,
      total,
      estado,
      data,
      parentId: parentId ?? null,
    }),
  })
  if (!res.ok) throw new Error('Error al crear orden de compra')
  return rowToRecord(await res.json())
}

export async function apiUpdateRecord(
  id: string,
  data: OrdenCompraData,
  estado: OrdenEstado,
  total: number,
): Promise<void> {
  const res = await fetch(`/api/ordenes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      numero: data.meta.numero,
      proveedor: data.proveedor.empresa,
      fecha: data.meta.fecha,
      moneda: data.meta.moneda,
      total,
      estado,
      data,
    }),
  })
  if (!res.ok) throw new Error('Error al actualizar orden de compra')
}

export async function apiDeleteRecord(id: string): Promise<void> {
  const res = await fetch(`/api/ordenes/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar orden de compra')
}
