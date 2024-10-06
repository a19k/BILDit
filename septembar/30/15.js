function brojDanaUMjesecu(godina,mjesec){
    let jePrijestupna;
    if(godina%4==0 || godina%400==0)
    jePrijestupna=true;
    else jePrijestupna=false;

    let dani=[31,28,31,30,31,30,31,31,30,31,30,31];

    if(mjesec==2 && jePrijestupna==true) return dani[mjesec-1]+1;
    else return dani[mjesec-1];
}

console.log(brojDanaUMjesecu(2024,2));
