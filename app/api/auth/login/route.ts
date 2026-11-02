import { createHash, timingSafeEqual } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { createSession } from '@/lib/session'
import { checkRateLimit } from '@/lib/rate-limit'
import { ipDe } from '@/lib/ip'

// Comparación en tiempo constante: evita que un atacante infiera la clave
// midiendo cuánto tarda la respuesta según cuántos caracteres acertó.
function igualSeguro(a: string, b: string): boolean {
  const x = createHash('sha256').update(a).digest()
  const y = createHash('sha256').update(b).digest()
  return timingSafeEqual(x, y)
}

export async function POST(req: NextRequest) {
  // Sin esto, el login de superadmin se podía probar por fuerza bruta sin
  // ningún límite. Tope por IP (2026-11-02).
  const { allowed, retryAfterSeconds } = checkRateLimit(`auth-login:${ipDe(req)}`)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Demasiados intentos. Espera unos minutos y vuelve a intentar.' },
      { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } }
    )
  }

  const { username, password } = await req.json()
  const expectedUsername = process.env.ADMIN_USERNAME
  const expectedPassword = process.env.ADMIN_PASSWORD

  if (
    !expectedUsername ||
    !expectedPassword ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    !igualSeguro(username, expectedUsername) ||
    !igualSeguro(password, expectedPassword)
  ) {
    return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 })
  }

  await createSession()
  return NextResponse.json({ ok: true })
}
