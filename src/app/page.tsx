import EssayPost from '@/components/EssayPost'
import { essays } from '@/data/essays'
import QuotePost from '@/components/QuotePost'
import VideoPost from '@/components/VideoPost'
import { quotes } from '@/data/quotes'
import { videos } from '@/data/videos'
import TableOfContents from '@/components/TableOfContents'
import H2 from '@/components/H2'

export default function HomePage() {
  const sortedEssays = essays.sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('')
    const dateB = b.date.split('/').reverse().join('')
    return dateB.localeCompare(dateA)
  })

  const newestEssay = sortedEssays[0]

  return (
    <main className="flex-1 py-6">
      <div className="text-center mb-16">
        <h1 className="text-xl font-bold mb-4 font-serif">
          About Robert
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Software engineer. Technology, psychology and philosophy. Archive of incredible reads, watches, snippets, nuggets.
        </p>
      </div>

      <div className="flex relative gap-8">
        <div className="relative w-64">
          <div className="sticky top-24">
            <TableOfContents />
          </div>
        </div>

        <div className="flex-1">
          <H2 id="featured">Featured</H2>
          <EssayPost {...newestEssay} />
          <div className="py-8">
            <H2 id="all-essays">All Essays</H2>
          </div>
          <div>
            {sortedEssays.map((essay) => (
              <EssayPost key={essay.url} {...essay} />
            ))}
          </div>
          
          <div className="py-8">
            <H2 id="videos">Videos</H2>
            {videos.map((video) => (
              <VideoPost 
                key={video.videoUrl}
                title={video.title}
                description={video.description}
                videoUrl={video.videoUrl}
                duration={video.duration}
                platform={video.platform}
                date={video.date}
              />
            ))}
          </div>

          <div className="py-8">
            <H2 id="quotes">Quotes</H2>
            {quotes.map((quoteItem, index) => (
              <QuotePost 
                key={index}
                quote={'quotes' in quoteItem ? quoteItem.quotes : quoteItem.quote}
                author={quoteItem.author}
                source={quoteItem.source}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}