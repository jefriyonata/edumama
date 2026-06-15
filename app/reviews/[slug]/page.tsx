import type { Metadata } from 'next'
import {
  getReviewBySlug,
} from '@/lib/mdx'

import ContentPage from '@/components/article/ContentPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const { slug } = await params

  const reviews =
    getReviewBySlug(slug)

  return {

    title:
      reviews.frontmatter.title,

    description:
      reviews.frontmatter.description,

    openGraph: {

      title:
        reviews.frontmatter.title,

      description:
        reviews.frontmatter.description,

      images: [
        reviews.frontmatter.image,
      ],

    },

    twitter: {

      card: 'summary_large_image',

      title:
        reviews.frontmatter.title,

      description:
        reviews.frontmatter.description,

      images: [
        reviews.frontmatter.image,
      ],

    },

  }

}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const review =
    getReviewBySlug(slug)

  return (
    <ContentPage
      frontmatter={review.frontmatter}
      content={review.content}
    />
  )
}