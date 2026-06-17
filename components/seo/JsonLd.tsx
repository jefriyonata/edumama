type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Renders structured data as a JSON-LD <script> tag.
 * The `<` replacement guards against XSS via injected strings,
 * per the Next.js JSON-LD guidance.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
