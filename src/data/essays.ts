export interface Essay {
  title: string;
  url: string;
  date: string;
  author: string;
  authorLink: string;
  featured: boolean;
  isExternal: boolean;
}

export const essays: Essay[] = [
  {
    title: "Beware The Man Of One Study",
    url: "https://slatestarcodex.com/2014/12/12/beware-the-man-of-one-study/",
    date: "12/12/2014",
    author: "Scott Alexander",
    authorLink: "https://slatestarcodex.com",
    featured: true,
    isExternal: true
  },
  {
    title: "Argument Screens Off Authority",
    url: "https://www.lesswrong.com/posts/5yFRd3cjLpm3Nd6Di/argument-screens-off-authority",
    date: "11/21/2024",
    author: "Eliezer Yudkowsky",
    authorLink: "https://www.lesswrong.com/users/eliezer_yudkowsky",
    featured: true,
    isExternal: true
  },
  {
    title: "Action derivatives: You're not doing what you think you're doing",
    url: "https://www.lesswrong.com/posts/NARHfHenNj7QezzkM/action-derivatives-you-re-not-doing-what-you-think-you-re",
    date: "11/21/2024",
    author: "PatrickDFarley",
    authorLink: "https://www.lesswrong.com/users/patrickdfarley",
    featured: false,
    isExternal: true
  },
  {
    title: "Studying IQ Matters",
    url: "https://www.neirmiss.com/p/studying-iq-matters", 
    date: "07/10/2024",
    author: "Neir Miss",
    authorLink: "https://www.neirmiss.com",
    featured: true,
    isExternal: true
  },
  {
    title: "Significantly Enhancing Adult Intelligence With Gene Editing May Be Possible",
    url: "https://www.lesswrong.com/posts/JEhW3HDMKzekDShva/significantly-enhancing-adult-intelligence-with-gene-editing",
    date: "12/12/2023",
    author: "GeneSmith, kman",
    authorLink: "https://www.lesswrong.com/users/genesmith?from=post_header",
    featured: false,
    isExternal: true
  },
  {
    title: "On how to be a creative person with a job",
    url: "https://thecreativeindependent.com/essays/on-how-to-be-a-creative-person-with-a-job/",
    date: "11/27/2018",
    author: "The Creative Independent",
    authorLink: "https://thecreativeindependent.com",
    featured: false,
    isExternal: true
  },
  {
    title: "How to do things if you're not that smart and don't have any talent",
    url: "https://adaobi.substack.com/p/how-to-do-things-if-youre-not-that",
    date: "01/28/2024",
    author: "Adaobi",
    authorLink: "https://adaobi.substack.com",
    featured: false,
    isExternal: true
  },
  {
    title: "Why We Don't Trust Each Other Anymore",
    url: "https://www.epsilontheory.com/why-we-dont-trust-each-other-anymore/",
    date: "02/26/2024",
    author: "Epsilon Theory",
    authorLink: "https://www.epsilontheory.com",
    featured: false,
    isExternal: true
  },
  {
    title: "The first AI (no game engine) Video Game Ever",
    url: "https://evrimagaci.org/tpg/oasis-offers-unique-aidriven-gaming-experience-60494",
    date: "11/16/2024",
    author: "Try the Game Here",
    authorLink: "https://www.decart.ai/",
    featured: false,
    isExternal: true
  },
  {
    title: "The DOGE Plan to Reform Government",
    url: "https://www.wsj.com/opinion/musk-and-ramaswamy-the-doge-plan-to-reform-government-supreme-court-guidance-end-executive-power-grab-fa51c020",
    date: "11/23/2024",
    author: "Elon Musk & Vivek Ramaswamy",
    authorLink: "https://www.wsj.com",
    featured: false,
    isExternal: true
  },
  {
    title: "The Spacing Effect",
    url: "https://en.wikipedia.org/wiki/Spacing_effect",
    date: "11/24/2024",
    author: "Wikipedia",
    authorLink: "https://wikipedia.org",
    featured: false,
    isExternal: true
  },
  {
    title: "Consuming Information ≠ Learning",
    url: "https://www.sambrinson.com/consuming-information/",
    date: "11/24/2024",
    author: "Sam Brinson",
    authorLink: "https://www.sambrinson.com",
    featured: false,
    isExternal: true
  },
  {
    title: "The Triumph of Electromagnetism Over Nuclear Force",
    url: "https://www.noahpinion.blog/p/the-triumph-of-electromagnetism-over",
    date: "03/17/2024",
    author: "Noah Smith",
    authorLink: "https://www.noahpinion.blog",
    featured: false,
    isExternal: true
  }
];
