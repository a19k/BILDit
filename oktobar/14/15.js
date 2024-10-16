//Napiši funkciju koja izračunava srednju vrijednost (prosjek) elemenata u svakom redu 2D matrice i vraća niz tih srednjih vrijednosti.


function prosjekPoRedu(matrica) {
    let prosjek=[];
    let sum=0;

    for(let i=0;i<matrica.length;i++){
        for(let j=0;j<matrica[i].length;j++) sum+=matrica[i][j];
        prosjek[i]=sum/matrica[i].length;
        sum=0;
    }

    return prosjek;
}


let matrica = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(prosjekPoRedu(matrica));
