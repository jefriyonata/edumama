import { getReviewUrl } from '@/lib/mdx'

type ReviewLinkProps = {
  /** The referenced review's stable ID (filename), stored by the CMS. */
  review?: string
  children?: React.ReactNode
}

/**
 * Internal link to a review, chosen from a dropdown in the CMS. Stores the
 * review's stable ID and resolves it to the review's *current* URL at render
 * time — so changing a review's URL slug never breaks this link.
 */
export default function ReviewLink({
  review,
  children,
}: ReviewLinkProps) {

  if (!review) {
    return <>{children}</>
  }

  return <a href={getReviewUrl(review)}>{children}</a>
}
