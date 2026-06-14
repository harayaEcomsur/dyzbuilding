import type { InformeRecord, InformeData } from './informes-store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToRecord(r: any): InformeRecord {
  return {
    id: r.id,
    codigo: r.codigo ?? '',
    cliente: r.cliente ?? '',
    fecha: r.fecha ?? '',
    estado: r.estado,
    data: typeof r.data === 'string' ? JSON.parse(r.data) : (r.data ?? {}),
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
    updatedAt: r.updatedAt ?? (r.updated_at instanceof Date ? r.updated_at.toISOString() : String(r.updated_at)),
    parentId: r.parentId ?? r.parent_id ?? undefined,
  }
}

export async function apiFetchHistory(): Promise<InformeRecord[]> {
  const res = await fetch('/api/informes')
  if (!res.ok) throw new Error('Error al cargar historial')
  const rows = await res.json()
  return rows.map(rowToRecord)
}

export async function apiFetchRecord(id: string): Promise<InformeRecord | null> {
  const res = await fetch(`/api/informes/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Error al cargar informe')
  return rowToRecord(await res.json())
}

export async function apiCreateRecord(
  id: string,
  data: InformeData,
  estado: 'borrador' | 'emitido',
  parentId?: string,
): Promise<InformeRecord> {
  const res = await fetch('/api/informes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      codigo: data.meta.codigo,
      cliente: data.meta.cliente,
      fecha: data.meta.fecha,
      estado,
      data,
      parentId: parentId ?? null,
    }),
  })
  if (!res.ok) throw new Error('Error al crear informe')
  return rowToRecord(await res.json())
}

export async function apiUpdateRecord(
  id: string,
  data: InformeData,
  estado: 'borrador' | 'emitido',
): Promise<void> {
  const res = await fetch(`/api/informes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      codigo: data.meta.codigo,
      cliente: data.meta.cliente,
      fecha: data.meta.fecha,
      estado,
      data,
    }),
  })
  if (!res.ok) throw new Error('Error al actualizar informe')
}

export async function apiDeleteRecord(id: string): Promise<void> {
  const res = await fetch(`/api/informes/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar informe')
}
