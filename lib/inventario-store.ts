export interface InventarioItem {
  id: string
  sku: string
  nombre: string
  categoria: string
  unidad: string
  stockActual: number
  stockMinimo: number
  costoUnitario: number | null
  ubicacion: string
  notas: string
  marca: string               // marca del repuesto/equipo (ej. "LG"), para el catálogo público
  imagenes: string[]          // URLs (Vercel Blob), fotos del repuesto para el catálogo público
  compatibilidad: string      // texto libre: equipos/modelos compatibles
  publicado: boolean          // si aparece en el catálogo público /repuestos
  createdAt: string
  updatedAt: string
}

export type MovimientoTipo = 'ingreso' | 'salida' | 'ajuste'

export interface InventarioMovimiento {
  id: string
  itemId: string
  tipo: MovimientoTipo
  cantidad: number
  motivo: string
  referencia: string | null
  stockResultante: number
  createdAt: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

export function makeDefaultItem(): Omit<InventarioItem, 'id' | 'createdAt' | 'updatedAt'> {
  return {
    sku: '',
    nombre: '',
    categoria: '',
    unidad: 'un',
    stockActual: 0,
    stockMinimo: 0,
    costoUnitario: null,
    ubicacion: '',
    notas: '',
    marca: '',
    imagenes: [],
    compatibilidad: '',
    publicado: false,
  }
}
