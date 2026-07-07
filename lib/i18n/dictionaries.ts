import type { Locale } from '@/lib/mdx'

/**
 * UI-string dictionaries for the shared chrome (Header/Footer) and article
 * furniture. The `id` values match the current live copy exactly so the
 * Indonesian site renders unchanged; `en` provides the English equivalents.
 * Page body copy is kept in the page files themselves (not here).
 */
export type Dict = {
  nav: {
    directory: string
    articles: string
    about: string
    comingSoon: string
    openMenu: string
    closeMenu: string
  }
  footer: {
    explore: string
    about: string
    tagline: string
    aboutText: string
    rights: string
    madeWith: string
  }
  home: { viewAll: string }
  article: { writtenBy: string; by: string }
}

const id: Dict = {
  nav: {
    directory: 'Direktori',
    articles: 'Artikel',
    about: 'Tentang Kami',
    comingSoon: 'Segera',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
  },
  footer: {
    explore: 'Jelajahi',
    about: 'Tentang',
    tagline:
      'Review preschool yang jujur, panduan parenting, dan wawasan pendidikan anak usia dini untuk keluarga masa kini.',
    aboutText:
      'Dibuat untuk orang tua yang mencari sumber informasi pendidikan anak usia dini yang tepercaya.',
    rights: 'Hak cipta dilindungi.',
    madeWith: 'Dibuat dengan cinta',
  },
  home: { viewAll: 'Lihat Semua' },
  article: { writtenBy: 'Ditulis Oleh', by: 'Oleh' },
}

const en: Dict = {
  nav: {
    directory: 'Directory',
    articles: 'Articles',
    about: 'About',
    comingSoon: 'Soon',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  footer: {
    explore: 'Explore',
    about: 'About',
    tagline:
      'Honest preschool reviews, parenting guides, and early childhood education insights for modern families.',
    aboutText:
      'Built for parents looking for trustworthy early childhood education resources.',
    rights: 'All rights reserved.',
    madeWith: 'Made with love',
  },
  home: { viewAll: 'View All' },
  article: { writtenBy: 'Written By', by: 'By' },
}

const dictionaries: Record<Locale, Dict> = { id, en }

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale]
}

/** Home path for a locale ('/' for id, '/en' for en). */
export function localeHome(locale: Locale): string {
  return locale === 'en' ? '/en' : '/'
}

/** Prefix a site path for a locale (id = unchanged, en = '/en' prefixed). */
export function localePath(locale: Locale, path: string): string {
  if (locale === 'id') return path
  return path === '/' ? '/en' : `/en${path}`
}
