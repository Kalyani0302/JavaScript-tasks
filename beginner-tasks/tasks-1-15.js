// JavaScript Practical Tasks 1-15

// Task 1: Variables – Student Details
let studentName = "Anika";
const age = 19;
var course = "Web Development";
let mark = 88;
console.log("Task 1:", studentName, age, course, mark);

// Task 2: User Input
let inputName = prompt("Enter your name:");
let inputAge = prompt("Enter your age:");
console.log("Task 2: Name entered:", inputName);
alert("Task 2: Age entered: " + inputAge);

// Task 3: Data Types
let textValue = "Hello";
let numberValue = 42;
let booleanValue = true;
let undefinedValue;
let nullValue = null;
console.log("Task 3:", textValue, typeof textValue);
console.log("Task 3:", numberValue, typeof numberValue);
console.log("Task 3:", booleanValue, typeof booleanValue);
console.log("Task 3:", undefinedValue, typeof undefinedValue);
console.log("Task 3:", nullValue, typeof nullValue);

// Task 4: Array – Shopping List
let shoppingList = ["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"];
console.log("Task 4: First product:", shoppingList[0]);
console.log("Task 4: Third product:", shoppingList[2]);
console.log("Task 4: Last product:", shoppingList[shoppingList.length - 1]);
console.log("Task 4: Complete array:", shoppingList);

// Task 5: Object – Employee Details
let employee = {
  name: "Karan",
  age: 28,
  role: "Designer",
  salary: 45000
};
console.log("Task 5: Name:", employee.name);
console.log("Task 5: Age:", employee.age);
console.log("Task 5: Role:", employee.role);
console.log("Task 5: Salary:", employee.salary);

// Task 6: Arithmetic Operator – Bill Calculator
let productPrice = 500;
let quantity = 3;
let totalPrice = productPrice * quantity;
let discount = 100;
let finalAmount = totalPrice - discount;
console.log("Task 6: Total price:", totalPrice);
console.log("Task 6: Discount:", discount);
console.log("Task 6: Final amount:", finalAmount);

// Task 7: Comparison Operators
console.log("Task 7:", 25 > 20);
console.log("Task 7:", 15 < 10);
console.log("Task 7:", 50 == "50");
console.log("Task 7:", 50 === "50");
console.log("Task 7:", 100 != "100");
console.log("Task 7:", 100 !== "100");

// Task 8: Logical Operators
console.log("Task 8:", 10 > 5 && 20 > 15 || 5 > 10);
console.log("Task 8:", 10 < 5 || 20 >= 20 && 5 == "5");
console.log("Task 8:", 15 === "15" || 10 > 5 && 8 < 3);
console.log("Task 8:", 20 >= 20 && 5 !== "5" || 10 < 5);
console.log("Task 8:", 25 < 20 || 30 == "30" && 10 >= 10);

// Task 9: Ternary Operator – Login
let passwordCorrect = true;
console.log("Task 9:", passwordCorrect ? "Login successful" : "Invalid password");

// Task 10: Type Casting – Marks
let mark1 = "80";
let mark2 = "70";
let totalMarks = Number(mark1) + Number(mark2);
console.log("Task 10:", totalMarks);

// Task 11: Voting Eligibility
let voterAge = 20;
if (voterAge >= 18) {
  console.log("Task 11: You can vote");
} else {
  console.log("Task 11: You cannot vote");
}

// Task 12: Student Grade
let studentMark = 82;
if (studentMark >= 90 && studentMark <= 100) {
  console.log("Task 12: A Grade");
} else if (studentMark >= 75 && studentMark <= 89) {
  console.log("Task 12: B Grade");
} else if (studentMark >= 50 && studentMark <= 74) {
  console.log("Task 12: C Grade");
} else if (studentMark >= 0 && studentMark < 50) {
  console.log("Task 12: Fail");
} else {
  console.log("Task 12: Invalid Mark");
}

// Task 13: Time Greeting
let time = 15;
if (time >= 1 && time <= 6) {
  console.log("Task 13: Early Morning");
} else if (time >= 7 && time <= 12) {
  console.log("Task 13: Good Morning");
} else if (time >= 13 && time <= 15) {
  console.log("Task 13: Good Afternoon");
} else if (time >= 16 && time <= 19) {
  console.log("Task 13: Good Evening");
} else if (time >= 20 && time <= 24) {
  console.log("Task 13: Good Night");
} else {
  console.log("Task 13: Invalid Time");
}

// Task 14: Nested If – Job Eligibility
let candidateAge = 22;
let candidateHeight = 172;
let candidateWeight = 72;
if (candidateAge >= 21) {
  if (candidateHeight >= 170) {
    if (candidateWeight >= 70) {
      console.log("Task 14: Eligible for the job");
    } else {
      console.log("Task 14: Not eligible because weight is below 70 kg");
    }
  } else {
    console.log("Task 14: Not eligible because height is below 170 cm");
  }
} else {
  console.log("Task 14: Not eligible because age is below 21");
}

// Task 15: Switch – Traffic Light
let trafficLight = "green";
switch (trafficLight) {
  case "red":
    console.log("Task 15: Stop the vehicle");
    break;
  case "yellow":
    console.log("Task 15: Get ready");
    break;
  case "green":
    console.log("Task 15: Go");
    break;
  default:
    console.log("Task 15: Invalid traffic light");
}
