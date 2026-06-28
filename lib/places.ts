/**
 * Directory data layer.
 *
 * Phase 1 keeps places in typed data files (see `data/places/*`).
 * The public API below is intentionally storage-agnostic so we can
 * swap the backing store for a database later without touching pages.
 */

import { daycarePlaces } from '@/data/places/daycare'

export type PlaceType =
  | 'daycare'
  | 'preschool'
  | 'clinic'
  | 'playground'

export type Place = {
  /** URL slug, unique within (type, city). */
  slug: string
  name: string
  type: PlaceType

  /** City slug, e.g. 'bekasi'. */
  city: string
  /** Human label, e.g. 'Bekasi'. */
  cityLabel: string
  /** Sub-area within the city, e.g. 'Bekasi Utara'. */
  district?: string

  address?: string
  lat?: number
  lng?: number

  website?: string
  instagram?: string
  phone?: string
  whatsapp?: string

  /** e.g. '3 bln – 6 thn'. */
  ageRange?: string
  /** e.g. ['Montessori', 'Islami']. */
  curriculum?: string[]
  /** e.g. 'Menengah' | 'Premium' | 'Terjangkau'. */
  priceBand?: string
  facilities?: string[]
  hours?: string

  /**
   * Public Google Maps signals — shown as attributed text only,
   * never emitted as our own aggregateRating structured data.
   */
  googleRating?: number
  googleReviewCount?: number
  googleMapsUrl?: string

  /** Editorial value-add (our moat). */
  summary?: string
  pros?: string[]
  cons?: string[]
  bestFor?: string

  /** Verification discipline. */
  verified?: boolean
  /** ISO date 'YYYY-MM-DD'. */
  lastVerified?: string
}

/** All places across every type. Add new type files here. */
const allPlaces: Place[] = [
  ...daycarePlaces,
]

export const placeTypeLabels: Record<PlaceType, string> = {
  daycare: 'Daycare',
  preschool: 'Preschool',
  clinic: 'Klinik Anak',
  playground: 'Playground',
}

export function getAllPlaces(): Place[] {
  return allPlaces
}

export function getPlacesByType(type: PlaceType): Place[] {
  return allPlaces.filter((p) => p.type === type)
}

/** Distinct cities (slug + label) that have at least one place of `type`. */
export function getCitiesForType(
  type: PlaceType,
): { city: string; cityLabel: string; count: number }[] {
  const map = new Map<
    string,
    { city: string; cityLabel: string; count: number }
  >()

  for (const p of getPlacesByType(type)) {
    const existing = map.get(p.city)
    if (existing) {
      existing.count += 1
    } else {
      map.set(p.city, {
        city: p.city,
        cityLabel: p.cityLabel,
        count: 1,
      })
    }
  }

  return [...map.values()].sort((a, b) =>
    a.cityLabel.localeCompare(b.cityLabel),
  )
}

/** Places of a given type in a given city, best-rated first. */
export function getPlacesByCity(
  type: PlaceType,
  city: string,
): Place[] {
  return getPlacesByType(type)
    .filter((p) => p.city === city)
    .sort(
      (a, b) =>
        (b.googleRating ?? 0) - (a.googleRating ?? 0) ||
        (b.googleReviewCount ?? 0) - (a.googleReviewCount ?? 0),
    )
}

export function getPlace(
  type: PlaceType,
  city: string,
  slug: string,
): Place | null {
  return (
    getPlacesByType(type).find(
      (p) => p.city === city && p.slug === slug,
    ) ?? null
  )
}

export function cityLabelFor(
  type: PlaceType,
  city: string,
): string | null {
  return (
    getPlacesByType(type).find((p) => p.city === city)
      ?.cityLabel ?? null
  )
}
