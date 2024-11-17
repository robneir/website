import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import FontToggle from './FontToggle'

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 pt-2">
      <Link href="/" className="text-2xl font-bold hover:text-gray-600 transition-colors font-['Ma_Shan_Zheng']">
        龍
      </Link>
      {/* <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Home
        </Link>
      </div> */}
      <div className="flex items-center gap-2">
        <FontToggle />
        <ThemeToggle />
      </div>
    </nav>
  )
}