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
                src="/images/bersemai-logo.png"
                alt="Bersemai"
                width={589}
                height={236}
                className="w-40 max-w-none h-auto"
              />
            </Link>

            <p className="text-white/80 leading-7 text-sm max-w-sm">

              Review preschool yang jujur, panduan parenting,
              dan wawasan pendidikan anak usia dini untuk
              keluarga masa kini.

            </p>

          </div>

          {/* NAVIGATION */}

          <div>

            <p className="uppercase tracking-[0.2em] text-sm mb-5">

              Jelajahi

            </p>

            <ul className="space-y-3 text-sm text-white/80">

              <li>
                <Link href="/direktori" className="hover:text-white">
                  Direktori
                </Link>
              </li>

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

              Tentang

            </p>

            <p className="text-sm text-white/80 leading-7">

              Dibuat untuk orang tua yang mencari sumber
              informasi pendidikan anak usia dini yang
              tepercaya.

            </p>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">

          <p>
            © {currentYear} Bersemai. Hak cipta dilindungi.
          </p>

          <p>
            Dibuat dengan cinta
          </p>

        </div>

      </div>

    </footer>
  )
}