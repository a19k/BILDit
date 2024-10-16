//Napiši funkciju koja prima niz brojeva i sve nule pomiče na kraj niza, zadržavajući redoslijed ostalih elemenata.

function funkcija(niz){
    let noviNiz=[];
    let br=0;
    for(let i=0;i<niz.length;i++){
        if(niz[i]===0)br++;
        else noviNiz.push(niz[i]);
    }
    for(i=0;i<br;i++) noviNiz.push(0);

    return noviNiz;
}


console.log(funkcija([0, 1, 0, 3, 12]));
