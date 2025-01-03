'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-background">
      <div className="px-4 py-2">
        {/* Desktop navigation */}
        <div className="hidden lg:flex flex-col w-full">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="text-2xl hover:text-gray-600 transition-colors font-['Ma_Shan_Zheng']">
              neir.me
            </Link>
            
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-center gap-6 mt-2">
            <Link href="/" className="text-lg hover:text-gray-600 transition-colors">
              — About —
            </Link>
            <Link href="/alllinks" className="text-lg hover:text-gray-600 transition-colors">
              — All Links —
            </Link>
            <Link href="/writing" className="text-lg hover:text-gray-600 transition-colors">
              — Writing —
            </Link>
            <Link href="/books" className="text-lg hover:text-gray-600 transition-colors flex items-center gap-1">
              — Books —
            </Link>
            <span>|</span>
            <Link href="https://x.com/neir_rob" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-600 transition-colors flex items-center gap-1 font-mono">
              X ↗
            </Link>
            <Link href="https://riotiq.com/" className="text-lg hover:text-gray-600 transition-colors flex items-center gap-1 font-mono">
              Current Project ↗
            </Link>
            <Link href="https://github.com/robneir" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-600 transition-colors flex items-center gap-1 font-mono">
              Github ↗
            </Link>
          </div>
        </div>

        {/* Mobile navigation top bar */}
        <div className="flex lg:hidden items-center justify-between">
          <Link href="/" className="text-2xl hover:text-gray-600 transition-colors font-['Ma_Shan_Zheng']">
            neir.me
          </Link>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="lg:hidden px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-600 transition-colors">
                About
              </Link>
              <Link href="/alllinks" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-600 transition-colors">
                All Links
              </Link>
              <Link href="/writing" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-600 transition-colors">
                Writing
              </Link>
              <Link href="/books" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-600 transition-colors">
                Books
              </Link>
              <hr className="my-2 border-t border-dotted border-foreground w-full" /> {/* Updated to dotted line */}
              <Link href="https://x.com/neir_rob" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-600 transition-colors flex items-center gap-1 font-mono">
                X ↗
              </Link>
              <Link href="https://riotiq.com/" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-600 transition-colors flex items-center gap-1 font-mono">
                Current Project ↗
              </Link>
              <Link href="https://github.com/robneir" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-600 transition-colors flex items-center gap-1 font-mono">
                Github ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}