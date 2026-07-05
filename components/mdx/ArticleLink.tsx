import { getArticleUrl } from '@/lib/mdx'

type ArticleLinkProps = {
  /** The referenced article's stable ID (filename), stored by the CMS. */
  article?: string
  children?: React.ReactNode
}

/**
 * Internal link to an article, chosen from a dropdown in the CMS. Stores the
 * article's stable ID and resolves it to the article's *current* URL at
 * render time — so changing an article's URL slug never breaks this link.
 */
export default function ArticleLink({
  article,
  children,
}: ArticleLinkProps) {

  if (!article) {
    return <>{children}</>
  }

  return <a href={getArticleUrl(article)}>{children}</a>
}
