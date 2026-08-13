// Tasks 1-9 implementations

// Task 1 — Employee Eligibility
let empName = prompt("Enter employee name:");
let empAge = Number(prompt("Enter age:"));
let empExperience = Number(prompt("Enter experience (years):"));
let empSalary = Number(prompt("Enter salary:"));

if (empAge >= 21 && empExperience >= 1 && empSalary >= 20000) {
  console.log("Task 1: Employee is eligible");
} else {
  if (empAge < 21) {
    console.log("Task 1: Not eligible because age is below 21");
  } else if (empExperience < 1) {
    console.log("Task 1: Not eligible because experience is less than 1 year");
  } else if (empSalary < 20000) {
    console.log("Task 1: Not eligible because salary is below ₹20000");
  }
}

// Task 2 — ATM Withdrawal
(function(){
  let balance = 10000;
  const amt = Number(prompt("Enter withdrawal amount:"));

  if (isNaN(amt) || amt <= 0) {
    console.log("Task 2: Invalid amount. Must be greater than 0");
    return;
  }
  if (amt > balance) {
    console.log("Task 2: Insufficient balance");
    return;
  }
  if (amt % 100 !== 0) {
    console.log("Task 2: Amount must be a multiple of 100");
    return;
  }

  balance -= amt;
  console.log("Task 2: Withdrawal successful");
  console.log(`Task 2: Remaining balance: ₹${balance}`);
})();

// Task 3 — Login System with 3 Attempts
(function(){
  const correctUsername = "admin";
  const correctPassword = "12345";
  let attempts = 0;
  let success = false;

  while (attempts < 3) {
    const user = prompt("Username:");
    const pass = prompt("Password:");
    attempts++;
    if (user === correctUsername && pass === correctPassword) {
      console.log("Task 3: Login successful");
      success = true;
      break;
    } else {
      console.log(`Task 3: Attempt ${attempts} failed`);
    }
  }
  if (!success) {
    console.log("Task 3: Account locked");
  }
})();

// Task 4 — Student Grade System
(function(){
  const s1 = Number(prompt("Enter mark for subject 1:"));
  const s2 = Number(prompt("Enter mark for subject 2:"));
  const s3 = Number(prompt("Enter mark for subject 3:"));
  const s4 = Number(prompt("Enter mark for subject 4:"));
  const s5 = Number(prompt("Enter mark for subject 5:"));

  const total = s1 + s2 + s3 + s4 + s5;
  const average = total / 5;
  let grade;

  if (average >= 90 && average <= 100) grade = 'A';
  else if (average >= 80 && average <= 89) grade = 'B';
  else if (average >= 70 && average <= 79) grade = 'C';
  else if (average >= 60 && average <= 69) grade = 'D';
  else if (average < 60) grade = 'F';
  else grade = 'Invalid';

  console.log(`Task 4: Total = ${total}`);
  console.log(`Task 4: Average = ${average}`);
  console.log(`Task 4: Grade = ${grade}`);
})();

// Task 5 — Number Pattern (different loops)
// 1 2 3 4 5 using for
let line = '';
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5 4 3 2 1 using while
let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

// 1 2 3 4 5 on one line using do...while
let k = 1;
let out = '';
do {
  out += k + (k < 5 ? ' ' : '');
  k++;
} while (k <= 5);
console.log(out);

// Task 6 — Shopping Cart
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [50000, 1000, 2000, 15000];
let totalCost = 0;
for (let idx = 0; idx < products.length; idx++) {
  console.log(`${products[idx]} - ₹${prices[idx]}`);
  totalCost += prices[idx];
}
console.log(`Task 6: Total = ₹${totalCost}`);

// Task 7 — Employee Object and calculateBonus()
let employee = {
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

// Task 8 — Bank Account Functions (no globals)
function deposit(balance, amount) {
  return { balance: balance + amount, message: `Deposited: ₹${amount}` };
}
function withdraw(balance, amount) {
  if (amount > balance) return { balance, message: `Insufficient balance` };
  return { balance: balance - amount, message: `Withdrawn: ₹${amount}` };
}
function checkBalance(balance) { return `Current Balance: ₹${balance}`; }

// Example flow
let bal = 10000;
let r1 = deposit(bal, 5000);
bal = r1.balance;
console.log(r1.message);
let r2 = withdraw(bal, 2000);
bal = r2.balance;
console.log(r2.message !== 'Insufficient balance' ? r2.message : r2.message);
console.log(checkBalance(bal));

// Task 9 — Callback Calculator
function add(a,b){ return a+b; }
function sub(a,b){ return a-b; }
function mul(a,b){ return a*b; }
function div(a,b){ return a/b; }

function calculate(callback,a,b){
  return callback(a,b);
}

console.log(calculate(add,20,10));
console.log(calculate(sub,20,10));
console.log(calculate(mul,20,10));
console.log(calculate(div,20,10));
