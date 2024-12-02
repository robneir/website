'use client'

import TTLink from './TTLink'
import { Essay } from '@/data/essays'

export default function EssayPost({ title, url, date, author, authorLink, featured, isExternal }: Essay) {
  return (
    <div className="p-4 text-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between group w-full gap-4">
      <div className="flex items-start gap-2 flex-1">
        <span 
          className="w-5 h-5 text-[var(--text-hover)] opacity-50 flex-shrink-0 mt-1" 
          role="img" 
          aria-label="Paper icon"
        >
          📖
        </span>
        <div className="flex items-center">
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
          {isExternal && <span className="text-sm ml-2">↗</span>}
        </div>
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