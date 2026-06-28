import type { Metadata } from 'next'
import Link from 'next/link'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import JsonLd from '@/components/seo/JsonLd'
import DirectoryExplorer from '@/components/directory/DirectoryExplorer'

import { getCitiesForType, getPlacesByType } from '@/lib/places'
import {
  buildMetadata,
  breadcrumbSchema,
  itemListSchema,
} from '@/lib/seo'

const TYPE = 'daycare' as const

export const metadata: Metadata = buildMetadata({
  title: 'Direktori Daycare — Tempat Penitipan Anak per Kota',
  description:
    'Direktori daycare Edumama: telusuri tempat penitipan anak per kota, lengkap dengan lokasi, kurikulum, usia, fasilitas, dan kontak.',
  path: `/${TYPE}`,
})

export default function DaycareDirectoryPage() {

  const cities = getCitiesForType(TYPE)
  const places = getPlacesByType(TYPE)

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Daycare', path: `/${TYPE}` },
    ]),
    itemListSchema(
      cities.map((c) => ({
        name: `Daycare ${c.cityLabel}`,
        path: `/${TYPE}/${c.city}`,
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
              <span className="text-gray-800">Daycare</span>
            </nav>

            <div className="mb-4">
              <Heading level="h1">Direktori Daycare</Heading>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mb-10">
              Telusuri tempat penitipan anak — lengkap dengan lokasi,
              kurikulum, rentang usia, fasilitas, dan kontak. Saring
              berdasarkan lokasi atau cari langsung.
            </p>

            <DirectoryExplorer places={places} initialType={TYPE} />

            {cities.length > 0 && (
              <div className="mt-16 border-t pt-10">
                <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-5">
                  Jelajahi per kota
                </h2>
                <div className="flex flex-wrap gap-3">
                  {cities.map((c) => (
                    <Link
                      key={c.city}
                      href={`/${TYPE}/${c.city}`}
                      className="text-sm border rounded-full px-4 py-2 bg-white hover:border-[#FA8072] hover:text-[#FA8072] transition"
                    >
                      {c.cityLabel}{' '}
                      <span className="text-gray-400">({c.count})</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </Container>

        </Section>

      </main>
    </>
  )
}
