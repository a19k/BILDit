//Napiši funkciju koja prima string i vraća broj riječi koje počinju velikim slovom.

function rijeciPocinjuSa(niz,slovo){
    let rijeciKojePocinjuSlovom=[];
    for(let i=0;i<niz.length;i++)
        if(niz[i][0]===slovo)rijeciKojePocinjuSlovom.push(niz[i]);

    return rijeciKojePocinjuSlovom;
}


console.log(rijeciPocinjuSa(["mačka", "pas", "slon", "miš"], "m"));
