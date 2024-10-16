//Napiši funkciju koja pronalazi broj pojavljivanja određenog elementa u 2D matrici.

function brojPojavljivanjaUMatrici(matrica,element) {
    let br=0;

    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++)
            if(matrica[i][j]===element) br++;


    return br;        
}


let matrica = [
	[1, 2, 3],
	[4, 2, 2],
	[5, 2, 6]
];

let element = 2;

console.log(brojPojavljivanjaUMatrici(matrica,element));
