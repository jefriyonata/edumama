export type DirectoryItem = {
  slug: string
  label: string
  href: string
  description: string
  /**
   * `true` once the directory has real listings. `false` renders a
   * "coming soon" stub and a muted state in the nav.
   */
  available: boolean
}

export const directories: DirectoryItem[] = [
  {
    slug: 'daycare',
    label: 'Daycare',
    href: '/daycare',
    description:
      'Direktori tempat penitipan anak (daycare) tepercaya per kota di Indonesia.',
    available: true,
  },
  {
    slug: 'preschool',
    label: 'Preschool',
    href: '/direktori/preschool',
    description:
      'Direktori preschool & PAUD pilihan per kota untuk anak usia dini.',
    available: false,
  },
  {
    slug: 'bimbel',
    label: 'Bimbel',
    href: '/direktori/bimbel',
    description:
      'Direktori bimbingan belajar (bimbel) untuk anak dari berbagai jenjang.',
    available: false,
  },
  {
    slug: 'playground',
    label: 'Playground',
    href: '/direktori/playground',
    description:
      'Direktori playground & area bermain anak yang aman dan edukatif.',
    available: false,
  },
]

export function getDirectory(slug: string) {
  return directories.find((directory) => directory.slug === slug)
}
