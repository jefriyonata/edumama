import type { Metadata } from 'next'

import BaseHtml from '@/components/BaseHtml'
import SiteChrome from '@/components/SiteChrome'
import { rootMetadata } from '@/lib/seo'

export const metadata: Metadata = rootMetadata('id')

/**
 * Root layout for the Indonesian site (served at the domain root). One of two
 * per-locale root layouts — see app/(en)/layout.tsx — so each can emit its own
 * <html lang> while both share the BaseHtml shell and SiteChrome.
 */
export default function IdRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <BaseHtml lang="id">
      <SiteChrome locale="id">{children}</SiteChrome>
    </BaseHtml>
  )
}
