"use client"

import { useState } from "react"

export const CollapsableInfo = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-2 border-[#007C41] rounded-xl overflow-hidden bg-white w-full">
      {/* Header/Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white relative z-10 w-full flex justify-between items-center p-3 text-left hover:bg-white transition-all duration-300 ease-in-out group"
      >
        <span className="bg-white font-medium px-2 group-hover:text-[#007C41] transition-colors duration-300">
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-[#007C41] transition-transform duration-500 ease-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`bg-white transition-all duration-500 ease-in-out transform origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 scale-y-100 max-h-96 pointer-events-auto"
            : "opacity-100 -translate-y-4 scale-y-95 max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="bg-white px-6 pb-6 pt-2 leading-relaxed">
          <div className="border-t border-[#007c4077] pt-4">{answer}</div>
        </div>
      </div>
    </div>
  )
}
