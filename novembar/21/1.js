//High-order function - prima drugu funkciju ili je vraća

function saberi(fun, a, b) {
    const rez = fun(a, b);

    return rez;
}


function rezultat(a, b) {
    return a + b;
}


console.log(saberi(rezultat, 5, 2));
