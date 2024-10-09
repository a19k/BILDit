function inicijali(str){

    let inicijali="";

    str=str.trim();

    for(let i=0;i<str.length;i++)
        if(i==0 || str[i-1]===" ")inicijali+=str[i]+".";

    inicijali.toUpperCase();
    return inicijali;
}

console.log(inicijali("Anis Karić "));
