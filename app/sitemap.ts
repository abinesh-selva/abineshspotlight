import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://abineshspotlight.online',
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

