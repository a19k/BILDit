function obrniNiz(niz){

    let REVERSEniz=[];

    for(let i=0;i<niz.length;i++)REVERSEniz[i]=niz[niz.length-i-1];

    return REVERSEniz;

}


console.log(obrniNiz([1,2,3,4,5]));
