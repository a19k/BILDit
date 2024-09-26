//Ponavljanje cifara

let n = "1337";

for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++)
        if (n[i] == n[j]) {
            console.log("Cifra " + n[i] + " se ponavlja");
            return 0;
        }
}

console.log("Cifre se ne ponavljaju");