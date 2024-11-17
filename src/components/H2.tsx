'use client'

export default function H2({ children, id }: { children: React.ReactNode; id: string }) {
  const scrollToHeading = () => {
    const element = document.getElementById(id)
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const middle = absoluteElementTop - (window.innerHeight / 2)
      window.scrollTo({ top: middle, behavior: 'smooth' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <h2 
      id={id}
      toc-marker={children?.toString()}
      onClick={scrollToHeading}
      className="uppercase tracking-wide text-foreground border-b border-dotted [border-style:dotted_2px] border-foreground w-full mb-2 cursor-pointer hover:text-gray-600 transition-colors"
    >
      {children}
    </h2>
  )
} 