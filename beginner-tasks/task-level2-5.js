const { readInput } = require("./input");

// Task 4: Student Grade
(function task4() {
  const marks = Number(readInput("Enter marks:"));

  let grade;

  if (marks >= 90 && marks <= 100) {
    grade = "A";
  } else if (marks >= 80 && marks <= 89) {
    grade = "B";
  } else if (marks >= 70 && marks <= 79) {
    grade = "C";
  } else if (marks >= 60 && marks <= 69) {
    grade = "D";
  } else if (marks < 60) {
    grade = "Fail";
  }

  console.log(`Task 4: Your grade is ${grade}`);
})();
