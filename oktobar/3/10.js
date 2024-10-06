function zbirParnih(niz){
    let sum=0;

    for(let i=0;i<niz.length;i++) if(niz[i]%2==0) sum+=niz[i];

    return sum;
}

console.log(zbirParnih([1,2,3,4,5,6]));
