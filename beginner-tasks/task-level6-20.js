// Task 19: Check Employee (some & every)
const employees = [
  { name: "Arun", salary: 30000 },
  { name: "Bala", salary: 50000 },
  { name: "Kumar", salary: 25000 },
  { name: "Ravi", salary: 70000 }
];

const anyEarningOver100k = employees.some(emp => emp.salary > 100000);
const allEarningAtLeast20k = employees.every(emp => emp.salary >= 20000);

console.log("Task 19: All employees:", employees);
console.log(`Task 19: Is there any employee earning more than ₹100000? ${anyEarningOver100k}`);
console.log(`Task 19: Are all employees earning at least ₹20000? ${allEarningAtLeast20k}`);
