// Task 6 — Shopping Cart
const products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
const prices = [50000, 1000, 2000, 15000];
let totalCost = 0;

for (let index = 0; index < products.length; index++) {
  console.log(`${products[index]} - ₹${prices[index]}`);
  totalCost += prices[index];
}

console.log(`Task 6: Total = ₹${totalCost}`);
