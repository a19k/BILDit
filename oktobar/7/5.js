function nadjiIndeks(niz,n){
    for(let i=0;i<niz.length;i++) if(niz[i]===n)return i;
    return -1;
}

console.log(nadjiIndeks([2,5,12,-32,3,-1,8],3));
