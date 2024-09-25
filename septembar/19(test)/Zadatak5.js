var n = 0;
for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        if (i > j) { console.log("prva petlja"); n++; }
        if (i < j) console.log("druga petlja");
        if (i == j) console.log(i);
    }
}

console.log(n);