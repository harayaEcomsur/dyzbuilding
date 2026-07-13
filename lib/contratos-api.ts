import type { ContratoRecord, ContratoData, ContratoEstado, ContratoTipo } from './contratos-store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToRecord(r: any): ContratoRecord {
  return {
    id: r.id,
    numero: r.numero ?? '',
    contraparte: r.contraparte ?? '',
    fecha: r.fecha ?? '',
    tipo: r.tipo ?? 'prestacion_servicios',
    estado: r.estado,
    data: typeof r.data === 'string' ? JSON.parse(r.data) : (r.data ?? {}),
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
    updatedAt: r.updatedAt ?? (r.updated_at instanceof Date ? r.updated_at.toISOString() : String(r.updated_at)),
    parentId: r.parentId ?? r.parent_id ?? undefined,
  }
}

export async function apiFetchHistory(): Promise<ContratoRecord[]> {
  const res = await fetch('/api/contratos')
  if (!res.ok) throw new Error('Error al cargar historial')
  const rows = await res.json()
  return rows.map(rowToRecord)
}

export async function apiFetchRecord(id: string): Promise<ContratoRecord | null> {
  const res = await fetch(`/api/contratos/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Error al cargar contrato')
  return rowToRecord(await res.json())
}

export async function apiCreateRecord(
  id: string,
  data: ContratoData,
  estado: ContratoEstado,
  parentId?: string,
): Promise<ContratoRecord> {
  const res = await fetch('/api/contratos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      numero: data.meta.numero,
      contraparte: data.partes.contratista.nombre,
      fecha: data.meta.fecha,
      tipo: data.meta.tipo,
      estado,
      data,
      parentId: parentId ?? null,
    }),
  })
  if (!res.ok) throw new Error('Error al crear contrato')
  return rowToRecord(await res.json())
}

export async function apiUpdateRecord(
  id: string,
  data: ContratoData,
  estado: ContratoEstado,
): Promise<void> {
  const res = await fetch(`/api/contratos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      numero: data.meta.numero,
      contraparte: data.partes.contratista.nombre,
      fecha: data.meta.fecha,
      tipo: data.meta.tipo,
      estado,
      data,
    }),
  })
  if (!res.ok) throw new Error('Error al actualizar contrato')
}

export async function apiDeleteRecord(id: string): Promise<void> {
  const res = await fetch(`/api/contratos/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar contrato')
}

export type { ContratoTipo }
