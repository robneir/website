'use client'

import TTLink from './TTLink'

interface EssayPostProps {
  title: string
  url: string
  date: string
  author: string
  authorLink?: string
}

export default function EssayPost({ title, url, date, author, authorLink }: EssayPostProps) {
  return (
    <div className="p-4 text-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between group w-full gap-4">
      <div className="flex items-start gap-2 flex-1">
        <svg 
          className="w-5 h-5 text-[var(--text-hover)] opacity-50 flex-shrink-0 mt-1" 
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
            className="text-base md:text-lg break-words"
            toc-marker={title}
            style={{ wordWrap: 'break-word' }}
          >
            {title}
          </span>
        </TTLink>
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500 mt-2 sm:mt-0 flex-shrink-0">
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