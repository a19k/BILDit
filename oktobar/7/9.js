function zbirParnihIndeksa(niz){
    let sum=0;
    for(let i=1;i<niz.length;i++)
        if(i%2==0) sum+=niz[i];

    return sum;
}

console.log(zbirParnihIndeksa([1,2,3,4,5]));
