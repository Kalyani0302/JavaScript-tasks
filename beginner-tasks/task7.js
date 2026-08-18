// Task 7 — Employee Object
const employee = {
  name: "Arun",
  empId: "STK-101",
  role: "Software Engineer",
  salary: 45000
};

for (let key in employee) {
  console.log(`${key} : ${employee[key]}`);
}

function calculateBonus(salary) {
  return salary >= 40000 ? 5000 : 3000;
}

console.log(`Task 7: Bonus = ₹${calculateBonus(employee.salary)}`);
