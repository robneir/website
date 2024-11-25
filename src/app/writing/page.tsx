import { essays } from '@/data/essays'
import EssayPost from '@/components/EssayPost'
import PageHeader from '@/components/PageHeader'
import H2 from '@/components/H2'

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

  const myWriting = sortedEssays.filter(essay => essay.author === "Neir Miss")
  const favoriteWriting = sortedEssays.filter(essay => essay.author !== "Neir Miss")

  return (
    <main className="flex-1 py-6">
      <PageHeader
        title="Writing"
        description="Timeless essays & articles, with some of my own less timeless writing sprinkled in."
      />

      <div className="flex-1">
        <H2 id="my-writing">My Own</H2>
        {myWriting.map((essay) => (
          <EssayPost key={essay.url} {...essay} />
        ))}

        <div className="py-8">
          <H2 id="favorite-writing">My Favorite</H2>
          {favoriteWriting.map((essay) => (
            <EssayPost key={essay.url} {...essay} />
          ))}
        </div>
      </div>
    </main>
  )
}