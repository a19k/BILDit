var sum = 0;
var i = 0;

while ((sum % 50 != 0) || (sum == 0)) {
    i++;
    if (i % 2 == 0) { continue; }
    else { sum += i; }
}

console.log(sum);