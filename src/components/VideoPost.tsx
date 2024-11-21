'use client'

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
  return (
    <div className="p-4 text-foreground flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
      <div className="flex items-center gap-2 flex-1">
        <svg className="w-5 h-5 text-[var(--text-hover)] opacity-50 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <path d="M10 9l5 3-5 3V9z" />
        </svg>
        <TTLink 
          href={videoUrl} 
          text={title}
          className="hover:text-[--hover-foreground] transition-colors"
        >
          <span 
            toc-marker={title}
            className="text-base md:text-lg break-words"
            style={{ wordWrap: 'break-word' }}
          >
            {title}
          </span>
        </TTLink>
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500 mt-2 md:mt-0 flex-shrink-0">
        <span>{duration}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}