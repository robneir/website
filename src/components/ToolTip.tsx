'use client'

import { useState, useRef, useEffect } from 'react'

interface ToolTipProps {
  url: string
  title: string
  children: React.ReactNode
  className?: string
  position?: 'left' | 'right'
}

export default function ToolTip({ url, title, children, className = '', position = 'left' }: ToolTipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  const [pinnedPosition, setPinnedPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const tooltipRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const showToolTip = () => {
    if (isPinned) return
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, 600)
  }

  const hideToolTip = () => {
    if (isPinned) return
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false)
    }, 400)
  }

  const handlePin = () => {
    if (!tooltipRef.current) return
    
    const rect = tooltipRef.current.getBoundingClientRect()
    setPinnedPosition({
      x: rect.left,
      y: rect.top
    })
    setIsPinned(true)
    setIsVisible(true)
  }

  const handleUnpin = () => {
    setIsPinned(false)
    setIsVisible(false)
    setIsDragging(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isPinned) return
    
    const rect = tooltipRef.current?.getBoundingClientRect()
    if (!rect) return

    setIsDragging(true)
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      setPinnedPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const positionClasses = {
    left: '-left-[620px]',
    right: 'left-full ml-2'
  }

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showToolTip}
        onMouseLeave={hideToolTip}
      >
        {children}
      </div>
      <div
        ref={tooltipRef}
        style={isPinned ? {
          position: 'fixed',
          left: `${pinnedPosition.x}px`,
          top: `${pinnedPosition.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab'
        } : undefined}
        className={`absolute z-50 -top-[140px] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${!isPinned ? positionClasses[position] : ''} ${className}`}
        onMouseEnter={showToolTip}
        onMouseLeave={hideToolTip}
      >
        <div 
          className="bg-background text-foreground rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-slideIn"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center justify-between p-2 border-b border-gray-200 dark:border-gray-700">
            <span className="text-foreground">{title}</span>
            <div className="flex gap-2">
              <button
                onClick={isPinned ? handleUnpin : handlePin}
                className="text-gray-500 hover:text-[--hover-foreground]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isPinned ? (
                    <>
                      <line x1="12" y1="17" x2="12" y2="3" />
                      <path d="M5 17h14v4H5z" />
                    </>
                  ) : (
                    <>
                      <line x1="12" y1="17" x2="12" y2="3" />
                      <path d="M5 17h14" />
                      <path d="m15 7-3-3-3 3" />
                    </>
                  )}
                </svg>
              </button>
              <button 
                onClick={() => {
                  setIsVisible(false)
                  setIsPinned(false)
                }}
                className="text-gray-500 hover:text-[--hover-foreground]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>
          </div>
          <iframe 
            src={url}
            className="w-[600px] h-[400px]"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </div>
    </div>
  )
}