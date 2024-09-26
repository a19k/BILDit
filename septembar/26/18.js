//Broj palindromskih brojeva u opsegu
//u zadatku piše da je odgovor 22 međutim provjerio sam i ima 9 palidroma u formatu XX(npr.44) i 10 palidndroma u formatu 1X1(npr.121)
//https://en.wikipedia.org/wiki/Palindromic_number

let n = "";
let n2 = "";
let br = 0;

for (let i = 10; i <= 200; i++) {
    n = String(i);
    for (let j = n.length - 1; j >= 0; j--) n2 += n[j];
    if (n == n2) br++;
    n2 = "";
}

console.log(br);
