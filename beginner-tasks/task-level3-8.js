const { readInput } = require("./input");

// Task 7: Multiplication Table
(function task7() {
  const number = Number(readInput("Enter a number:"));

  console.log(`Task 7: Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`Task 7: ${number} x ${i} = ${number * i}`);
  }
})();
