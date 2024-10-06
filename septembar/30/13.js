function saberiCifre(n){
    n=""+n;
    let sum=0;
    for(let i=0;i<n.length;i++)
        sum+=+n[i];
    return sum;
}

console.log(saberiCifre(1234));
