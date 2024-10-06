function funkcija(niz){
    let sum=0;
    for(let i=0;i<niz.length;i++)
        sum+=niz[i];

    return sum;
}

console.log(funkcija([10,20,30,40]));