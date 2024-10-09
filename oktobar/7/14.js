function spojiISortiraj(niz1,niz2){

    let niz3=[];
    
    for(let i=0;i<niz1.length;i++) 
        niz3.push(niz1[i]);

    for(i=0;i<niz2.length;i++)
        niz3.push(niz2[i]);

    let temp;
    for(i=0;i<niz3.length-1;i++)
        for(j=i+1;j<niz3.length;j++)
            if(niz3[i]>niz3[j]){temp=niz3[i];niz3[i]=niz3[j];niz3[j]=temp;}

    return niz3;
}

console.log(spojiISortiraj([3,12],[1,4,5,125,35,0]));
