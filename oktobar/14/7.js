//Napiši funkciju koja prima 2D niz (matricu) i vraća  broj parnih i neparnih brojeva u matrici.

function brojParnihINeparnihUMatrici(matrica) {
    let parni=0;
    let neparni=0;

    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++)
            if(matrica[i][j]%2===0)parni++;
            else neparni++;

    return [parni,neparni];
}


let matrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(brojParnihINeparnihUMatrici(matrica));
