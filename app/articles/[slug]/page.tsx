import {
  getArticleBySlug,
} from '@/lib/mdx'

import ContentPage from '@/components/article/ContentPage'

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