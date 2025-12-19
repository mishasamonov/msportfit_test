import { Dumbbell } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-8 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Dumbbell className="w-6 h-6 text-[var(--accent)]" />
            <span>MSportFit</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-secondary)]">
            <Link href="/programs" className="hover:text-white transition-colors">
              Програми
            </Link>
            <Link href="/exercises" className="hover:text-white transition-colors">
              Вправи
            </Link>
            <Link href="/calculators" className="hover:text-white transition-colors">
              Калькулятори
            </Link>
            <Link href="/products" className="hover:text-white transition-colors">
              Продукти
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>

          <p className="text-sm text-[var(--text-secondary)]">© 2025 MSportFit</p>
        </div>
      </div>
    </footer>
  )
}
