import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import PostCard from '@/components/PostCard'

import { buildMetadata } from '@/lib/seo'
import { getAllArticles } from '@/lib/mdx'

const HOME_LIMIT = 6

// hreflang only applies where the two locales' homepages correspond.
const HOME_HREFLANG = {
  'id-ID': '/',
  'en-US': '/en',
  'x-default': '/',
}

export const metadata: Metadata = buildMetadata({
  title: 'Preschool, Parenting & Early-Childhood Education',
  description:
    'Practical guides and honest insights to help modern families make confident early-childhood choices.',
  path: '/en',
  locale: 'en',
  languages: HOME_HREFLANG,
})

export default function EnHomePage() {

  const articles = getAllArticles('en')

  return (
    <main>

      <Section className="pb-0">

        <Container>

          <div className="max-w-3xl">

            <Heading level="h1">
              Preschool, Parenting &amp; Early-Childhood Education
            </Heading>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Practical guides and honest insights to help modern families make
              confident choices for their little ones.
            </p>

          </div>

        </Container>

      </Section>

      {articles.length > 0 && (

        <Section>

          <Container>

            <div className="flex items-center justify-between mb-10">

              <Heading>
                Latest Articles
              </Heading>

              <Link
                href="/en/articles"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FA8072] hover:underline whitespace-nowrap"
              >
                View All
              </Link>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

              {articles.slice(0, HOME_LIMIT).map((post) => (

                <PostCard
                  key={post.slug}
                  slug={post.slug}
                  frontmatter={post.frontmatter}
                  type="articles"
                  locale="en"
                />

              ))}

            </div>

          </Container>

        </Section>

      )}

    </main>
  )
}
