export type OrdenEstado = 'borrador' | 'emitida'

export interface OrdenItem {
  id: number
  descripcion: string
  sku?: string
  cantidad: number
  unidad: string
  precioUnitario: string
}

export interface OrdenCompraData {
  meta: {
    numero: string
    fecha: string
    moneda: 'CLP' | 'USD' | 'UF'
    lugarEntrega: string
    plazoEntrega: string
    fechaEntrega?: string
    formaPago: string
  }
  proveedor: {
    empresa: string
    nombre: string
    rut: string
    direccion: string
    email: string
    telefono: string
    ciudad: string
  }
  items: OrdenItem[]
  incluirIva: boolean
  notas: string
  firmante: {
    nombre: string
    cargo: string
    rut: string
  }
  lang?: 'es' | 'en'
}

export interface OrdenCompraRecord {
  id: string
  numero: string
  proveedor: string
  fecha: string
  moneda: string
  total: number
  estado: OrdenEstado
  data: OrdenCompraData
  createdAt: string
  updatedAt: string
  parentId?: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

export function calcTotal(data: OrdenCompraData): number {
  const subtotal = data.items.reduce((sum, item) => {
    const q = item.cantidad || 0
    const p = parseFloat(String(item.precioUnitario).replace(/[^\d.]/g, '')) || 0
    return sum + q * p
  }, 0)
  return data.incluirIva ? subtotal * 1.19 : subtotal
}
