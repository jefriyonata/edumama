import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(
  process.cwd(),
  'content/articles'
)

/**
 * js-yaml (via gray-matter) parses unquoted YAML dates — e.g. Keystatic
 * writes `date: 2026-06-17` — into JS Date objects, which crash when
 * rendered as a React child ("Objects are not valid as a React child").
 * Coerce the date back to a plain 'YYYY-MM-DD' string.
 */
function normalizeFrontmatter(
  data: Record<string, any>,
): Record<string, any> {
  if (data.date instanceof Date) {
    data.date = data.date.toISOString().slice(0, 10)
  }

  // Keystatic's image field stores just the filename; map the thumbnail
  // back to its public URL. Full paths / URLs are passed through unchanged.
  if (
    typeof data.image === 'string' &&
    data.image &&
    !data.image.startsWith('/') &&
    !/^https?:\/\//.test(data.image)
  ) {
    data.image = `/images/thumbnails/${data.image}`
  }

  return data
}

/**
 * Unpublished entries have `draft: true` in their frontmatter. Drafts are
 * excluded from every listing, the sitemap, and static generation, and
 * their URLs return 404 — but the file stays in the repo/CMS so it can be
 * polished and published later by unchecking the field.
 */
function isDraft(data: Record<string, any>): boolean {
  return data.draft === true
}

/**
 * Every entry has a stable ID = its filename (without .mdx). The public URL
 * is driven by an optional `urlSlug` frontmatter field, falling back to the
 * ID. Internal links reference the ID and resolve to the *current* urlSlug
 * at render time, so changing a URL never breaks a link (no 404/redirect).
 */
function urlSlugOf(id: string, data: Record<string, any>): string {
  const custom =
    typeof data.urlSlug === 'string' ? data.urlSlug.trim() : ''
  return custom || id
}

function readEntry(directory: string, id: string) {
  const fullPath = path.join(directory, `${id}.mdx`)
  if (!fs.existsSync(fullPath)) {
    return null
  }
  return matter(fs.readFileSync(fullPath, 'utf8'))
}

/** Find the published entry in `directory` whose URL slug matches `slug`. */
function findByUrlSlug(directory: string, slug: string) {
  const wanted = slug.replace(/\.mdx$/, '')

  for (const file of fs.readdirSync(directory)) {
    if (!file.endsWith('.mdx')) {
      continue
    }
    const id = file.replace(/\.mdx$/, '')
    const parsed = matter(
      fs.readFileSync(path.join(directory, file), 'utf8'),
    )
    if (urlSlugOf(id, parsed.data) !== wanted) {
      continue
    }
    if (isDraft(parsed.data)) {
      return null
    }
    return {
      id,
      slug: urlSlugOf(id, parsed.data),
      frontmatter: normalizeFrontmatter(parsed.data),
      content: parsed.content,
    }
  }
  return null
}

/** All published entries in `directory` as { id, slug (urlSlug), frontmatter }. */
function listEntries(directory: string) {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const id = file.replace(/\.mdx$/, '')
      const { data } = matter(
        fs.readFileSync(path.join(directory, file), 'utf8'),
      )
      return {
        id,
        slug: urlSlugOf(id, data),
        frontmatter: normalizeFrontmatter(data),
      }
    })
    .filter((entry) => entry.frontmatter.draft !== true)
}

/** Resolve an article by its URL slug (the `[slug]` route param). */
export function getArticleBySlug(slug: string) {
  return findByUrlSlug(articlesDirectory, slug)
}

export function getAllArticles() {
  return listEntries(articlesDirectory)
}

/** URL for an article referenced by ID (filename) — used by internal links. */
export function getArticleUrl(id: string): string {
  const parsed = readEntry(articlesDirectory, id)
  const slug = parsed ? urlSlugOf(id, parsed.data) : id
  return `/articles/${slug}`
}

const reviewsDirectory = path.join(
  process.cwd(),
  'content/reviews'
)

/** Resolve a review by its URL slug (the `[slug]` route param). */
export function getReviewBySlug(slug: string) {
  return findByUrlSlug(reviewsDirectory, slug)
}

export function getAllReviews() {
  return listEntries(reviewsDirectory)
}

/** URL for a review referenced by ID (filename) — used by internal links. */
export function getReviewUrl(id: string): string {
  const parsed = readEntry(reviewsDirectory, id)
  const slug = parsed ? urlSlugOf(id, parsed.data) : id
  return `/reviews/${slug}`
}

export type Faq = {
  question: string
  answer: string
}

/**
 * Extracts <FAQ question="...">answer</FAQ> blocks from MDX content
 * so they can be emitted as FAQPage structured data. Strips basic
 * markdown/HTML from the answer to keep it plain text.
 */
export function extractFaqs(content: string): Faq[] {

  const faqRegex =
    /<FAQ\s+question="([^"]*)"\s*>([\s\S]*?)<\/FAQ>/g

  const faqs: Faq[] = []

  let match: RegExpExecArray | null

  while ((match = faqRegex.exec(content)) !== null) {

    const question = match[1].trim()

    const answer = match[2]
      .replace(/<[^>]+>/g, ' ')      // strip HTML/JSX tags
      .replace(/[*_`#>]/g, '')       // strip common markdown markers
      .replace(/\s+/g, ' ')          // collapse whitespace
      .trim()

    if (question && answer) {
      faqs.push({ question, answer })
    }
  }

  return faqs
}

export function getArticlesByCategory(
  category: string
) {

  const articles =
    getAllArticles()

  return articles.filter(
    (article) =>
      article.frontmatter.category === category
  )

}