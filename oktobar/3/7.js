function funkcija(niz){
    let parni=0;
    let neparni=0;
    for(let i=0;i<niz.length;i++)
        if(niz[i]%2==0)parni++;
        else neparni++;

    console.log("parni : " + parni);
    console.log("neparni : " + neparni);
    
}

funkcija([1,2,3,4,5,6,7,8,9]);