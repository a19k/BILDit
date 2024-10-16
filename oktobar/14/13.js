//Napiši funkciju koja broji ukupan broj elemenata u 2D matrici.

function brojElemenata(matrica) {
    let n=0;
    for(let i=0;i<matrica.length;i++)
        n+=matrica[i].length;

    return n;
}


let matrica = [
	[1, 2],
	[3, 4],
	[5, 6]
];

console.log(brojElemenata(matrica));
