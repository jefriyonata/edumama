import PostCard from '@/components/PostCard'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

import { getAllArticles } from '@/lib/mdx'

export default function ArticlesPage() {

  const articles = getAllArticles()

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
              />

            ))}

          </div>

        </Container>

      </Section>

    </main>
  )
}