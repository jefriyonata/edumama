import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import PostCard from '@/components/PostCard'

import { buildMetadata } from '@/lib/seo'

import { getArticlesByCategory } from '@/lib/mdx'

import { categories } from '@/data/categories'

const CATEGORY_LIMIT = 6

export const metadata: Metadata = buildMetadata({
  title:
    'Tips Parenting dan Pendidikan Anak Usia Dini',
  description:
    'Temukan review preschool, panduan parenting, dan rekomendasi sekolah anak usia dini di Indonesia.',
  path: '/',
  locale: 'id',
  // hreflang: the two homepages correspond; content pages don't (independent clusters).
  languages: {
    'id-ID': '/',
    'en-US': '/en',
    'x-default': '/',
  },
})
export default function HomePage() {

  const categorySections = categories
    .map((category) => ({
      ...category,
      posts: getArticlesByCategory(category.slug),
    }))
    .filter((category) => category.posts.length > 0)

  return (
    <main>

      <Section className="pb-0">

        <Container>

          <div className="max-w-3xl">

            <Heading level="h1">
              Panduan Preschool, Daycare &amp; Parenting Anak Usia Dini
            </Heading>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Review preschool, direktori daycare per kota, dan panduan
              parenting tepercaya untuk membantu keluarga Indonesia memilih
              yang terbaik bagi si kecil.
            </p>

          </div>

        </Container>

      </Section>

      {categorySections.map((category) => (

        <Section key={category.slug}>

          <Container>

            <div className="flex items-center justify-between mb-10">

              <Heading>
                {category.name}
              </Heading>

              <Link
                href={`/category/${category.slug}`}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FA8072] hover:underline whitespace-nowrap"
              >
                Lihat Semua
              </Link>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

              {category.posts.slice(0, CATEGORY_LIMIT).map((post) => (

                <PostCard
                  key={post.slug}
                  slug={post.slug}
                  frontmatter={post.frontmatter}
                  type="articles"
                />

              ))}

            </div>

          </Container>

        </Section>

      ))}

    </main>
  )
}