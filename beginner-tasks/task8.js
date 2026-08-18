// Task 8 — Bank Account Functions
function deposit(balance, amount) {
  const updatedBalance = balance + amount;
  console.log(`Deposited: ₹${amount}`);
  return updatedBalance;
}

function withdraw(balance, amount) {
  const updatedBalance = balance - amount;
  console.log(`Withdrawn: ₹${amount}`);
  return updatedBalance;
}

function checkBalance(balance) {
  console.log(`Current Balance: ₹${balance}`);
  return balance;
}

let accountBalance = 10000;
accountBalance = deposit(accountBalance, 5000);
accountBalance = withdraw(accountBalance, 2000);
checkBalance(accountBalance);
