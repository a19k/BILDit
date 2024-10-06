function kvadridajNiz(niz){
    let kvadratniNiz=[];

    for(let i=0;i<niz.length;i++) kvadratniNiz.push(niz[i]**2);

    return kvadratniNiz;
}


console.log(kvadridajNiz([1,2,3,4]));
