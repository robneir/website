'use client'

import TTLink from './TTLink'
import { Book } from '@/data/books' // Assuming you have a similar data structure for books

export default function BookPost({ title, url, date, author, authorLink }: Book) {
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
          <path d="M19 13H5v-2h14v2z" />
          <path d="M7 2v20l10-10z" />
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
      <div className="flex items-center gap-4 text-xs text-gray-500 mt-2 sm:mt-0 flex-shrink-0 self-end sm:self-auto">
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