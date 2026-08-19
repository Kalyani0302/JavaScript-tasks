// Task 18: Total Salary
const employees = [
  { name: "Arun", salary: 30000 },
  { name: "Bala", salary: 50000 },
  { name: "Kumar", salary: 25000 },
  { name: "Ravi", salary: 70000 }
];

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

console.log("Task 18: All employees:", employees);
console.log(`Task 18: Total salary of all employees: ₹${totalSalary}`);
