import type { Metadata } from 'next'

/**
 * Central SEO configuration for the whole site.
 * Set NEXT_PUBLIC_SITE_URL in your environment for production
 * (e.g. https://edumama.id). Falls back to localhost in dev.
 */
export const siteConfig = {
  name: 'Edumama',
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ).replace(/\/$/, ''),
  description:
    'Review preschool, panduan parenting, dan informasi pendidikan anak usia dini untuk keluarga Indonesia.',
  locale: 'id_ID',
  defaultImage: '/images/edumama-logo-new.jpg',
  logo: '/images/edumama-logo-new.jpg',
  twitter: '@edumama',
}

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = '/') {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

type BuildMetadataArgs = {
  title?: string
  description?: string
  /** Canonical path, e.g. '/articles/my-post'. Defaults to '/'. */
  path?: string
  /** Social share image (site-relative or absolute). */
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

/**
 * Produces a Next.js Metadata object with canonical URL, Open Graph,
 * and Twitter card filled in consistently. Relative URLs are resolved
 * against `metadataBase` (set in the root layout).
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
}: BuildMetadataArgs = {}): Metadata {
  const ogImage = image || siteConfig.defaultImage

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title,
      description,
      images: [{ url: ogImage }],
      ...(type === 'article'
        ? { publishedTime, modifiedTime, authors }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/* ------------------------------------------------------------------ */
/* JSON-LD structured data builders                                    */
/* ------------------------------------------------------------------ */

type JsonLd = Record<string, unknown>

/** Organization schema — describes the publisher. Use site-wide. */
export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
  }
}

/** WebSite schema with a search action. Use site-wide. */
export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'id-ID',
  }
}

type ArticleSchemaArgs = {
  title: string
  description?: string
  path: string
  image?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
}

/** Article schema for articles and review posts. */
export function articleSchema({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
  authorName,
}: ArticleSchemaArgs): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: absoluteUrl(image || siteConfig.defaultImage),
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(path),
    },
    author: authorName
      ? { '@type': 'Person', name: authorName }
      : { '@type': 'Organization', name: siteConfig.name },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(siteConfig.logo),
      },
    },
  }
}

/** FAQPage schema from a list of question/answer pairs. */
export function faqSchema(
  items: { question: string; answer: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

type PlaceSchemaArgs = {
  name: string
  /** schema.org type, e.g. 'ChildCare' | 'Preschool' | 'LocalBusiness'. */
  schemaType?: string
  path: string
  description?: string
  telephone?: string
  /** Street/full address line. */
  address?: string
  addressLocality?: string
  lat?: number
  lng?: number
  /** External profiles (website, Instagram, Google Maps). */
  sameAs?: string[]
}

/**
 * LocalBusiness-family schema for a directory entry.
 *
 * Intentionally omits `aggregateRating`/`review`: those must reflect
 * reviews collected and shown on our own page, not third-party
 * (Google Maps) scores. Add them only when we host our own reviews.
 */
export function placeSchema({
  name,
  schemaType = 'ChildCare',
  path,
  description,
  telephone,
  address,
  addressLocality,
  lat,
  lng,
  sameAs,
}: PlaceSchemaArgs): JsonLd {
  const cleanSameAs = (sameAs || []).filter(Boolean)

  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name,
    '@id': absoluteUrl(path),
    url: absoluteUrl(path),
    ...(description ? { description } : {}),
    ...(telephone ? { telephone } : {}),
    ...(address || addressLocality
      ? {
          address: {
            '@type': 'PostalAddress',
            ...(address ? { streetAddress: address } : {}),
            ...(addressLocality ? { addressLocality } : {}),
            addressCountry: 'ID',
          },
        }
      : {}),
    ...(typeof lat === 'number' && typeof lng === 'number'
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: lat,
            longitude: lng,
          },
        }
      : {}),
    ...(cleanSameAs.length ? { sameAs: cleanSameAs } : {}),
  }
}

/** ItemList schema for a directory listing page. */
export function itemListSchema(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  }
}

/** BreadcrumbList schema from an ordered list of crumbs. */
export function breadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
