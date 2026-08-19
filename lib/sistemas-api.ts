import type { SistemaRecord, SistemaData, SistemaTipo, EstadoDoc } from './sistemas-store'
import { compressImage } from './image-compress'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToRecord(r: any): SistemaRecord {
  return {
    id: r.id,
    tipo: r.tipo,
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

export async function apiFetchSistemaHistory(tipo: SistemaTipo): Promise<SistemaRecord[]> {
  const res = await fetch(`/api/sistemas?tipo=${tipo}`)
  if (!res.ok) throw new Error('Error al cargar historial')
  const rows = await res.json()
  return rows.map(rowToRecord)
}

export async function apiFetchSistemaRecord(id: string): Promise<SistemaRecord | null> {
  const res = await fetch(`/api/sistemas/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Error al cargar informe')
  return rowToRecord(await res.json())
}

export async function apiCreateSistemaRecord(
  id: string,
  tipo: SistemaTipo,
  data: SistemaData,
  estado: EstadoDoc,
  parentId?: string,
): Promise<SistemaRecord> {
  const res = await fetch('/api/sistemas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id, tipo,
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

export async function apiUpdateSistemaRecord(
  id: string,
  data: SistemaData,
  estado: EstadoDoc,
): Promise<void> {
  const res = await fetch(`/api/sistemas/${id}`, {
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

export async function apiDeleteSistemaRecord(id: string): Promise<void> {
  const res = await fetch(`/api/sistemas/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar informe')
}

export async function apiUploadFoto(
  file: File,
  folder: string,
  compress: { maxDimension?: number; quality?: number } = {},
): Promise<string> {
  const uploadFile = await compressImage(file, compress)
  const form = new FormData()
  form.append('file', uploadFile)
  form.append('folder', folder)
  const res = await fetch('/api/upload', { method: 'POST', body: form })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error ?? 'Error al subir archivo')
  }
  const { url } = await res.json()
  return url as string
}
