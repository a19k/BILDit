//Fibonaccijev niz do u opsegu

let broj = 1;
let prethodnik = 1;

let n = 42;

let pom;

while (broj + prethodnik < n) {
    console.log(broj);
    pom = broj;
    broj = broj + prethodnik;
    prethodnik = pom;
}

console.log(broj);