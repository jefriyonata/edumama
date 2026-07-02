import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import PlaceCard from '@/components/directory/PlaceCard'
import JsonLd from '@/components/seo/JsonLd'

import {
  getCitiesForType,
  getPlacesByCity,
  cityLabelFor,
} from '@/lib/places'
import {
  buildMetadata,
  breadcrumbSchema,
  itemListSchema,
} from '@/lib/seo'

const TYPE = 'daycare' as const

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
    return buildMetadata({ title: 'Daycare' })
  }

  return buildMetadata({
    title: `Daycare ${cityLabel} — Direktori Tempat Penitipan Anak`,
    description: `Direktori daycare di ${cityLabel}: lokasi, kurikulum, usia, fasilitas, dan kontak. Bandingkan tempat penitipan anak terbaik di ${cityLabel}.`,
    path: `/${TYPE}/${city}`,
  })
}

export default async function DaycareCityPage({
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

  const path = `/${TYPE}/${city}`

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Daycare', path: `/${TYPE}` },
      { name: cityLabel, path },
    ]),
    itemListSchema(
      places.map((p) => ({
        name: p.name,
        path: `/${TYPE}/${p.city}/${p.slug}`,
      })),
    ),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <main>

        <Section>

          <Container>

            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:underline">Home</Link>
              {' / '}
              <span>Daycare</span>
              {' / '}
              <span className="text-gray-800">{cityLabel}</span>
            </nav>

            <div className="mb-4">
              <Heading level="h1">
                Daycare di {cityLabel}
              </Heading>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mb-10">
              {places.length} tempat penitipan anak di {cityLabel} —
              lengkap dengan lokasi, kurikulum, rentang usia, dan kontak.
              Data dari riset Google Maps Bersemai; selalu verifikasi
              ulang sebelum mendaftar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {places.map((place) => (
                <PlaceCard key={place.slug} place={place} />
              ))}
            </div>

            <p className="mt-12 text-sm text-gray-500">
              Mencari panduan naratif? Baca juga ulasan{' '}
              <Link
                href={`/articles/${TYPE}-${city}`}
                className="text-[#FA8072] hover:underline"
              >
                Daycare {cityLabel} pilihan editor
              </Link>
              .
            </p>

          </Container>

        </Section>

      </main>
    </>
  )
}
