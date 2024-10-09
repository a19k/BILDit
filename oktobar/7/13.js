function ukloniDuplikate(niz){
    for(let i=0;i<niz.length-1;i++)
        for(let j=i+1;j<niz.length;j++)
            if(niz[i]==niz[j])niz[j]=null;

    let noviNiz=[];
    for(let i=0;i<niz.length;i++)
        if(niz[i]!=null)noviNiz.push(niz[i]);

    return noviNiz;

}

console.log(ukloniDuplikate([1, 2, 3, 2, 4, 3, 5]));
