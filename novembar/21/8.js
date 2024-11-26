// moj map

Array.prototype.mojMap=function(callback) {
    const finalMap=[];
    for (let i = 0; i < this.length; i++) {
        const e = this[i];
        finalMap.push(callback(e,i,this));
    }

    return finalMap;
}

const arr=[1,2,3,4,5];

console.log(arr.mojMap(function(e,i,arr) {
    return e+2;
}));

