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