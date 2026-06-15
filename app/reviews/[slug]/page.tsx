import {
  getReviewBySlug,
} from '@/lib/mdx'

import ContentPage from '@/components/article/ContentPage'

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