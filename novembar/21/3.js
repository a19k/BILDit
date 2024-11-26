//foreach petlja


const arr=[1,2,3];


for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    console.log(e);
}

arr.forEach(function(e,i,arr) {
    console.log(e);
});