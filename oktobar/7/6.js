function jeAritmetickiNiz(niz){

    let razlika;
    let k;

    if(niz[0]>niz[1])
        {razlika=niz[0]-niz[1];k=-1;}
    else if(niz[0]<niz[1])
        {razlika=niz[1]-niz[0];k=1;}
    else 
        {razlika=0;k=0;}

    let n_clan=niz[0];
    for(let i=1;i<niz.length;i++){
        n_clan+= razlika*k;
        if(n_clan!=niz[i])return false;
    }

    return true;
}

console.log(jeAritmetickiNiz([2,2,2,2]));
