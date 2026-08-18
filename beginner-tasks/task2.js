const { readInput } = require("./input");

(function task2() {
  const balance = 10000;
  const amount = Number(readInput("Enter withdrawal amount:"));

  if (amount <= 0) {
    console.log("Task 2: Amount must be greater than 0");
    return;
  }

  if (amount > balance) {
    console.log("Task 2: Insufficient balance");
    return;
  }

  if (amount % 100 !== 0) {
    console.log("Task 2: Withdrawal amount should be a multiple of 100");
    return;
  }

  const remainingBalance = balance - amount;
  console.log("Task 2: Withdrawal successful");
  console.log(`Task 2: Remaining balance: ₹${remainingBalance}`);
})();
