import 'server-only'
import { unstable_cache } from 'next/cache'
import { sql } from '@/lib/db'
import { SiteContent, defaultContent, deepMerge } from '@/lib/site-content-types'

export type { SiteContent }
export { defaultContent, deepMerge }

export const getSiteContent = unstable_cache(
  async (): Promise<SiteContent> => {
    try {
      const rows = await sql`SELECT data FROM site_content WHERE key = 'default'`
      if (!rows[0]?.data) return defaultContent
      return deepMerge(defaultContent, rows[0].data as Partial<SiteContent>)
    } catch {
      return defaultContent
    }
  },
  ['site-content'],
  { tags: ['site-content'], revalidate: false },
)
