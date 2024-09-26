//Savršen broj

let n = 496;
let sum = 0;

for (let i = 1; i < n; i++) if (n % i == 0) sum += i;

if (sum == n) console.log(n + " je savršen broj");
else console.log(n + " nije savršen broj");