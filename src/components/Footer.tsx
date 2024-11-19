import TTLink from './TTLink'

export default function Footer() {
  return (
    <footer className="max-w-4xl w-full mx-auto bg-background mt-12">
      <div className="relative">
        <div className="border-t border-[var(--border)]"></div>
        <div className="border-t border-[var(--border)] mt-[3px]"></div>
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-2xl font-['Ma_Shan_Zheng']">
          龍
        </span>
      </div>
      <div className="px-4 py-6">
        <div className="flex justify-center gap-6">
        </div>
      </div>
    </footer>
  )
}