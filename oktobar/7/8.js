function jePalindrom(niz){
    for(let i=0;i<niz.length;i++){
        if(niz[i]!=niz[niz.length-i-1])return false;
    }

    return true;
}

console.log(jePalindrom([1,2,3,5,3,2,2]));
