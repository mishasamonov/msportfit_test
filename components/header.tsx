"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Dumbbell } from "lucide-react"

const navLinks = [
  { href: "/programs", label: "Програми" },
  { href: "/exercises", label: "Вправи" },
  { href: "/calculators", label: "Калькулятори" },
  { href: "/products", label: "Продукти" },
  { href: "/faq", label: "FAQ" },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Dumbbell className="w-7 h-7 text-[var(--accent)]" />
            <span>MSportFit</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-card)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/login"
              className="px-5 py-2 rounded-lg border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              Увійти
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--text-secondary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--border-color)]">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "bg-[var(--accent)] text-white"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-card)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg border border-[var(--accent)] text-[var(--accent)] text-center mt-2"
              >
                Увійти
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
