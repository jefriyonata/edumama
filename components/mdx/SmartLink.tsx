type SmartLinkProps = {
  href?: string
  /** Visible label when inserted as a self-contained inline component. */
  text?: string
  /** String form emitted by the CMS (reliable through MDX): '_blank' / 'nofollow'. */
  target?: string
  rel?: string
  /** Boolean form, for hand-authored MDX shorthand (<Link newTab nofollow />). */
  newTab?: boolean
  nofollow?: boolean
  children?: React.ReactNode
}

/**
 * Link with optional "open in new tab" and "nofollow". Accepts either the
 * CMS string form (target="_blank" / rel="nofollow") or hand-written boolean
 * shorthand. Opening in a new tab always adds rel="noopener noreferrer".
 *
 * NOTE: props must be plain strings/shorthand booleans — this MDX pipeline
 * does not evaluate `{...}` expression attributes.
 */
export default function SmartLink({
  href = '#',
  text,
  target,
  rel,
  newTab,
  nofollow,
  children,
}: SmartLinkProps) {

  const label = children ?? text ?? href

  const openInNewTab = target === '_blank' || newTab === true

  const isNofollow =
    nofollow === true ||
    (typeof rel === 'string' && rel.includes('nofollow'))

  const finalRel =
    [
      openInNewTab && 'noopener',
      openInNewTab && 'noreferrer',
      isNofollow && 'nofollow',
    ]
      .filter(Boolean)
      .join(' ') || undefined

  return (
    <a
      href={href}
      target={openInNewTab ? '_blank' : undefined}
      rel={finalRel}
    >
      {label}
    </a>
  )
}
