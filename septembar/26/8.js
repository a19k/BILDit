//Armstongov broj

let n = 9474;

let s = String(Math.abs(n));

let sum = 0;

for (let i = 0; i < s.length; i++) {sum += s[i] ** s.length; }


if (n == sum) console.log("Armstrongov broj");
else console.log("Nije armstrongov broj");
