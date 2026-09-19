import type { InventarioItem, InventarioMovimiento, MovimientoTipo } from './inventario-store'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToItem(r: any): InventarioItem {
  return {
    id: r.id,
    sku: r.sku ?? '',
    nombre: r.nombre ?? '',
    categoria: r.categoria ?? '',
    unidad: r.unidad ?? 'un',
    stockActual: parseFloat(r.stockActual ?? r.stock_actual) || 0,
    stockMinimo: parseFloat(r.stockMinimo ?? r.stock_minimo) || 0,
    costoUnitario: (r.costoUnitario ?? r.costo_unitario) != null ? parseFloat(r.costoUnitario ?? r.costo_unitario) : null,
    ubicacion: r.ubicacion ?? '',
    notas: r.notas ?? '',
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
    updatedAt: r.updatedAt ?? (r.updated_at instanceof Date ? r.updated_at.toISOString() : String(r.updated_at)),
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToMovimiento(r: any): InventarioMovimiento {
  return {
    id: r.id,
    itemId: r.itemId ?? r.item_id,
    tipo: r.tipo,
    cantidad: parseFloat(r.cantidad) || 0,
    motivo: r.motivo ?? '',
    referencia: r.referencia ?? null,
    stockResultante: parseFloat(r.stockResultante ?? r.stock_resultante) || 0,
    createdAt: r.createdAt ?? (r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)),
  }
}

export async function apiFetchInventario(): Promise<InventarioItem[]> {
  const res = await fetch('/api/inventario')
  if (!res.ok) throw new Error('Error al cargar inventario')
  const rows = await res.json()
  return rows.map(rowToItem)
}

export async function apiFetchInventarioItem(id: string): Promise<InventarioItem | null> {
  const res = await fetch(`/api/inventario/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Error al cargar el ítem')
  return rowToItem(await res.json())
}

export async function apiCreateInventarioItem(
  item: Omit<InventarioItem, 'id' | 'stockActual' | 'createdAt' | 'updatedAt'>,
): Promise<InventarioItem> {
  const res = await fetch('/api/inventario', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
  if (!res.ok) throw new Error('Error al crear el ítem')
  return rowToItem(await res.json())
}

export async function apiUpdateInventarioItem(
  id: string,
  item: Omit<InventarioItem, 'id' | 'stockActual' | 'createdAt' | 'updatedAt'>,
): Promise<InventarioItem> {
  const res = await fetch(`/api/inventario/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
  if (!res.ok) throw new Error('Error al actualizar el ítem')
  return rowToItem(await res.json())
}

export async function apiDeleteInventarioItem(id: string): Promise<void> {
  const res = await fetch(`/api/inventario/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar el ítem')
}

export async function apiFetchMovimientos(itemId: string): Promise<InventarioMovimiento[]> {
  const res = await fetch(`/api/inventario/${itemId}/movimientos`)
  if (!res.ok) throw new Error('Error al cargar movimientos')
  const rows = await res.json()
  return rows.map(rowToMovimiento)
}

export async function apiRegistrarMovimiento(
  itemId: string,
  tipo: MovimientoTipo,
  cantidad: number,
  motivo: string,
  referencia?: string | null,
): Promise<{ item: InventarioItem; movimiento: InventarioMovimiento }> {
  const res = await fetch(`/api/inventario/${itemId}/movimientos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tipo, cantidad, motivo, referencia: referencia ?? null }),
  })
  if (!res.ok) throw new Error('Error al registrar el movimiento')
  const { item, movimiento } = await res.json()
  return { item: rowToItem(item), movimiento: rowToMovimiento(movimiento) }
}
