type TOCProps = {
  headings: {
    text: string
    slug: string
  }[]
}

export default function TableOfContents({
  headings,
}: TOCProps) {

  return (
    <div className="sticky top-10">

      <p className="font-bold mb-6">
        Daftar Isi
      </p>

      <ul className="space-y-4 text-sm text-gray-600">

        {headings.map((heading) => (

          <li key={heading.slug}>

            <a
              href={`#${heading.slug}`}
              className="hover:text-black"
            >
              {heading.text}
            </a>

          </li>

        ))}

      </ul>

    </div>
  )
}