import type { Metadata } from 'next'
import Link from 'next/link'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import JsonLd from '@/components/seo/JsonLd'

import { getCitiesForType } from '@/lib/places'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Preschool & Kindergarten Directory',
  description:
    'Browse preschools and kindergartens by city in Indonesia — curriculum, age range, location, and website for each school.',
  path: '/en/preschools',
  locale: 'en',
})

export default function PreschoolHubPage() {

  const cities = getCitiesForType('preschool')

  const jsonLd = breadcrumbSchema([
    { name: 'Home', path: '/en' },
    { name: 'Preschools', path: '/en/preschools' },
  ])

  return (
    <>
      <JsonLd data={jsonLd} />

      <main>

        <Section>

          <Container>

            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/en" className="hover:underline">Home</Link>
              {' / '}
              <span className="text-gray-800">Preschools</span>
            </nav>

            <div className="max-w-3xl mb-10">
              <Heading level="h1">
                Preschools &amp; Kindergartens
              </Heading>
              <p className="mt-6 text-lg text-gray-600 leading-8">
                Find a preschool or kindergarten by city — compare curriculum,
                age range, location, and contact details in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.city}
                  href={`/en/preschools/${city.city}`}
                  className="group border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition"
                >
                  <h2 className="text-xl font-bold group-hover:text-[#FA8072] transition">
                    {city.cityLabel}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    {city.count} {city.count === 1 ? 'school' : 'schools'}
                  </p>
                </Link>
              ))}
            </div>

          </Container>

        </Section>

      </main>
    </>
  )
}
