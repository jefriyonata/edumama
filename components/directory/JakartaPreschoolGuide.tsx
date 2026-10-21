import Callout from '@/components/mdx/Callouts'
import FAQ from '@/components/mdx/FAQ'

/**
 * Guide content shown beneath the Jakarta preschool directory listing.
 * Adapted from the EN article "Best Preschools & Kindergartens in Jakarta"
 * (the school-profiles section lives in the directory above, so it is omitted).
 */

export const jakartaPreschoolFaqs: { question: string; answer: string }[] = [
  {
    question:
      'What is the difference between preschool and kindergarten in Jakarta?',
    answer:
      'In practice they’re used interchangeably. Locally, early-childhood education (PAUD) spans ages 0–6: "Kelompok Bermain" (KB) is playgroup (around 18 months–3 years) and "Taman Kanak-Kanak" (TK) is kindergarten (around 4–6). International schools use "preschool," "nursery," and "kindergarten" for children roughly 2–5, usually within one early-years division.',
  },
  {
    question: 'How much does preschool or kindergarten cost in Jakarta?',
    answer:
      'It varies enormously. Top international schools’ early-years tuition runs from around Rp 120–200 million per year or more, before one-off fees. Montessori and bilingual options are roughly Rp 30–90 million, and dedicated value preschools from about Rp 25 million. Local TK/PAUD can be a few hundred thousand to a couple of million rupiah per month. Always confirm current fees and extras directly.',
  },
  {
    question:
      'What age can a child start preschool or kindergarten in Jakarta?',
    answer:
      'Many schools accept children into early-years programmes from around 18 months to 2 years; nursery/pre-K usually starts from about 3, and kindergarten (TK) from around 4. Minimum ages vary by school.',
  },
  {
    question: 'Which is the most expensive international school in Jakarta?',
    answer:
      'Jakarta Intercultural School (JIS) is typically the most expensive, with early-childhood costs well above Rp 200 million per year once mandatory capital and one-off fees are included. British School Jakarta and the other established international schools are also in the premium tier.',
  },
  {
    question: 'Are there affordable international preschools in Jakarta?',
    answer:
      'Yes. Dedicated preschools such as Global Sevilla (from around Rp 25 million/year) and Kinderland (around Rp 40–80 million/year) are far more accessible than the full international schools, while still offering English-language or bilingual, internationally influenced programmes.',
  },
  {
    question: 'Which areas of Jakarta are best for expat families?',
    answer:
      'South Jakarta — especially Kemang, Cipete, Pejaten, Pondok Indah, and Kebayoran Baru — has the highest concentration of international preschools and schools, along with North (Kelapa Gading), West (Puri Indah, Permata Buana), and satellite areas like Bintaro and BSD City.',
  },
]

export default function JakartaPreschoolGuide() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">

      <h2>Preschool, Kindergarten, Playgroup: The Local Terms</h2>

      <p>
        Indonesia&rsquo;s early-years vocabulary trips up a lot of newcomers,
        because the labels don&rsquo;t map neatly onto the English ones. In
        practice, &ldquo;preschool&rdquo; and &ldquo;kindergarten&rdquo; are
        used interchangeably here, and most international schools cover both
        under one early-years division.
      </p>

      <ul>
        <li>
          <strong>PAUD</strong> (<em>Pendidikan Anak Usia Dini</em>) &mdash; the
          umbrella term for all early-childhood education, roughly ages
          0&ndash;6.
        </li>
        <li>
          <strong>Kelompok Bermain (KB)</strong> &mdash; &ldquo;playgroup,&rdquo;
          usually around 18 months to 3 years.
        </li>
        <li>
          <strong>Taman Kanak-Kanak (TK)</strong> &mdash; kindergarten, usually
          ages 4&ndash;6, often split into TK A and TK B.
        </li>
        <li>
          <strong>Preschool / nursery</strong> &mdash; the English terms
          international schools use, generally covering ages ~2&ndash;5.
        </li>
      </ul>

      <Callout type="info">
        When you enquire locally, the words <strong>PAUD, KB, and TK</strong>{' '}
        help you find the right programme and age group. International schools
        will simply talk about &ldquo;early years,&rdquo;
        &ldquo;preschool,&rdquo; &ldquo;nursery,&rdquo; or
        &ldquo;kindergarten.&rdquo;
      </Callout>

      <h2>Types of Early-Years School in Jakarta</h2>

      <p>
        Expat families generally choose from four broad categories. The right
        one depends on the language environment you want, your budget, and how
        long you plan to stay.
      </p>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Language</th>
            <th>Curriculum</th>
            <th>Typical cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>International school (early years)</td>
            <td>English (or bilingual)</td>
            <td>Foreign (British, IB, Australian&hellip;)</td>
            <td>Rp 100&ndash;200 million+/year</td>
          </tr>
          <tr>
            <td>Montessori preschool</td>
            <td>Bilingual / English</td>
            <td>Montessori</td>
            <td>Rp 30&ndash;90 million/year</td>
          </tr>
          <tr>
            <td>Bilingual / &ldquo;national plus&rdquo;</td>
            <td>English + Indonesian</td>
            <td>National + enrichment</td>
            <td>Rp 25&ndash;80 million/year</td>
          </tr>
          <tr>
            <td>Local TK / PAUD</td>
            <td>Indonesian</td>
            <td>National (PAUD)</td>
            <td>Rp 0.5&ndash;2 million/month</td>
          </tr>
        </tbody>
      </table>

      <h3>International schools</h3>
      <p>
        These run in English (or English-first bilingual), follow a foreign
        curriculum, and their early-years divisions often sit within a larger
        K&ndash;12 school. They&rsquo;re the priciest option but give your child
        a fully English-speaking early-years experience &mdash; the usual choice
        for families on shorter postings.
      </p>

      <h3>Montessori preschools</h3>
      <p>
        Jakarta has a healthy Montessori scene, from small independent houses to
        established schools. Montessori is a child-led approach built around
        hands-on, self-correcting materials and mixed-age classes; the
        preschools that follow it are often bilingual and sit in the
        mid-to-upper price range.
      </p>

      <h3>Bilingual and &ldquo;national plus&rdquo; preschools</h3>
      <p>
        A popular middle ground: an Indonesian foundation with significant
        English and added enrichment. More affordable than international
        schools, with a mixed-language environment many families like.
      </p>

      <h3>Local TK / PAUD</h3>
      <p>
        Neighbourhood kindergartens are the most affordable and the most
        immersive way for a child to pick up Bahasa Indonesia &mdash; taught
        almost entirely in Indonesian.
      </p>

      <h2>Curricula You&rsquo;ll Come Across</h2>

      <p>
        Early-years schools in Jakarta advertise a range of approaches. The
        common ones:
      </p>

      <ul>
        <li>
          <strong>British EYFS</strong> &mdash; the Early Years Foundation
          Stage, play-based and structured; feeds into British-curriculum
          schools.
        </li>
        <li>
          <strong>IB PYP (early years)</strong> &mdash; inquiry-led, part of the
          International Baccalaureate continuum.
        </li>
        <li>
          <strong>Montessori</strong> &mdash; child-led, hands-on, mixed-age
          classes with self-correcting materials.
        </li>
        <li>
          <strong>Reggio Emilia&ndash;inspired</strong> &mdash; project- and
          creativity-focused, child-directed.
        </li>
        <li>
          <strong>Singaporean</strong> &mdash; structured, strong on early
          numeracy and literacy.
        </li>
        <li>
          <strong>Play-based / eclectic</strong> &mdash; many bilingual schools
          blend elements of the above.
        </li>
      </ul>

      <Callout type="tip">
        Don&rsquo;t over-index on the label. A warm, well-run play-based school
        will serve a two- or three-year-old better than a prestigious curriculum
        delivered without care. Visit, watch how staff interact with the
        children, and trust what you see.
      </Callout>

      <h2>How Much Do Preschools &amp; Kindergartens Cost?</h2>

      <p>
        Fees vary more than almost anything else about Jakarta schooling. As a
        rough 2026 guide:
      </p>

      <table>
        <thead>
          <tr>
            <th>Tier</th>
            <th>What you get</th>
            <th>Typical cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Local TK / PAUD</td>
            <td>Indonesian-language, simple facilities</td>
            <td>Rp 0.5&ndash;2 million/month</td>
          </tr>
          <tr>
            <td>Bilingual / value preschool</td>
            <td>English + Indonesian, enrichment</td>
            <td>Rp 25&ndash;80 million/year</td>
          </tr>
          <tr>
            <td>Montessori</td>
            <td>Bilingual, Montessori materials</td>
            <td>Rp 30&ndash;90 million/year</td>
          </tr>
          <tr>
            <td>International school (early years)</td>
            <td>English, foreign curriculum</td>
            <td>Rp 100&ndash;200 million/year+</td>
          </tr>
        </tbody>
      </table>

      <p>
        International schools usually charge <strong>per term or per year</strong>{' '}
        and add <strong>one-time fees</strong> &mdash; registration, enrolment,
        and sometimes a refundable deposit or development levy &mdash; that can
        run into the tens of millions of rupiah on top of tuition. Always ask
        for the full fee schedule, not just the headline tuition.
      </p>

      <h2>Best Areas for Expat Families</h2>

      <p>
        Most international preschools and kindergartens cluster in{' '}
        <strong>South Jakarta (Jakarta Selatan)</strong> and a few
        family-friendly satellite townships:
      </p>

      <ul>
        <li>
          <strong>Kemang</strong> &mdash; the heart of expat Jakarta; several
          international preschools and playgroups.
        </li>
        <li>
          <strong>Cipete &amp; Pejaten</strong> &mdash; leafy and quieter,
          popular with young families.
        </li>
        <li>
          <strong>Pondok Indah</strong> &mdash; upscale, home to major
          international schools and their early-years programmes.
        </li>
        <li>
          <strong>Kebayoran Baru &amp; Senopati</strong> &mdash; central and
          convenient for working parents.
        </li>
        <li>
          <strong>BSD City &amp; Bintaro</strong> &mdash; spacious southern
          townships with several international schools; a common pick for
          longer-term families with cars.
        </li>
      </ul>

      <p>
        Locally, searches often split by zone &mdash;{' '}
        <em>preschool Jakarta Selatan, Barat, Timur, Pusat</em> &mdash; so
        narrow to your neighbourhood when you shortlist.
      </p>

      <h2>How to Choose a Preschool or Kindergarten</h2>

      <p>A few questions help narrow the field quickly:</p>

      <ol>
        <li>
          <strong>Location and commute</strong> &mdash; Jakarta traffic is real;
          a school close to home matters enormously for a young child.
        </li>
        <li>
          <strong>Curriculum and continuity</strong> &mdash; if you may relocate
          again, a widely recognised curriculum (British, IB, Australian)
          travels well.
        </li>
        <li>
          <strong>Accreditation &amp; licensing</strong> &mdash; a registered
          school, and for international schools, recognised accreditation (e.g.
          CIS).
        </li>
        <li>
          <strong>Teacher qualifications</strong> &mdash; early-years training
          and, for English settings, genuinely fluent staff.
        </li>
        <li>
          <strong>Class size and ratios</strong> &mdash; smaller is better for
          this age.
        </li>
        <li>
          <strong>Total cost</strong> &mdash; look past headline tuition to
          registration, capital/development fees, deposits, and extras.
        </li>
        <li>
          <strong>Language environment</strong> &mdash; fully English,
          bilingual, or Indonesian?
        </li>
        <li>
          <strong>A visit and trial</strong> &mdash; see a normal session and,
          ideally, let your child try a taster day.
        </li>
      </ol>

      <h2>Language and Cultural Notes</h2>

      <ul>
        <li>
          <strong>Language:</strong> International schools run in English;
          bilingual and local schools weave in &mdash; or lead with &mdash;
          Bahasa Indonesia, which can be a lovely head start on the local
          language.
        </li>
        <li>
          <strong>Food:</strong> Snacks and meals are usually rice-based and
          halal; flag allergies and dietary needs in writing.
        </li>
        <li>
          <strong>Holidays:</strong> Expect closures around{' '}
          <strong>Idul Fitri (Lebaran)</strong> and other national and religious
          holidays, plus each school&rsquo;s own term breaks.
        </li>
        <li>
          <strong>Academic year:</strong> International schools frequently run an{' '}
          <strong>August&ndash;June</strong> year, while national schools run{' '}
          <strong>July&ndash;June</strong> &mdash; worth checking if you&rsquo;re
          timing a move.
        </li>
      </ul>

      <h2>Practical Tips for Expat Parents</h2>

      <ul>
        <li>
          <strong>Enquire early.</strong> The most popular international schools
          keep <strong>waitlists</strong> &mdash; reach out before you arrive if
          you can.
        </li>
        <li>
          <strong>Have documents ready.</strong> Passport, immunisation records,
          previous school reports, and your family&rsquo;s KITAS/visa details
          are commonly requested.
        </li>
        <li>
          <strong>Visit in person.</strong> Photos and prospectuses only tell
          you so much; a short visit tells you far more.
        </li>
        <li>
          <strong>Tap the community.</strong> Expat parent groups and
          neighbourhood chats are the best source of honest, current feedback.
        </li>
      </ul>

      <h2>FAQs &mdash; Preschools &amp; Kindergartens in Jakarta</h2>

      {jakartaPreschoolFaqs.map((faq) => (
        <FAQ key={faq.question} question={faq.question}>
          {faq.answer}
        </FAQ>
      ))}

    </div>
  )
}
