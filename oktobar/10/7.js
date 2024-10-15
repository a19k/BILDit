// Napiši funkciju koja prima string i vraća prosječnu dužinu riječi u tom stringu.


function prosjecnaDuzinaRijeci(str){
    let br=0;
    let avg=[];
    str=str.trim();
    for(let i=0;i<=str.length;i++){
        if(str[i]==" " || i==str.length){avg.push(br);br=0;}
        else br++;
    }

    let sum=0;
    for(let i=0;i<avg.length;i++)sum+=avg[i];

    return sum/avg.length;
}


console.log(prosjecnaDuzinaRijeci("JavaScript je najbolja"));
