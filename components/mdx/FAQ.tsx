'use client'

import { useState } from 'react'

type FAQProps = {
  question: string
  children: React.ReactNode
}

export default function FAQ({
  question,
  children,
}: FAQProps) {

  const [open, setOpen] =
    useState(false)

  if (!question?.trim()) {
    return null
  }

  return (

    <div className="not-prose border-b border-gray-200">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-4 text-left"
      >

        <h3 className="text-lg font-bold leading-snug">

          {question}

        </h3>

        <span
          className={`
            text-xl text-gray-400 shrink-0
            transition-transform duration-300
            ${open ? 'rotate-45' : ''}
          `}
        >

          +

        </span>

      </button>

      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${open
            ? 'grid-rows-[1fr] opacity-100 pb-4'
            : 'grid-rows-[0fr] opacity-0'}
        `}
      >

        <div className="overflow-hidden">

          <div className="text-gray-600 leading-7 pr-10">

            {children}

          </div>

        </div>

      </div>

    </div>

  )
}