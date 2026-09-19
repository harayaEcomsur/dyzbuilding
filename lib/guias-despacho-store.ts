export type GuiaEstado = 'borrador' | 'emitida'

export type TipoDespacho = 'venta' | 'traslado_interno' | 'consignacion' | 'devolucion' | 'exportacion' | 'otro'

export const TIPOS_DESPACHO: Record<TipoDespacho, string> = {
  venta: 'Venta',
  traslado_interno: 'Traslado interno',
  consignacion: 'Consignación',
  devolucion: 'Devolución',
  exportacion: 'Exportación',
  otro: 'Otro',
}

export interface GuiaItem {
  id: number
  inventarioItemId: string | null
  sku: string
  descripcion: string
  cantidad: number
  unidad: string
  precioUnitario: string
}

export interface GuiaDespachoData {
  meta: {
    numero: string
    fecha: string
    tipoDespacho: TipoDespacho
    motivoTraslado: string
  }
  receptor: {
    nombre: string
    rut: string
    direccion: string
    ciudad: string
    email: string
    telefono: string
  }
  transporte: {
    transportista: string
    rutTransportista: string
    patente: string
    chofer: string
    rutChofer: string
  }
  items: GuiaItem[]
  incluirValores: boolean
  notas: string
  firmante: {
    nombre: string
    cargo: string
    rut: string
  }
  stockDescontado: boolean
  lang?: 'es' | 'en'
}

export interface GuiaDespachoRecord {
  id: string
  numero: string
  receptor: string
  fecha: string
  estado: GuiaEstado
  data: GuiaDespachoData
  createdAt: string
  updatedAt: string
  parentId?: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

export function calcItemSubtotal(item: GuiaItem): number {
  const q = item.cantidad || 0
  const p = parseFloat(String(item.precioUnitario).replace(/[^\d.]/g, '')) || 0
  return q * p
}

export function calcTotal(data: GuiaDespachoData): number {
  if (!data.incluirValores) return 0
  return data.items.reduce((sum, item) => sum + calcItemSubtotal(item), 0)
}
