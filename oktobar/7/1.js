function brojRijeci(str){
    br=0;
    str=str.trim();
    for(let i=0;i<str.length;i++)
        if(str[i]===" ")br++;

    if(str!="")br++;

    return br;
}

console.log(brojRijeci("Dobar dan svimaa "));
