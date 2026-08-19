// Task 16: Employee Salary Filter
const employees = [
  { name: "Arun", salary: 30000 },
  { name: "Bala", salary: 50000 },
  { name: "Kumar", salary: 25000 },
  { name: "Ravi", salary: 70000 }
];

const highSalaryEmployees = employees.filter(emp => emp.salary >= 40000);

console.log("Task 16: All employees:", employees);
console.log("Task 16: Employees with salary >= ₹40000:");
highSalaryEmployees.forEach(emp => {
  console.log(`Task 16: ${emp.name} - ₹${emp.salary}`);
});
