import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { sql } from '@/lib/db'
import { getSession } from '@/lib/session'
import { normalizeSiteContent, type SiteContent } from '@/lib/site-content-types'

function unauth() {
  return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
}

export async function GET() {
  const session = await getSession()
  if (!session?.role) return unauth()

  const rows = await sql`SELECT data FROM site_content WHERE key = 'default'`
  return NextResponse.json(normalizeSiteContent(rows[0]?.data as Partial<SiteContent> | undefined))
}

export async function PUT(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) return unauth()

  const data = await req.json()
  const normalized = normalizeSiteContent(data as Partial<SiteContent>)

  await sql`
    INSERT INTO site_content (key, data, updated_at)
    VALUES ('default', ${JSON.stringify(normalized)}, NOW())
    ON CONFLICT (key) DO UPDATE SET
      data       = EXCLUDED.data,
      updated_at = NOW()
  `

  revalidateTag('site-content', {})

  return NextResponse.json({ ok: true })
}
