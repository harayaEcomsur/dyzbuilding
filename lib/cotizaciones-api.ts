import type { CotizacionRecord, QuotationData } from './cotizaciones-store'
import { calcTotal } from './cotizaciones-store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToRecord(r: any): CotizacionRecord {
  return {
    id: r.id,
    numero: r.numero,
    clienteNombre: r.clienteNombre ?? r.cliente_nombre ?? '',
    clienteEmpresa: r.clienteEmpresa ?? r.cliente_empresa ?? '',
    fecha: r.fecha,
    moneda: r.moneda,
    total: parseFloat(r.total) || 0,
    estado: r.estado,
    data: typeof r.data === 'string' ? JSON.parse(r.data) : (r.data ?? {}),
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
    updatedAt: r.updatedAt ?? (r.updated_at instanceof Date ? r.updated_at.toISOString() : String(r.updated_at)),
    parentId: r.parentId ?? r.parent_id ?? undefined,
  }
}

export async function apiFetchHistory(): Promise<CotizacionRecord[]> {
  const res = await fetch('/api/cotizaciones')
  if (!res.ok) throw new Error('Error al cargar historial')
  const rows = await res.json()
  return rows.map(rowToRecord)
}

export async function apiFetchRecord(id: string): Promise<CotizacionRecord | null> {
  const res = await fetch(`/api/cotizaciones/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Error al cargar cotización')
  return rowToRecord(await res.json())
}

export async function apiCreateRecord(
  id: string,
  data: QuotationData,
  estado: 'borrador' | 'emitida',
  parentId?: string,
): Promise<CotizacionRecord> {
  const res = await fetch('/api/cotizaciones', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      numero: data.numero,
      clienteNombre: data.clienteNombre,
      clienteEmpresa: data.clienteEmpresa,
      fecha: data.fecha,
      moneda: data.moneda,
      total: calcTotal(data),
      estado,
      data,
      parentId: parentId ?? null,
    }),
  })
  if (!res.ok) throw new Error('Error al crear cotización')
  return rowToRecord(await res.json())
}

export async function apiUpdateRecord(
  id: string,
  data: QuotationData,
  estado: 'borrador' | 'emitida',
): Promise<void> {
  const res = await fetch(`/api/cotizaciones/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      numero: data.numero,
      clienteNombre: data.clienteNombre,
      clienteEmpresa: data.clienteEmpresa,
      fecha: data.fecha,
      moneda: data.moneda,
      total: calcTotal(data),
      estado,
      data,
    }),
  })
  if (!res.ok) throw new Error('Error al actualizar cotización')
}

export async function apiDeleteRecord(id: string): Promise<void> {
  const res = await fetch(`/api/cotizaciones/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar cotización')
}
