import type { Place } from '@/lib/places'

/**
 * Daycare directory entries.
 *
 * Seeded from Bersemai's own SERP + Google Maps research (Juni 2026).
 * `googleRating` / `googleReviewCount` are public Maps signals shown as
 * attributed text only — keep them out of structured data.
 * Set `verified: true` only after a direct check (call/visit/site).
 */
export const daycarePlaces: Place[] = [
  {
    slug: 'little-steps-montessori',
    name: 'Little Steps Montessori Daycare',
    type: 'daycare',
    city: 'bekasi',
    cityLabel: 'Bekasi',
    district: 'Bekasi Utara',
    address:
      'Ruko Sinpasa Blok SB 25–27, Jl. Bulevar Selatan No. 5, Marga Mulya, Bekasi Utara 17142',
    website: 'https://littlestepsmontessori.sch.id',
    ageRange: '3 bln – 6 thn',
    curriculum: ['Montessori'],
    priceBand: 'Menengah–atas',
    facilities: ['Ruang ber-AC', 'Indoor playground', 'CCTV', 'Daily report'],
    googleRating: 5.0,
    googleReviewCount: 29,
    summary:
      'Daycare Montessori di kawasan Summarecon Bekasi dengan rating Google tertinggi di antara yang punya website. Menerima bayi sejak 3 bulan, dengan laporan harian detail dan akses CCTV via ponsel.',
    pros: [
      'Rating Google 5,0 yang konsisten',
      'Montessori otentik untuk bayi hingga usia sekolah',
      'Lokasi strategis di pusat Summarecon',
    ],
    cons: ['Biaya menengah-atas', 'Slot cepat penuh'],
    bestFor:
      'Keluarga di Summarecon–Bekasi Utara yang menginginkan Montessori dengan reputasi terbukti.',
    lastVerified: '2026-06-17',
  },
  {
    slug: 'pepito-daycare',
    name: 'Pepito Daycare',
    type: 'daycare',
    city: 'bekasi',
    cityLabel: 'Bekasi',
    district: 'Jatiasih & Kalimalang',
    address:
      'Taman Permata Cikunir Blok A13/9, Cikunir, Jatikramat, Jatiasih (cabang Kalimalang tersedia)',
    website: 'https://www.pepitodaycare.com',
    ageRange: '3 bln – 6 thn',
    curriculum: ['Play-based'],
    priceBand: 'Menengah',
    facilities: ['CCTV realtime', 'Katering sehat tanpa MSG', 'Kunjungan dokter anak & gigi'],
    summary:
      'Daycare homey yang berdiri sejak 2014 dengan dua lokasi (Cikunir & Kalimalang). Menonjolkan katering sehat halal minim gula-garam tanpa MSG serta laporan bulanan observasi dan kesehatan anak.',
    pros: [
      'Berpengalaman sejak 2014',
      'Dua lokasi memudahkan akses',
      'Fokus pada nutrisi anak',
    ],
    cons: ['Fasilitas outdoor terbatas', 'Kapasitas per cabang terbatas'],
    bestFor:
      'Working parents yang mencari daycare berpengalaman, hangat, dan mengutamakan nutrisi.',
    lastVerified: '2026-06-17',
  },
  {
    slug: 'nu-gen-daycare',
    name: 'Nu Gen Daycare',
    type: 'daycare',
    city: 'bekasi',
    cityLabel: 'Bekasi',
    district: 'Bekasi Selatan',
    address:
      'Grand Galaxy City, Jl. Taman Cendana II P3 No. 1, Jaka Setia, Bekasi Selatan 17147',
    website: 'https://nugen.id',
    ageRange: 'Mulai 3 bln',
    curriculum: ['Terintegrasi'],
    priceBand: 'Premium',
    facilities: ['Psikolog pendidikan', 'Dokter anak', 'Program per usia'],
    summary:
      'Daycare premium di Grand Galaxy City dengan tim psikolog pendidikan dan dokter anak. Program dirancang menyesuaikan tahap usia anak sejak 3 bulan.',
    pros: [
      'Tim psikolog + dokter anak',
      'Lokasi premium di Grand Galaxy',
      'Program disesuaikan per usia',
    ],
    cons: ['Biaya premium', 'Antrean slot bisa panjang'],
    bestFor:
      'Keluarga di Grand Galaxy–Bekasi Selatan yang menginginkan daycare premium dengan dukungan psikolog dan dokter.',
    lastVerified: '2026-06-17',
  },
  {
    slug: 'global-prestasi-montessori',
    name: 'Global Prestasi Montessori',
    type: 'daycare',
    city: 'bekasi',
    cityLabel: 'Bekasi',
    district: 'Bekasi Barat',
    address:
      'Jl. KH. Noer Ali No. 10B, Jakasampurna, Bekasi Barat 17145',
    website: 'https://globalprestasi.sch.id',
    ageRange: 'Nursery – TK',
    curriculum: ['Montessori'],
    priceBand: 'Premium',
    facilities: ['Akreditasi A (Unggul)', 'Sports hall', 'Playground', 'Jalur SD–SMA'],
    summary:
      'Jenjang usia dini dari Global Prestasi School (akreditasi A/Unggul) yang mengadopsi pendekatan Montessori, dengan jalur lanjutan hingga SMA dalam satu yayasan.',
    pros: [
      'Akreditasi A (Unggul)',
      'Fasilitas sangat lengkap',
      'Jalur lanjutan hingga SMA',
    ],
    cons: ['Berformat sekolah', 'Biaya premium'],
    bestFor:
      'Orang tua yang menginginkan Montessori dalam ekosistem sekolah mapan dengan jalur lanjutan jelas.',
    lastVerified: '2026-06-17',
  },
  {
    slug: 'kidea-galaksi-bekasi',
    name: 'Kidea Galaksi Bekasi',
    type: 'daycare',
    city: 'bekasi',
    cityLabel: 'Bekasi',
    district: 'Bekasi Selatan',
    address:
      'Grand Galaxy Boulevard Blok BV21, Jaka Setia, Bekasi Selatan',
    website: 'https://kidea.sch.id/school/kidea-galaksi-bekasi/',
    ageRange: 'Preschool – Kindergarten',
    curriculum: ['Montessori'],
    priceBand: 'Menengah',
    facilities: ['Brand nasional', 'Music & movement', 'Kurikulum terstandar'],
    summary:
      'Cabang jaringan preschool & kindergarten Montessori nasional Kidea di Grand Galaxy, menekankan perkembangan menyeluruh dengan program music & movement.',
    pros: [
      'Brand Montessori nasional terstandar',
      'Lokasi mudah dijangkau di Grand Galaxy',
    ],
    cons: ['Lebih berformat preschool', 'Jam lebih singkat dari daycare murni'],
    bestFor:
      'Orang tua yang menginginkan brand Montessori mapan dengan kurikulum terstandar di Bekasi Selatan.',
    lastVerified: '2026-06-17',
  },
  {
    slug: 'pronis-daycare',
    name: 'ProNis Baby & Kids Daycare',
    type: 'daycare',
    city: 'bekasi',
    cityLabel: 'Bekasi',
    district: 'Bekasi Selatan',
    address:
      'Jl. Rajawali Raya No. 68, Kayuringin Jaya, Bekasi Selatan 17144',
    website: 'https://pronisdaycare.blogspot.com',
    ageRange: 'Bayi – usia prasekolah',
    curriculum: ['Stimulasi harian'],
    priceBand: 'Terjangkau',
    facilities: ['Paket harian–bulanan', 'Kunjungan dokter & psikolog', 'CCTV online'],
    summary:
      'Daycare dengan paket sangat fleksibel (harian, mingguan, bulanan) dan banyak program enrichment seperti fun cooking, field trip, dan eksplorasi, plus kunjungan rutin tenaga medis.',
    pros: [
      'Paket fleksibel harian–bulanan',
      'Banyak program enrichment',
      'Kunjungan rutin dokter & psikolog',
    ],
    cons: ['Website masih berbasis blog', 'Fasilitas fisik lebih sederhana'],
    bestFor:
      'Orang tua yang butuh penitipan fleksibel dengan banyak aktivitas edukatif.',
    lastVerified: '2026-06-17',
  },
  {
    slug: 'amanah-islamic-daycare',
    name: 'Amanah Islamic School Daycare',
    type: 'daycare',
    city: 'bekasi',
    cityLabel: 'Bekasi',
    district: 'Mustika Jaya',
    address:
      'Mutiara Gading Timur 2 Blok P11 No. 30, Mustika Jaya, Kota Bekasi',
    website: 'http://www.daycarebekasi.com',
    ageRange: 'Bayi – usia prasekolah',
    curriculum: ['Islami', 'Play-based'],
    priceBand: 'Terjangkau–menengah',
    facilities: ['Pembiasaan nilai Islam', 'Lingkungan perumahan tenang'],
    summary:
      'Daycare yang memadukan penitipan dengan pengenalan nilai-nilai Islam sejak dini, melayani kawasan Mustika Jaya yang minim opsi daycare berkualitas.',
    pros: [
      'Kombinasi penitipan + nilai Islam',
      'Biaya relatif terjangkau',
      'Melayani Bekasi timur (Mustika Jaya)',
    ],
    cons: ['Brand awareness lebih lokal', 'Fasilitas lebih sederhana'],
    bestFor:
      'Keluarga Muslim di Mustika Jaya & Bekasi timur yang menginginkan daycare dengan nuansa Islami.',
    lastVerified: '2026-06-17',
  },
]
