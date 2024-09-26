//Obrnute cifre broja

let n = "1234";
let n2 = "";

for (let i = n.length - 1; i >= 0; i--) {
    n2 += n[i];
}

console.log(n2);