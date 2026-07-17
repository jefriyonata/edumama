import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getArticleBySlug,
  getAllArticles,
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
  return getAllArticles('en').map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const { slug } = await params

  const article = getArticleBySlug(slug, 'en')

  if (!article) {
    notFound()
  }

  const { title, description, image, date, author, noindex, indexing } =
    article.frontmatter

  return buildMetadata({
    title,
    description,
    path: `/en/articles/${slug}`,
    image,
    type: 'article',
    publishedTime: date,
    authors: getAuthor(author)
      ? [getAuthor(author)!.name]
      : undefined,
    noindex: indexing === 'noindex' || noindex === true,
    locale: 'en',
  })

}

export default async function EnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const article = getArticleBySlug(slug, 'en')

  if (!article) {
    notFound()
  }

  const { title, description, image, date, author, customSchema } =
    article.frontmatter

  const path = `/en/articles/${slug}`

  const faqs = extractFaqs(article.content)

  const jsonLd = [
    articleSchema({
      title,
      description,
      path,
      image,
      datePublished: date,
      authorName: getAuthor(author)?.name,
      locale: 'en',
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/en' },
      { name: 'Articles', path: '/en/articles' },
      { name: title, path },
    ]),
    ...(faqs.length ? [faqSchema(faqs)] : []),
    ...parseCustomSchema(customSchema),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <ContentPage
        id={article.id}
        frontmatter={article.frontmatter}
        content={article.content}
        locale="en"
      />
    </>
  )
}
