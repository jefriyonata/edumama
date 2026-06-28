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

    <div className="not-prose border rounded-2xl p-5 sm:p-6 my-8 bg-white shadow-sm">

      <p className="text-xl font-bold mb-5">

        Ringkasan Sekolah

      </p>

      <div className="space-y-4">

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6 border-b pb-3">

          <span className="text-gray-500 text-sm">
            Kurikulum
          </span>

          <span className="font-semibold text-left sm:text-right">
            {curriculum}
          </span>

        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6 border-b pb-3">

          <span className="text-gray-500 text-sm">
            Biaya
          </span>

          <span className="font-semibold text-left sm:text-right">
            {fee}
          </span>

        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6 border-b pb-3">

          <span className="text-gray-500 text-sm">
            Usia Anak
          </span>

          <span className="font-semibold text-left sm:text-right">
            {age}
          </span>

        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6 border-b pb-3">

          <span className="text-gray-500 text-sm">
            Bahasa
          </span>

          <span className="font-semibold text-left sm:text-right">
            {language}
          </span>

        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6">

          <span className="text-gray-500 text-sm">
            Lokasi
          </span>

          <span className="font-semibold text-left sm:text-right">
            {location}
          </span>

        </div>

      </div>

    </div>

  )
}