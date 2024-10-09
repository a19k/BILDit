function strogoRastuci(niz){

    for(let i=0;i<niz.length-1;i++) if(niz[i]>=niz[i+1])return false;

    return true
}

console.log(strogoRastuci([1,2,3,4]));
