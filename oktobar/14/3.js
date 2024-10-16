//Napiši funkciju koja prima 2D niz (matricu) i vraća zbir svih elemenata u toj matrici.


function sumaMatrice(matrica) {
    let sum=0;
    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++)
            sum+=matrica[i][j];


    return sum;
}



let matrica = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(sumaMatrice(matrica));
