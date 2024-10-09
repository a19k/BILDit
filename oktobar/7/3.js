function prvihParnih(n){

    let parni=[];
    let j=0;
    for(let i=1;i<n;i++){
        if(i%2==0){parni[j]=i;j++}
    }

    return parni;
}

console.log(prvihParnih(10));
