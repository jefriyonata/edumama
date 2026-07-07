import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/seo'
import { getAllArticles, getAllReviews } from '@/lib/mdx'
import { categories } from '@/data/categories'
import {
  getAllPlaces,
  getCitiesForType,
} from '@/lib/places'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/direktori',
    '/articles',
    '/reviews',
    '/tentang-kami',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = categories.map(
    (category) => ({
      url: `${base}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }),
  )

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

  // Directory: type hubs (e.g. /daycare), city listings
  // (/daycare/[city]), and entry pages (/daycare/[city]/[slug]).
  const places = getAllPlaces()

  const directoryTypes = [...new Set(places.map((p) => p.type))]

  const directoryHubRoutes: MetadataRoute.Sitemap = directoryTypes.map(
    (type) => ({
      url: `${base}/${type}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }),
  )

  const directoryCityRoutes: MetadataRoute.Sitemap =
    directoryTypes.flatMap((type) =>
      getCitiesForType(type).map((c) => ({
        url: `${base}/${type}/${c.city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })),
    )

  const directoryEntryRoutes: MetadataRoute.Sitemap = places.map(
    (place) => ({
      url: `${base}/${place.type}/${place.city}/${place.slug}`,
      lastModified: place.lastVerified
        ? new Date(place.lastVerified)
        : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  )

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...articleRoutes,
    ...reviewRoutes,
    ...enStaticRoutes,
    ...enArticleRoutes,
    ...directoryHubRoutes,
    ...directoryCityRoutes,
    ...directoryEntryRoutes,
  ]
}
