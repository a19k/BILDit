// Napiši funkciju koja prima niz i separator, te vraća string koji sadrži sve elemente niza spojene separatorom.

function spojiSaSeparatorom(niz,separator){
    let spojeno="";
    for(let i=0;i<niz.length;i++)
        if(i==niz.length-1) spojeno+=niz[i];
        else spojeno+=niz[i]+separator;

    return spojeno;
}

console.log(spojiSaSeparatorom(["Java", "Script", "je", "zanimljiv"], "-"));
