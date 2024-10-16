//Napiši funkciju koja prima niz brojeva i vraća najveću sumu dva uzastopna broja u nizu.

function najvecaSumaSusjednihElemenata(niz){
    let max=niz[0]+niz[1];
    let sum;
    for(let i=1;i<niz.length-1;i++){
        sum=niz[i]+niz[i+1];
        if(sum>max)max=sum;
    }

    return max;
}

console.log(najvecaSumaSusjednihElemenata([1, 2, 3, 10, 5]));
