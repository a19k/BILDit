//Savršeni brojevi u opsegu

let n = 1337;
let sum;

for (let i = 1; i < n; i++) {

    sum = 0;

    for (let j = 0; j < i; j++)if (i % j == 0) sum += j;

    if (i == sum) console.log(i);

}