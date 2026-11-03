// IP del visitante para los límites de intentos (lib/rate-limit.ts). En Vercel
// x-forwarded-for la arma el propio edge (el primer valor es el cliente real),
// así que no se puede falsificar desde el navegador.
export function ipDe(req: Request): string {
  const xff = req.headers.get('x-forwarded-for')
  return xff?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'desconocida'
}
