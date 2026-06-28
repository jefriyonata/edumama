import type { Metadata } from 'next'

import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/seo/JsonLd'
import {
  siteConfig,
  organizationSchema,
  websiteSchema,
} from '@/lib/seo'

import { Inter, Fraunces } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: 'Edumama',
    template: '%s | Edumama',
  },

  description: siteConfig.description,

  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: '/',
    images: [{ url: siteConfig.defaultImage }],
  },

  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitter,
    images: [siteConfig.defaultImage],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="id">

      <body
  className={`${inter.className} ${fraunces.variable}`}
>

        <JsonLd data={[organizationSchema(), websiteSchema()]} />

        <Header />

        {children}

        <Footer />

      </body>

    </html>
  )
}