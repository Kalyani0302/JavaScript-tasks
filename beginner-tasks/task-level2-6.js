const { readInput } = require("./input");

// Task 5: Login System
(function task5() {
  const correctUsername = "admin";
  const correctPassword = "1234";

  const username = readInput("Enter username:");
  const password = readInput("Enter password:");

  if (username === correctUsername && password === correctPassword) {
    console.log("Task 5: Login successful");
  } else if (username !== correctUsername && password === correctPassword) {
    console.log("Task 5: Invalid username");
  } else if (username === correctUsername && password !== correctPassword) {
    console.log("Task 5: Invalid password");
  } else {
    console.log("Task 5: Invalid credentials");
  }
})();
