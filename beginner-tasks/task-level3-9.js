const { readInput } = require("./input");

// Task 8: Reverse Number
(function task8() {
  let number = Number(readInput("Enter a number:"));
  let reversed = 0;

  while (number > 0) {
    const digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
  }

  console.log(`Task 8: Reversed number: ${reversed}`);
})();
