type CalloutProps = {
  children: React.ReactNode
  type?: 'tip' | 'warning' | 'info'
}

export default function Callout({
  children,
  type = 'info',
}: CalloutProps) {

  const styles = {
    tip: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    info: 'bg-blue-50 border-blue-200',
  }

  return (
    <div
      className={`
        border rounded-2xl p-6 my-8
        ${styles[type]}
      `}
    >

      <div className="leading-8 text-gray-800">

        {children}

      </div>

    </div>
  )
}