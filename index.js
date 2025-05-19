const quote = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".quote-author");
const quoteBtn = document.querySelector(".quote-btn");
const quoteGen = [
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind”  ",
  "“Be the change that you wish to see in the world.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”",
  "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ",
  "“We are all in the gutter, but some of us are looking at the stars.”",
  "“The fool doth think he is wise, but the wise man knows himself to be a fool.” ",
];
const quoteAuthors = [
  "― Bernard M. Baruch",
  "― Mahatma Gandhi",
  "― Oscar Wilde",
  "― Ralph Waldo Emerson",
  "― Oscar Wilde",
  "― William Shakespeare",
];
// let uniqueQuotes = new Set();

quoteBtn.addEventListener("click", function () {
  let randomNumGen = Math.floor(Math.random() * quoteGen.length);
  return (
    (quote.textContent = `${quoteGen[randomNumGen]}`) &&
    (quoteAuthor.textContent = `${quoteAuthors[randomNumGen]}`)
  );
});
