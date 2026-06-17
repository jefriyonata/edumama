'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  leftCategories,
  rightCategories,
  navCategories,
} from '@/data/navigation'

const LOGO_SRC = '/images/edumama-logo-new.jpg'

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#FA8072] text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* DESKTOP (lg+): categories left + logo center + categories right */}

        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-8 xl:gap-10 min-h-[80px] text-sm uppercase tracking-[0.13em]">

          <nav className="flex items-center justify-end gap-6 lg:gap-8">

            {leftCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="whitespace-nowrap hover:opacity-80 transition"
              >
                {category.label}
              </Link>
            ))}

          </nav>

          <Link href="/" className="justify-self-center shrink-0">
            <Image
              src={LOGO_SRC}
              alt="eduMama"
              width={793}
              height={276}
              priority
              className="w-44 max-w-none h-auto"
            />
          </Link>

          <nav className="flex items-center justify-start gap-6 lg:gap-8">

            {rightCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="whitespace-nowrap hover:opacity-80 transition"
              >
                {category.label}
              </Link>
            ))}

          </nav>

        </div>

        {/* MOBILE / TABLET (< lg): logo + hamburger */}

        <div className="lg:hidden flex items-center justify-between h-16">

          <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src={LOGO_SRC}
              alt="eduMama"
              width={793}
              height={276}
              priority
              className="w-32 max-w-none h-auto"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            className="-mr-2 p-2"
          >
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

        </div>

        {/* MOBILE dropdown */}

        {menuOpen && (
          <nav className="lg:hidden flex flex-col pb-4 text-sm uppercase tracking-[0.13em] border-t border-white/20">

            {navCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 hover:opacity-80 transition"
              >
                {category.label}
              </Link>
            ))}

          </nav>
        )}

      </div>

    </header>
  )
}
