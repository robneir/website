interface QuotePostProps {
  quote: string | string[]
  author: string
  source?: string
  sourceLink?: string
  year?: string
}

export default function QuotePost({ quote, author, source, sourceLink, year }: QuotePostProps) {
  const quotes = Array.isArray(quote) ? quote : [quote]
  const isMultipleQuotes = quotes.length > 1

  return (
    <div 
      className={`my-8 px-6 py-8 rounded-lg ${isMultipleQuotes ? 'border border-dotted border-foreground' : ''}`}
      toc-marker={quotes[0]}
    >
      <blockquote className="relative">
        {/* Decorative quote mark */}
        <span className="absolute -top-4 -left-4 text-4xl text-[var(--text-hover)] font-serif">"</span>
        
        {/* Quote text */}
        <div className="font-newsreader text-lg italic mb-4 leading-relaxed">
          {isMultipleQuotes ? (
            <ul className="list-disc pl-4 space-y-2">
              {quotes.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          ) : (
            <p>{quotes[0]}</p>
          )}
        </div>
        
        {/* Attribution */}
        <footer className="text-sm">
          <cite className="flex items-center gap-2 not-italic">
            <span className="font-medium">{author}</span>
            {source && (
              <>
                <span className="text-[var(--text-hover)]">·</span>
                {sourceLink ? (
                  <a 
                    href={sourceLink}
                    className="text-[var(--text-hover)] hover:text-[var(--foreground)] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source}
                  </a>
                ) : (
                  <span className="text-[var(--text-hover)]">{source}</span>
                )}
              </>
            )}
            {year && (
              <>
                <span className="text-[var(--text-hover)]">·</span>
                <span className="text-[var(--text-hover)]">{year}</span>
              </>
            )}
          </cite>
        </footer>
      </blockquote>
    </div>
  )
}