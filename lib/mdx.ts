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
  return data
}

export function getArticleBySlug(slug: string) {

  const realSlug = slug.replace(/\.mdx$/, '')

  const fullPath = path.join(
    articlesDirectory,
    `${realSlug}.mdx`
  )

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(
    fullPath,
    'utf8'
  )

  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontmatter: normalizeFrontmatter(data),
    content,
  }
}

export function getAllArticles() {

  const files = fs.readdirSync(articlesDirectory)

  const articles = files.map((file) => {

    const slug = file.replace('.mdx', '')

    const fullPath = path.join(
      articlesDirectory,
      file
    )

    const fileContents = fs.readFileSync(
      fullPath,
      'utf8'
    )

    const { data } = matter(fileContents)

    return {
      slug,
      frontmatter: normalizeFrontmatter(data),
    }
  })

  return articles
}

const reviewsDirectory = path.join(
  process.cwd(),
  'content/reviews'
)

export function getReviewBySlug(slug: string) {

  const realSlug = slug.replace(/\.mdx$/, '')

  const fullPath = path.join(
    reviewsDirectory,
    `${realSlug}.mdx`
  )

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(
    fullPath,
    'utf8'
  )

  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontmatter: normalizeFrontmatter(data),
    content,
  }
}

export function getAllReviews() {

  const files = fs.readdirSync(reviewsDirectory)

  const reviews = files.map((file) => {

    const slug = file.replace('.mdx', '')

    const fullPath = path.join(
      reviewsDirectory,
      file
    )

    const fileContents = fs.readFileSync(
      fullPath,
      'utf8'
    )

    const { data } = matter(fileContents)

    return {
      slug,
      frontmatter: normalizeFrontmatter(data),
    }
  })

  return reviews
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