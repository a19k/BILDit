function najmanjiBroj(niz){
    let min=null;
    for(let i=0;i<niz.length;i++)
        if(min==null || min>niz[i])min=niz[i];

    return min;
}


console.log(najmanjiBroj([34, 15, 88, 2,42,-124]));
