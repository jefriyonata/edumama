import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="bg-[#FA8072] text-white mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}

          <div>

            <p className="text-3xl font-bold mb-4">

              Edumama

            </p>

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

              <li>

                <Link
                  href="/articles"
                  className="hover:text-white"
                >
                  Articles
                </Link>

              </li>

              <li>

                <Link
                  href="/reviews"
                  className="hover:text-white"
                >
                  Reviews
                </Link>

              </li>

              <li>

                <Link
                  href="/tentang-kami"
                  className="hover:text-white"
                >
                  Tentang Kami
                </Link>

              </li>

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
            © 2026 Edumama. All rights reserved.
          </p>

          <p>
            Made with love
          </p>

        </div>

      </div>

    </footer>
  )
}