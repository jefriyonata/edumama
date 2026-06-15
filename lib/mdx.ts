import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(
  process.cwd(),
  'content/articles'
)

export function getArticleBySlug(slug: string) {

  const realSlug = slug.replace(/\.mdx$/, '')

  const fullPath = path.join(
    articlesDirectory,
    `${realSlug}.mdx`
  )

  const fileContents = fs.readFileSync(
    fullPath,
    'utf8'
  )

  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontmatter: data,
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
      frontmatter: data,
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

  const fileContents = fs.readFileSync(
    fullPath,
    'utf8'
  )

  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontmatter: data,
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
      frontmatter: data,
    }
  })

  return reviews
}