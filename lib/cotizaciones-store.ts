export interface LineItem {
  id: number
  descripcion: string
  subtitulo: string
  cantidad: string
  unidad: string
  precioUnitario: string
}

export interface QuotationData {
  numero: string
  fecha: string
  validez: string
  moneda: string
  clienteNombre: string
  clienteEmpresa: string
  clienteRut: string
  clienteEmail: string
  clienteTelefono: string
  clienteDireccion: string
  items: LineItem[]
  incluirIva: boolean
  notas: string
  lang?: 'es' | 'en'
}

export interface CotizacionRecord {
  id: string
  numero: string
  clienteNombre: string
  clienteEmpresa: string
  fecha: string
  moneda: string
  total: number
  estado: 'borrador' | 'emitida'
  data: QuotationData
  createdAt: string
  updatedAt: string
  parentId?: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

export function calcTotal(data: QuotationData): number {
  const sub = (data.items ?? []).reduce((acc, item) => {
    const q = parseFloat(item.cantidad) || 0
    const p = parseFloat(item.precioUnitario.replace(/[^\d.]/g, '')) || 0
    return acc + q * p
  }, 0)
  return data.incluirIva ? sub * 1.19 : sub
}
