//Suma prvih n brojeva u fibonaccievom nizu

let broj = 1;
let prethodnik = 1;

let n = 7;

let pom;

let br = 1;
let sum = 0;

while (br <= n) {
    sum += broj;
    pom = broj;
    broj = broj + prethodnik;
    prethodnik = pom;
    br++;
}

console.log(sum);