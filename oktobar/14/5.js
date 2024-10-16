// Napiši funkciju koja prima 2D niz (matricu) i vraća niz u kojem je svaki element zbir elemenata po kolonama matrice.


function zbirMatricePoKolonama(matrica) {
    let zbir=[];
    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++)
            if(zbir[j]===undefined)zbir[j]=matrica[i][j];
            else zbir[j]+=matrica[i][j];

    return zbir;
}


let matrica = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(zbirMatricePoKolonama(matrica));
