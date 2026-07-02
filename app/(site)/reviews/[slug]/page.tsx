import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getReviewBySlug,
  getAllReviews,
  extractFaqs,
} from '@/lib/mdx'

import ContentPage from '@/components/article/ContentPage'
import JsonLd from '@/components/seo/JsonLd'
import {
  buildMetadata,
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  parseCustomSchema,
} from '@/lib/seo'
import { getAuthor } from '@/lib/authors'

export function generateStaticParams() {
  return getAllReviews().map((review) => ({
    slug: review.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const { slug } = await params

  const review =
    getReviewBySlug(slug)

  if (!review) {
    notFound()
  }

  const { title, description, image, date, author, noindex } =
    review.frontmatter

  return buildMetadata({
    title,
    description,
    path: `/reviews/${slug}`,
    image,
    type: 'article',
    publishedTime: date,
    authors: getAuthor(author)
      ? [getAuthor(author)!.name]
      : undefined,
    noindex: Boolean(noindex),
  })

}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const review =
    getReviewBySlug(slug)

  if (!review) {
    notFound()
  }

  const { title, description, image, date, author, customSchema } =
    review.frontmatter

  const path = `/reviews/${slug}`

  const faqs = extractFaqs(review.content)

  const jsonLd = [
    articleSchema({
      title,
      description,
      path,
      image,
      datePublished: date,
      authorName: getAuthor(author)?.name,
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Reviews', path: '/reviews' },
      { name: title, path },
    ]),
    ...(faqs.length ? [faqSchema(faqs)] : []),
    ...parseCustomSchema(customSchema),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <ContentPage
        frontmatter={review.frontmatter}
        content={review.content}
      />
    </>
  )
}
