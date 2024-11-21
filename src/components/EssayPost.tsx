'use client'

import TTLink from './TTLink'
import { useEffect, useRef } from 'react'

interface EssayPostProps {
  title: string
  url: string
  date: string
  author: string
  authorLink?: string
}

export default function EssayPost({ title, url, date, author, authorLink }: EssayPostProps) {
  const titleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const checkTitleOverflow = () => {
      const titleElement = titleRef.current
      if (!titleElement) return

      const isOverflowing = titleElement.scrollWidth > titleElement.clientWidth
      if (isOverflowing) {
        const containerWidth = titleElement.clientWidth
        const tempSpan = document.createElement('span')
        tempSpan.style.visibility = 'hidden'
        tempSpan.style.whiteSpace = 'nowrap'
        tempSpan.style.position = 'absolute'
        document.body.appendChild(tempSpan)

        let start = 0
        let end = title.length
        let result = title

        while (start <= end) {
          const mid = Math.floor((start + end) / 2)
          tempSpan.textContent = title.slice(0, mid) + '...'
          
          if (tempSpan.offsetWidth <= containerWidth) {
            result = title.slice(0, mid) + '...'
            start = mid + 1
          } else {
            end = mid - 1
          }
        }

        titleElement.textContent = result
        document.body.removeChild(tempSpan)
      }
    }

    checkTitleOverflow()
    window.addEventListener('resize', checkTitleOverflow)
    return () => window.removeEventListener('resize', checkTitleOverflow)
  }, [title])

  return (
    <div className="p-4 text-foreground flex items-center justify-between group w-full gap-4">
      <div className="flex items-center gap-2 flex-1">
        <svg 
          className="w-5 h-5 text-[var(--text-hover)] opacity-50" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
        <TTLink 
          href={url} 
          text={title}
          className="hover:text-[--hover-foreground] transition-colors"
        >
          <span 
            ref={titleRef}
            className="text-base md:text-lg truncate"
            toc-marker={title}
            style={{ maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden' }}
          >
            {title}
          </span>
        </TTLink>
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        {authorLink ? (
          <a href={authorLink} className="hover:text-[--hover-foreground] transition-colors">{author}</a>
        ) : (
          <span>{author}</span>
        )}
        <span>{date}</span>
      </div>
    </div>
  )
}