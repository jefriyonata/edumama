import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'
import JsonLd from '@/components/seo/JsonLd'

import {
  getPlacesByType,
  getPlace,
} from '@/lib/places'
import {
  buildMetadata,
  breadcrumbSchema,
  placeSchema,
} from '@/lib/seo'

const TYPE = 'daycare' as const

export function generateStaticParams() {
  return getPlacesByType(TYPE).map((p) => ({
    city: p.city,
    slug: p.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; slug: string }>
}): Promise<Metadata> {

  const { city, slug } = await params
  const place = getPlace(TYPE, city, slug)

  if (!place) {
    return buildMetadata({ title: 'Daycare' })
  }

  return buildMetadata({
    title: `${place.name} — Daycare ${place.cityLabel}`,
    description:
      place.summary ||
      `${place.name}, daycare di ${place.district || place.cityLabel}. Lokasi, kurikulum, usia, fasilitas, dan kontak.`,
    path: `/${TYPE}/${city}/${slug}`,
    noindex: true,
  })
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6 border-b py-3">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-semibold text-left sm:text-right">
        {children}
      </span>
    </div>
  )
}

export default async function DaycarePlacePage({
  params,
}: {
  params: Promise<{ city: string; slug: string }>
}) {

  const { city, slug } = await params
  const place = getPlace(TYPE, city, slug)

  if (!place) {
    notFound()
  }

  const path = `/${TYPE}/${city}/${slug}`

  const sameAs = [
    place.website,
    place.instagram,
    place.googleMapsUrl,
  ].filter(Boolean) as string[]

  const jsonLd = [
    placeSchema({
      name: place.name,
      schemaType: 'ChildCare',
      path,
      description: place.summary,
      telephone: place.phone,
      address: place.address,
      addressLocality: place.district || place.cityLabel,
      lat: place.lat,
      lng: place.lng,
      sameAs,
    }),
    breadcrumbSchema([
      { name: 'Beranda', path: '/' },
      { name: 'Daycare', path: `/${TYPE}` },
      { name: place.cityLabel, path: `/${TYPE}/${city}` },
      { name: place.name, path },
    ]),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />

      <main>

        <Section>

          <Container>

            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:underline">Beranda</Link>
              {' / '}
              <span>Daycare</span>
              {' / '}
              <Link href={`/${TYPE}/${city}`} className="hover:underline">
                {place.cityLabel}
              </Link>
              {' / '}
              <span className="text-gray-800">{place.name}</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-12">

              {/* MAIN */}
              <div className="lg:col-span-2">

                <div className="mb-3">
                  <Heading level="h1">{place.name}</Heading>
                </div>

                <p className="text-gray-500 mb-6">
                  Daycare · {place.district || place.cityLabel}
                </p>

                {typeof place.googleRating === 'number' && (
                  <p className="mb-8 text-sm">
                    <span className="font-semibold">
                      ⭐ {place.googleRating.toLocaleString('id-ID')}
                    </span>{' '}
                    {place.googleReviewCount
                      ? `(${place.googleReviewCount} ulasan) `
                      : ''}
                    <span className="text-gray-500">
                      di Google Maps
                      {place.googleMapsUrl ? (
                        <>
                          {' · '}
                          <a
                            href={place.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="text-[#FA8072] hover:underline"
                          >
                            lihat profil
                          </a>
                        </>
                      ) : null}
                    </span>
                  </p>
                )}

                {place.summary && (
                  <p className="text-lg text-gray-700 leading-8 mb-8">
                    {place.summary}
                  </p>
                )}

                {place.pros?.length ? (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-3">Kelebihan</h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {place.pros.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {place.cons?.length ? (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-3">
                      Hal yang perlu dipertimbangkan
                    </h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {place.cons.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {place.bestFor && (
                  <div className="border rounded-2xl p-6 bg-green-50 border-green-200 mb-8">
                    <p className="font-semibold mb-1">Cocok untuk</p>
                    <p className="text-gray-700 leading-7">
                      {place.bestFor}
                    </p>
                  </div>
                )}

              </div>

              {/* SIDEBAR */}
              <aside className="lg:col-span-1">

                <div className="border rounded-2xl p-6 bg-white shadow-sm lg:sticky lg:top-10">

                  <p className="text-lg font-bold mb-5">Informasi</p>

                  {place.address && (
                    <Field label="Alamat">{place.address}</Field>
                  )}
                  {place.curriculum?.length ? (
                    <Field label="Kurikulum">
                      {place.curriculum.join(', ')}
                    </Field>
                  ) : null}
                  {place.ageRange && (
                    <Field label="Usia">{place.ageRange}</Field>
                  )}
                  {place.priceBand && (
                    <Field label="Kisaran biaya">{place.priceBand}</Field>
                  )}
                  {place.hours && (
                    <Field label="Jam">{place.hours}</Field>
                  )}
                  {place.facilities?.length ? (
                    <Field label="Fasilitas">
                      {place.facilities.join(', ')}
                    </Field>
                  ) : null}

                  <div className="mt-5 flex flex-col gap-2">
                    {place.website && (
                      <a
                        href={place.website}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-center bg-[#FA8072] text-white rounded-full py-2 font-semibold hover:opacity-90 transition"
                      >
                        Kunjungi website
                      </a>
                    )}
                    {place.instagram && (
                      <a
                        href={place.instagram}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-center border rounded-full py-2 font-semibold hover:bg-gray-50 transition"
                      >
                        Instagram
                      </a>
                    )}
                  </div>

                  {place.lastVerified && (
                    <p className="mt-5 text-xs text-gray-400">
                      Terakhir diperbarui: {place.lastVerified}.
                      Verifikasi ulang sebelum mendaftar.
                    </p>
                  )}

                </div>

                <p className="mt-6 text-sm">
                  <Link
                    href={`/${TYPE}/${city}`}
                    className="text-[#FA8072] hover:underline"
                  >
                    ← Semua daycare di {place.cityLabel}
                  </Link>
                </p>

              </aside>

            </div>

          </Container>

        </Section>

      </main>
    </>
  )
}
