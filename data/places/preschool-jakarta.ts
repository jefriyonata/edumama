import type { Place } from '@/lib/places'

/**
 * Jakarta preschools & kindergartens.
 *
 * Address, phone, website and opening hours sourced from each school's
 * Google Maps listing (2026-10-21). Summaries are our own. Google ratings
 * are intentionally omitted (not reproduced), so `verified` is false;
 * confirm details with each school. Entries that Google marks permanently
 * closed are excluded.
 */
const COMPILED = '2026-10-21'

function p(
  entry: Omit<Place, 'type' | 'city' | 'cityLabel' | 'verified' | 'lastVerified'>,
): Place {
  return {
    type: 'preschool',
    city: 'jakarta',
    cityLabel: 'Jakarta',
    verified: false,
    lastVerified: COMPILED,
    ...entry,
  }
}

export const preschoolJakartaPlaces: Place[] = [
  p({
    slug: 'est-school',
    name: 'EST School (formerly HighScope Indonesia)',
    district: 'TB Simatupang, South Jakarta',
    address:
      'Jl. TB Simatupang No.8, Cilandak Barat, Jakarta Selatan 12430',
    phone: '+62 21 75917888',
    curriculum: ['American', 'Early Childhood'],
    ageRange: '1.5–18 yrs',
    website: 'https://highscope.or.id',
    summary:
      'US-based curriculum spanning early years through secondary, based on TB Simatupang in South Jakarta with several Jakarta branches.',
  }),
  p({
    slug: 'independent-school-jakarta',
    name: 'The Independent School of Jakarta (ISJ)',
    district: 'Pondok Indah, South Jakarta',
    address:
      'Jl. R.A. Kartini Kav. 12, Pondok Pinang, Kebayoran Lama, Jakarta Selatan 12310',
    phone: '+62 21 27826788',
    hours: 'Mon–Thu 07:30–16:00, Fri 07:30–15:00',
    curriculum: ['British', 'EYFS'],
    ageRange: '2–13 yrs',
    website: 'https://isj.id',
    summary:
      'British school in Pondok Indah following the EYFS from age 2 through to primary years.',
  }),
  p({
    slug: 'north-jakarta-intercultural-school',
    name: 'North Jakarta Intercultural School (NJIS)',
    district: 'Kelapa Gading, North Jakarta',
    address:
      'Jl. Boulevard Bukit Gading Raya, Kelapa Gading Barat, Jakarta Utara 14240',
    phone: '+62 21 45865222',
    hours: 'Mon–Fri 07:00–17:00',
    curriculum: ['IB PYP', 'EYFS'],
    ageRange: '2–18 yrs',
    website: 'https://njis.org',
    summary:
      'IB World School in Kelapa Gading pairing the Primary Years Programme with the EYFS in its early years.',
  }),
  p({
    slug: 'acg-school-jakarta',
    name: 'ACG School Jakarta',
    district: 'Pasar Minggu, South Jakarta',
    address:
      'Jl. Taman Margasatwa Raya No.19, Jati Padang, Pasar Minggu, Jakarta Selatan 12540',
    phone: '+62 21 29780200',
    hours: 'Mon–Fri 08:00–16:00, Sat 08:00–12:00',
    curriculum: ['Reggio Emilia', 'IB'],
    ageRange: '3–18 yrs',
    website: 'https://jakarta.acgedu.com',
    summary:
      'International school in Pasar Minggu with a Reggio Emilia-inspired early years and an IB pathway onward.',
  }),
  p({
    slug: 'new-zealand-school-jakarta',
    name: 'New Zealand School Jakarta',
    district: 'Kemang, South Jakarta',
    address:
      'Jl. Kemang Selatan I No.1a, Bangka, Mampang Prapatan, Jakarta Selatan 12730',
    phone: '+62 813-1196-3782',
    hours: 'Mon–Fri 08:00–17:00',
    curriculum: ['Te Whāriki', 'Inquiry-based'],
    ageRange: '1.5–18 yrs',
    website: 'https://nzsj.sch.id',
    summary:
      'Kemang school using New Zealand’s Te Whāriki early-childhood framework and inquiry-based learning.',
  }),
  p({
    slug: 'british-school-jakarta',
    name: 'British School Jakarta (BSJ)',
    district: 'Bintaro Jaya, South West Jakarta',
    address:
      'Jl. Jombang Raya No.9, Pondok Pucung, Pondok Aren, Tangerang Selatan, Banten 15227',
    phone: '+62 21 80828140',
    hours: 'Mon–Fri 07:30–16:00',
    curriculum: ['British', 'EYFS'],
    ageRange: '3–18 yrs',
    website: 'https://bsj.sch.id',
    summary:
      'Large British international school in Bintaro Jaya running the EYFS and English National Curriculum.',
  }),
  p({
    slug: 'australian-independent-school',
    name: 'Australian Independent School (AIS)',
    district: 'Pejaten Barat, South Jakarta',
    address:
      'Jl. Pejaten Barat Raya No.68, Ragunan, Pasar Minggu, Jakarta Selatan 12540',
    phone: '+62 21 7821141',
    hours: 'Mon–Fri 08:00–16:00',
    curriculum: ['Australian', 'Early Years'],
    ageRange: '3–18 yrs',
    website: 'https://ais-indonesia.com',
    summary:
      'Australian-curriculum school in Pejaten with an Early Years Learning Framework start.',
  }),
  p({
    slug: 'trehaus-school-jakarta',
    name: 'Trehaus School Jakarta',
    district: 'Senayan, Central Jakarta',
    address:
      'Sentral Senayan I, 1st Floor, Jl. Asia Afrika No.8, Gelora, Tanah Abang, Jakarta Pusat 10270',
    phone: '+65 9851 5508',
    hours: 'Mon–Fri 09:00–18:00',
    curriculum: ['Trehaus Method'],
    ageRange: '18 months–7 yrs',
    website: 'https://trehaus.co/schools/jakarta',
    summary:
      'Senayan preschool using the Trehaus Method, focused on character and future-ready skills for the early years.',
  }),
  p({
    slug: 'springfield-school',
    name: 'Springfield School',
    district: 'Permata Buana, West Jakarta (multiple campuses)',
    address:
      'Jl. Pulau Selayar I No.1 Blok B1, Permata Buana, Kembangan, Jakarta Barat',
    phone: '+62 21 58304383',
    curriculum: ['International', 'Christian values'],
    ageRange: '2–18 yrs',
    website: 'https://springfield.sch.id',
    summary:
      'Multi-campus school blending US, UK and Singapore resources with Christian values, from nursery upward.',
  }),
  p({
    slug: 'nord-anglia-school-jakarta',
    name: 'Nord Anglia School Jakarta',
    district: 'Cilandak, South Jakarta',
    address:
      'Jl. Kenanga Terusan Jl. Ampera Raya No.1, Cilandak Timur, Pasar Minggu, Jakarta Selatan 12560',
    phone: '+62 21 7823930',
    hours: 'Mon–Fri 07:00–16:00',
    curriculum: ['British', 'EYFS', 'Reggio Emilia'],
    ageRange: '18 months–12 yrs',
    website: 'https://www.nordangliaeducation.com/nas-jakarta',
    summary:
      'Cilandak school combining the UK EYFS with a Reggio Emilia approach in the early years.',
  }),
  p({
    slug: 'aerokids-playschool',
    name: 'Aerokids Playschool',
    district: 'Gandaria Utara, South Jakarta',
    address:
      'Jl. H. Nawi Raya No.18, Gandaria Utara, Kebayoran Baru, Jakarta Selatan 12140',
    phone: '+62 811-1889-5786',
    hours: 'Mon–Fri 07:30–15:30',
    curriculum: ['Reggio Emilia', 'EYFS'],
    ageRange: '6 months–6 yrs',
    website: 'https://aerokidsplayschool.com',
    summary:
      'Playschool in Gandaria Utara with a Reggio Emilia-inspired, EYFS-aligned programme from six months.',
  }),
  p({
    slug: 'jakarta-montessori-school',
    name: 'Jakarta Montessori School',
    district: 'Jagakarsa, South Jakarta',
    address: 'Jl. Durian No.10, Jagakarsa, Jakarta Selatan 12620',
    phone: '+62 21 7272162',
    hours: 'Mon–Fri 07:30–16:30',
    curriculum: ['Montessori'],
    ageRange: '18 months–18 yrs',
    website: 'https://jakartamontessori.sch.id',
    summary:
      'Montessori school in Jagakarsa offering a continuous Montessori pathway from toddler level.',
  }),
  p({
    slug: 'lollypop-preschool',
    name: 'Lollypop Preschool',
    district: 'Sunter, North Jakarta',
    address:
      'Jl. Sunter Permai Raya No.8, Sunter Agung, Tanjung Priok, Jakarta Utara 14350',
    phone: '+62 21 6516426',
    hours: 'Mon–Fri 08:30–15:00, Sat 09:00–13:00',
    curriculum: ['International', 'National Curriculum'],
    ageRange: '1.5–6 yrs',
    website: 'https://lollypoppreschool.com',
    summary:
      'North Jakarta preschool blending international early years with the national curriculum.',
  }),
  p({
    slug: 'integrated-childrens-academy',
    name: "Integrated Children's Academy (ICA)",
    district: 'Pakubuwono, South Jakarta',
    address:
      'Jl. Pakubuwono VI No.6, Gunung, Kebayoran Baru, Jakarta Selatan 12120',
    phone: '+62 21 7260495',
    curriculum: ['Mixed curriculum', 'Learning support'],
    ageRange: '1.5–6 yrs',
    website: 'https://ica-school.com',
    summary:
      'Pakubuwono preschool with a mixed curriculum and a dedicated learning-support programme.',
  }),
  p({
    slug: 'ladybird-preschool',
    name: 'Ladybird Preschool',
    district: 'Taman Kedoya Baru, West Jakarta',
    address:
      'Taman Kedoya Baru, Jl. Kedoya Akasia V Blok B6, Kedoya Selatan, Kebon Jeruk, Jakarta Barat 11520',
    phone: '+62 818-681-681',
    hours: 'Mon–Fri 08:00–13:00',
    curriculum: ['International', 'EFL/ESL'],
    ageRange: '1.5–6 yrs',
    website: 'https://ladybird.or.id',
    summary:
      'West Jakarta preschool teaching to an international standard with EFL/ESL English support.',
  }),
  p({
    slug: 'julia-gabriel-education',
    name: 'Julia Gabriel Education',
    district: 'Simprug, South Jakarta',
    address:
      'Simprug Garden VIII, Jl. Kramat I No.8, Grogol Selatan, Kebayoran Lama, Jakarta Selatan 12220',
    phone: '+62 812-1254-5424',
    hours: 'Mon–Fri 08:00–17:00',
    curriculum: ['Julia Gabriel'],
    ageRange: '6 months–7 yrs',
    website: 'https://juliagabriel.id',
    summary:
      'Simprug centre running the Singapore-born Julia Gabriel speech-and-drama-led early years programme.',
  }),
  p({
    slug: 'mighty-minds-preschool',
    name: 'Mighty Minds Preschool',
    district: 'Pejaten Barat, South Jakarta (multiple sites)',
    address:
      'Jl. Pejaten Barat Raya No.15, Pejaten Barat, Pasar Minggu, Jakarta Selatan 12510',
    phone: '+62 21 7192332',
    hours: 'Mon–Fri 08:00–16:00',
    curriculum: ['Creative Curriculum', 'Bilingual'],
    ageRange: '6 months–6.5 yrs',
    website: 'https://mightymindspreschool.com',
    summary:
      'Bilingual preschool on a Creative Curriculum, with several sites across South Jakarta.',
  }),
  p({
    slug: 'kinderland-indonesia',
    name: 'Kinderland Indonesia',
    district: 'Multiple campuses, Jakarta',
    address:
      'Jl. Caringin Barat No.1, Pondok Indah, Jakarta Selatan (multiple campuses)',
    phone: '+62 21 75908818',
    curriculum: ['Music program', 'Chinese integrated'],
    ageRange: '3–6 yrs',
    website: 'https://kinderlandindonesia.com',
    summary:
      'Established preschool chain known for its music programme and Chinese-integrated curriculum.',
  }),
  p({
    slug: 'ismile-school',
    name: 'ISMILE (International School of Multiple Intelligences)',
    district: 'Permata Hijau, South Jakarta',
    address:
      'Jl. Limo No.41, Grogol Utara, Kebayoran Lama, Jakarta Selatan 12210',
    phone: '+62 811-9787-816',
    hours: 'Mon–Fri 08:00–17:00, Sat 08:00–13:00',
    curriculum: ['Reggio Emilia', 'Montessori', 'Multiple Intelligences'],
    ageRange: '1–6 yrs',
    website: 'https://idn.ismile.sch.id',
    summary:
      'Preschool combining Reggio Emilia, Montessori and a Multiple Intelligences approach, with a Permata Hijau campus.',
  }),
  p({
    slug: 'mentari-intelegensia-school',
    name: 'Mentari Intelegensia School',
    district: 'Rawamangun, East Jakarta',
    address:
      'Jl. Balai Pustaka No.19B, Rawamangun, Pulo Gadung, Jakarta Timur 13220',
    phone: '+62 812-9088-3637',
    hours: 'Mon–Fri 07:30–14:30, Sat 07:30–13:00',
    curriculum: ['Montessori', 'National Curriculum'],
    ageRange: '2–6 yrs',
    website: 'https://mentariintelegensia-school.com',
    summary:
      'Rawamangun preschool pairing Montessori methods with the national curriculum.',
  }),
  p({
    slug: 'tutor-time-jakarta',
    name: 'Tutor Time Preschool & Kindergarten',
    district: 'Kemang, South Jakarta',
    address:
      'Jl. Kemang Utara No.56, Bangka, Mampang Prapatan, Jakarta Selatan 12730',
    phone: '+62 21 71793139',
    hours: 'Mon–Fri 08:00–16:00',
    curriculum: ['LifeSmart Curriculum'],
    ageRange: '6 months–6 yrs',
    website: 'https://tutortime.co.id',
    summary:
      'International preschool brand running its LifeSmart Curriculum, with a Kemang campus.',
  }),
  p({
    slug: 'kinderhouse',
    name: 'Kinderhouse Preschool & Kindergarten',
    district: 'Multiple campuses, West Jakarta',
    address:
      'Taman Permata Buana, Jl. Pulau Laki IV Blok K6, Kembangan, Jakarta Barat (multiple campuses)',
    phone: '+62 878-7844-9168',
    curriculum: ['Montessori-inspired', 'National Curriculum'],
    ageRange: '2–6 yrs',
    website: 'https://kinderhouse.id',
    summary:
      'Montessori-inspired preschool following an Indonesian curriculum, with campuses around West Jakarta.',
  }),
  p({
    slug: 'jayakarta-montessori-school',
    name: 'Jayakarta Montessori School',
    district: 'Kemang, South Jakarta',
    address:
      'Jl. Kemang Selatan I No.1, Bangka, Mampang Prapatan, Jakarta Selatan 12730',
    phone: '+62 813-1533-1154',
    hours: 'Mon–Fri 08:00–15:00',
    curriculum: ['Montessori'],
    ageRange: '14 months–6 yrs',
    website: 'https://jktmontessori.com',
    summary:
      'Montessori preschool on Kemang Selatan serving toddlers through kindergarten age.',
  }),
  p({
    slug: 'ishine-preschool',
    name: 'iShine Preschool & Daycare',
    district: 'Kelapa Gading, North Jakarta',
    address:
      'Kelapa Gading Square Blok J No.28–29, Italian Walk (Mall of Indonesia), Kelapa Gading Barat, Jakarta Utara 14240',
    phone: '+62 21 45867586',
    hours: 'Mon–Fri 07:00–18:00, Sat 08:00–13:00',
    curriculum: ['Australian Early Years', 'Montessori'],
    ageRange: '2–6 yrs',
    website: 'https://idn.ishine.sch.id',
    summary:
      'North Jakarta preschool and daycare using the Australian Early Years Framework with Montessori elements.',
  }),
  p({
    slug: 'global-sevilla-preschool',
    name: 'Global Sevilla Preschool',
    district: 'Puri Indah, West Jakarta',
    address:
      'Jl. Kembangan Raya Blok JJ No.1, Kembangan Selatan, Jakarta Barat 11610',
    phone: '+62 21 5806699',
    hours: 'Mon–Fri 07:15–16:15',
    curriculum: ['EYFS'],
    ageRange: '1.5–18 yrs',
    website: 'https://globalsevilla.org',
    summary:
      'EYFS-based early years at Global Sevilla, with campuses in Puri Indah and Pulo Mas.',
  }),
]
