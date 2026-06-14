import type { MembreteRecord, MembreteData } from './membretes-store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToRecord(r: any): MembreteRecord {
  return {
    id: r.id,
    asunto: r.asunto ?? '',
    destinatario: r.destinatario ?? '',
    ciudadFecha: r.ciudadFecha ?? r.ciudad_fecha ?? '',
    estado: r.estado,
    data: typeof r.data === 'string' ? JSON.parse(r.data) : (r.data ?? {}),
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
    updatedAt: r.updatedAt ?? (r.updated_at instanceof Date ? r.updated_at.toISOString() : String(r.updated_at)),
    parentId: r.parentId ?? r.parent_id ?? undefined,
  }
}

export async function apiFetchHistory(): Promise<MembreteRecord[]> {
  const res = await fetch('/api/membretes')
  if (!res.ok) throw new Error('Error al cargar historial')
  const rows = await res.json()
  return rows.map(rowToRecord)
}

export async function apiFetchRecord(id: string): Promise<MembreteRecord | null> {
  const res = await fetch(`/api/membretes/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Error al cargar membrete')
  return rowToRecord(await res.json())
}

export async function apiCreateRecord(
  id: string,
  data: MembreteData,
  estado: 'borrador' | 'emitido',
  parentId?: string,
): Promise<MembreteRecord> {
  const res = await fetch('/api/membretes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      asunto: data.asunto,
      destinatario: data.destinatario,
      ciudadFecha: data.ciudadFecha,
      estado,
      data,
      parentId: parentId ?? null,
    }),
  })
  if (!res.ok) throw new Error('Error al crear membrete')
  return rowToRecord(await res.json())
}

export async function apiUpdateRecord(
  id: string,
  data: MembreteData,
  estado: 'borrador' | 'emitido',
): Promise<void> {
  const res = await fetch(`/api/membretes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      asunto: data.asunto,
      destinatario: data.destinatario,
      ciudadFecha: data.ciudadFecha,
      estado,
      data,
    }),
  })
  if (!res.ok) throw new Error('Error al actualizar membrete')
}

export async function apiDeleteRecord(id: string): Promise<void> {
  const res = await fetch(`/api/membretes/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar membrete')
}
