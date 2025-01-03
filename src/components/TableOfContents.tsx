'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface TOCItem {
  id: string
  text: string
  level: number
  parentId?: string
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [isExpanded, setIsExpanded] = useState(true)
  const [hoveredId, setHoveredId] = useState<string>('')
  const [selectedId, setSelectedId] = useState<string>('')
  const pathname = usePathname()

  // Get all headings when the component mounts or route changes
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[toc-marker]'))
    
    const items: TOCItem[] = elements.map((element, index) => {
      const id = element.id || 
                element.getAttribute('toc-marker')?.toLowerCase().replace(/\s+/g, '-') || 
                `heading-${index}`
      const level = element.tagName === 'H2' ? 2 : 3
      
      return {
        id,
        text: element.getAttribute('toc-marker') || '',
        level,
      }
    })

    elements.forEach((element, index) => {
      if (!element.id) {
        element.id = `${items[index].id}-${index}`
        items[index].id = element.id
      }
    })

    setHeadings(items)
  }, [pathname])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const middle = absoluteElementTop - (window.innerHeight / 2)
      window.scrollTo({ top: middle, behavior: 'smooth' })
      window.history.pushState(null, '', `#${id}`)
      setSelectedId(id)
    }
  }

  // Handle highlighting of content and TOC items
  useEffect(() => {
    const updateHighlight = (id: string, shouldHighlight: boolean) => {
      // Update content highlight
      const contentElement = document.getElementById(id)
      if (contentElement) {
        contentElement.classList.toggle('bg-[var(--hover-background)]', shouldHighlight)
      }

      // Update TOC item highlight
      const tocItem = document.querySelector(`[data-toc-id="${id}"]`)
      if (tocItem) {
        tocItem.classList.toggle('bg-[var(--hover-background)]', shouldHighlight)
      }
    }

    if (hoveredId || selectedId) {
      updateHighlight(hoveredId || selectedId, true)
    }

    return () => {
      if (hoveredId || selectedId) {
        updateHighlight(hoveredId || selectedId, false)
      }
    }
  }, [hoveredId, selectedId])

  // Add event listeners for content hover
  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const marker = target.closest('[toc-marker]')
      const tocItem = target.closest('[data-toc-id]')
      
      if (marker) {
        setHoveredId(marker.id)
      } else if (tocItem) {
        setHoveredId(tocItem.getAttribute('data-toc-id') || '')
      }
    }

    const handleMouseLeave = () => {
      setHoveredId('')
    }

    // Add listeners to both content and TOC
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  return (
    <nav className="sticky top-24 w-64 hidden lg:block">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex justify-between items-center w-full group cursor-pointer"
            aria-label={isExpanded ? "Collapse contents" : "Expand contents"}
          >
            <div className="text-2xl font-medium font-assistant text-foreground group-hover:text-[var(--foreground)] transition-colors truncate">
              Page Contents
            </div>
            <div className="text-foreground group-hover:text-[var(--foreground)] transition-colors">
              {isExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              )}
            </div>
          </button>
        </div>
        {isExpanded && (
          <ul className="space-y-1 mt-4">
            {headings.map((heading, index) => {
              const truncatedText = heading.text.length > 27 ? heading.text.slice(0, 27) + '...' : heading.text
              
              return (
                <li key={`${heading.id}-${index}`}>
                  <button
                    data-toc-id={heading.id}
                    onClick={() => scrollToHeading(heading.id)}
                    className={`text-base hover:text-[var(--foreground)] transition-colors block py-0.5 text-left w-full font-assistant truncate ${heading.level === 2 ? 'text-lg font-bold' : ''} text-foreground ${selectedId === heading.id ? 'bg-[var(--hover-background)]' : ''} ${heading.level === 3 ? 'ml-4' : ''}`}
                  >
                    {truncatedText}
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </nav>
  )
}