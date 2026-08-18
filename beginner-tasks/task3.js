const { readInput } = require("./input");

(function task3() {
  const correctUsername = "admin";
  const correctPassword = "12345";
  let attempts = 0;
  let isLoggedIn = false;

  while (attempts < 3) {
    attempts += 1;
    const username = readInput(`Username (Attempt ${attempts}):`);
    const password = readInput(`Password (Attempt ${attempts}):`);

    if (username === correctUsername && password === correctPassword) {
      console.log("Task 3: Login successful");
      isLoggedIn = true;
      break;
    }

    console.log(`Task 3: Attempt ${attempts} → wrong`);
  }

  if (!isLoggedIn) {
    console.log("Task 3: Account locked");
  }
})();
