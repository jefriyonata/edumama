type HeadingProps = {
  children: React.ReactNode
  level?: 'h1' | 'h2' | 'h3' | 'h4'
}

export default function Heading({
  children,
  level = 'h2',
}: HeadingProps) {

  const Tag = level

  const styles = {
    h1: 'text-6xl font-bold tracking-tight',
    h2: 'text-4xl font-bold tracking-tight',
    h3: 'text-3xl font-bold tracking-tight',
    h4: 'text-2xl font-bold tracking-tight',
  }

  return (
    <Tag className={styles[level]}>

      {children}

    </Tag>
  )
}