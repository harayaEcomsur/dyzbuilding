import { NextRequest, NextResponse } from 'next/server'
import { createSession } from '@/lib/session'

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({ error: 'Credenciales incorrectas' }, { status: 401 })
  }

  await createSession()
  return NextResponse.json({ ok: true })
}
