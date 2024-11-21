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
      className={`${hasAttribution ? 'my-8 px-6 py-8' : 'my-4 px-4 py-4'} rounded-lg ${isMultipleQuotes ? 'border border-dotted border-foreground' : ''}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <blockquote className="relative">
              {/* Decorative quote mark */}
              <span className="absolute -top-4 -left-4 text-4xl text-[var(--text-hover)] font-serif">"</span>
              
              {/* Quote text */}
              <div className="font-newsreader text-base md:text-lg leading-relaxed italic font-light">
                {isMultipleQuotes ? (
                  <ul toc-marker={allQuotes[0]} className="list-disc pl-4 space-y-2">
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

          <div className="flex items-center gap-4 text-xs text-gray-500">
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
            <span className="text-sm text-gray-500">{source}</span>
          </div>
        )}
      </div>
    </div>
  )
}