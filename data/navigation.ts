export type NavItem = {
  href: string
  label: string
}

export const leftCategories: NavItem[] = [
  { href: '/daycare', label: 'Direktori' },
  { href: '/reviews', label: 'Preschool' },
  { href: '/category/parenting-tips', label: 'Parenting' },
  { href: '/category/pendidikan-anak', label: 'Pendidikan' },
]

export const rightCategories: NavItem[] = [
  { href: '/category/aktivitas-anak', label: 'Aktivitas' },
  { href: '/category/mainan-edukatif', label: 'Main' },
  { href: '/tentang-kami', label: 'Tentang' },
]

export const navCategories: NavItem[] = [
  ...leftCategories,
  ...rightCategories,
]
