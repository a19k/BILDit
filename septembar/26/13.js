//Najmanji Zajednički Sadržilac
//postavka zadatka govori o najmanjem zajedničkom djeliocu , ali se iz primjera vidi da je riječ o NZS
//najmanji zajednički djelilac pozivnih cijelih brojeva je uvijek 1...

let a = 8, b = 178;
let nzs;

for (let i = a; i <= a * b; i += a)
    if (i % b == 0) { nzs = i; break; }
console.log(nzs);