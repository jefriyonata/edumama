import type { Metadata } from 'next'
import Link from 'next/link'

import BaseHtml from '@/components/BaseHtml'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan',
}

/**
 * Global 404. With per-locale root layouts (no shared app/layout.tsx), the
 * top-level not-found renders its own <html>/<body> via BaseHtml, wrapped in
 * the Indonesian site chrome so it matches the rest of the (default) site.
 */
export default function NotFound() {
  return (
    <BaseHtml lang="id">

      <Header locale="id" />

      <main>
        <Section>
          <Container>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FA8072] mb-4">
                404
              </p>

              <Heading level="h1">Halaman Tidak Ditemukan</Heading>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                Maaf, halaman yang kamu cari tidak ada atau sudah
                dipindahkan. Coba kembali ke beranda atau jelajahi
                direktori kami.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="rounded-full bg-[#FA8072] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  Kembali ke Beranda
                </Link>
                <Link
                  href="/direktori"
                  className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-[#FA8072] hover:text-[#FA8072] transition"
                >
                  Lihat Direktori
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer locale="id" />

    </BaseHtml>
  )
}
