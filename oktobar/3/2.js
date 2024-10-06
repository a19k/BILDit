function najduzaRijec(str){
    let br=0;
    let zadnjeSlovo;
    let max=0;

    for(let i=0;i<str.length;i++){
        if(str[i]!=" ")br++;
        else if(max<br){
            max=br;
            br=0;
            zadnjeSlovo=i-1;
        }
        else br=0;
    }

    let noviStr="";
    for(i=zadnjeSlovo;i>zadnjeSlovo-max;i--) noviStr=str[i]+noviStr;

    return noviStr;
}

console.log(najduzaRijec("Ovo je najduža riječ u stringu"));
