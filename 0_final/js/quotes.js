const quotes = [
  {
    quote: "A rose by any other name would smell as sweet.",
    author: "William Shakespeare",
  },
  {
    quote:
      "Ask not what your country can do for you; ask what you can do for your country.",
    author: "John F. Kennedy",
  },
  {
    quote: "Ask, and it shall be given you; seek, and you shall find.",
    author: "the Bible",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
];

const author = document.querySelector(".body__quotes-author");
const quote = document.querySelector(".body__quotes-text");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

author.innerText = todaysQuote.author;
quote.innerText = todaysQuote.quote;
