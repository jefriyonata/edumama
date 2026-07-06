import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import sharp from 'sharp'

type ContentImageProps = {
  src?: string
  alt?: string
  title?: string
}

/**
 * Renders images inside MDX body content through next/image so they are
 * automatically optimized (WebP/AVIF, resized per breakpoint, lazy-loaded) —
 * editors can upload any PNG/JPG and the frontend serves a compressed version
 * without manual conversion.
 *
 * next/image needs the intrinsic width/height. For local images (served from
 * /public) we read them off disk with sharp at render time (this is a server
 * component). Anything else (e.g. an external URL) falls back to a plain <img>.
 */
export default async function ContentImage({
  src,
  alt,
  title,
}: ContentImageProps) {
  if (!src) {
    return null
  }

  const isLocal = src.startsWith('/')

  if (isLocal) {
    let width = 1200
    let height = 800

    try {
      const filePath = path.join(process.cwd(), 'public', src)
      if (fs.existsSync(filePath)) {
        const meta = await sharp(filePath).metadata()
        if (meta.width && meta.height) {
          width = meta.width
          height = meta.height
        }
      }
    } catch {
      // Fall back to default aspect ratio if metadata can't be read.
    }

    return (
      <Image
        src={src}
        alt={alt || ''}
        title={title}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 800px"
        className="h-auto max-w-full rounded-xl"
      />
    )
  }

  // External / unknown source — serve as-is (not run through the optimizer).
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt || ''} title={title} className="h-auto max-w-full rounded-xl" />
}
