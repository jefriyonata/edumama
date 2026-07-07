import Script from 'next/script'
import { Inter, Fraunces } from 'next/font/google'

import '@/app/globals.css'

import type { Locale } from '@/lib/mdx'

// Google Tag Manager container ID.
const GTM_ID = 'GTM-MB9CRM77'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

/**
 * The document shell (<html>/<body> + fonts + GTM), shared by every root
 * layout. The App Router requires each root layout to render <html>/<body>;
 * we have one per locale ((id), (en), keystatic) so `lang` can differ, and
 * this component keeps that markup in a single place.
 */
export default function BaseHtml({
  lang,
  children,
}: {
  lang: Locale
  children: React.ReactNode
}) {
  return (
    <html lang={lang}>

      {/* Google Tag Manager — loads as early as Next allows in the App Router. */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      <body className={`${inter.className} ${fraunces.variable}`}>

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
