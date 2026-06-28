// The Keystatic admin UI is rendered by app/keystatic/layout.tsx
// (it does its own client-side routing). This catch-all just needs to
// exist so every /keystatic/* path resolves to that layout.
export default function Page() {
  return null
}
