var g=prompt("Unesite godinu : ");

if(((g%4==0)&&(g%100!=0))||(g%400==0)) console.log("Prijestupna");
else console.log("Nije prijestupna");