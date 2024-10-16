// Napiši funkciju koja prima 2D niz (matricu) i broj. Vraća niz svih elemenata koji su veći od zadatog broja.


function matricaVećiOd(matrica,n) {
    let niz=[];
    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++)
            if(matrica[i][j]>n) niz.push(matrica[i][j]);

    return niz;
}

let matrica=[
    [1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

let n=5;

console.log(matricaVećiOd(matrica,n));
