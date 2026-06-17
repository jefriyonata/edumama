import Link from 'next/link'
import Image from 'next/image'
import { navCategories } from '@/data/navigation'

export default function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#FA8072] text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}

          <div>

            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/edumama-logo-new.jpg"
                alt="eduMama"
                width={793}
                height={276}
                className="w-40 max-w-none h-auto"
              />
            </Link>

            <p className="text-white/80 leading-7 text-sm max-w-sm">

              Honest preschool reviews, parenting guides,
              and early childhood education insights for
              modern families.

            </p>

          </div>

          {/* NAVIGATION */}

          <div>

            <p className="uppercase tracking-[0.2em] text-sm mb-5">

              Explore

            </p>

            <ul className="space-y-3 text-sm text-white/80">

              {navCategories.map((category) => (
                <li key={category.href}>

                  <Link
                    href={category.href}
                    className="hover:text-white"
                  >
                    {category.label}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* LEGAL */}

          <div>

            <p className="uppercase tracking-[0.2em] text-sm mb-5">

              About

            </p>

            <p className="text-sm text-white/80 leading-7">

              Built for parents looking for trustworthy
              early childhood education resources.

            </p>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">

          <p>
            © {currentYear} Edumama. All rights reserved.
          </p>

          <p>
            Made with love
          </p>

        </div>

      </div>

    </footer>
  )
}