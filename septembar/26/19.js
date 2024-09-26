//Kvadratna tabela n*n

let n = 5;

let s = "";

for (let i = 1; i <= n; i++) {
    s = "";
    for (let j = 1; j <= n; j++)
        s += i * j + " ";
    console.log(s);
}