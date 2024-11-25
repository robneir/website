import { Quote } from '@/data/quotes'

export default function QuotePost({ quote, author, source, sourceLink, date, authorLink }: Quote) {
  const allQuotes = Array.isArray(quote) ? quote : [quote || '']

  return (
    <div className="p-4 text-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between group w-full gap-4">
      <div className="flex items-start gap-2 flex-1">
        <span className="text-[var(--text-hover)] opacity-50 font-serif text-2xl flex-shrink-0 mt-1">"</span>
        <div className="font-newsreader text-base md:text-lg italic font-light">
          {allQuotes.length > 1 ? (
            <ul toc-marker={allQuotes[0]} className="list-disc pl-4 space-y-1">
              {allQuotes.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          ) : (
            <p toc-marker={allQuotes[0]}>{allQuotes[0]}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-2 sm:mt-0 flex-shrink-0 self-end sm:self-auto max-w-[200px] justify-end">
        {author && (
          <>
            {authorLink ? (
              <a href={authorLink} className="hover:text-[--hover-foreground] transition-colors text-right">{author}</a>
            ) : (
              <span className="text-right">{author}</span>
            )}
          </>
        )}
        {source && (
          <>
            {sourceLink ? (
              <a href={sourceLink} className="hover:text-[--hover-foreground] transition-colors text-right">{source}</a>
            ) : (
              <span className="text-right">{source}</span>
            )}
          </>
        )}
        <span>{date}</span>
      </div>
    </div>
  )
}