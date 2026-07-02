import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * Authors are managed in the CMS as a Keystatic collection stored at
 * content/authors/<slug>.yaml. This reader exposes them to the app the
 * same way the old data/authors.ts did, so pages/components can look an
 * author up by the slug stored in an article's `author` field.
 */

const authorsDirectory = path.join(process.cwd(), 'content/authors')

export type Author = {
  name: string
  bio?: string
  image?: string
  linkedin?: string
  twitter?: string
}

/** Author slug (the content/authors filename). */
export type AuthorKey = string

function parseAuthorFile(file: string): Author {
  const raw = fs.readFileSync(
    path.join(authorsDirectory, file),
    'utf8',
  )

  // The files are pure YAML (Keystatic `format: { data: 'yaml' }`). Wrap
  // them in front-matter delimiters so we can reuse gray-matter instead of
  // adding a separate YAML dependency.
  const { data } = matter(`---\n${raw}\n---\n`)

  const author = data as Author

  // The Keystatic image field stores just the filename; map it back to its
  // public URL. Full paths / URLs are passed through unchanged.
  if (
    author.image &&
    !author.image.startsWith('/') &&
    !/^https?:\/\//.test(author.image)
  ) {
    author.image = `/images/authors/${author.image}`
  }

  return author
}

/** Look up a single author by slug. Reads fresh so CMS edits show up. */
export function getAuthor(
  slug?: string | null,
): Author | undefined {
  if (!slug) {
    return undefined
  }

  for (const ext of ['yaml', 'yml']) {
    const file = `${slug}.${ext}`
    if (fs.existsSync(path.join(authorsDirectory, file))) {
      return parseAuthorFile(file)
    }
  }

  return undefined
}

/** All authors, for listings. */
export function getAllAuthors(): { slug: string; author: Author }[] {
  if (!fs.existsSync(authorsDirectory)) {
    return []
  }

  return fs
    .readdirSync(authorsDirectory)
    .filter((file) => /\.ya?ml$/.test(file))
    .map((file) => ({
      slug: file.replace(/\.ya?ml$/, ''),
      author: parseAuthorFile(file),
    }))
}
