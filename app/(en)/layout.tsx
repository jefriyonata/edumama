import type { Metadata } from 'next'

import BaseHtml from '@/components/BaseHtml'
import SiteChrome from '@/components/SiteChrome'
import { rootMetadata } from '@/lib/seo'

export const metadata: Metadata = rootMetadata('en')

/**
 * Root layout for the English site (served under /en). Sibling of
 * app/(id)/layout.tsx — separate root layouts let each locale emit its own
 * <html lang> without forcing dynamic rendering.
 */
export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <BaseHtml lang="en">
      <SiteChrome locale="en">{children}</SiteChrome>
    </BaseHtml>
  )
}
