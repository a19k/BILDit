//  Napiši funkciju koja prima string i vraća broj riječi u tom stringu.

function brojRijeci(str){
    let br=0;
    for(let i=0;i<str.length;i++)
        if(str[i]==" ")br++;

    return br+1;
}

console.log(brojRijeci("JavaScript je jako zabavan jezik"));
