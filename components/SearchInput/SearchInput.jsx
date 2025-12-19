"use client"

export default function SearchInput({ value, onChange, placeholder = "Пошук..." }) {
  return (
    <div className="relative w-full">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        className="w-full pl-12 pr-4 py-3 text-base bg-[#1a1a1a] border border-[#333] rounded-lg text-white placeholder-gray-500 transition-all focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
