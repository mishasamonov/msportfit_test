"use client"

export default function Filters({ filters, activeFilters, onChange, onReset }) {
  const handleFilterChange = (category, value) => {
    const newFilters = { ...activeFilters }
    if (newFilters[category] === value) {
      delete newFilters[category]
    } else {
      newFilters[category] = value
    }
    onChange(newFilters)
  }

  const hasActiveFilters = Object.keys(activeFilters).length > 0

  return (
    <div className="bg-[#242424] rounded-xl border border-[#333] p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Фільтри</h3>
        {hasActiveFilters && (
          <button
            className="text-sm text-orange-500 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onReset}
          >
            Скинути
          </button>
        )}
      </div>

      {filters.map((filter) => (
        <div key={filter.name} className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-gray-400">{filter.label}</h4>
          <div className="flex flex-wrap gap-2">
            {filter.options.map((option) => (
              <button
                key={option}
                className={`px-3 py-2 text-sm rounded-md cursor-pointer transition-all border ${
                  activeFilters[filter.name] === option
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-[#1a1a1a] border-[#333] text-gray-400 hover:border-orange-500 hover:text-white"
                }`}
                onClick={() => handleFilterChange(filter.name, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
