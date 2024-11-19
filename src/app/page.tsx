import EssayPost from '@/components/EssayPost'
import { essays } from '@/data/essays'
import QuotePost from '@/components/QuotePost'
import VideoPost from '@/components/VideoPost'
import { quotes } from '@/data/quotes'
import { dataAdded as videos } from '@/data/videos'
import TableOfContents from '@/components/TableOfContents'
import H2 from '@/components/H2'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'neir.me',
  description: 'Select high quality videos, essays, articles, and rhetoric online. Topics: Tech, economics, politics, USA, investing, VC, startups, entrepreneurship.',
}

export default function HomePage() {
  const sortedEssays = essays.sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('')
    const dateB = b.date.split('/').reverse().join('')
    return dateB.localeCompare(dateA)
  })

  const newestEssay = sortedEssays[0]

  type VideoItem = {
    type: 'video';
    title: string;
    description: string;
    videoUrl: string;
    duration: string;
    platform: 'youtube' | 'vimeo' | 'other';
    date: string;
  }

  type EssayItem = {
    type: 'essay';
    title: string;
    url: string;
    date: string;
    author: string;
    authorLink: string;
  }

  type QuoteItem = {
    type: 'quote';
    quote?: string;
    quotes?: string[];
    author?: string;
    source?: string;
    date: string;
  }

  type ContentItem = VideoItem | EssayItem | QuoteItem;

  // Combine and sort all content
  const allContent: ContentItem[] = [
    ...videos.map(item => ({ ...item, type: 'video' as const, platform: item.platform as 'youtube' | 'vimeo' | 'other' })),
    ...essays.map(item => ({ ...item, type: 'essay' as const })),
    ...quotes.map(item => ({ ...item, type: 'quote' as const, date: item.date || '01/01/1970' }))
  ].sort((a, b) => {
    const [monthA, dayA, yearA] = a.date.split('/')
    const [monthB, dayB, yearB] = b.date.split('/')
    
    const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1, parseInt(dayA))
    const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1, parseInt(dayB))
    
    return dateB.getTime() - dateA.getTime()
  })

  const newestItem = allContent[0]

  return (
    <main className="flex-1 py-6">
      <PageHeader 
        title="Curated Links"
        description="Select high quality videos, essays, articles, and rhetoric online. Topics: Tech, economics, politics, USA, investing, VC, startups, entrepreneurship."
      />

      <div className="flex relative gap-8">
        <div className="relative w-64 hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents />
          </div>
        </div>

        <div className="flex-1">
          <H2 id="featured">Featured</H2>
          <EssayPost {...newestEssay} />

          <div className="py-8">
            <H2 id="newest">Newest</H2>
            {newestItem.type === 'video' && (
              <VideoPost 
                title={newestItem.title}
                description={newestItem.description}
                videoUrl={newestItem.videoUrl}
                duration={newestItem.duration}
                platform={newestItem.platform}
                date={newestItem.date}
              />
            )}
            {newestItem.type === 'essay' && (
              <EssayPost 
                title={newestItem.title}
                url={newestItem.url}
                date={newestItem.date}
                author={newestItem.author}
                authorLink={newestItem.authorLink}
              />
            )}
            {newestItem.type === 'quote' && (
              <QuotePost
                quote={newestItem.quotes || newestItem.quote || ''}
                author={newestItem.author}
                source={newestItem.source}
                date={newestItem.date}
              />
            )}
          </div>

          <div className="py-8">
            <H2 id="all-essays">Newest Writing</H2>
          </div>
          <div>
            {sortedEssays.slice(0, 3).map((essay) => (
              <EssayPost key={essay.url} {...essay} />
            ))}
          </div>
          
          <div className="py-8">
            <H2 id="videos">Newest Videos</H2>
            {videos.slice(0, 3).map((video) => (
              <VideoPost 
                key={video.videoUrl}
                title={video.title}
                description={video.description}
                videoUrl={video.videoUrl}
                duration={video.duration}
                platform={video.platform as 'youtube' | 'vimeo' | 'other'}
                date={video.date}
              />
            ))}
          </div>

          <div className="py-8">
            <H2 id="quotes">Newest Quotes</H2>
            {quotes.slice(0, 3).map((quoteItem, index) => (
              <QuotePost 
                key={index}
                quote={quoteItem.quotes || quoteItem.quote || ''} 
                author={quoteItem.author}
                source={quoteItem.source || ''}
                date={quoteItem.date}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}