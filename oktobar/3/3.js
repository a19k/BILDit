function jePalindrom(str){
    str=str.toLowerCase();

    let CLEANstr="";
    let REVERSEstr="";
    for(let i=0;i<str.length;i++)
        if(str[i]!=" " && str[i]!="." && str[i]!="," && str[i]!="!" && str[i]!="?")
            CLEANstr+=str[i];

    console.log(CLEANstr);
    
    for(i=CLEANstr.length-1;i>=0;i--)
        REVERSEstr+=CLEANstr[i];

    console.log(REVERSEstr);
    

    return CLEANstr==REVERSEstr;
}

console.log(jePalindrom("Ana voli Milovana."));
