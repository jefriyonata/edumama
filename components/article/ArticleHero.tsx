import Link from 'next/link'
type ArticleHeroProps = {
  frontmatter: any
  author: any
}

export default function ArticleHero({
  frontmatter,
  author,
}: ArticleHeroProps) {

  return (
    <section className="bg-[#FA8072] text-white">

      <div className="max-w-5xl mx-auto px-6 py-28 text-center">

        <Link
  href={`/category/${frontmatter.category}`}
  className="inline-block uppercase tracking-[0.25em] text-sm mb-8 opacity-80 hover:opacity-100 transition"
>

  {frontmatter.category?.replace(/-/g, ' ')}

</Link>

        <h1 className="text-6xl font-bold leading-tight mb-8">

          {frontmatter.title}

        </h1>

        <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">

          {frontmatter.description}

        </p>

        <div className="flex items-center justify-center gap-4 text-sm opacity-80">

          <span>
            By {author.name}
          </span>

          <span>•</span>

          <span>
            {frontmatter.date}
          </span>

          <span>•</span>

          <span>
            {frontmatter.readingTime}
          </span>

        </div>

      </div>

    </section>
  )
}