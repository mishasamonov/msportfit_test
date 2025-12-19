"use client"

import { useState } from "react"

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="bg-[#242424] rounded-xl border border-[#333] overflow-hidden transition-all"
        >
          <button
            className="flex items-center justify-between w-full px-6 py-5 text-base font-medium text-white text-left bg-transparent border-none cursor-pointer transition-colors hover:text-orange-500"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question || item.title}</span>
            <svg
              className={`flex-shrink-0 text-gray-500 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{item.answer || item.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
