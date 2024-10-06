function jePrijestupna(n){
    if(n%400==0 || n%4==0) return "prijestupna";
    else return "nije prijestupna";
}

console.log(jePrijestupna(2000));
