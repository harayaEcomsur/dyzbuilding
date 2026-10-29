export type SolicitudEstado = 'nueva' | 'en_proceso' | 'descartada'

export interface SolicitudRepuestoItem {
  id: string | null
  nombre: string
  marca?: string
  cantidad: number
}

export interface SolicitudRepuestosRecord {
  id: string
  nombre: string
  empresa: string
  email: string
  telefono: string
  equipo: string
  urgencia: string
  items: SolicitudRepuestoItem[]
  itemsLibres: string[]
  estado: SolicitudEstado
  guiaDespachoId: string | null
  lang: 'es' | 'en'
  createdAt: string
  updatedAt: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}
