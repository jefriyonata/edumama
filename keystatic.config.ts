import { config, collection, fields } from '@keystatic/core'
import { wrapper, block } from '@keystatic/core/content-components'

import { authors } from '@/data/authors'
import { categories } from '@/data/categories'

const authorOptions = Object.entries(authors).map(
  ([value, author]) => ({ label: author.name, value }),
)

const categoryOptions = categories.map((category) => ({
  label: category.name,
  value: category.slug,
}))

/**
 * Editor-friendly blocks that map 1:1 to the custom MDX components in
 * components/mdx/*. A non-technical editor inserts these from the "+"
 * menu and fills in fields — no JSX, no markdown syntax.
 *
 * `wrapper` = component with body content (children).
 * `block`   = self-contained component (props only, no children).
 */
const mdxComponents = {
  Callout: wrapper({
    label: 'Callout',
    schema: {
      type: fields.select({
        label: 'Style',
        options: [
          { label: 'Info', value: 'info' },
          { label: 'Tip', value: 'tip' },
          { label: 'Warning', value: 'warning' },
        ],
        defaultValue: 'info',
      }),
    },
  }),

  FAQ: wrapper({
    label: 'FAQ item',
    schema: {
      question: fields.text({ label: 'Question' }),
    },
  }),

  // Comparison tables are authored as native Markdown tables (editable
  // via the editor's table tool), so no custom component is needed.

  SchoolSnapshot: block({
    label: 'School Snapshot',
    schema: {
      curriculum: fields.text({ label: 'Kurikulum' }),
      fee: fields.text({ label: 'Biaya' }),
      age: fields.text({ label: 'Usia Anak' }),
      language: fields.text({ label: 'Bahasa' }),
      location: fields.text({ label: 'Lokasi' }),
    },
  }),
}

export default config({
  // Local storage = edit files on disk (dev). For real non-technical
  // editors, switch to { kind: 'github', repo: 'owner/edumama' } so they
  // edit through a hosted UI that commits via a GitHub App.
  storage: { kind: 'local' },

  ui: {
    brand: { name: 'Edumama CMS' },
  },

  collections: {
    articles: collection({
      label: 'Articles',
      path: 'content/articles/*',
      slugField: 'title',
      format: { data: 'yaml', contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true },
          },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        date: fields.date({ label: 'Date' }),
        author: fields.select({
          label: 'Author',
          options: authorOptions,
          defaultValue: authorOptions[0]?.value ?? 'jefri',
        }),
        category: fields.select({
          label: 'Category',
          options: categoryOptions,
          defaultValue: categoryOptions[0]?.value ?? 'parenting-tips',
        }),
        image: fields.text({
          label: 'Thumbnail image path',
          description: 'e.g. /images/thumbnails/your-image.jpg',
        }),
        content: fields.mdx({
          label: 'Body',
          extension: 'mdx',
          components: mdxComponents,
        }),
      },
    }),

    reviews: collection({
      label: 'Reviews',
      path: 'content/reviews/*',
      slugField: 'title',
      format: { data: 'yaml', contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true },
          },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        date: fields.date({ label: 'Date' }),
        author: fields.select({
          label: 'Author',
          options: authorOptions,
          defaultValue: authorOptions[0]?.value ?? 'jefri',
        }),
        content: fields.mdx({
          label: 'Body',
          extension: 'mdx',
          components: mdxComponents,
        }),
      },
    }),
  },
})
