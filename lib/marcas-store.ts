export interface Marca {
  id: string
  nombre: string
  logoUrl: string
  orden: number
  createdAt: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}
