// Task 5 — Number Pattern
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let j = 5;
while (j >= 1) {
  console.log(j);
  j -= 1;
}

let k = 1;
let patternLine = "";
do {
  patternLine += k + (k < 5 ? " " : "");
  k += 1;
} while (k <= 5);
console.log(patternLine);
