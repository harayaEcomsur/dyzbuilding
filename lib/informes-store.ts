export type StatusKey = 'optimo' | 'regular' | 'requiere'

export interface EquipRow {
  id: number
  equipo: string
  marca: string
  modelo: string
  status: StatusKey
}

export interface InformeData {
  meta: {
    codigo: string
    fecha: string
    cliente: string
    tecnico: string
    proyecto: string
  }
  objeto: string
  rows: EquipRow[]
  observaciones: string
  conclusiones: string
  nota: string
  lang?: 'es' | 'en'
}

export interface InformeRecord {
  id: string
  codigo: string
  cliente: string
  fecha: string
  estado: 'borrador' | 'emitido'
  data: InformeData
  createdAt: string
  updatedAt: string
  parentId?: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}
