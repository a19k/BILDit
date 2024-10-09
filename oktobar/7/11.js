function zamijeniSamoglasnike(str){
    let str2="";
    for(let i=0;i<str.length;i++)
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u") str2+="*";
        else str2+=str[i];

    return str2;
}

console.log(zamijeniSamoglasnike("javascript"));
