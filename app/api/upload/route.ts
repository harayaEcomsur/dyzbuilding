import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { getSession } from '@/lib/session'

const MAX_BYTES = 8 * 1024 * 1024 // 8 MB
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'])

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session?.role) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const form = await req.formData()
  const file = form.get('file')
  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Archivo no encontrado' }, { status: 400 })
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'El archivo supera los 8 MB' }, { status: 413 })
  }
  if (file.type && !ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ error: 'Formato no soportado (usa JPG, PNG, WEBP o HEIC)' }, { status: 415 })
  }

  const folder = typeof form.get('folder') === 'string' ? String(form.get('folder')) : 'informes-sistemas'
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
  const key = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safeName}`

  const blob = await put(key, file, {
    access: 'public',
    addRandomSuffix: false,
  })

  return NextResponse.json({ url: blob.url })
}
