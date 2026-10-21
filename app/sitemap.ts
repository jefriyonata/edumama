import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/seo'
import { getAllArticles, getAllReviews } from '@/lib/mdx'
import { getCitiesForType, getPlacesByType } from '@/lib/places'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  // Directory pages (/direktori, /daycare/**) and article category pages
  // (/category/*) are intentionally absent: they are noindex (utility /
  // navigation pages), so they must not be advertised in the sitemap.
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/articles',
    '/reviews',
    '/tentang-kami',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map(
    (article) => ({
      url: `${base}/articles/${article.slug}`,
      lastModified: article.frontmatter.date
        ? new Date(article.frontmatter.date)
        : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }),
  )

  const reviewRoutes: MetadataRoute.Sitemap = getAllReviews().map(
    (review) => ({
      url: `${base}/reviews/${review.slug}`,
      lastModified: review.frontmatter.date
        ? new Date(review.frontmatter.date)
        : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }),
  )

  // English site (/en) — static pages + published EN articles.
  const enStaticRoutes: MetadataRoute.Sitemap = [
    '/en',
    '/en/articles',
    '/en/about',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '/en' ? 0.9 : 0.7,
  }))

  const enArticleRoutes: MetadataRoute.Sitemap = getAllArticles('en').map(
    (article) => ({
      url: `${base}/en/articles/${article.slug}`,
      lastModified: article.frontmatter.date
        ? new Date(article.frontmatter.date)
        : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }),
  )

  // EN preschool directory (indexable, unlike the noindex ID /daycare directory):
  // hub + per-city listings + per-school entries.
  const enPreschoolRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/en/preschools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...getCitiesForType('preschool').map(({ city }) => ({
      url: `${base}/en/preschools/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...getPlacesByType('preschool').map((place) => ({
      url: `${base}/en/preschools/${place.city}/${place.slug}`,
      lastModified: place.lastVerified
        ? new Date(place.lastVerified)
        : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...reviewRoutes,
    ...enStaticRoutes,
    ...enArticleRoutes,
    ...enPreschoolRoutes,
  ]
}
