//Najveći broj uzastopnog ponavljanja neke cifre u broju

let n = "1111333333755";

let max = 0;
let br = 1;

for (let i = 0; i < n.length; i++) {
    for (let j = i; j < n.length; j++)
        if (n[j] == n[j + 1]) br++; else break;

    if (max < br) max = br;
    br = 1;
}

console.log(max);
