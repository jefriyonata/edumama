import { getArticleUrl } from '@/lib/mdx'
import type { Locale } from '@/lib/mdx'

type ArticleLinkProps = {
  /** The referenced article's stable ID (filename), stored by the CMS. */
  article?: string
  /** Locale of the resolved link target. Bound by ContentPage per locale. */
  locale?: Locale
  children?: React.ReactNode
}

/**
 * Internal link to an article, chosen from a dropdown in the CMS. Stores the
 * article's stable ID and resolves it to the article's *current* URL at
 * render time — so changing an article's URL slug never breaks this link.
 */
export default function ArticleLink({
  article,
  locale = 'id',
  children,
}: ArticleLinkProps) {

  if (!article) {
    return <>{children}</>
  }

  return <a href={getArticleUrl(article, locale)}>{children}</a>
}
