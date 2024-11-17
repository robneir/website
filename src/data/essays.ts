export interface Essay {
  title: string;
  url: string;
  date: string;
  author: string;
  authorLink: string;
}

export const essays: Essay[] = [
  {
    title: "Studying IQ Matters",
    url: "https://www.neirmiss.com/p/studying-iq-matters",
    date: "01/15/24",
    author: "Neir Miss",
    authorLink: "https://www.neirmiss.com"
  },
  {
    title: "Bitcoin is Not Bulletproof",
    url: "/essays/example-essay-2", 
    date: "12/20/23",
    author: "Neir Miss",
    authorLink: "https://www.neirmiss.com"
  },
  {
    title: "On how to be a creative person with a job",
    url: "https://thecreativeindependent.com/essays/on-how-to-be-a-creative-person-with-a-job/",
    date: "12/01/23",
    author: "The Creative Independent",
    authorLink: "https://thecreativeindependent.com"
  },
  {
    title: "How to do things if you're no that smart and don't have any talent",
    url: "https://adaobi.substack.com/p/how-to-do-things-if-youre-not-that",
    date: "11/15/23",
    author: "Adaobi",
    authorLink: "https://adaobi.substack.com"
  },
  {
    title: "Why We Don't Trust Each Other Anymore",
    url: "https://www.epsilontheory.com/why-we-dont-trust-each-other-anymore/",
    date: "10/01/23",
    author: "Epsilon Theory",
    authorLink: "https://www.epsilontheory.com"
  }
];