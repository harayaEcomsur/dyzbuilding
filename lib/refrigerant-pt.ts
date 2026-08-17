// Cálculo de recalentamiento (superheat) y subenfriamiento (subcool).
//
// La temperatura de saturación (evaporación/condensación) la ingresa el técnico
// directamente — leída de la escala de temperatura impresa en el manómetro
// (la mayoría de los manómetros profesionales traen escala P/T por refrigerante)
// o de la tabla P-T oficial del fabricante del refrigerante. No se deriva
// automáticamente desde la presión dentro de la app: una tabla P-T interna
// requiere precisión de laboratorio por refrigerante y es fácil introducir un
// error de varios grados sin una fuente verificada — preferible que el dato
// de saturación lo aporte el instrumento o la tabla del fabricante.

export type RefrigeranteKey = 'R410A' | 'R32' | 'R22' | 'R134A' | 'R404A' | 'R407C'

export const REFRIGERANTES: { key: RefrigeranteKey; label: string }[] = [
  { key: 'R410A', label: 'R-410A' },
  { key: 'R32', label: 'R-32' },
  { key: 'R22', label: 'R-22' },
  { key: 'R134A', label: 'R-134a' },
  { key: 'R404A', label: 'R-404A' },
  { key: 'R407C', label: 'R-407C' },
]

function round1(n: number): number {
  return Math.round(n * 10) / 10
}

/** Recalentamiento (superheat) = Temp. succión medida − Temp. saturación evaporación */
export function computeSuperheat(
  tempSuccionC: number | null,
  tempSatEvapC: number | null,
): number | null {
  if (tempSuccionC == null || tempSatEvapC == null) return null
  return round1(tempSuccionC - tempSatEvapC)
}

/** Subenfriamiento (subcool) = Temp. saturación condensación − Temp. línea de líquido medida */
export function computeSubcool(
  tempSatCondC: number | null,
  tempLiquidoC: number | null,
): number | null {
  if (tempSatCondC == null || tempLiquidoC == null) return null
  return round1(tempSatCondC - tempLiquidoC)
}

export type RangeStatus = 'ok' | 'bajo' | 'alto' | 'na'

// Rangos referenciales de campo para sistemas VRF/VRV y Rooftop comerciales
// con válvula de expansión electrónica. Son una guía, no una norma — la
// tolerancia real depende del fabricante, la carga y el modo de operación.
export const SUPERHEAT_RANGE: [number, number] = [4, 12]
export const SUBCOOL_RANGE: [number, number] = [4, 10]

export function rangeStatus(value: number | null, range: [number, number]): RangeStatus {
  if (value == null) return 'na'
  if (value < range[0]) return 'bajo'
  if (value > range[1]) return 'alto'
  return 'ok'
}
