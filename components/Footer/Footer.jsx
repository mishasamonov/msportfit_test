import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#333] mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 pt-12 pb-8">
        <div className="flex justify-between gap-10 pb-8 border-b border-[#333] max-md:flex-col">
          <div className="max-w-[300px]">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-md text-base">M</span>
              <span>MSportFit</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ваш персональний помічник у світі фітнесу та здорового харчування.
            </p>
          </div>

          <div className="flex gap-16 max-md:gap-8 max-sm:flex-wrap">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white mb-2">Тренування</h4>
              <Link href="/programs" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Програми
              </Link>
              <Link href="/exercises" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Вправи
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white mb-2">Харчування</h4>
              <Link href="/calculators" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Калькулятори
              </Link>
              <Link href="/products" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Продукти
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white mb-2">Інформація</h4>
              <Link href="/faq" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                FAQ
              </Link>
              <Link href="/auth/login" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                Увійти
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} MSportFit. Всі права захищено.</p>
        </div>
      </div>
    </footer>
  )
}
