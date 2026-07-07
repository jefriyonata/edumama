import Callout from '@/components/mdx/Callouts'
import SchoolSnapshot from '@/components/mdx/SchoolSnapshot'
import ComparisonTable from '@/components/mdx/ComparisonTable'
import FAQ from '@/components/mdx/FAQ'
import SmartLink from '@/components/mdx/SmartLink'
import ArticleLink from '@/components/mdx/ArticleLink'
import ReviewLink from '@/components/mdx/ReviewLink'
import ContentImage from '@/components/mdx/ContentImage'

import { MDXRemote } from 'next-mdx-remote/rsc'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

import ArticleHero from './ArticleHero'
import TableOfContents from './TableOfContents'
import AuthorCard from './AuthorCard'

import { extractHeadings } from '@/lib/toc'

import { getAuthor } from '@/lib/authors'
import type { Locale } from '@/lib/mdx'

type ContentPageProps = {
  frontmatter: any
  content: string
  locale?: Locale
}

export default function ContentPage({
  frontmatter,
  content,
  locale = 'id',
}: ContentPageProps) {

  const headings =
    extractHeadings(content)

  const author =
    getAuthor(frontmatter.author)

  return (
    <main>

      <ArticleHero
        frontmatter={frontmatter}
        author={author}
        locale={locale}
      />

      <section className="max-w-7xl mx-auto px-6 py-10 lg:py-16">

        <div className="grid grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT SIDEBAR */}

          <aside className="hidden lg:block lg:col-span-2">

            <TableOfContents
              headings={headings}
            />

          </aside>

          {/* MAIN CONTENT */}

          <article className="col-span-12 lg:col-span-10">

            <div className="prose prose-lg max-w-none prose-p:my-4 prose-headings:mb-4">

              <MDXRemote
  source={content}
  components={{
    Callout,
    SchoolSnapshot,
    ComparisonTable,
    FAQ,
    // The CMS "Link" mark (tag: 'a') serializes to an <a>; map both names so
    // it routes through SmartLink, which adds rel="noopener noreferrer" when
    // opening in a new tab. Normal markdown links pass through unchanged.
    a: SmartLink,
    Link: SmartLink,
    // Bind the locale so in-body internal links resolve to /en/... on EN pages.
    ArticleLink: (props: { article?: string; children?: React.ReactNode }) => (
      <ArticleLink {...props} locale={locale} />
    ),
    ReviewLink,
    // Route body images through next/image for automatic WebP/resizing.
    img: ContentImage,
    table: (props) => (
      <div className="overflow-x-auto my-8">
        <table {...props} />
      </div>
    ),
  }}
  options={{
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
      ],
      rehypePlugins: [
        rehypeSlug,
      ],
    },
  }}
/>

            </div>

<div className="mt-16">

  {author && <AuthorCard author={author} locale={locale} />}

</div>

          </article>

        </div>

      </section>

    </main>
  )
}