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
  const truncatedTitle = title.length > 50 ? title.slice(0, 50) + '...' : title;

  return (
    <div className="p-4 text-foreground hover:text-[--hover-foreground] transition-colors flex items-center justify-between group w-full">
      <TTLink 
        href={url}
        text={title}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg" toc-marker={title}>{truncatedTitle}</span>
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
            className="text-gray-400"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
        <div className="flex items-center gap-4">
          {!authorLink && <span className="text-sm text-gray-500">{author}</span>}
        </div>
      </TTLink>
      <div className="flex items-center gap-4 justify-end">
        {authorLink && (
          <TTLink href={authorLink} text={author} className="text-sm text-gray-500 hover:underline">
            {author}
          </TTLink>
        )}
        <span className="text-sm text-gray-500">{date}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:translate-x-1 transition-transform"
        >
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      </div>
    </div>
  )
}