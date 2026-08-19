// Task 14: Find Maximum
let numbers = [10, 45, 23, 89, 12, 67];

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(`Task 14: Numbers: ${numbers}`);
console.log(`Task 14: Maximum number: ${max}`);

// Alternative using Math.max
const maxAlternative = Math.max(...numbers);
console.log(`Task 14: Maximum (using Math.max): ${maxAlternative}`);
