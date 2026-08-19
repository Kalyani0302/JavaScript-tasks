// Task 20: Employee Management Mini Program
const employees = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 35000
  },
  {
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 45000
  },
  {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 60000
  }
];

console.log("Task 20: ========== Employee Management ==========");

// 1. Print all employee names using forEach()
console.log("\nTask 20: All employee names:");
employees.forEach(emp => {
  console.log(`Task 20: ${emp.name}`);
});

// 2. Get only IT employees using filter()
console.log("\nTask 20: IT employees:");
const itEmployees = employees.filter(emp => emp.department === "IT");
itEmployees.forEach(emp => {
  console.log(`Task 20: ${emp.name} - ₹${emp.salary}`);
});

// 3. Increase every salary by 10% using map()
console.log("\nTask 20: Salary after 10% increase:");
const increasedSalaries = employees.map(emp => ({
  name: emp.name,
  newSalary: emp.salary * 1.1
}));
increasedSalaries.forEach(emp => {
  console.log(`Task 20: ${emp.name} - ₹${emp.newSalary}`);
});

// 4. Find employee with salary ₹45000 using find()
console.log("\nTask 20: Find employee with salary ₹45000:");
const targetEmployee = employees.find(emp => emp.salary === 45000);
if (targetEmployee) {
  console.log(`Task 20: ${targetEmployee.name} (${targetEmployee.department})`);
}

// 5. Calculate total salary using reduce()
console.log("\nTask 20: Total salary calculation:");
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(`Task 20: Total salary: ₹${totalSalary}`);

// 6. Check whether anyone earns above ₹50000 using some()
console.log("\nTask 20: Check if anyone earns above ₹50000:");
const hasHighEarner = employees.some(emp => emp.salary > 50000);
console.log(`Task 20: ${hasHighEarner ? "Yes" : "No"}`);

// 7. Check whether everyone earns above ₹20000 using every()
console.log("\nTask 20: Check if everyone earns above ₹20000:");
const allAbove20k = employees.every(emp => emp.salary > 20000);
console.log(`Task 20: ${allAbove20k ? "Yes" : "No"}`);

// 8. Sort employees by salary from highest to lowest
console.log("\nTask 20: Employees sorted by salary (highest to lowest):");
const sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);
sortedEmployees.forEach(emp => {
  console.log(`Task 20: ${emp.name} - ₹${emp.salary}`);
});

// 9. Destructure each employee's name and salary
console.log("\nTask 20: Destructured employee data:");
employees.forEach(({ name, salary }) => {
  console.log(`Task 20: ${name} earns ₹${salary}`);
});

// 10. Use spread operator to create a new employee list
console.log("\nTask 20: New employee list with additional employee (using spread):");
const newEmployee = { id: 104, name: "Priya", department: "Finance", salary: 55000 };
const extendedEmployees = [...employees, newEmployee];
extendedEmployees.forEach(emp => {
  console.log(`Task 20: ${emp.name} (${emp.department}) - ₹${emp.salary}`);
});
