//Napiši funkciju koja prima niz i provjerava da li svi elementi u nizu imaju istu vrijednost.

function sviIsti(niz){

    for(let i=0;i<niz.length;i++)   if(niz[i]!=niz[0])  return false;

    return true;
}


console.log(sviIsti([5, 5, 5, 5, 5, 5]));
