export function extractHeadings(content: string) {

  const headingLines = content.match(/^##\s+(.*)$/gm) || []

  return headingLines.map((line) => {

    const text = line.replace(/^##\s+/, '')

    const slug = text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-')

    return {
      text,
      slug,
    }
  })
}