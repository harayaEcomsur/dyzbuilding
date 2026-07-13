import type { OrdenCompraData } from './ordenes-store'
import { siteConfig } from './site-config'

export interface OrdenComplianceResult {
  ok: boolean
  missing: string[]
  warnings: string[]
}

/** Elementos obligatorios según Buk: https://www.buk.cl/novedades/finanzas/que-es-orden-de-compra */
export function validateOrdenCompra(
  data: OrdenCompraData,
  empresa = siteConfig.empresa,
): OrdenComplianceResult {
  const missing: string[] = []
  const warnings: string[] = []

  // Datos comprador
  if (!empresa.nombre?.trim()) missing.push('Nombre de la empresa compradora')
  if (!empresa.rut?.trim() || empresa.rut.includes('XXX')) missing.push('RUT de la empresa compradora')
  if (!empresa.direccion?.trim()) missing.push('Dirección de la empresa compradora')

  // Datos proveedor
  if (!data.proveedor.empresa?.trim()) missing.push('Razón social del proveedor')
  if (!data.proveedor.rut?.trim()) missing.push('RUT del proveedor')
  if (!data.proveedor.direccion?.trim() && !data.proveedor.ciudad?.trim()) {
    missing.push('Dirección o ciudad del proveedor')
  }

  // Identificación y fechas
  if (!data.meta.numero?.trim()) missing.push('Número de orden único')
  if (!data.meta.fecha?.trim()) missing.push('Fecha de emisión')
  if (!data.meta.plazoEntrega?.trim() && !data.meta.fechaEntrega?.trim()) {
    missing.push('Plazo o fecha de entrega esperada')
  }

  // Detalle ítems
  const validItems = data.items.filter(
    i => i.descripcion?.trim() && i.cantidad > 0 && String(i.precioUnitario).replace(/[^\d.]/g, ''),
  )
  if (validItems.length === 0) {
    missing.push('Al menos un ítem con descripción, cantidad y precio unitario')
  }

  // Condiciones
  if (!data.meta.formaPago?.trim()) missing.push('Condiciones de pago')
  if (!data.meta.lugarEntrega?.trim()) missing.push('Lugar de entrega / recepción')

  // Firma aprobador
  if (!data.firmante.nombre?.trim()) missing.push('Nombre del firmante que aprueba el gasto')

  // Advertencias (recomendados por Buk, no bloqueantes)
  if (!data.firmante.cargo?.trim()) warnings.push('Cargo del firmante no indicado')
  if (!data.firmante.rut?.trim()) warnings.push('RUT del firmante no indicado')
  if (!data.proveedor.email?.trim()) warnings.push('Email del proveedor no indicado')
  if (!data.proveedor.telefono?.trim()) warnings.push('Teléfono del proveedor no indicado')
  const hasSku = data.items.some(i => i.sku?.trim())
  if (!hasSku) warnings.push('Ningún ítem tiene código SKU / referencia (opcional si aplica)')

  return { ok: missing.length === 0, missing, warnings }
}

export const BUK_OC_ELEMENTS = [
  'Datos comprador: nombre, dirección y RUT',
  'Datos proveedor: nombre, dirección y RUT',
  'Número de orden único',
  'Fecha de emisión y entrega',
  'Detalle: descripción, SKU (si aplica), cantidad, precio unitario',
  'Subtotal, IVA y total',
  'Condiciones de pago y entrega',
  'Firma de quien aprueba el gasto',
] as const
