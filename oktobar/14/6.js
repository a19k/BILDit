//Napiši funkciju koja prima kvadratnu matricu i vraća zbir elemenata na glavnoj dijagonali 
//(elementi na pozicijama gdje su indeksi redova i kolona jednaki).


function zbirElemenataNaDijagonali(matrica) {
    let sum=0;

    for(let i=0;i<matrica.length;i++)
        sum+=matrica[i][i];

    return sum;
}


let matrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(zbirElemenataNaDijagonali(matrica));
