import type { Metadata } from 'next'
import PostCard from '@/components/PostCard'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

import { buildMetadata } from '@/lib/seo'
import { getAllArticles } from '@/lib/mdx'

export const metadata: Metadata = buildMetadata({
  title: 'Articles',
  description:
    'Parenting and early-childhood education articles from Bersemai.',
  path: '/en/articles',
  locale: 'en',
})

export default function EnArticlesPage() {

  const articles = getAllArticles('en')

  return (
    <main>

      <Section>

        <Container>

          <div className="mb-12">

            <Heading level="h1">
              Articles
            </Heading>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {articles.map((article) => (

              <PostCard
                key={article.slug}
                slug={article.slug}
                frontmatter={article.frontmatter}
                type="articles"
                locale="en"
              />

            ))}

          </div>

        </Container>

      </Section>

    </main>
  )
}
