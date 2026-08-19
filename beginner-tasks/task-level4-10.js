const { readInput } = require("./input");

// Task 9: OTP System
(function task9() {
  const correctOTP = 1234;
  let attempts = 0;
  let isVerified = false;

  while (attempts < 3) {
    const otp = Number(readInput(`Enter OTP (Attempt ${attempts + 1}):`));
    attempts += 1;

    if (otp === correctOTP) {
      console.log("Task 9: OTP verified");
      isVerified = true;
      break;
    } else {
      console.log(`Task 9: Try again`);
    }
  }

  if (!isVerified) {
    console.log("Task 9: Account blocked");
  }
})();
