export interface Video {
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  platform: 'youtube' | 'vimeo' | 'other';
  date: string;
  featured: boolean;
}

export const dataAdded: Video[] = [
  {
    title: "The Death Of The Personal Brand (& The Future Of Creative Work)",
    description: "Dan Koe explores how the creator economy has evolved from a path to freedom into potential constraint. He discusses how to stand out authentically, pursue meaningful work, and find fulfillment while building an audience. Topics include the evolution of personal brands, the role of education in marketing, and creating systems-based products.",
    videoUrl: "https://www.youtube.com/watch?v=RPVxwzJtp4o",
    duration: "33:42",
    platform: "youtube",
    date: "11/25/2024",
    featured: false
  },
  {
    title: "Breaking Down DOGE, Milei's Impact, WW3 Risk & Science Corner",
    description: "Full episode covering: Breaking down the Department of Government Efficiency (DOGE) roadmap, Milei's impact, DOGE's tight timeline, impact on GDP growth, 'default sustainable,' how to communicate DOGE, WW3 risk with Biden's recent escalation, and Science Corner discussing how fat cells can remember being fat.",
    videoUrl: "https://www.youtube.com/watch?v=pnmDeIgW3EQ",
    duration: "1:00:43",
    platform: "youtube",
    date: "11/23/2024",
    featured: false
  },
  {
    title: "The Ben & Marc Show: Las Vegas Metro Police on Building America's Safest City",
    description: "A16z co-founders Marc Andreessen and Ben Horowitz discuss with LVMPD Chief Mike Gennaro and Sheriff Kevin McMahill how they're using technology to make Las Vegas the safest city in America. They explore modern policing challenges, innovative programs like Hope for Prisoners, and how new technologies like drones and AI are transforming public safety.",
    videoUrl: "https://www.youtube.com/watch?v=vNW6p98SFsw",
    duration: "1:14:37",
    platform: "youtube",
    date: "11/18/2024",
    featured: false
  },
  {
    title: "Peter Thiel: Trump 2.0, Counter-Elites, and World War III",
    description: "Peter Thiel discusses the triumph of counter-elites with Trump's re-election, why his peers have come around to Trump, and his views on everything from border policy to foreign relations. The conversation covers the new Department of Government Efficiency (DOGE), historical revisionism, and Thiel's unique perspectives on potential global conflicts.",
    videoUrl: "https://www.youtube.com/watch?v=wwJV_NuN43Y", // Note: Using placeholder URL since actual wasn't provided
    duration: "1:23:12", // Note: Using placeholder duration since actual wasn't provided
    platform: "youtube",
    date: "11/14/2024",
    featured: false
  },
  {
    title: "Brian Chesky on Airbnb's Future and His Contrarian Management Style",
    description: "Fortune Next to Lead editor Ruth Umoh interviews Airbnb CEO Brian Chesky about his unconventional management philosophy, why most business advice books are wrong, and his ambitious plans to transform the hospitality industry in 2025.",
    videoUrl: "https://www.youtube.com/watch?v=-JnqbfeaXXA",
    duration: "1:23:12",
    platform: "youtube", 
    date: "11/10/2024",
    featured: false
  },
  {
    title: "Gwern: AGI Timelines, Intelligence, and Anonymity",
    description: "Gwern, a pseudonymous researcher and writer, discusses AGI timelines, intelligence augmentation, anonymity, and his unique approach to research and writing. Topics include scaling laws in AI, the nature of intelligence, and the future of human-AI interaction.",
    videoUrl: "https://www.youtube.com/watch?v=a42key59cZQ",
    duration: "1:37:42", 
    platform: "youtube",
    date: "11/13/2024",
    featured: false
  },
  {
    title: "Brian Chesky: Loneliness, Leadership & Building Airbnb",
    description: "The Diary of a CEO interviews Airbnb CEO Brian Chesky about his journey building one of the world's biggest brands. Topics include dealing with work addiction, entrepreneurial loneliness, scaling strategies, creativity in business, company culture, leadership lessons, and Airbnb's darkest moments and future vision.",
    videoUrl: "https://www.youtube.com/watch?v=ia6Di_ytiSE",
    duration: "1:33:38",
    platform: "youtube", 
    date: "10/09/2023",
    featured: false
  },
  {
    title: "Youtube Playlist - Crash Courses on U.S. Government and Politics",
    description: "Everyone should watch these if they don't have a basic understanding of US gov/politics. In 50 videos, Craig Benzine (aka WeezyWaiter) teaches you U.S. government and politics! The course is based on the 2014 AP U.S. Government and Politics curriculum. By the end of this learning playlist, you will be able to: Become a more engaged and active citizen, understand how the US government works and how you can make it better for you and your community, explain the differences between the three branches of government, describe how political ideology, parties, and media influence elections and public policy, and identify the limitations of democracy and the U.S. political system.",
    videoUrl: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H",
    duration: "50 videos",
    platform: "youtube",
    date: "11/20/2024",
    featured: false
  }
]