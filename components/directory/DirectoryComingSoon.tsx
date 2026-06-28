import Link from 'next/link'

import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

import type { DirectoryItem } from '@/data/directories'

export default function DirectoryComingSoon({
  directory,
}: {
  directory: DirectoryItem
}) {

  return (
    <main>

      <Section>

        <Container>

          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            {' / '}
            <Link href="/direktori" className="hover:underline">Direktori</Link>
            {' / '}
            <span className="text-gray-800">{directory.label}</span>
          </nav>

          <div className="mb-4 flex items-center gap-3">
            <Heading level="h1">Direktori {directory.label}</Heading>
            <span className="text-xs uppercase tracking-[0.15em] text-gray-400 border border-gray-200 rounded-full px-2 py-0.5">
              Segera
            </span>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mb-10">
            {directory.description}
          </p>

          <div className="border rounded-2xl p-8 bg-white shadow-sm max-w-2xl">
            <p className="text-gray-700 leading-7 mb-2 font-semibold">
              Segera hadir.
            </p>
            <p className="text-gray-600 leading-7">
              Kami sedang menyiapkan direktori {directory.label.toLowerCase()}.
              Sementara itu, jelajahi{' '}
              <Link href="/direktori" className="text-[#FA8072] hover:underline">
                direktori lainnya
              </Link>
              .
            </p>
          </div>

        </Container>

      </Section>

    </main>
  )
}
