'use client'

import { useMemo, useState } from 'react'

import PlaceCard from '@/components/directory/PlaceCard'
import { type Place, type PlaceType } from '@/lib/places'
import { directories } from '@/data/directories'

type TypeOption = PlaceType | 'all'

type DirectoryExplorerProps = {
  /** Places to search across (all types, or pre-scoped to one). */
  places: Place[]
  /** Pre-selected type pill. Defaults to 'all'. */
  initialType?: TypeOption
  /** Hide the type toggle (e.g. when the page is already a single type). */
  showTypeFilter?: boolean
}

const TYPE_OPTIONS: { value: PlaceType; label: string; available: boolean }[] =
  directories.map((directory) => ({
    value: directory.slug as PlaceType,
    label: directory.label,
    available: directory.available,
  }))

function matchesQuery(place: Place, query: string) {
  if (!query) return true

  const haystack = [
    place.name,
    place.district,
    place.cityLabel,
    place.summary,
    place.bestFor,
    ...(place.curriculum ?? []),
    ...(place.facilities ?? []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term))
}

export default function DirectoryExplorer({
  places,
  initialType = 'all',
  showTypeFilter = true,
}: DirectoryExplorerProps) {

  const [type, setType] = useState<TypeOption>(initialType)
  const [city, setCity] = useState<string>('all')
  const [query, setQuery] = useState('')

  // Cities available for the currently selected type.
  const cityOptions = useMemo(() => {
    const scoped =
      type === 'all' ? places : places.filter((p) => p.type === type)

    const map = new Map<string, string>()
    for (const p of scoped) {
      if (!map.has(p.city)) map.set(p.city, p.cityLabel)
    }

    return [...map.entries()]
      .map(([value, label]) => ({ value, label }))
      .sort((a, b) => a.label.localeCompare(b.label))
  }, [places, type])

  const cityIsValid = city === 'all' || cityOptions.some((c) => c.value === city)
  const activeCity = cityIsValid ? city : 'all'

  const results = useMemo(() => {
    return places
      .filter((p) => (type === 'all' ? true : p.type === type))
      .filter((p) => (activeCity === 'all' ? true : p.city === activeCity))
      .filter((p) => matchesQuery(p, query))
      .sort(
        (a, b) =>
          (b.googleRating ?? 0) - (a.googleRating ?? 0) ||
          (b.googleReviewCount ?? 0) - (a.googleReviewCount ?? 0),
      )
  }, [places, type, activeCity, query])

  const selectedTypeOption = TYPE_OPTIONS.find((t) => t.value === type)
  const typeIsComingSoon =
    type !== 'all' && selectedTypeOption && !selectedTypeOption.available

  function handleTypeChange(next: TypeOption) {
    setType(next)
    setCity('all')
  }

  return (
    <div>

      {/* FILTER BAR */}
      <div className="rounded-2xl border bg-white shadow-sm p-4 sm:p-5 mb-8">

        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama, area, atau kurikulum…"
            aria-label="Cari tempat"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 py-3 text-sm outline-none focus:border-[#FA8072] focus:bg-white transition"
          />
        </div>

        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Type toggle */}
          {showTypeFilter && (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tipe">
              <button
                type="button"
                onClick={() => handleTypeChange('all')}
                aria-pressed={type === 'all'}
                className={
                  'rounded-full px-4 py-1.5 text-sm font-medium transition ' +
                  (type === 'all'
                    ? 'bg-[#FA8072] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                }
              >
                Semua
              </button>
              {TYPE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleTypeChange(option.value)}
                  aria-pressed={type === option.value}
                  className={
                    'flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition ' +
                    (type === option.value
                      ? 'bg-[#FA8072] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                  }
                >
                  {option.label}
                  {!option.available && (
                    <span
                      className={
                        'text-[10px] uppercase tracking-[0.1em] ' +
                        (type === option.value ? 'text-white/80' : 'text-gray-400')
                      }
                    >
                      Segera
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Location */}
          <div className="flex items-center gap-2 lg:shrink-0">
            <label htmlFor="location-filter" className="text-sm text-gray-500">
              Lokasi
            </label>
            <select
              id="location-filter"
              value={activeCity}
              onChange={(e) => setCity(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-[#FA8072] focus:bg-white transition"
            >
              <option value="all">Semua lokasi</option>
              {cityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* RESULTS */}
      <p className="text-sm text-gray-500 mb-6">
        {results.length} hasil
      </p>

      {results.length === 0 ? (
        <div className="rounded-2xl border bg-white shadow-sm p-8 text-center">
          {typeIsComingSoon ? (
            <p className="text-gray-600">
              Direktori {selectedTypeOption?.label} segera hadir.
            </p>
          ) : (
            <p className="text-gray-600">
              Tidak ada hasil untuk filter ini. Coba ubah pencarian atau lokasi.
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((place) => (
            <PlaceCard
              key={`${place.type}-${place.city}-${place.slug}`}
              place={place}
            />
          ))}
        </div>
      )}

    </div>
  )
}
