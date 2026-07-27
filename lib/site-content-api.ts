import type { SiteContent } from './site-content-types'

export async function apiFetchEmpresa(): Promise<SiteContent['empresa'] | null> {
  const res = await fetch('/api/site-content')
  if (!res.ok) return null
  const content: SiteContent = await res.json()
  return content.empresa ?? null
}
