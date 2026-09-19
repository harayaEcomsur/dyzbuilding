import type { GuiaDespachoRecord, GuiaDespachoData, GuiaEstado } from './guias-despacho-store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToRecord(r: any): GuiaDespachoRecord {
  return {
    id: r.id,
    numero: r.numero ?? '',
    receptor: r.receptor ?? '',
    fecha: r.fecha ?? '',
    estado: r.estado,
    data: typeof r.data === 'string' ? JSON.parse(r.data) : (r.data ?? {}),
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
    updatedAt: r.updatedAt ?? (r.updated_at instanceof Date ? r.updated_at.toISOString() : String(r.updated_at)),
    parentId: r.parentId ?? r.parent_id ?? undefined,
  }
}

export async function apiFetchHistory(): Promise<GuiaDespachoRecord[]> {
  const res = await fetch('/api/guias-despacho')
  if (!res.ok) throw new Error('Error al cargar historial')
  const rows = await res.json()
  return rows.map(rowToRecord)
}

export async function apiFetchRecord(id: string): Promise<GuiaDespachoRecord | null> {
  const res = await fetch(`/api/guias-despacho/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Error al cargar guía de despacho')
  return rowToRecord(await res.json())
}

export async function apiCreateRecord(
  id: string,
  data: GuiaDespachoData,
  estado: GuiaEstado,
  parentId?: string,
): Promise<GuiaDespachoRecord> {
  const res = await fetch('/api/guias-despacho', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      numero: data.meta.numero,
      receptor: data.receptor.nombre,
      fecha: data.meta.fecha,
      estado,
      data,
      parentId: parentId ?? null,
    }),
  })
  if (!res.ok) throw new Error('Error al crear guía de despacho')
  return rowToRecord(await res.json())
}

export async function apiUpdateRecord(
  id: string,
  data: GuiaDespachoData,
  estado: GuiaEstado,
): Promise<void> {
  const res = await fetch(`/api/guias-despacho/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      numero: data.meta.numero,
      receptor: data.receptor.nombre,
      fecha: data.meta.fecha,
      estado,
      data,
    }),
  })
  if (!res.ok) throw new Error('Error al actualizar guía de despacho')
}

export async function apiDeleteRecord(id: string): Promise<void> {
  const res = await fetch(`/api/guias-despacho/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar guía de despacho')
}
