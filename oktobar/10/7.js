// Napiši funkciju koja prima string i vraća prosječnu dužinu riječi u tom stringu.


function prosjecnaDuzinaRijeci(str){
    let br=0;
    let max=0;
    str=str.trim();
    for(let i=0;i<str.length;i++){
        if(str[i]==" " && max<br){max=br;br=0;}
        else if(str[i]==" ")br=0;
        else br++;
    }

    return max;
}


console.log(prosjecnaDuzinaRijeci("JavaScript je najbolja"));
