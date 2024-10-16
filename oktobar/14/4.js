//Napiši funkciju koja prima 2D niz (matricu) i vraća najveći element iz te matrice.

function maxUMatrici(matrica) {
    let max;
    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++)
            if(max===undefined || max<matrica[i][j])max=matrica[i][j];

    return max;
}


let matrica = [
	[1, 2, 3],
	[7, 5, 6],
	[4, 8, 9]
];

console.log(maxUMatrici(matrica));
