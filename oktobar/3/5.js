function parniBrojevi(niz){
    let parni=[];

    for(let i=0;i<niz.length;i++) if(niz[i]%2==0)parni.push(niz[i]);

    return parni;
}

console.log(parniBrojevi([1,2,3,4,5,6,7,8,9]));
