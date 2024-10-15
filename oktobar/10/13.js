// Napiši funkciju koja prima string i slovo, i vraća broj reči koje počinju tim slovom.

function brojRijeciPoPrvomSlovu(str,slovo){
    str=str.trim();
    let br=0;

    for(let i=-1;i<str.length;i++){
        if((i==-1 || str[i]==" ") && str[i+1].toLowerCase()==slovo)br++;
    }

    return br;
}

console.log(brojRijeciPoPrvomSlovu("Java je popularan programerski jezik", "j"));
