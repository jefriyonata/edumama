import Link from 'next/link'
import { localeHome } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/mdx'

const LOCALES: { code: Locale; name: string; short: string }[] = [
  { code: 'id', name: 'Bahasa Indonesia', short: 'ID' },
  { code: 'en', name: 'English', short: 'EN' },
]

/** Small inline SVG flag — renders identically on every platform (unlike
 *  emoji flags, which fall back to letters on Windows). */
function Flag({ code }: { code: Locale }) {
  return (
    <span
      className="inline-block h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/10"
      aria-hidden="true"
    >
      {code === 'id' ? (
        <svg viewBox="0 0 20 14" className="h-full w-full">
          <rect width="20" height="7" fill="#E70011" />
          <rect y="7" width="20" height="7" fill="#ffffff" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 14" className="h-full w-full">
          <rect width="20" height="14" fill="#012169" />
          <path d="M0,0 L20,14 M20,0 L0,14" stroke="#ffffff" strokeWidth="2.6" />
          <path d="M0,0 L20,14 M20,0 L0,14" stroke="#C8102E" strokeWidth="1.2" />
          <rect x="8" width="4" height="14" fill="#ffffff" />
          <rect y="5" width="20" height="4" fill="#ffffff" />
          <rect x="8.8" width="2.4" height="14" fill="#C8102E" />
          <rect y="5.8" width="20" height="2.4" fill="#C8102E" />
        </svg>
      )}
    </span>
  )
}

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

/** Desktop language switcher: a hover dropdown (flag + name), matching the
 *  header's existing Direktori dropdown pattern. */
export function LanguageSwitcherDesktop({ locale }: { locale: Locale }) {
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  return (
    <div className="relative group">
      <button
        type="button"
        aria-label="Change language"
        className="flex items-center gap-2 whitespace-nowrap normal-case tracking-normal hover:opacity-80 transition"
      >
        <Flag code={current.code} />
        <span className="font-semibold">{current.short}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="transition group-hover:rotate-180"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* pt-3 keeps a hover bridge between the button and the panel */}
      <div className="absolute right-0 top-full pt-3 hidden group-hover:block">
        <div className="min-w-[13rem] rounded-2xl bg-white text-gray-800 shadow-lg ring-1 ring-black/5 py-2 normal-case tracking-normal">
          {LOCALES.map((l) => (
            <Link
              key={l.code}
              href={localeHome(l.code)}
              className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-[#FA8072] transition"
            >
              <span className="flex items-center gap-3">
                <Flag code={l.code} />
                {l.name}
              </span>
              {l.code === locale && (
                <span className="text-[#FA8072]">
                  <Check />
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Mobile language switcher: both options listed inside the mobile menu. */
export function LanguageSwitcherMobile({
  locale,
  onNavigate,
}: {
  locale: Locale
  onNavigate?: () => void
}) {
  return (
    <div className="border-t border-white/20 mt-1 pt-3">
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">
        Language
      </p>
      <div className="flex flex-col normal-case tracking-normal">
        {LOCALES.map((l) => (
          <Link
            key={l.code}
            href={localeHome(l.code)}
            onClick={onNavigate}
            className="flex items-center gap-3 py-2 text-sm hover:opacity-80 transition"
          >
            <Flag code={l.code} />
            <span>{l.name}</span>
            {l.code === locale && (
              <span className="ml-auto text-white/80">
                <Check />
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
