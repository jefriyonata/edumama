import Image from 'next/image'

type AuthorCardProps = {
  author: {
    name: string
    bio: string
    image: string
  }
}

export default function AuthorCard({
  author,
}: AuthorCardProps) {

  return (

    <div className="border-t pt-10 mt-16">

      <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">

        Ditulis Oleh

      </p>

      <div className="flex items-start gap-4 sm:gap-6">

        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0">

          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
          />

        </div>

        <div>

          <h3 className="text-xl sm:text-2xl font-bold mb-3">

            {author.name}

          </h3>

          <p className="text-gray-600 leading-8">

            {author.bio}

          </p>

        </div>

      </div>

    </div>

  )
}