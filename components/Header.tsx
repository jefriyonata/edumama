import Link from 'next/link'

export default function Header() {

  return (
    <header className="bg-[#FA8072] text-white">

      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <Link
            href="/"
            className="text-3xl font-bold tracking-tight"
          >
            Edumama
          </Link>

          {/* NAVIGATION */}

          <nav className="flex items-center gap-10 text-sm uppercase tracking-[0.2em]">

            <Link
              href="/articles"
              className="hover:opacity-80 transition"
            >
              Articles
            </Link>

            <Link
              href="/reviews"
              className="hover:opacity-80 transition"
            >
              Reviews
            </Link>

          </nav>

        </div>

      </div>

    </header>
  )
}