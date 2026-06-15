import type { Metadata } from 'next'
import {
  getArticleBySlug,
} from '@/lib/mdx'

import ContentPage from '@/components/article/ContentPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const { slug } = await params

  const article =
    getArticleBySlug(slug)

  return {

    title:
      article.frontmatter.title,

    description:
      article.frontmatter.description,

    openGraph: {

      title:
        article.frontmatter.title,

      description:
        article.frontmatter.description,

      images: [
        article.frontmatter.image,
      ],

    },

    twitter: {

      card: 'summary_large_image',

      title:
        article.frontmatter.title,

      description:
        article.frontmatter.description,

      images: [
        article.frontmatter.image,
      ],

    },

  }

}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const article =
    getArticleBySlug(slug)

  return (
    <ContentPage
      frontmatter={article.frontmatter}
      content={article.content}
    />
  )
}