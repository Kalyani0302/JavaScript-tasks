// Task 12: Eligibility Function
function checkEligibility(age, height, weight) {
  if (age >= 21 && height >= 170 && weight >= 70) {
    return "Eligible";
  } else {
    return "Not eligible";
  }
}

console.log(`Task 12: checkEligibility(25, 175, 75) = ${checkEligibility(25, 175, 75)}`);
console.log(`Task 12: checkEligibility(20, 165, 65) = ${checkEligibility(20, 165, 65)}`);
console.log(`Task 12: checkEligibility(22, 172, 68) = ${checkEligibility(22, 172, 68)}`);
