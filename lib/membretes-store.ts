export interface MembreteData {
  remitente: string
  destinatario: string
  ciudadFecha: string
  asunto: string
  cuerpo: string
  firmante: string
  lang?: 'es' | 'en'
}

export interface MembreteRecord {
  id: string
  asunto: string
  destinatario: string
  ciudadFecha: string
  estado: 'borrador' | 'emitido'
  data: MembreteData
  createdAt: string
  updatedAt: string
  parentId?: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}
