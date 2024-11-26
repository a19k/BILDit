//moj filter


function mojFilter(callback, arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (callback(e, i, arr))
            filteredArr.push(e);
    }

    return filteredArr;
}


const arr = [1, 2, 3, 4, 5];

console.log(mojFilter(function (e, i, arr) { return e < 4 }, arr));
