import type { Metadata } from 'next'
import Link from 'next/link'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import JsonLd from '@/components/seo/JsonLd'

import { getCitiesForType } from '@/lib/places'
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
              Telusuri tempat penitipan anak per kota — lengkap dengan
              lokasi, kurikulum, rentang usia, fasilitas, dan kontak.
              Pilih kota Anda untuk mulai membandingkan.
            </p>

            {cities.length === 0 ? (
              <p className="text-gray-500">
                Belum ada data. Segera hadir.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {cities.map((c) => (
                  <Link
                    key={c.city}
                    href={`/${TYPE}/${c.city}`}
                    className="group border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md hover:border-[#FA8072] transition"
                  >
                    <span className="block text-lg font-bold group-hover:text-[#FA8072] transition">
                      {c.cityLabel}
                    </span>
                    <span className="text-sm text-gray-500">
                      {c.count} daycare
                    </span>
                  </Link>
                ))}
              </div>
            )}

          </Container>

        </Section>

      </main>
    </>
  )
}
