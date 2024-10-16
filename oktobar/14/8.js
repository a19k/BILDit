//Napiši funkciju koja prima 2D niz (matricu) i vraća minimalni i maksimalni element u matrici.


function minImax(matrica) {
    let min=matrica[0][0]
    let max=matrica[0][0];

    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++){
            if(matrica[i][j]<min)min=matrica[i][j];
            if(matrica[i][j]>max)max=matrica[i][j];
    }

    return [min,max];
}


let matrica = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];

console.log(minImax(matrica));
