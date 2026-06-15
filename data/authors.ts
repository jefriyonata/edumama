export const authors = {

  jefri: {
    name: 'Jefri Yonata',

    bio:
      'Early childhood education writer and preschool reviewer based in Singapore.',

    image:
      '/images/authors/jefri.png',

    linkedin:
      'https://linkedin.com/in/jeyonata',

    twitter:
      'https://twitter.com',
  },

  andi: {
    name: 'Andi Fathimah Nurrahmah',

    bio:
      'Preschool curriculum specialist and educator.',

    image:
      '/images/authors/sarah.jpg',

    linkedin:
      'https://linkedin.com',

    twitter:
      'https://twitter.com',
  },

}

export type AuthorKey =
  keyof typeof authors