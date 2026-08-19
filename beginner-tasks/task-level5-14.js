// Task 13: Shopping Cart
let cart = ["Laptop", "Mouse", "Keyboard"];

console.log("Task 13: Initial cart:", cart);

// Add "Monitor"
cart.push("Monitor");
console.log("Task 13: After adding Monitor:", cart);

// Remove "Mouse"
const mouseIndex = cart.indexOf("Mouse");
if (mouseIndex > -1) {
  cart.splice(mouseIndex, 1);
}
console.log("Task 13: After removing Mouse:", cart);

// Add "Headset" at the beginning
cart.unshift("Headset");
console.log("Task 13: After adding Headset at beginning:", cart);

// Remove the last item
cart.pop();
console.log("Task 13: After removing last item:", cart);

console.log("Task 13: Final cart:", cart);
