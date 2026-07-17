import Link from 'next/link'
import Image from 'next/image'

import { getAllArticles } from '@/lib/mdx'
import type { Locale } from '@/lib/mdx'
import { getDictionary } from '@/lib/i18n/dictionaries'

const RELATED_COUNT = 3

type RelatedArticlesProps = {
  /** Stable ID (filename) of the article being viewed — excluded from results. */
  currentId: string
  /** Category of the current article; same-category entries are preferred. */
  category?: string
  locale?: Locale
}

/**
 * Renders a small grid of related articles at the foot of an article.
 *
 * Same-category entries come first (most recent first), then any other
 * published article backfills to `RELATED_COUNT`. This guarantees every
 * article has outbound internal links (no dead ends) and that every
 * published article picks up inbound links (no orphans) as the cluster grows,
 * without anyone hand-maintaining a link list. Drafts are excluded because
 * `getAllArticles` already filters them out.
 */
export default function RelatedArticles({
  currentId,
  category,
  locale = 'id',
}: RelatedArticlesProps) {

  const dict = getDictionary(locale)

  const byNewest = (
    a: { frontmatter: any },
    b: { frontmatter: any },
  ) => String(b.frontmatter.date || '').localeCompare(String(a.frontmatter.date || ''))

  const candidates = getAllArticles(locale)
    .filter((article) => article.id !== currentId)

  const sameCategory = candidates
    .filter((article) => category && article.frontmatter.category === category)
    .sort(byNewest)

  const rest = candidates
    .filter((article) => !sameCategory.some((s) => s.id === article.id))
    .sort(byNewest)

  const related = [...sameCategory, ...rest].slice(0, RELATED_COUNT)

  if (!related.length) {
    return null
  }

  const hrefFor = (slug: string) =>
    locale === 'en' ? `/en/articles/${slug}` : `/articles/${slug}`

  return (
    <section className="border-t pt-10 mt-16">

      <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">
        {dict.article.related}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

        {related.map((article) => (

          <article key={article.id} className="group">

            <Link href={hrefFor(article.slug)}>
              <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-gray-100 rounded-lg">
                <Image
                  src={
                    article.frontmatter.image ||
                    '/images/thumbnails/default-thumbnail.png'
                  }
                  alt={article.frontmatter.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </Link>

            <h3 className="text-lg font-bold leading-snug">
              <Link
                href={hrefFor(article.slug)}
                className="hover:underline"
              >
                {article.frontmatter.title}
              </Link>
            </h3>

          </article>

        ))}

      </div>

    </section>
  )
}
