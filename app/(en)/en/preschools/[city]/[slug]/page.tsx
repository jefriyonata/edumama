import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

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

const TYPE = 'preschool' as const

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
    return buildMetadata({ title: 'Preschools', locale: 'en' })
  }

  return buildMetadata({
    title: `${place.name} — Preschool in ${place.cityLabel}`,
    description:
      place.summary ||
      `${place.name}, a preschool in ${place.district || place.cityLabel}. Curriculum, age range, location, and contact details.`,
    path: `/en/preschools/${city}/${slug}`,
    locale: 'en',
  })
}

function InfoItem({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t py-4">
      <dt className="text-sm text-gray-500">{label}</dt>
      <dd className="mt-1 font-semibold text-gray-900">{children}</dd>
    </div>
  )
}

export default async function PreschoolPlacePage({
  params,
}: {
  params: Promise<{ city: string; slug: string }>
}) {

  const { city, slug } = await params
  const place = getPlace(TYPE, city, slug)

  if (!place) {
    notFound()
  }

  const path = `/en/preschools/${city}/${slug}`

  const sameAs = [
    place.website,
    place.instagram,
    place.googleMapsUrl,
  ].filter(Boolean) as string[]

  const jsonLd = [
    placeSchema({
      name: place.name,
      schemaType: 'Preschool',
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
      { name: 'Home', path: '/en' },
      { name: 'Preschools', path: '/en/preschools' },
      { name: place.cityLabel, path: `/en/preschools/${city}` },
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
              <Link href="/en" className="hover:underline">Home</Link>
              {' / '}
              <Link href="/en/preschools" className="hover:underline">Preschools</Link>
              {' / '}
              <Link href={`/en/preschools/${city}`} className="hover:underline">
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
                  Preschool · {place.district || place.cityLabel}
                </p>

                {typeof place.googleRating === 'number' && (
                  <p className="mb-8 text-sm">
                    <span className="font-semibold">
                      ⭐ {place.googleRating.toLocaleString('en-US')}
                    </span>{' '}
                    {place.googleReviewCount
                      ? `(${place.googleReviewCount} reviews) `
                      : ''}
                    <span className="text-gray-500">
                      on Google Maps
                      {place.googleMapsUrl ? (
                        <>
                          {' · '}
                          <a
                            href={place.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="text-[#FA8072] hover:underline"
                          >
                            view profile
                          </a>
                        </>
                      ) : null}
                    </span>
                  </p>
                )}

                {place.summary && (
                  <p className="text-lg text-gray-700 leading-8 mb-10">
                    {place.summary}
                  </p>
                )}

                {/* DETAILS */}
                <section>

                  <h2 className="text-2xl font-bold mb-2">Information</h2>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">

                    {place.address && (
                      <InfoItem label="Address">{place.address}</InfoItem>
                    )}
                    {place.phone && (
                      <InfoItem label="Phone">
                        <a
                          href={`tel:${place.phone.replace(/[^+\d]/g, '')}`}
                          className="hover:underline"
                        >
                          {place.phone}
                        </a>
                      </InfoItem>
                    )}
                    {place.curriculum?.length ? (
                      <InfoItem label="Curriculum">
                        {place.curriculum.join(', ')}
                      </InfoItem>
                    ) : null}
                    {place.ageRange && (
                      <InfoItem label="Ages">{place.ageRange}</InfoItem>
                    )}
                    {place.hours && (
                      <InfoItem label="Opening hours">{place.hours}</InfoItem>
                    )}
                    {place.priceBand && (
                      <InfoItem label="Fee band">{place.priceBand}</InfoItem>
                    )}
                    {place.facilities?.length ? (
                      <InfoItem label="Facilities">
                        {place.facilities.join(', ')}
                      </InfoItem>
                    ) : null}

                  </dl>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {place.website && (
                      <a
                        href={place.website}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="bg-[#FA8072] text-white rounded-full px-6 py-2.5 font-semibold hover:opacity-90 transition"
                      >
                        Visit website
                      </a>
                    )}
                    {place.instagram && (
                      <a
                        href={place.instagram}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="border rounded-full px-6 py-2.5 font-semibold hover:bg-gray-50 transition"
                      >
                        Instagram
                      </a>
                    )}
                  </div>

                  <p className="mt-6 text-xs text-gray-400">
                    {place.lastVerified
                      ? `Details from public sources (${place.lastVerified}). `
                      : 'Details from public sources. '}
                    Please confirm with the school before enrolling.
                  </p>

                </section>

                {place.pros?.length ? (
                  <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-3">Highlights</h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {place.pros.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {place.cons?.length ? (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-3">
                      Things to consider
                    </h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {place.cons.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {place.bestFor && (
                  <div className="border rounded-2xl p-6 bg-green-50 border-green-200 mt-8">
                    <p className="font-semibold mb-1">Best for</p>
                    <p className="text-gray-700 leading-7">
                      {place.bestFor}
                    </p>
                  </div>
                )}

              </div>

              {/* SIDEBAR — photos */}
              <aside className="lg:col-span-1">

                <div className="lg:sticky lg:top-10">

                  {place.images?.length ? (
                    <div className="flex flex-col gap-4">
                      {place.images.map((src, i) => (
                        <div
                          key={src}
                          className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
                        >
                          <Image
                            src={src}
                            alt={`${place.name} — photo ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="aspect-[4/3] rounded-2xl bg-[#FA8072]/10 border border-[#FA8072]/20 flex flex-col items-center justify-center text-center px-6">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FA8072"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <circle cx="8.5" cy="10" r="1.5" />
                        <path d="M21 16l-5-5L5 19" />
                      </svg>
                      <p className="mt-3 text-sm text-gray-500">
                        Photos coming soon
                      </p>
                    </div>
                  )}

                  <p className="mt-6 text-sm">
                    <Link
                      href={`/en/preschools/${city}`}
                      className="text-[#FA8072] hover:underline"
                    >
                      ← All preschools in {place.cityLabel}
                    </Link>
                  </p>

                </div>

              </aside>

            </div>

          </Container>

        </Section>

      </main>
    </>
  )
}
