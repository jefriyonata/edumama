import type { Metadata } from 'next'

import PostCard from '@/components/PostCard'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

import {
  getArticlesByCategory,
} from '@/lib/mdx'

import { buildMetadata } from '@/lib/seo'

import {
  categories,
} from '@/data/categories'

type CategoryPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {

  const { slug } =
    await params

  const category =
    categories.find(
      (category) =>
        category.slug === slug
    )

  return buildMetadata({
    title: category?.name || 'Category',
    description: `Artikel kategori ${category?.name} di Bersemai.`,
    path: `/category/${slug}`,
  })

}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {

  const { slug } =
    await params

  const posts =
    getArticlesByCategory(slug)

  const category =
    categories.find(
      (category) =>
        category.slug === slug
    )

  return (

    <main>

      <Section>

        <Container>

          <div className="mb-12">

            <Heading level="h1">

              {category?.name}

            </Heading>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {posts.map((post) => (

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

    </main>

  )
}