'use client'

import TTLink from './TTLink'
import { useEffect, useState } from 'react'

interface EssayPostProps {
  title: string
  url: string
  date: string
  author: string
  authorLink?: string
}

export default function EssayPost({ title, url, date, author, authorLink }: EssayPostProps) {
  const [isMobile, setIsMobile] = useState(false)
  const truncatedTitle = title.length > (isMobile ? 30 : 50) ? title.slice(0, isMobile ? 30 : 50) + '...' : title

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <div className="p-4 text-foreground hover:text-[--hover-foreground] transition-colors flex flex-col md:flex-row md:items-center justify-between group w-full gap-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2 md:gap-4">
        <TTLink 
          href={url}
          text={title}
          className="flex items-center gap-2"
        >
          <span className="text-base md:text-lg" toc-marker={title}>{truncatedTitle}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 md:w-4 md:h-4"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </TTLink>
        <div className="flex items-center gap-2 md:gap-4">
          {!authorLink && <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">{author}</span>}
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4 justify-start md:justify-end">
        {authorLink && (
          <TTLink href={authorLink} text={author} className="text-xs md:text-sm text-gray-500 hover:underline whitespace-nowrap">
            {author}
          </TTLink>
        )}
        <span className="text-xs md:text-sm text-gray-500">{date}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:translate-x-1 transition-transform md:w-[18px] md:h-[18px]"
        >
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      </div>
    </div>
  )
}