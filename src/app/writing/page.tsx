import { essays } from '@/data/essays'
import EssayPost from '@/components/EssayPost'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Writing | neir.me',
  description: 'Essays and articles about technology, programming, and more.',
}

export default function WritingPage() {
  const sortedEssays = essays.sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('')
    const dateB = b.date.split('/').reverse().join('')
    return dateB.localeCompare(dateA)
  })

  return (
    <main className="flex-1 py-6">
      <PageHeader
        title="Writing"
        description="Timeless essays & articles, with some of my own less timeless writing sprinkled in."
      />

      <div className="flex-1">
        {sortedEssays.map((essay) => (
          <EssayPost key={essay.url} {...essay} />
        ))}
      </div>
    </main>
  )
}