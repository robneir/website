import EssayPost from '@/components/EssayPost'
import { essays } from '@/data/essays'
import QuotePost from '@/components/QuotePost'
import VideoPost from '@/components/VideoPost'
import { quotes } from '@/data/quotes'
import { dataAdded as videos, Video } from '@/data/videos'
import H2 from '@/components/H2'
import PageHeader from '@/components/PageHeader'
import { Essay } from '@/data/essays'
import { Quote } from '@/data/quotes'
import BookPost from '@/components/BookPost' // Added import for BookPost
import { books } from '@/data/books' // Added import for books data

export const metadata = {
  title: 'neir.me',
  description: 'Select high quality videos, essays, articles, and rhetoric online. Topics: Tech, economics, politics, USA, investing, VC, startups, entrepreneurship, philosophy, human & artificial intelligence.',
}

export default function HomePage() {
  const sortedEssays = essays.sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('')
    const dateB = b.date.split('/').reverse().join('')
    return dateB.localeCompare(dateA)
  })

  const newestEssay = sortedEssays[0]

  type ContentItem = (Video & { type: 'video' }) | (Essay & { type: 'essay' }) | (Quote & { type: 'quote' });

  // Combine and sort all content
  const allContent: ContentItem[] = [
    ...videos.map(item => ({ ...item, type: 'video' as const })),
    ...essays.map(item => ({ ...item, type: 'essay' as const })),
    ...quotes.map(item => ({ ...item, type: 'quote' as const, date: item.date || '01/01/1970' }))
  ].sort((a, b) => {
    const [monthA, dayA, yearA] = a.date.split('/')
    const [monthB, dayB, yearB] = b.date.split('/')
    
    const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1, parseInt(dayA))
    const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1, parseInt(dayB))
    
    return dateB.getTime() - dateA.getTime()
  })

  const featuredContent = allContent.filter(item => item.featured)
  const newestItem = allContent[0]

  return (
    <main className="flex-1 py-6">
      <PageHeader 
        title="About"
        description="I am Robert. One of the founders of Riot IQ, a cognitive testing platform. I have a background in computer science, entrepreneurship, video game development, blockchain, and web development; interests in technology, economics, politics, philosophy, human & artificial intelligence. This website is a curation of links to information I find useful, interesting, valuable."
      />

      <div className="flex-1">
        <H2 id="featured">Featured</H2>
        {featuredContent.map((item, index) => (
          <div key={index}>
            {item.type === 'video' && (
              <VideoPost 
                {...item}
              />
            )}
            {item.type === 'essay' && (
              <EssayPost 
                {...item}
              />
            )}
            {item.type === 'quote' && (
              <QuotePost
                {...item}
              />
            )}
          </div>
        ))}

        <div className="py-8">
          <H2 id="newest">Newest</H2>
          {newestItem.type === 'video' && (
            <VideoPost 
              {...newestItem}
            />
          )}
          {newestItem.type === 'essay' && (
            <EssayPost 
              {...newestItem}
            />
          )}
          {newestItem.type === 'quote' && (
            <QuotePost
              {...newestItem}
            />
          )}
        </div>

        <div className="py-8">
          <H2 id="all-essays">Writing</H2>
          {sortedEssays.slice(0, 3).map((essay) => (
            <EssayPost key={essay.url} {...essay} />
          ))}
        </div>
        
        <div className="py-8">
          <H2 id="videos">Pods & Vids</H2>
          {videos.slice(0, 3).map((video) => (
            <VideoPost 
              key={video.videoUrl}
              {...video}
              platform={video.platform as 'youtube' | 'vimeo' | 'other'}
            />
          ))}
        </div>

        <div className="py-8">
          <H2 id="books">Books</H2>
          {books.slice(0, 3).map((book) => (
            <BookPost key={book.url} {...book} />
          ))}
        </div>

        <div className="py-8">
          <H2 id="quotes">Quotes</H2>
          {quotes.slice(0, 3).map((quote, index) => (
            <QuotePost 
              key={index}
              {...quote}
            />
          ))}
        </div>
      </div>
    </main>
  )
}