import { createElement } from 'react'
import { config, collection, fields } from '@keystatic/core'
import { wrapper, block, mark } from '@keystatic/core/content-components'

import { categories } from '@/data/categories'

/** Inline link icon (lucide "link-2") as a plain ReactElement — no JSX. */
const linkIcon = createElement(
  'svg',
  {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 15,
    height: 15,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  createElement('path', { key: 'a', d: 'M9 17H7A5 5 0 0 1 7 7h2' }),
  createElement('path', { key: 'b', d: 'M15 7h2a5 5 0 1 1 0 10h-2' }),
  createElement('line', { key: 'c', x1: 8, y1: 12, x2: 16, y2: 12 }),
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
      curriculum: fields.text({ label: 'Curriculum' }),
      fee: fields.text({ label: 'Fee' }),
      age: fields.text({ label: 'Age' }),
      language: fields.text({ label: 'Language' }),
      location: fields.text({ label: 'Location' }),
    },
  }),

  // Link as an editor MARK: select text in the body, then apply this from
  // the inline formatting toolbar and set the URL + options in the popover.
  // NOTE: no `tag` option — `tag: 'a'` collides with Keystatic's built-in
  // link (breaks Ctrl+K and hides the schema fields). Without it the mark
  // serializes to <Link href target rel>text</Link>, rendered by SmartLink.
  // String-valued (not checkbox) on purpose: this MDX pipeline only passes
  // literal string attributes, so target="_blank" / rel="nofollow" survive.
  Link: mark({
    label: 'Link (tab/nofollow)',
    icon: linkIcon,
    schema: {
      href: fields.url({
        label: 'URL',
        validation: { isRequired: true },
      }),
      target: fields.select({
        label: 'Open in',
        options: [
          { label: 'Same tab', value: '_self' },
          { label: 'New tab', value: '_blank' },
        ],
        defaultValue: '_self',
      }),
      rel: fields.select({
        label: 'Rel',
        options: [
          { label: 'Default (follow)', value: 'follow' },
          { label: 'Nofollow', value: 'nofollow' },
        ],
        defaultValue: 'follow',
      }),
    },
  }),
}

/**
 * Per-entry SEO controls, shared by articles and reviews. Spread into each
 * collection's schema. Consumed by the page's generateMetadata / JSON-LD.
 */
const seoFields = {
  noindex: fields.checkbox({
    label: 'Hide from search engines (noindex)',
    description:
      'Enable to keep this page out of Google (robots: noindex, follow).',
    defaultValue: false,
  }),
  customSchema: fields.text({
    label: 'Custom JSON-LD schema (optional)',
    description:
      'Paste valid JSON-LD (object or array) for extra schema markup. Invalid JSON is ignored.',
    multiline: true,
  }),
}

export default config({
  // Storage is environment-dependent so the hosted CMS is never open:
  //  - dev (localhost only): 'local' — edit files on disk, no login. Safe
  //    because it's only reachable from your own machine.
  //  - production: 'github' — the hosted /keystatic admin requires a GitHub
  //    login and only users with WRITE access to the repo can edit. Needs a
  //    GitHub App + KEYSTATIC_* env vars (see deploy setup).
  storage:
    process.env.NODE_ENV === 'production'
      ? {
          kind: 'github',
          repo: { owner: 'jefriyonata', name: 'edumama' },
        }
      : { kind: 'local' },

  ui: {
    brand: { name: 'Bersemai CMS' },
  },

  collections: {
    authors: collection({
      label: 'Authors',
      path: 'content/authors/*',
      slugField: 'name',
      format: { data: 'yaml' },
      columns: ['name'],
      schema: {
        name: fields.slug({
          name: {
            label: 'Name',
            validation: { isRequired: true },
          },
        }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        image: fields.image({
          label: 'Avatar',
          directory: 'public/images/authors',
          publicPath: '/images/authors',
        }),
        linkedin: fields.url({ label: 'LinkedIn' }),
        twitter: fields.url({ label: 'Twitter / X' }),
      },
    }),

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
        author: fields.relationship({
          label: 'Author',
          collection: 'authors',
          validation: { isRequired: true },
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
        ...seoFields,
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
        author: fields.relationship({
          label: 'Author',
          collection: 'authors',
          validation: { isRequired: true },
        }),
        ...seoFields,
        content: fields.mdx({
          label: 'Body',
          extension: 'mdx',
          components: mdxComponents,
        }),
      },
    }),
  },
})
