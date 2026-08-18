const { readInput } = require("./input");

(function task1() {
  const employeeName = readInput("Employee name:");
  const age = Number(readInput("Age:"));
  const experience = Number(readInput("Experience:"));
  const salary = Number(readInput("Salary:"));

  const reasons = [];

  if (age < 21) reasons.push("age is below 21");
  if (experience < 1) reasons.push("experience is less than 1 year");
  if (salary < 20000) reasons.push("salary is below ₹20000");

  if (age >= 21 && experience >= 1 && salary >= 20000) {
    console.log("Task 1: Employee is eligible");
  } else {
    console.log(`Task 1: Employee is not eligible because ${reasons.join("; ")}.`);
  }
})();
