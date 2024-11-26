//moj reduce


Array.prototype.mojReduce = function(callback) {
    let value;
    for (let i = 1; i < this.length; i++) {
        if(value===undefined)
            value=this[0]
        value=callback(value,this[i],i,this);
    }

    return value;
}


const arr=[1,2,3,4,5];

console.log(arr.mojReduce(function(previous,current,i,arr) {
    return current * previous;
}));

console.log(arr.reduce());

