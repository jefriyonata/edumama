import '@/app/globals.css'
import KeystaticApp from './keystatic'

/**
 * Keystatic is a top-level route segment, so with per-locale root layouts (no
 * shared app/layout.tsx) it must provide its own <html>/<body>. The CMS is an
 * English-language SPA rendered directly by this layout.
 */
export default function KeystaticLayout() {
  return (
    <html lang="en">
      <body>
        <KeystaticApp />
      </body>
    </html>
  )
}
