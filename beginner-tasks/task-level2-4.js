const { readInput } = require("./input");

// Task 3: Age Checker
(function task3() {
  const age = Number(readInput("Enter your age:"));

  if (age >= 18) {
    console.log("Task 3: Eligible to vote");
  } else {
    console.log("Task 3: Not eligible to vote");
  }
})();
