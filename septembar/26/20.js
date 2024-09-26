//Simetrični brojevi u opsegu
//navodno(internet, a i sudeći po datim primjerima) simetrčni brojevi su brojevi koji su isti i kada se čitaju unazad
//što znači isto što i palindromski brojevi???

let n = "";
let n2 = "";

for (let i = 1; i <= 10000; i++) {
    n = String(i);
    for (let j = n.length - 1; j >= 0; j--) n2 += n[j];
    if (n == n2) console.log(n);
    n2 = "";
}