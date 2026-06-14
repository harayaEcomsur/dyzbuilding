import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

function getEncodedKey() {
  const secretKey = process.env.SESSION_SECRET ?? 'fallback-dev-key-change-in-production'
  return new TextEncoder().encode(secretKey)
}

export async function encrypt(payload: { role: string; expiresAt: Date }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getEncodedKey())
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, getEncodedKey(), { algorithms: ['HS256'] })
    return payload
  } catch {
    return null
  }
}

export async function createSession() {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ role: 'superadmin', expiresAt })
  const cookieStore = await cookies()
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  return decrypt(session)
}
