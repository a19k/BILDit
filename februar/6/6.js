/*Napiši funkciju spojiDuplikate(niz), koja zbraja uzastopne duplikate u nizu i smanjuje niz.

Ulaz:

console.log(spojiDuplikate([2, 2, 3, 3, 3, 4]));
console.log(spojiDuplikate([1, 1, 1, 2, 2, 3]));

Izlaz: 

[4, 9, 4]
[3, 4, 3]
*/


const spojiDuplikate=(niz)=>{
    let compressedArr=[];
    let current;
    niz.reduce((acc,e,i,arr)=>{
        console.log(acc);
        
        if(e===current){
            acc+=e;
            if(i===arr.length-1)compressedArr.push(acc);
            else return acc
        }

        if(i!==0)compressedArr.push(acc);
        if(i===arr.length-1)compressedArr.push(e);
        
        current=e;
        return e;
    },0)

    return compressedArr;
}


console.log(spojiDuplikate([2, 2, 3, 3, 3, 4]));
console.log(spojiDuplikate([1, 1, 1, 2, 2, 3]));