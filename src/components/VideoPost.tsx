'use client'

import { useRef, useEffect } from 'react'
import TTLink from './TTLink'

interface VideoPostProps {
  title: string
  description: string
  videoUrl: string
  duration: string
  platform: 'youtube' | 'vimeo' | 'other'
  date: string
}

export default function VideoPost({ title, description, videoUrl, duration, platform, date }: VideoPostProps) {
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
    <div className="p-4 text-foreground flex items-center justify-between w-full gap-4">
      <div className="flex items-center gap-2 flex-1">
        <svg className="w-5 h-5 text-[var(--text-hover)] opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <path d="M10 9l5 3-5 3V9z" />
        </svg>
        <TTLink 
          href={videoUrl} 
          text={title}
          className="hover:text-[--hover-foreground] transition-colors"
        >
          <span 
            ref={titleRef}
            toc-marker={title}
            className="text-base md:text-lg truncate"
            style={{ maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden' }}
          >
            {title}
          </span>
        </TTLink>
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span>{duration}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}