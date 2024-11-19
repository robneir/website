interface QuotePostProps {
  quote?: string | string[]
  quotes?: string[]
  author?: string
  source?: string
  date?: string
}

export default function QuotePost({ quote, quotes: propQuotes, author, source, date }: QuotePostProps) {
  const allQuotes = propQuotes || (Array.isArray(quote) ? quote : [quote || ''])
  const isMultipleQuotes = allQuotes.length > 1
  const hasAttribution = author || source || date

  return (
    <div 
      className={`${hasAttribution ? 'my-8 px-6 py-8' : 'my-4 px-4 py-4'} rounded-lg ${isMultipleQuotes ? 'border border-dotted border-foreground' : ''}`}
      toc-marker={allQuotes[0]}
    >
      <blockquote className="relative">
        {/* Decorative quote mark */}
        <span className="absolute -top-4 -left-4 text-4xl text-[var(--text-hover)] font-serif">"</span>
        
        {/* Quote text with inline attribution */}
        <div className="font-newsreader text-lg italic leading-relaxed">
          {isMultipleQuotes ? (
            <ul className="list-disc pl-4 space-y-2">
              {allQuotes.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          ) : (
            <p>
              {allQuotes[0]}
              {hasAttribution && (
                <span className="text-sm not-italic ml-2">
                  {author && <span className="font-medium">— {author}</span>}
                  {source && (
                    <>
                      {author && <span className="text-[var(--text-hover)]"> · </span>}
                      <span className="text-[var(--text-hover)]">{source}</span>
                    </>
                  )}
                  {(author || source) && date && <span className="text-[var(--text-hover)]"> · </span>}
                  {date && <span className="text-[var(--text-hover)]">{date}</span>}
                </span>
              )}
            </p>
          )}
        </div>
        
        {/* Attribution for multiple quotes */}
        {isMultipleQuotes && hasAttribution && (
          <footer className="text-sm mt-4">
            <cite className="flex items-center gap-2 not-italic">
              {author && <span className="font-medium">{author}</span>}
              {source && (
                <>
                  {author && <span className="text-[var(--text-hover)]">·</span>}
                  <span className="text-[var(--text-hover)]">{source}</span>
                </>
              )}
              {(author || source) && date && <span className="text-[var(--text-hover)]">·</span>}
              {date && <span className="text-[var(--text-hover)]">{date}</span>}
            </cite>
          </footer>
        )}
      </blockquote>
    </div>
  )
}