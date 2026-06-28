import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/seo/JsonLd'
import {
  organizationSchema,
  websiteSchema,
} from '@/lib/seo'

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />

      <Header />

      {children}

      <Footer />
    </>
  )
}
