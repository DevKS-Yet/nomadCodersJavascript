const quotes = [
    {
        quote: "blah1",
        author: "alah1"
    },
    {
        quote: "blah2",
        author: "alah2"
    },
    {
        quote: "blah3",
        author: "alah3"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 적절한 Math.floor와 random

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;