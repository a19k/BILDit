// moj foreach


function mojForEach(callback, arr) {
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        callback(e, i, arr);
    }
}


const arr = [1, 2, 3];


mojForEach(function (e, i, arr) {
    console.log(e);
}, arr)