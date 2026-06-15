import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import PostCard from '@/components/PostCard'

import {
  getAllArticles,
  getAllReviews,
} from '@/lib/mdx'

export default function HomePage() {

  const articles = getAllArticles()
  const reviews = getAllReviews()

  return (
    <main>

      <Section>

  <Container>

    <div className="flex items-center justify-between mb-10">

      <Heading>
        Latest Articles
      </Heading>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

      {articles.map((article) => (

        <PostCard
          key={article.slug}
          slug={article.slug}
          frontmatter={article.frontmatter}
          type="articles"
        />

      ))}

    </div>

  </Container>

</Section>

<Section>

  <Container>

    <div className="flex items-center justify-between mb-10">

      <Heading>
        Latest Reviews
      </Heading>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

      {reviews.map((review) => (

        <PostCard
          key={review.slug}
          slug={review.slug}
          frontmatter={review.frontmatter}
          type="reviews"
        />

      ))}

    </div>

  </Container>

</Section>

    </main>
  )
}