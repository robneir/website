interface QuotePostProps {
  quote?: string | string[]
  quotes?: string[]
  author?: string
  source?: string
  date: string
  authorLink?: string
}

export default function QuotePost({ quote, quotes: propQuotes, author, source, date, authorLink }: QuotePostProps) {
  const allQuotes = propQuotes || (Array.isArray(quote) ? quote : [quote || ''])

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
      <div className="flex items-center gap-4 text-xs text-gray-500 mt-2 sm:mt-0 flex-shrink-0 self-end sm:self-auto">
        {authorLink ? (
          <a href={authorLink} className="hover:text-[--hover-foreground] transition-colors">{author}</a>
        ) : (
          author && <span>{author}</span>
        )}
        {source && <span>{source}</span>}
        <span>{date}</span>
      </div>
    </div>
  )
}