import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import PlaceCard from '@/components/directory/PlaceCard'
import JsonLd from '@/components/seo/JsonLd'
import JakartaPreschoolGuide, {
  jakartaPreschoolFaqs,
} from '@/components/directory/JakartaPreschoolGuide'

import {
  getCitiesForType,
  getPlacesByCity,
  cityLabelFor,
} from '@/lib/places'
import {
  buildMetadata,
  breadcrumbSchema,
  itemListSchema,
  faqSchema,
} from '@/lib/seo'

const TYPE = 'preschool' as const

export function generateStaticParams() {
  return getCitiesForType(TYPE).map(({ city }) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {

  const { city } = await params
  const cityLabel = cityLabelFor(TYPE, city)

  if (!cityLabel) {
    return buildMetadata({ title: 'Preschools', locale: 'en' })
  }

  return buildMetadata({
    title: `Preschools & Kindergartens in ${cityLabel}`,
    description: `A directory of preschools and kindergartens in ${cityLabel}: curriculum, age range, location, and website for each school. Compare your options in one place.`,
    path: `/en/preschools/${city}`,
    locale: 'en',
  })
}

export default async function PreschoolCityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {

  const { city } = await params
  const cityLabel = cityLabelFor(TYPE, city)
  const places = getPlacesByCity(TYPE, city)

  if (!cityLabel || places.length === 0) {
    notFound()
  }

  const path = `/en/preschools/${city}`
  const isJakarta = city === 'jakarta'

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: '/en' },
      { name: 'Preschools', path: '/en/preschools' },
      { name: cityLabel, path },
    ]),
    itemListSchema(
      places.map((p) => ({
        name: p.name,
        path: `/en/preschools/${p.city}/${p.slug}`,
      })),
    ),
    ...(isJakarta ? [faqSchema(jakartaPreschoolFaqs)] : []),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <main>

        <Section>

          <Container>

            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/en" className="hover:underline">Home</Link>
              {' / '}
              <Link href="/en/preschools" className="hover:underline">Preschools</Link>
              {' / '}
              <span className="text-gray-800">{cityLabel}</span>
            </nav>

            <div className="mb-4">
              <Heading level="h1">
                Preschools &amp; Kindergartens in {cityLabel}
              </Heading>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mb-10">
              {places.length} preschools and kindergartens in {cityLabel}, with
              curriculum, age range, location, and website for each. Details are
              compiled from public sources — please confirm with the school
              before enrolling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {places.map((place) => (
                <PlaceCard key={place.slug} place={place} locale="en" />
              ))}
            </div>

            {isJakarta && (
              <section className="mt-20 border-t pt-12">
                <JakartaPreschoolGuide />
              </section>
            )}

          </Container>

        </Section>

      </main>
    </>
  )
}
