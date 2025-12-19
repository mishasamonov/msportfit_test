import Link from "next/link"
import { Clock, BarChart3 } from "lucide-react"

interface Program {
  id: number
  title: string
  goal: string
  level: string
  durationWeeks: number
  shortDescription: string
}

export default function ProgramCard({ program }: { program: Program }) {
  const goalColors: Record<string, string> = {
    "Набір маси": "bg-green-500/20 text-green-400",
    Схуднення: "bg-blue-500/20 text-blue-400",
    Сила: "bg-red-500/20 text-red-400",
    "Підтримка форми": "bg-purple-500/20 text-purple-400",
  }

  return (
    <Link href={`/programs/${program.id}`}>
      <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--accent)] transition-all hover:-translate-y-1 h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold">{program.title}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm ${goalColors[program.goal] || "bg-gray-500/20 text-gray-400"}`}
          >
            {program.goal}
          </span>
        </div>

        <p className="text-[var(--text-secondary)] mb-6 line-clamp-2">{program.shortDescription}</p>

        <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            <span>{program.level}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{program.durationWeeks} тижнів</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
