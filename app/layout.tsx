import type { Metadata } from 'next'
import Script from 'next/script'

import './globals.css'

// Google Tag Manager container ID.
const GTM_ID = 'GTM-MB9CRM77'

import { siteConfig } from '@/lib/seo'

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
    default: 'Bersemai',
    template: '%s | Bersemai',
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

      {/* Google Tag Manager — loads as early as Next allows in the App Router. */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      <body
  className={`${inter.className} ${fraunces.variable}`}
>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}

      </body>

    </html>
  )
}