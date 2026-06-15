import { MDXRemote } from 'next-mdx-remote/rsc'

import rehypeSlug from 'rehype-slug'

import ArticleHero from './ArticleHero'
import TableOfContents from './TableOfContents'
import AuthorCard from './AuthorCard'

import { extractHeadings } from '@/lib/toc'

import {
  authors,
  type AuthorKey,
} from '@/data/authors'

type ContentPageProps = {
  frontmatter: any
  content: string
}

export default function ContentPage({
  frontmatter,
  content,
}: ContentPageProps) {

  const headings =
    extractHeadings(content)

  const authorKey =
    frontmatter.author as AuthorKey

  const author =
    authors[authorKey]

  return (
    <main>

      <ArticleHero
        frontmatter={frontmatter}
        author={author}
      />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-12 gap-12">

          {/* LEFT SIDEBAR */}

          <aside className="hidden lg:block lg:col-span-3">

            <TableOfContents
              headings={headings}
            />

          </aside>

          {/* MAIN CONTENT */}

          <article className="col-span-12 lg:col-span-6">

            <div className="prose prose-lg max-w-none prose-p:text-gray-800 prose-p:leading-8">

              <MDXRemote
                source={content}
                options={{
                  mdxOptions: {
                    rehypePlugins: [
                      rehypeSlug,
                    ],
                  },
                }}
              />

            </div>

          </article>

          {/* RIGHT SIDEBAR */}

          <aside className="hidden lg:block lg:col-span-3">

            <AuthorCard
              author={author}
            />

          </aside>

        </div>

      </section>

    </main>
  )
}