import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-4 pt-2 bg-background">
      <Link href="/" className="text-2xl font-bold hover:text-gray-600 transition-colors font-['Ma_Shan_Zheng']">
        龍
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">
        <Link href="/" className="text-lg hover:text-gray-600 transition-colors">
        — Curated Links — 
        </Link>
        <Link href="/alllinks" className="text-lg hover:text-gray-600 transition-colors">
        — All Links — 
        </Link>
        <Link href="/writing" className="text-lg hover:text-gray-600 transition-colors">
        — Writing — 
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </nav>
  )
}