//Napiši funkciju koja prima string i zamjenjuje svaki samoglasnik (a, e, i, o, u) njegovim rednim brojem u stringu. 

function brojVelikihRijeci(str){

    let br=0;

    for(let i=-1;i<str.length;i++){
        if((i==-1 || str[i]==" ") && str[i+1]>="A" && str[i+1]<="Z") {br++;console.log(i);}
    }

    return br;
}


console.log(brojVelikihRijeci("Ovo Je Test za JavaScript"));
