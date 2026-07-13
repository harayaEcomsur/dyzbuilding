import 'server-only'
import { unstable_cache } from 'next/cache'
import { sql } from '@/lib/db'
import { SiteContent, defaultContent, deepMerge, normalizeSiteContent } from '@/lib/site-content-types'

export type { SiteContent }
export { defaultContent, deepMerge, normalizeSiteContent }

export const getSiteContent = unstable_cache(
  async (): Promise<SiteContent> => {
    try {
      const rows = await sql`SELECT data FROM site_content WHERE key = 'default'`
      if (!rows[0]?.data) return defaultContent
      return normalizeSiteContent(rows[0].data as Partial<SiteContent>)
    } catch {
      return defaultContent
    }
  },
  ['site-content', 'v4'],
  { tags: ['site-content'], revalidate: false },
)
