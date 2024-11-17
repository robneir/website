'use client'

import Link from 'next/link'
import ToolTip from './ToolTip'

interface TTLinkProps {
  href: string
  text: string
  children: React.ReactNode
  className?: string
  ToolTipClassName?: string
}

export default function TTLink({ href, text, children, className = '', ToolTipClassName = '' }: TTLinkProps) {
  return (
    <ToolTip url={href} title={text} className={ToolTipClassName}>
      <Link 
        href={href} 
        className={`${className} border-b border-dotted [border-style:dotted_2px] border-foreground hover:text-[--text-hover] p-1 rounded transition-colors`}
      >
        {children}
      </Link>
    </ToolTip>
  )
}