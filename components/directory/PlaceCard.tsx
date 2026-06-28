import Link from 'next/link'
import type { Place } from '@/lib/places'

export default function PlaceCard({ place }: { place: Place }) {

  const href = `/${place.type}/${place.city}/${place.slug}`

  return (
    <article className="group border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition flex flex-col">

      <div className="flex items-start justify-between gap-3 mb-2">

        <h3 className="text-xl font-bold leading-tight">
          <Link href={href} className="hover:text-[#FA8072] transition">
            {place.name}
          </Link>
        </h3>

        {typeof place.googleRating === 'number' && (
          <span className="shrink-0 text-sm font-semibold whitespace-nowrap">
            ⭐ {place.googleRating.toLocaleString('id-ID')}
            {place.googleReviewCount
              ? ` (${place.googleReviewCount})`
              : ''}
          </span>
        )}

      </div>

      {place.district && (
        <p className="text-sm text-gray-500 mb-3">
          {place.district}
        </p>
      )}

      {place.curriculum?.length ? (
        <div className="flex flex-wrap gap-2 mb-4">
          {place.curriculum.map((c) => (
            <span
              key={c}
              className="text-xs bg-gray-100 rounded-full px-3 py-1 text-gray-700"
            >
              {c}
            </span>
          ))}
        </div>
      ) : null}

      {place.summary && (
        <p className="text-gray-600 text-sm leading-7 mb-5 line-clamp-3">
          {place.summary}
        </p>
      )}

      <div className="mt-auto flex items-center gap-4 text-sm">
        <Link
          href={href}
          className="font-semibold text-[#FA8072] hover:underline"
        >
          Lihat detail →
        </Link>
        {place.ageRange && (
          <span className="text-gray-400">{place.ageRange}</span>
        )}
      </div>

    </article>
  )
}
