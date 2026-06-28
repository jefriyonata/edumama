import type { Metadata } from 'next'

import DirectoryComingSoon from '@/components/directory/DirectoryComingSoon'

import { getDirectory } from '@/data/directories'
import { buildMetadata } from '@/lib/seo'

const directory = getDirectory('preschool')!

export const metadata: Metadata = buildMetadata({
  title: `Direktori ${directory.label} — Segera Hadir`,
  description: directory.description,
  path: directory.href,
})

export default function PreschoolDirectoryPage() {
  return <DirectoryComingSoon directory={directory} />
}
