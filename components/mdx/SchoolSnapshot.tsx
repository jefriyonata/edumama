type SchoolSnapshotProps = {
  curriculum: string
  fee: string
  age: string
  language: string
  location: string
}

export default function SchoolSnapshot({
  curriculum,
  fee,
  age,
  language,
  location,
}: SchoolSnapshotProps) {

  return (

    <div className="not-prose border rounded-2xl p-6 my-8 bg-white shadow-sm">

      <p className="text-xl font-bold mb-5">

        Ringkasan Sekolah

      </p>

      <div className="space-y-4">

        <div className="flex items-start justify-between gap-6 border-b pb-3">

          <span className="text-gray-500 text-sm">
            Kurikulum
          </span>

          <span className="font-semibold text-right">
            {curriculum}
          </span>

        </div>

        <div className="flex items-start justify-between gap-6 border-b pb-3">

          <span className="text-gray-500 text-sm">
            Biaya
          </span>

          <span className="font-semibold text-right">
            {fee}
          </span>

        </div>

        <div className="flex items-start justify-between gap-6 border-b pb-3">

          <span className="text-gray-500 text-sm">
            Usia Anak
          </span>

          <span className="font-semibold text-right">
            {age}
          </span>

        </div>

        <div className="flex items-start justify-between gap-6 border-b pb-3">

          <span className="text-gray-500 text-sm">
            Bahasa
          </span>

          <span className="font-semibold text-right">
            {language}
          </span>

        </div>

        <div className="flex items-start justify-between gap-6">

          <span className="text-gray-500 text-sm">
            Lokasi
          </span>

          <span className="font-semibold text-right">
            {location}
          </span>

        </div>

      </div>

    </div>

  )
}