import Link from "next/link"
import Badge from "../Badge/Badge"

export default function ProgramCard({ program }) {
  const getLevelVariant = (level) => {
    switch (level) {
      case "Початковий":
        return "success"
      case "Середній":
        return "warning"
      case "Просунутий":
        return "default"
      default:
        return "muted"
    }
  }

  return (
    <Link
      href={`/programs/${program.id}`}
      className="bg-[#242424] rounded-xl border border-[#333] p-6 flex flex-col gap-3 transition-all hover:bg-[#2a2a2a] hover:border-orange-500 hover:-translate-y-0.5 no-underline"
    >
      <div className="flex items-center justify-between">
        <Badge variant={getLevelVariant(program.level)}>{program.level}</Badge>
        <span className="text-sm text-gray-500">{program.durationWeeks} тижнів</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{program.title}</h3>
      <p className="text-sm text-orange-500 font-medium">{program.goal}</p>
      <p className="text-sm text-gray-400 leading-relaxed flex-grow">{program.shortDescription}</p>
      <div className="pt-3 border-t border-[#333]">
        <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
          Детальніше
          <svg
            className="transition-transform group-hover:translate-x-1"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
