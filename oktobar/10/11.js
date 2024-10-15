// Napiši funkciju koja prima string i vraća novi string koji sadrži samo prvo slovo svake riječi.

function prvoSlovoSvakeRijeci(str){
    let str2="";
    for(let i=-1;i<str.length;i++)
        if(i==-1 || str[i]==" ")str2+=str[i+1];

    return str2;
}

console.log(prvoSlovoSvakeRijeci("JavaScript je najbolji jezik"));
