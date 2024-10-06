function funkcija(matrica){
    let sum=0;
    for(let i=0;i<matrica.length;i++)
        for(let j=0;j<matrica[i].length;j++)
            sum+=matrica[i][j];
    
    return sum;
}

let matrica=[[1,2,3,4],[2,3,4],[3,4]];

console.log(funkcija(matrica));
