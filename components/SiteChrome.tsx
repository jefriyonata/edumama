import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { organizationSchema, websiteSchema } from '@/lib/seo'
import type { Locale } from '@/lib/mdx'

/**
 * Public-site chrome (org/website JSON-LD + Header + Footer) shared by both
 * locale root layouts. Everything locale-aware is driven by the `locale` prop.
 */
export default function SiteChrome({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(locale)]} />

      <Header locale={locale} />

      {children}

      <Footer locale={locale} />
    </>
  )
}
