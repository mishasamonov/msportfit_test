import Link from "next/link"
import Badge from "../Badge/Badge"

export default function ExerciseCard({ exercise }) {
  const getDifficultyVariant = (difficulty) => {
    switch (difficulty) {
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
      href={`/exercises/${exercise.id}`}
      className="bg-[#242424] rounded-xl border border-[#333] p-6 flex gap-4 transition-all hover:bg-[#2a2a2a] hover:border-orange-500 hover:-translate-y-0.5 no-underline max-sm:flex-col"
    >
      <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 bg-[#1a1a1a] rounded-lg text-orange-500 max-sm:w-full max-sm:h-[120px]">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6.5 6.5h11M6.5 17.5h11M3 12h3M18 12h3M7.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <h3 className="text-lg font-semibold text-white">{exercise.title}</h3>
        <p className="text-sm text-gray-400 leading-normal">{exercise.shortDescription}</p>
        <div className="flex gap-2 mt-auto">
          <Badge variant="muted">{exercise.muscleGroup}</Badge>
          <Badge variant={getDifficultyVariant(exercise.difficulty)}>{exercise.difficulty}</Badge>
        </div>
      </div>
    </Link>
  )
}
