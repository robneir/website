import TTLink from './TTLink'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-4xl w-full bg-background">
      <div className="relative">
        <div className="border-t border-[var(--border)]"></div>
        <div className="border-t border-[var(--border)] mt-[3px]"></div>
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-2xl font-['Ma_Shan_Zheng']">
          龍
        </span>
      </div>
      <div className="px-4 py-6">
        <div className="flex justify-center gap-6">
          <TTLink 
            href="https://twitter.com/neir_rob"
            text="Twitter"
            className="flex items-center gap-1"
          >
            Twitter
            <span className="text-sm">→</span>
          </TTLink>
          <TTLink
            href="https://riotiq.com"
            text="Current Project" 
            className="flex items-center gap-1"
          >
            Current Project
            <span className="text-sm">→</span>
          </TTLink>
        </div>
      </div>
    </footer>
  )
}