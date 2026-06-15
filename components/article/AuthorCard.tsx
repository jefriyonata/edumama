import Image from 'next/image'

type AuthorCardProps = {
  author: any
}

export default function AuthorCard({
  author,
}: AuthorCardProps) {

  return (
    <div className="sticky top-10 border rounded-2xl p-6">

      <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 bg-gray-200">

        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover"
        />

      </div>

      <h3 className="font-bold text-xl mb-3">

        {author.name}

      </h3>

      <p className="text-gray-600 text-sm leading-7 mb-6">

        {author.bio}

      </p>

      <div className="flex gap-4 text-sm">

        <a
          href={author.linkedin}
          target="_blank"
          className="hover:underline"
        >
          LinkedIn
        </a>

        <a
          href={author.twitter}
          target="_blank"
          className="hover:underline"
        >
          Twitter
        </a>

      </div>

    </div>
  )
}