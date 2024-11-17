interface VideoPostProps {
  title: string
  description: string
  videoUrl: string
  duration: string
  platform: 'youtube' | 'vimeo' | 'other'
  date: string
}

export default function VideoPost({ 
  title, 
  description,
  videoUrl, 
  duration,
  platform,
  date 
}: VideoPostProps) {
  // Extract video ID from YouTube URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  const videoId = platform === 'youtube' ? getYouTubeId(videoUrl) : null;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';

  return (
    <a 
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      toc-marker={title}
      className="block group my-8 hover:bg-[var(--hover-background)] rounded-lg transition-colors"
    >
      <div className="flex gap-6 p-4">
        {/* Thumbnail */}
        <div className="relative flex-shrink-0">
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="w-48 h-32 object-cover rounded-md"
          />
          <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
          
          {/* Platform icon */}
          <div className="absolute top-2 right-2">
            {platform === 'youtube' && (
              <svg className="w-6 h-6 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            )}
            {/* Add other platform icons as needed */}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-medium text-lg mb-2 group-hover:text-[var(--hover-foreground)] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[var(--text-hover)] mb-2 line-clamp-2">
            {description}
          </p>
          <div className="text-xs text-[var(--text-hover)]">
            {date}
          </div>
        </div>
      </div>
    </a>
  )
} 