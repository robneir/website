interface QuotePostProps {
  quote?: string | string[]
  quotes?: string[]
  author?: string
  source?: string
  date?: string
  authorLink?: string
}

export default function QuotePost({ quote, quotes: propQuotes, author, source, date, authorLink }: QuotePostProps) {
  const allQuotes = propQuotes || (Array.isArray(quote) ? quote : [quote || ''])
  const isMultipleQuotes = allQuotes.length > 1
  const hasAttribution = author || source || date

  return (
    <div 
      className={`${hasAttribution ? 'my-4 px-4 py-6' : 'my-2 px-2 py-3'} rounded-lg ${isMultipleQuotes ? 'border border-dotted border-foreground' : ''}`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          <div className="flex-1">
            <blockquote className="relative">
              {/* Decorative quote mark */}
              <span className="absolute -top-2 -left-2 text-3xl sm:text-4xl text-[var(--text-hover)] font-serif">"</span>
              
              {/* Quote text */}
              <div className="font-newsreader text-sm sm:text-base md:text-lg leading-relaxed italic font-light">
                {isMultipleQuotes ? (
                  <ul toc-marker={allQuotes[0]} className="list-disc pl-4 space-y-1 sm:space-y-2">
                    {allQuotes.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                ) : (
                  <p toc-marker={allQuotes[0]}>{allQuotes[0]}</p>
                )}
              </div>
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs text-gray-500">
            {authorLink ? (
              <a href={authorLink} className="hover:text-[--hover-foreground] transition-colors">{author}</a>
            ) : (
              author && <span>{author}</span>
            )}
            {date && <span>{date}</span>}
          </div>
        </div>

        {/* Source attribution */}
        {source && (
          <div className="flex justify-end">
            <span className="text-xs sm:text-sm text-gray-500">{source}</span>
          </div>
        )}
      </div>
    </div>
  )
}