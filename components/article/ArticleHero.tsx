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

      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24 lg:py-28 text-center">

        <Link
  href={`/category/${frontmatter.category}`}
  className="inline-block uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm mb-6 sm:mb-8 opacity-80 hover:opacity-100 transition"
>

  {frontmatter.category?.replace(/-/g, ' ')}

</Link>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 sm:mb-8 text-balance break-words">

          {frontmatter.title}

        </h1>

        <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-8 sm:mb-10 max-w-3xl mx-auto">

          {frontmatter.description}

        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm opacity-80">

          <span>
            By {author.name}
          </span>

          <span>•</span>

          <span>
            {frontmatter.date}
          </span>

          {frontmatter.readingTime && (
            <>
              <span>•</span>

              <span>
                {frontmatter.readingTime}
              </span>
            </>
          )}

        </div>

      </div>

    </section>
  )
}