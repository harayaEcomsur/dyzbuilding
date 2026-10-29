import type { SolicitudRepuestosRecord, SolicitudEstado } from './solicitudes-repuestos-store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToRecord(r: any): SolicitudRepuestosRecord {
  return {
    id: r.id,
    nombre: r.nombre ?? '',
    empresa: r.empresa ?? '',
    email: r.email ?? '',
    telefono: r.telefono ?? '',
    equipo: r.equipo ?? '',
    urgencia: r.urgencia ?? '',
    items: typeof r.items === 'string' ? JSON.parse(r.items) : (r.items ?? []),
    itemsLibres: (typeof r.itemsLibres === 'string' ? JSON.parse(r.itemsLibres) : r.itemsLibres)
      ?? (typeof r.items_libres === 'string' ? JSON.parse(r.items_libres) : r.items_libres) ?? [],
    estado: r.estado,
    guiaDespachoId: r.guiaDespachoId ?? r.guia_despacho_id ?? null,
    lang: r.lang === 'en' ? 'en' : 'es',
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
    updatedAt: r.updatedAt ?? (r.updated_at instanceof Date ? r.updated_at.toISOString() : String(r.updated_at)),
  }
}

export async function apiFetchSolicitudesRepuestos(): Promise<SolicitudRepuestosRecord[]> {
  const res = await fetch('/api/solicitudes-repuestos')
  if (!res.ok) throw new Error('Error al cargar solicitudes')
  const rows = await res.json()
  return rows.map(rowToRecord)
}

export async function apiUpdateSolicitudRepuestos(
  id: string,
  patch: { estado?: SolicitudEstado; guiaDespachoId?: string },
): Promise<void> {
  const res = await fetch(`/api/solicitudes-repuestos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch),
  })
  if (!res.ok) throw new Error('Error al actualizar la solicitud')
}
