const cowsay = require("cowsay");
const quote = require("inspirational-quotes");

console.log(
  cowsay.say({
    text: quote.getRandomQuote(),
    e: "0 0",
    T: "W",
  })
);
