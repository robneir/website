export interface Quote {
  quote?: string | string[]
  author?: string
  source?: string
  sourceLink?: string
  date: string
  authorLink?: string
  featured: boolean
}

export const quotes: Quote[] = [
  {
    quote: "This collision between one's image of oneself and what one actually is is always very painful and there are two things you can do about it, you can meet the collision head-on and try and become what you really are or you can retreat and try to remain what you thought you were, which is a fantasy, in which you will certainly perish.",
    author: "James Baldwin",
    authorLink: "https://en.wikipedia.org/wiki/James_Baldwin",
    date: "11/25/2024",
    featured: false
  },
  {
    quote: "While the attention of the world is riveted on dishonest debates and wayward personalities, the meanderings of megapolitics continue almost unnoted. The average North American has probably lavished one hundred times more attention on O. J. Simpson than he has on the new microtechnologies that are poised to antiquate his job and subvert the political system he depends on for unemployment compensation.",
    author: "James Dale Davidson & William Rees-Mogg",
    source: "The Sovereign Individual",
    sourceLink: "https://en.wikipedia.org/wiki/The_Sovereign_Individual",
    date: "11/24/2024",
    featured: false
  },
  {
    quote: "The less confident you are, the more serious you have to act.",
    author: "Tara Ploughman",
    date: "11/21/2024",
    featured: false
  },
  {
    quote: "If you're thinking without writing, you only think you're thinking.",
    author: "Leslie Lamport",
    authorLink: "https://en.wikipedia.org/wiki/Leslie_Lamport", 
    date: "11/20/2024",
    featured: false
  },
  {
    quote: "If you wanna get something really important done, give it to a busy person",
    date: "10/18/2024",
    featured: false
  },
  {
    quote: "Be impatient for action but patient for outcomes",
    date: "09/17/2024", 
    featured: false
  },
  {
    quote: "History is defined by those who defy probability",
    author: "Naval Ravikant",
    authorLink: "https://en.wikipedia.org/wiki/Naval_Ravikant",
    date: "08/15/2024",
    featured: false
  },
  {
    quote: "Don't straw man people's arguments. Strong man them and then argue against the strongest pieces of their arguments.",
    date: "07/14/2024",
    featured: false
  },
  {
    quote: "Know one thing about everything and know everything in one thing",
    date: "10/13/2024",
    featured: false
  },
  {
    quote: [
      "In all things have no preferences",
      "Do not resent or complain",
      "Do not let yourself be guided by lust or love", 
      "Never let yourself be saddened by a separation",
      "Be indifferent to where you live",
      "Do not pursue the taste of good food",
      "Do not hold onto possessions you no longer need"
    ],
    author: "Miyamoto Musashi",
    source: "The Book of Five Rings",
    sourceLink: "https://en.wikipedia.org/wiki/The_Book_of_Five_Rings",
    date: "11/12/2024",
    featured: false
  }
]