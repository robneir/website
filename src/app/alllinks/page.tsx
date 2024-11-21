import { dataAdded as videos } from '@/data/videos'
import { Essay, essays } from '@/data/essays'
import { quotes } from '@/data/quotes'
import VideoPost from '@/components/VideoPost'
import EssayPost from '@/components/EssayPost'
import QuotePost from '@/components/QuotePost'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'All Links | neir.me',
  description: 'A collection of insightful videos, essays, and quotes.',
}

export default function AllLinksPage() {
  // Combine all content items and sort by date
  const allContent = [
    ...videos.map((item: any) => ({ ...item, type: 'video' })),
    ...essays.map((item: Essay) => ({ ...item, type: 'essay' })),
    ...quotes.map((item: any) => ({ ...item, type: 'quote' }))
  ].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <main className="flex-1 py-6">
      <PageHeader
        title="All Links"
        description="All links ever added to the website in order: high quality & useful articles, videos, essays, quotes."
      />

      <div className="flex-1">
        {allContent.map((item, index) => {
          switch (item.type) {
            case 'video':
              return <VideoPost key={`video-${item.videoUrl}-${index}`} {...item} />
            case 'essay':
              return <EssayPost key={`essay-${item.url}-${index}`} {...item} />
            case 'quote':
              return <QuotePost key={`quote-${index}`} {...item} />
            default:
              return null
          }
        })}
      </div>
    </main>
  )
}