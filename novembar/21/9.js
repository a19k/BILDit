//reduce

const arr=[1,2,3,4,5];

console.log(arr.reduce(function(previous,current,i,arr) {
    console.log(current,previous);
}));
