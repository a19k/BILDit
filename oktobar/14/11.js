// Napiši funkciju koja traži određeni element u 2D matrici i vraća njegovo mjesto (red, kolona).


function pozicija(matrica,element) {
    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++)
            if(matrica[i][j]==element)return[i,j];
}


let matrica = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
let element = 5;

console.log(pozicija(matrica,element));
