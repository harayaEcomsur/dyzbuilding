import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET() {
  const session = await getSession()
  if (!session?.role) return unauth()

  const rows = await sql`SELECT data FROM site_content WHERE key = 'default'`
  return NextResponse.json(rows[0]?.data ?? {})
}

export async function PUT(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()

  const data = await req.json()

  await sql`
    INSERT INTO site_content (key, data, updated_at)
    VALUES ('default', ${JSON.stringify(data)}, NOW())
    ON CONFLICT (key) DO UPDATE SET
      data       = EXCLUDED.data,
      updated_at = NOW()
  `

  revalidateTag('site-content', {})

  return NextResponse.json({ ok: true })
}
