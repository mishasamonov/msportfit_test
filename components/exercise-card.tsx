import Link from "next/link"
import { Dumbbell, BarChart3 } from "lucide-react"

interface Exercise {
  id: number
  title: string
  muscleGroup: string
  equipment: string
  difficulty: string
  shortDescription: string
}

export default function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const difficultyColors: Record<string, string> = {
    Початковий: "bg-green-500/20 text-green-400",
    Середній: "bg-yellow-500/20 text-yellow-400",
    Просунутий: "bg-red-500/20 text-red-400",
  }

  return (
    <Link href={`/exercises/${exercise.id}`}>
      <div className="bg-[var(--bg-card)] rounded-xl p-5 border border-[var(--border-color)] hover:border-[var(--accent)] transition-all hover:-translate-y-1 h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg">{exercise.title}</h3>
          <span className={`px-2 py-1 rounded text-xs ${difficultyColors[exercise.difficulty] || "bg-gray-500/20"}`}>
            {exercise.difficulty}
          </span>
        </div>

        <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">{exercise.shortDescription}</p>

        <div className="flex flex-wrap gap-3 text-xs text-[var(--text-secondary)]">
          <span className="flex items-center gap-1 px-2 py-1 bg-[var(--bg-secondary)] rounded">
            <BarChart3 className="w-3 h-3" />
            {exercise.muscleGroup}
          </span>
          <span className="flex items-center gap-1 px-2 py-1 bg-[var(--bg-secondary)] rounded">
            <Dumbbell className="w-3 h-3" />
            {exercise.equipment}
          </span>
        </div>
      </div>
    </Link>
  )
}
