export interface Book {
  title: string;
  url: string;
  date: string;
  author: string;
  authorLink: string;
  description: string;
  featured: boolean;
  isExternal: boolean;
}

export const books: Book[] = [
  {
    title: "The Book of Five Rings",
    url: "https://en.wikipedia.org/wiki/The_Book_of_Five_Rings",
    date: "11/30/2024",
    author: "Miyamoto Musashi",
    authorLink: "https://en.wikipedia.org/wiki/Miyamoto_Musashi",
    description: "A treatise on strategy, tactics, and philosophy written by the Japanese ronin and samurai Miyamoto Musashi.",
    featured: true,
    isExternal: true
  },
  {
    title: "The Sovereign Individual",
    url: "https://en.wikipedia.org/wiki/The_Sovereign_Individual",
    date: "11/30/2024",
    author: "James Dale Davidson, William Rees-Mogg",
    authorLink: "https://en.wikipedia.org/wiki/James_Dale_Davidson",
    description: "A book that explores the implications of the Information Age on politics, economics, and society.",
    featured: false,
    isExternal: true
  },
  {
    title: "The Almanack of Naval Ravikant",
    url: "https://www.navalmanack.com/",
    date: "11/30/2024",
    author: "Naval Ravikant",
    authorLink: "https://en.wikipedia.org/wiki/Naval_Ravikant",
    description: "A collection of wisdom and insights from Naval Ravikant, a successful entrepreneur and investor.",
    featured: true,
    isExternal: true
  }
];
