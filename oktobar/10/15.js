// Napiši funkciju koja prima string i karakter, i vraća broj pojavljivanja tog karaktera u stringu.

function brojPojavljivanja(str,slovo){
    let br=0;
    for(let i=0;i<str.length;i++)
        if(str[i]==slovo)br++;

    return br;
}


console.log(brojPojavljivanja("JavaScript je zabavna", "a"));
