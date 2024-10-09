function filtrirajRijeci(niz,n){
    let noviNiz=[];
    for(let i=0;i<niz.length;i++)
        if(niz[i].length>n)noviNiz.push(niz[i]);

    return noviNiz;
}


console.log(filtrirajRijeci(["123","1234","1","1234567"],3));
