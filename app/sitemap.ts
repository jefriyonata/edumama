import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/seo'
import { getAllArticles, getAllReviews } from '@/lib/mdx'

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

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...reviewRoutes,
    ...enStaticRoutes,
    ...enArticleRoutes,
  ]
}
