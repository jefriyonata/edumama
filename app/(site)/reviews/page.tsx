import type { Metadata } from 'next'
import PostCard from '@/components/PostCard'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

import { buildMetadata } from '@/lib/seo'
import { getAllReviews } from '@/lib/mdx'

export const metadata: Metadata = buildMetadata({
  title: 'Reviews',
  description:
    'Review preschool dan program pendidikan anak usia dini dari Edumama.',
  path: '/reviews',
})

export default function ReviewsPage() {

  const reviews = getAllReviews()

  return (
    <main>

      <Section>

        <Container>

          <div className="mb-12">

            <Heading level="h1">
              Reviews
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