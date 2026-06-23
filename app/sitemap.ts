import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'
  return [
    {
      url: siteUrl,
      lastModified: new Date('2025-06-22'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
