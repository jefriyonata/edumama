import Link from 'next/link'
import Image from 'next/image'
import type { Locale } from '@/lib/mdx'

type PostCardProps = {
  slug: string
  frontmatter: any
  type: 'articles' | 'reviews'
  locale?: Locale
}

export default function PostCard({
  slug,
  frontmatter,
  type,
  locale = 'id',
}: PostCardProps)

{

  const postHref =
    locale === 'en' ? `/en/${type}/${slug}` : `/${type}/${slug}`

  return (
    <article className="group">

      <Link href={postHref}>

        <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-100">

          <Image
  src={
    frontmatter.image ||
    '/images/thumbnails/default-thumbnail.png'
  }
  alt={frontmatter.title}
  fill
  className="object-cover group-hover:scale-105 transition duration-300"
/>

        </div>

      </Link>

      {frontmatter.category && (
        // ID has /category hubs; EN (phase 1) does not, so show plain text.
        locale === 'id' ? (
          <Link
            href={`/category/${frontmatter.category}`}
            className="inline-block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 hover:text-[#FA8072] transition"
          >
            {frontmatter.category.replace(/-/g, ' ')}
          </Link>
        ) : (
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            {frontmatter.category.replace(/-/g, ' ')}
          </span>
        )
      )}

      <h3 className="text-3xl font-bold leading-tight mb-4">

        <Link
          href={postHref}
          className="hover:underline"
        >
          {frontmatter.title}
        </Link>

      </h3>

      <p className="text-gray-600 mb-4 leading-7">

        {frontmatter.description}

      </p>

      <p className="text-sm text-gray-400">

        {frontmatter.date}

      </p>

    </article>
  )
}