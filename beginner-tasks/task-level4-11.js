// Task 10: Salary Calculator
function calculateSalary(basicSalary, bonus) {
  return basicSalary + bonus;
}

const result = calculateSalary(30000, 5000);
console.log(`Task 10: Salary = ₹${result}`);

console.log(`Task 10: calculateSalary(30000, 5000) = ₹${calculateSalary(30000, 5000)}`);
console.log(`Task 10: calculateSalary(40000, 8000) = ₹${calculateSalary(40000, 8000)}`);
