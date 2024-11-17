'use client'

import { useEffect, useState } from 'react'

const fonts = {
  assistant: 'font-assistant',
  newsreader: 'font-newsreader'
}

type FontType = keyof typeof fonts

export default function FontToggle() {
  const [currentFont, setCurrentFont] = useState<FontType>('assistant')

  useEffect(() => {
    // Get initial font from localStorage or default to sans
    const savedFont = localStorage.getItem('preferred-font') as FontType
    if (savedFont && fonts[savedFont]) {
      setCurrentFont(savedFont)
      document.documentElement.className = fonts[savedFont]
    }
  }, [])

  useEffect(() => {
    document.documentElement.className = fonts[currentFont]
  }, [currentFont])

  const toggleFont = () => {
    const newFont: FontType = currentFont === 'assistant' ? 'newsreader' : 'assistant'
    setCurrentFont(newFont)
    localStorage.setItem('preferred-font', newFont)
  }

  return (
    <button
      onClick={toggleFont}
      className={`${fonts[currentFont]} hover:text-[var(--text-hover)] transition-colors p-2 rounded-lg hover:bg-[var(--hover-background)]`}
    >
      Aa
    </button>
  )
}