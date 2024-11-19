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
    date: "07/10/2024",
    author: "Neir Miss",
    authorLink: "https://www.neirmiss.com"
  },
  {
    title: "On how to be a creative person with a job",
    url: "https://thecreativeindependent.com/essays/on-how-to-be-a-creative-person-with-a-job/",
    date: "11/27/2018",
    author: "The Creative Independent",
    authorLink: "https://thecreativeindependent.com"
  },
  {
    title: "How to do things if you're not that smart and don't have any talent",
    url: "https://adaobi.substack.com/p/how-to-do-things-if-youre-not-that",
    date: "01/28/2024",
    author: "Adaobi",
    authorLink: "https://adaobi.substack.com"
  },
  {
    title: "Why We Don't Trust Each Other Anymore",
    url: "https://www.epsilontheory.com/why-we-dont-trust-each-other-anymore/",
    date: "02/26/2024",
    author: "Epsilon Theory",
    authorLink: "https://www.epsilontheory.com"
  }
];