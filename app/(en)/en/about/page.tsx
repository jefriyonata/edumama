import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'Learn about Bersemai — helping parents find trustworthy early-childhood education information more easily.',
  path: '/en/about',
  locale: 'en',
})

export default function EnAboutPage() {
  return (
    <main>
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <Heading level="h1">
                About Bersemai
              </Heading>

              <p className="text-lg leading-8 text-neutral-700">
                Bersemai is an early-childhood education platform that helps
                parents find preschools, kindergartens, and reliable education
                information more easily.
              </p>

              <p className="text-lg leading-8 text-neutral-700">
                Choosing a school for your child is a big decision. Bersemai
                exists to provide clear, honest articles, reviews, and guides so
                parents can make the best choices for their families.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                Our Mission
              </h2>

              <p className="text-lg leading-8 text-neutral-700">
                Our mission is to give parents access to early-childhood
                education information that is trustworthy, clear, and practical.
              </p>

              <p className="text-lg leading-8 text-neutral-700">
                We want to make researching schools easier through informative,
                honest content that is relevant to the needs of modern families.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                What You&apos;ll Find on Bersemai
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-lg leading-8 text-neutral-700">
                <li>Guides to preschools and kindergartens.</li>
                <li>Reviews of schools and early-childhood programs.</li>
                <li>Parenting and early-education guides.</li>
                <li>Tips for choosing a school that fits your child.</li>
                <li>Information on fees, curriculum, and facilities.</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
