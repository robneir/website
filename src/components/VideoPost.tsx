'use client'

import TTLink from './TTLink'
import {Video } from '../data/videos'

export default function VideoPost({ title, description, videoUrl, duration, platform, date, isExternal }: Video) {
  return (
    <div className="p-4 text-foreground flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
      <div className="flex items-center gap-2 flex-1 group">
        <svg className={`w-5 h-5 opacity-50 flex-shrink-0 ${platform === 'youtube' ? 'text-[var(--text-hover)] group-hover:text-red-600' : 'text-[var(--text-hover)]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <path d="M10 9l5 3-5 3V9z" />
        </svg>
        <TTLink 
          href={videoUrl} 
          text={title}
          className={`hover:text-[--hover-foreground] transition-colors relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-current after:opacity-0 hover:after:opacity-100 ${platform === 'youtube' ? 'hover:after:bg-red-600' : ''}`}
        >
          <span 
            toc-marker={title}
            className="text-base md:text-lg break-words"
            style={{ wordWrap: 'break-word' }}
          >
            {title}
          </span>
        </TTLink>
        {isExternal && <span className="text-sm ml-2">↗</span>}
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500 mt-2 md:mt-0 flex-shrink-0 self-end md:self-auto">
        <span>{duration}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}