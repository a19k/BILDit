//Piramida brojeva

let n = 5;
let s;

for (let i = 1; i <= n; i++) {
    s = "";
    for (let j = 1; j <= i; j++) s += j;
    console.log(s);
}