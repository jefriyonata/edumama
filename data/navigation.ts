export type NavItem = {
  href: string
  label: string
}

// 'Direktori' is rendered as a dropdown in the header (see Header.tsx),
// sourced from data/directories.ts, so it is not listed here.
export const leftCategories: NavItem[] = [
  { href: '/category/preschool', label: 'Preschool' },
  { href: '/category/parenting-tips', label: 'Parenting' }
]

export const rightCategories: NavItem[] = [
  { href: '/category/aktivitas-anak', label: 'Aktivitas' },
  { href: '/category/mainan-edukatif', label: 'Main' },
  { href: '/category/pendidikan-anak', label: 'Pendidikan' },
]

export const navCategories: NavItem[] = [
  ...leftCategories,
  ...rightCategories,
]
