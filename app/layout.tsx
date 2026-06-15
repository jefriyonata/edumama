import type { Metadata } from 'next'

import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { Inter, Fraunces } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),

  title: {
    default: 'Edumama',
    template: '%s | Edumama',
  },

  description:
    'Preschool reviews and early childhood education articles.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">

      <body
  className={`${inter.className} ${fraunces.variable}`}
>

        <Header />

        {children}

        <Footer />

      </body>

    </html>
  )
}