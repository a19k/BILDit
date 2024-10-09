function veciOd(kandidati,n){

    let veci=[];

    for(let i=0;i<kandidati.length;i++)
        if(n<kandidati[i]) veci.push(kandidati[i])

    return veci;
}

console.log(veciOd([1,24,21,3,325,13],15));
