import type { Metadata } from 'next'
import Link from 'next/link'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import JsonLd from '@/components/seo/JsonLd'
import DirectoryExplorer from '@/components/directory/DirectoryExplorer'

import { directories } from '@/data/directories'
import { getAllPlaces } from '@/lib/places'
import {
  buildMetadata,
  breadcrumbSchema,
  itemListSchema,
} from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Direktori — Daycare, Preschool, Bimbel & Playground',
  description:
    'Direktori Bersemai: telusuri daycare, preschool, bimbel, dan playground anak per kota di Indonesia.',
  path: '/direktori',
})

export default function DirektoriPage() {

  const places = getAllPlaces()

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Direktori', path: '/direktori' },
    ]),
    itemListSchema(
      directories.map((directory) => ({
        name: directory.label,
        path: directory.href,
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
              <span className="text-gray-800">Direktori</span>
            </nav>

            <div className="mb-4">
              <Heading level="h1">Direktori</Heading>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mb-10">
              Telusuri direktori tempat terbaik untuk si kecil — daycare,
              preschool, bimbel, hingga playground — per kota di Indonesia.
              Saring berdasarkan tipe, lokasi, atau cari langsung.
            </p>

            <DirectoryExplorer places={places} />

          </Container>

        </Section>

      </main>
    </>
  )
}
