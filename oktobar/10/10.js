// Napiši funkciju koja prima string i vraća string u snake_case formatu (sva slova su mala, a riječi su odvojene donjom crtom).

function uSnakeCase(str){
    let snake_str="";
    for(let i=0;i<str.length;i++){
        if(str[i]!=" ")snake_str+=str[i].toLowerCase();
        else snake_str+="_";
    }

    return snake_str;
}

console.log(uSnakeCase("JavaScript je sjajan jezik"));
