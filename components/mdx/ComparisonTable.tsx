type ComparisonTableProps = {
  children: React.ReactNode
}

export default function ComparisonTable({
  children,
}: ComparisonTableProps) {

  return (
    <div className="overflow-x-auto my-10">

      <table className="w-full border-collapse">

        {children}

      </table>

    </div>
  )
}