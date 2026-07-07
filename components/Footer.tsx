import Link from 'next/link'
import Image from 'next/image'
import { navCategories } from '@/data/navigation'
import { getDictionary, localeHome } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/mdx'

export default function Footer({ locale = 'id' }: { locale?: Locale }) {

  const currentYear = new Date().getFullYear()
  const dict = getDictionary(locale)

  // Explore links differ per locale: the ID footer surfaces the directory +
  // category hubs; the EN footer (phase 1) only has Articles + About.
  const exploreLinks =
    locale === 'en'
      ? [
          { href: '/en/articles', label: dict.nav.articles },
          { href: '/en/about', label: dict.nav.about },
        ]
      : [
          { href: '/direktori', label: dict.nav.directory },
          ...navCategories,
        ]

  return (
    <footer className="bg-[#FA8072] text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}

          <div>

            <Link href={localeHome(locale)} className="inline-block mb-5">
              <Image
                src="/images/bersemai-logo.png"
                alt="Bersemai"
                width={589}
                height={236}
                className="w-40 max-w-none h-auto"
              />
            </Link>

            <p className="text-white/80 leading-7 text-sm max-w-sm">

              {dict.footer.tagline}

            </p>

          </div>

          {/* NAVIGATION */}

          <div>

            <p className="uppercase tracking-[0.2em] text-sm mb-5">

              {dict.footer.explore}

            </p>

            <ul className="space-y-3 text-sm text-white/80">

              {exploreLinks.map((link) => (
                <li key={link.href}>

                  <Link
                    href={link.href}
                    className="hover:text-white"
                  >
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* LEGAL */}

          <div>

            <p className="uppercase tracking-[0.2em] text-sm mb-5">

              {dict.footer.about}

            </p>

            <p className="text-sm text-white/80 leading-7">

              {dict.footer.aboutText}

            </p>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">

          <p>
            © {currentYear} Bersemai. {dict.footer.rights}
          </p>

          <p>
            {dict.footer.madeWith}
          </p>

        </div>

      </div>

    </footer>
  )
}
