"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/programs", label: "Програми" },
  { href: "/exercises", label: "Вправи" },
  { href: "/calculators", label: "Калькулятори" },
  { href: "/products", label: "Продукти" },
  { href: "/faq", label: "FAQ" },
]

function DumbbellIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ліва частина гантелі */}
      <rect x="2" y="8" width="4" height="8" rx="1" fill="currentColor" />
      <rect x="5" y="6" width="3" height="12" rx="1" fill="currentColor" />
      {/* Центральна штанга */}
      <rect x="8" y="10.5" width="8" height="3" rx="0.5" fill="currentColor" />
      {/* Права частина гантелі */}
      <rect x="16" y="6" width="3" height="12" rx="1" fill="currentColor" />
      <rect x="18" y="8" width="4" height="8" rx="1" fill="currentColor" />
    </svg>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#333]">
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-3 text-xl font-bold text-white">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/25">
            <DumbbellIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-bold tracking-tight">MSportFit</span>
        </Link>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
        )}

        <nav
          className={`md:flex gap-8 ${
            mobileMenuOpen
              ? "fixed top-[72px] left-0 right-0 flex flex-col items-center pt-8 pb-10 gap-6 bg-[#0d0d0d] border-b border-[#333] z-50 shadow-2xl"
              : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors relative ${
                pathname === link.href
                  ? "text-orange-500 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-orange-500 after:rounded-full"
                  : "text-gray-400 hover:text-white"
              } max-md:text-xl max-md:py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="md:hidden inline-flex items-center justify-center px-8 py-3 text-base font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Увійти
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Увійти
          </Link>

          <button
            className="flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 bg-[#1a1a1a] border border-[#333] rounded-lg cursor-pointer hover:bg-[#242424] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-0" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  )
}
