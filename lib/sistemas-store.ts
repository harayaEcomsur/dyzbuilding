import type { RefrigeranteKey } from './refrigerant-pt'

export type SistemaTipo = 'vrv' | 'rooftop'
export type EstadoDoc = 'borrador' | 'emitido'

export interface CircuitoMedicion {
  id: string
  nombre: string          // "UE-1", "Rooftop Zona 2", etc.
  marca: string
  modelo: string
  refrigerante: RefrigeranteKey
  tempAmbiente: number | null   // °C
  presionAlta: number | null    // psig
  presionBaja: number | null    // psig
  tempSatEvap: number | null    // °C, temp. de saturación evaporación (leída del manómetro o tabla P-T del fabricante)
  tempSatCond: number | null    // °C, temp. de saturación condensación (ídem)
  tempLiquido: number | null    // °C, línea de líquido
  tempSuccion: number | null    // °C, línea de succión
  tempDescarga: number | null   // °C
  frecuencia: number | null     // Hz, frecuencia de compresión (compresor inverter)
  corriente: number | null      // A, corriente del compresor
  corrienteVentilador: number | null // A, corriente del motor ventilador
  voltaje: number | null        // V, voltaje de suministro eléctrico
  tempPcbInverter: number | null // °C, temperatura placa PCB inverter
  tempPcbFan: number | null      // °C, temperatura placa PCB fan
  fotos: string[]               // URLs (Vercel Blob)
  observaciones: string
}

export function makeCircuito(id: string): CircuitoMedicion {
  return {
    id,
    nombre: '',
    marca: '',
    modelo: '',
    refrigerante: 'R410A',
    tempAmbiente: null,
    presionAlta: null,
    presionBaja: null,
    tempSatEvap: null,
    tempSatCond: null,
    tempLiquido: null,
    tempSuccion: null,
    tempDescarga: null,
    frecuencia: null,
    corriente: null,
    corrienteVentilador: null,
    voltaje: null,
    tempPcbInverter: null,
    tempPcbFan: null,
    fotos: [],
    observaciones: '',
  }
}

export interface SistemaData {
  meta: {
    codigo: string
    fecha: string
    cliente: string
    tecnico: string
    proyecto: string
  }
  objeto: string
  diagramas: string[]             // diagramas de flujo del ciclo de refrigeración (URLs)
  circuitos: CircuitoMedicion[]
  observaciones: string
  conclusiones: string
  nota: string
  lang?: 'es' | 'en'
}

export interface SistemaRecord {
  id: string
  tipo: SistemaTipo
  codigo: string
  cliente: string
  fecha: string
  estado: EstadoDoc
  data: SistemaData
  createdAt: string
  updatedAt: string
  parentId?: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

export const SISTEMA_LABELS: Record<SistemaTipo, { es: string; en: string; prefix: string }> = {
  vrv: { es: 'Informe de Sistema VRV', en: 'VRV System Report', prefix: 'VRV' },
  rooftop: { es: 'Informe de Sistema Rooftop', en: 'Rooftop System Report', prefix: 'RT' },
}

// Migra registros guardados antes de que "diagramaUrl" (un solo diagrama)
// pasara a ser "diagramas" (arreglo). Sin esto, informes ya emitidos con un
// diagrama perderían esa imagen al abrirse en el editor nuevo.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function migrateSistemaData(raw: any): SistemaData {
  const legacyUrl = typeof raw?.diagramaUrl === 'string' ? raw.diagramaUrl : ''
  const diagramas = Array.isArray(raw?.diagramas) ? raw.diagramas : (legacyUrl ? [legacyUrl] : [])
  const circuitos = Array.isArray(raw?.circuitos)
    ? raw.circuitos.map((c: any) => ({
        tempPcbInverter: null,
        tempPcbFan: null,
        corrienteVentilador: null,
        voltaje: null,
        ...c,
      }))
    : raw?.circuitos
  return { ...raw, diagramas, circuitos }
}

export function makeDefaultSistemaData(): SistemaData {
  return {
    meta: { codigo: '', fecha: '', cliente: '', tecnico: '', proyecto: '' },
    objeto: 'Medición y diagnóstico del ciclo de refrigeración del sistema, con el fin de evaluar su desempeño operativo y detectar desviaciones respecto de los parámetros normales de funcionamiento.',
    diagramas: [],
    circuitos: [makeCircuito('1')],
    observaciones: '',
    conclusiones: '',
    nota: 'Este informe es de carácter técnico y confidencial. Su uso está restringido al cliente y personal autorizado de D&Z Building.',
  }
}
