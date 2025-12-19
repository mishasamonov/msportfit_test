"use client"

export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex gap-2 p-1 bg-[#1a1a1a] rounded-lg overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`px-5 py-3 text-sm font-medium rounded-md whitespace-nowrap transition-all cursor-pointer border-none ${
            activeTab === tab.value ? "bg-orange-500 text-white" : "bg-transparent text-gray-400 hover:text-white"
          }`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
