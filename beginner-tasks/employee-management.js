const { readInput } = require("./input");

let employees = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 45000,
    experience: 2,
    skills: ["HTML", "CSS", "JavaScript"],
    joiningDate: new Date("2021-06-15")
  },
  {
    id: 102,
    name: "Bala",
    department: "HR",
    salary: 55000,
    experience: 4,
    skills: ["Recruitment", "Communication"],
    joiningDate: new Date("2020-03-10")
  },
  {
    id: 103,
    name: "Kumar",
    department: "IT",
    salary: 75000,
    experience: 6,
    skills: ["JavaScript", "Node.js", "MongoDB"],
    joiningDate: new Date("2018-09-22")
  },
  {
    id: 104,
    name: "Ravi",
    department: "Finance",
    salary: 38000,
    experience: 1,
    skills: ["Excel", "Accounting"],
    joiningDate: new Date("2023-01-05")
  },
  {
    id: 105,
    name: "Priya",
    department: "Marketing",
    salary: 62000,
    experience: 5,
    skills: ["SEO", "Content Writing"],
    joiningDate: new Date("2019-11-18")
  },
  {
    id: 106,
    name: "Meera",
    department: "IT",
    salary: 30000,
    experience: 1,
    skills: ["Python", "SQL"],
    joiningDate: new Date("2023-07-12")
  },
  {
    id: 107,
    name: "Sanjay",
    department: "Sales",
    salary: 48000,
    experience: 3,
    skills: ["Sales", "Negotiation"],
    joiningDate: new Date("2021-12-01")
  },
  {
    id: 108,
    name: "Anita",
    department: "IT",
    salary: 90000,
    experience: 8,
    skills: ["Java", "Spring", "AWS"],
    joiningDate: new Date("2016-04-25")
  }
];

function displayEmployees(employeeList = employees) {
  employeeList.forEach(({ id, name, department, salary, experience }) => {
    console.log(`${id} | ${name} | ${department} | ₹${salary} | ${experience} years`);
  });
}

function addEmployee(employee) {
  employees.push(employee);
  return employee;
}

function deleteEmployee(id) {
  const index = employees.findIndex(employee => employee.id === id);
  return index === -1 ? undefined : employees.splice(index, 1)[0];
}

function searchEmployee(id) {
  return employees.find(employee => employee.id === id);
}

function calculateTotalSalary(employeeList = employees) {
  return employeeList.reduce((total, employee) => total + employee.salary, 0);
}

function salaryCategory(salary) {
  if (salary <= 30000) return "Junior";
  if (salary <= 60000) return "Mid Level";
  return "Senior";
}

function addEmployeeWithSkills(name, ...skills) {
  return { name, skills };
}

function displayJoiningDate(employee) {
  const year = employee.joiningDate.getFullYear();
  const month = employee.joiningDate.getMonth();
  console.log(`${employee.name}: joining year ${year}, joining month ${month}`);
}

console.log("--- All Employees ---");
displayEmployees();

console.log("\n--- Salary Above ₹40000 ---");
employees
  .filter(employee => employee.salary > 40000)
  .forEach(employee => console.log(`${employee.name} - ₹${employee.salary}`));

const searchedEmployeeId = Number(readInput("Enter employee ID to search:"));
const searchedEmployee = searchEmployee(searchedEmployeeId);
console.log("\n--- Search Result ---");
console.log(searchedEmployee || "Employee not found");

console.log(`\nTotal salary: ₹${calculateTotalSalary()}`);
console.log(`Any salary above ₹100000: ${employees.some(employee => employee.salary > 100000)}`);
console.log(`Everyone has at least 1 year experience: ${employees.every(employee => employee.experience >= 1)}`);

console.log("\n--- Sorted by Salary: Highest to Lowest ---");
[...employees]
  .sort((first, second) => second.salary - first.salary)
  .forEach(employee => console.log(`${employee.name} - ₹${employee.salary}`));

console.log("\n--- Array Manipulation ---");
const arrayExample = [...employees];
arrayExample.push({ id: 109, name: "Vijay", department: "Support", salary: 28000, experience: 1, skills: ["Support"], joiningDate: new Date("2024-01-01") });
arrayExample.pop();
arrayExample.unshift({ id: 110, name: "Divya", department: "Design", salary: 42000, experience: 2, skills: ["Figma"], joiningDate: new Date("2022-02-14") });
arrayExample.shift();
console.log(`Employees after push, pop, unshift and shift: ${arrayExample.length}`);

console.log("\n--- Destructuring ---");
const { name, department, salary, skills } = employees[0];
const [firstSkill, secondSkill] = skills;
console.log(`Name: ${name}, Department: ${department}, Salary: ₹${salary}`);
console.log(`Skills: ${firstSkill}, ${secondSkill}`);

console.log("\n--- Salary Categories and Joining Dates ---");
employees.forEach(employee => {
  console.log(`${employee.name}: ${salaryCategory(employee.salary)}`);
  displayJoiningDate(employee);
});

console.log("\n--- Rest Operator ---");
console.log(addEmployeeWithSkills("Neha", "React", "TypeScript", "Git"));

console.log("\n--- Menu ---");
function runMenu() {
  let choice;

  do {
    console.log("1. Display All Employees");
    console.log("2. Add Employee");
    console.log("3. Search Employee");
    console.log("4. Filter High Salary Employees");
    console.log("5. Calculate Total Salary");
    console.log("6. Sort By Salary");
    console.log("7. Delete Employee");
    console.log("8. Exit");

    choice = readInput("Choose an option:");

    switch (choice) {
      case "1":
        displayEmployees();
        break;
      case "2":
        addEmployee({
          id: Number(readInput("Employee ID:")),
          name: readInput("Employee name:"),
          department: readInput("Department:"),
          salary: Number(readInput("Salary:")),
          experience: Number(readInput("Experience:")),
          skills: readInput("Skills separated by commas:").split(","),
          joiningDate: new Date(readInput("Joining date (YYYY-MM-DD):"))
        });
        console.log("Employee added");
        break;
      case "3": {
        const employee = searchEmployee(Number(readInput("Employee ID:")));
        console.log(employee || "Employee not found");
        break;
      }
      case "4":
        displayEmployees(employees.filter(employee => employee.salary > 40000));
        break;
      case "5":
        console.log(`Total salary: ₹${calculateTotalSalary()}`);
        break;
      case "6":
        displayEmployees([...employees].sort((first, second) => second.salary - first.salary));
        break;
      case "7": {
        const deletedEmployee = deleteEmployee(Number(readInput("Employee ID:")));
        console.log(deletedEmployee ? `${deletedEmployee.name} deleted` : "Employee not found");
        break;
      }
      case "8":
        console.log("Exiting Employee Management System");
        break;
      case "":
        choice = "8";
        break;
      default:
        console.log("Invalid option");
    }
  } while (choice !== "8");
}

runMenu();
