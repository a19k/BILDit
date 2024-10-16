//Napiši funkciju koja prima 2D niz (matricu) i vraća niz u kojem je svaki element zbir elemenata tog reda matrice.

function zbirMatricePoRedovima(matrica) {
    let zbir=[];
    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++)
            if(zbir[i]===undefined) zbir[i]=matrica[i][j];
            else zbir[i]+=matrica[i][j];

    return zbir;
}



let matrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(zbirMatricePoRedovima(matrica));
