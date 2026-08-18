const { readInput } = require("./input");

(function task4() {
  const subjects = [
    Number(readInput("Enter marks for subject 1:")),
    Number(readInput("Enter marks for subject 2:")),
    Number(readInput("Enter marks for subject 3:")),
    Number(readInput("Enter marks for subject 4:")),
    Number(readInput("Enter marks for subject 5:"))
  ];

  const total = subjects.reduce((sum, mark) => sum + mark, 0);
  const average = total / subjects.length;

  let grade = "F";

  if (average >= 90 && average <= 100) {
    grade = "A";
  } else if (average >= 80 && average <= 89) {
    grade = "B";
  } else if (average >= 70 && average <= 79) {
    grade = "C";
  } else if (average >= 60 && average <= 69) {
    grade = "D";
  }

  console.log(`Task 4: Total = ${total}`);
  console.log(`Task 4: Average = ${average}`);
  console.log(`Task 4: Grade = ${grade}`);
})();
