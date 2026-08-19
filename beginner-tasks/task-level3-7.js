const { readInput } = require("./input");

// Task 6: ATM Withdrawal
(function task6() {
  let balance = 10000;
  const amount = Number(readInput("Enter withdrawal amount:"));

  if (amount <= 0) {
    console.log("Task 6: Amount must be greater than 0");
  } else if (amount > balance) {
    console.log("Task 6: Amount cannot exceed balance");
  } else if (amount % 100 !== 0) {
    console.log("Task 6: Amount must be a multiple of ₹100");
  } else {
    balance -= amount;
    console.log("Task 6: Withdrawal successful");
    console.log(`Task 6: Remaining balance: ₹${balance}`);
  }
})();
