import Link from 'next/link'
import Image from 'next/image'

type PostCardProps = {
  slug: string
  frontmatter: any
  type: 'articles' | 'reviews'
}

export default function PostCard({
  slug,
  frontmatter,
  type,
}: PostCardProps)
 
{

  return (
    <article className="group">

      <Link href={`/${type}/${slug}`}>

        <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-100">

          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />

        </div>

      </Link>

      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">

        {frontmatter.category}

      </p>

      <h3 className="text-3xl font-bold leading-tight mb-4">

        <Link
          href={`/${type}/${slug}`}
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