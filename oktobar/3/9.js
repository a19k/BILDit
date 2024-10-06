function generisiProsteBrojeve(n){
    let prosti=[];
    let jeProst=true;

    for(let i=2;i<=n;i++){
        jeProst=true;
        for(let j=i-1;j>1;j--)
            if(i%j==0){jeProst=false;break;}

        if(jeProst==true)prosti.push(i);
    }

    return prosti;
}


console.log(generisiProsteBrojeve(10));