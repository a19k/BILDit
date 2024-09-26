//Broj cifara broja

let n = "-12345678";
let br = 1;

n = Math.abs(n);

while (n > 9) {
    br++;
    n = n / 10;
}

console.log(br);