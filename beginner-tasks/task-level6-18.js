// Task 17: Increase Salary
const employees = [
  { name: "Arun", salary: 30000 },
  { name: "Bala", salary: 50000 },
  { name: "Kumar", salary: 25000 },
  { name: "Ravi", salary: 70000 }
];

const increasedSalaries = employees.map(emp => {
  const increase = emp.salary < 40000 ? 5000 : 10000;
  return {
    name: emp.name,
    salary: emp.salary,
    newSalary: emp.salary + increase
  };
});

console.log("Task 17: Salary increase breakdown:");
increasedSalaries.forEach(emp => {
  console.log(`Task 17: ${emp.name}: ₹${emp.salary} → ₹${emp.newSalary}`);
});
