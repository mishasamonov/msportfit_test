export default function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-orange-500/15 text-orange-500",
    success: "bg-green-500/15 text-green-500",
    warning: "bg-yellow-500/15 text-yellow-500",
    muted: "bg-gray-500/15 text-gray-400",
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${variants[variant]}`}>
      {children}
    </span>
  )
}
