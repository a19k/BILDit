function djeljiviSaPetIliTri(n){

    let djeljivi=[];

    for(let i=1;i<n;i++) if(i%3==0 || i%5==0) djeljivi.push(i);

    return djeljivi;
}


console.log(djeljiviSaPetIliTri(10));
