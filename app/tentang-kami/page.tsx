import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Tentang Kami',
  description:
    'Kenali EduMama, platform yang membantu orang tua menemukan informasi preschool, kindergarten, dan pendidikan anak dengan lebih mudah.',
  path: '/tentang-kami',
})

export default function TentangKamiPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <Heading>
                Tentang EduMama
              </Heading>

              <p className="text-lg leading-8 text-neutral-700">
                EduMama adalah platform informasi pendidikan anak yang membantu orang tua menemukan preschool, kindergarten, dan berbagai informasi pendidikan dengan lebih mudah.
              </p>

              <p className="text-lg leading-8 text-neutral-700">
                Kami percaya bahwa memilih sekolah untuk anak adalah keputusan besar. Karena itu, EduMama hadir untuk menyediakan artikel, review, dan panduan yang mudah dipahami agar orang tua dapat membuat keputusan terbaik untuk keluarga mereka.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                Misi Kami
              </h2>

              <p className="text-lg leading-8 text-neutral-700">
                Misi EduMama adalah membantu orang tua di Indonesia mendapatkan akses informasi pendidikan anak yang terpercaya, jelas, dan praktis.
              </p>

              <p className="text-lg leading-8 text-neutral-700">
                Kami ingin membuat proses mencari sekolah menjadi lebih mudah melalui konten yang informatif, jujur, dan relevan dengan kebutuhan keluarga modern.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                Apa yang Bisa Anda Temukan di EduMama?
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-lg leading-8 text-neutral-700">
                <li>Listicle preschool dan kindergarten terbaik di berbagai kota.</li>
                <li>Review sekolah dan program pendidikan anak.</li>
                <li>Panduan parenting dan pendidikan usia dini.</li>
                <li>Tips memilih sekolah sesuai kebutuhan anak dan keluarga.</li>
                <li>Informasi biaya, kurikulum, dan fasilitas sekolah.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                Untuk Orang Tua Modern
              </h2>

              <p className="text-lg leading-8 text-neutral-700">
                EduMama dibuat untuk orang tua yang ingin melakukan riset sebelum memilih sekolah. Kami mengumpulkan informasi dari berbagai sumber untuk membantu Anda membandingkan pilihan dengan lebih praktis.
              </p>

              <p className="text-lg leading-8 text-neutral-700">
                Kami terus mengembangkan konten dan direktori kami agar semakin banyak keluarga dapat menemukan sekolah yang cocok untuk anak mereka.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
