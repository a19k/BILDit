//High-order function - prima drugu funkciju ili je vraća

function saberi(fun, a, b) {
    return fun(a, b);
}


console.log(saberi(function (a, b) { return a + b; }, 5, 2));
