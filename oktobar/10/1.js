//Napiši funkciju koja prima string i vraća akronim tako što uzima prvo veliko slovo svake riječi u stringu.


function akronim(str){
    let akronim="";

    for(let i=0;i<str.length;i++)
        if(str[i]>='A' && str[i]<='Z') akronim+=str[i];

    return akronim;
}

console.log(akronim("JavaScript Object Notation"));
