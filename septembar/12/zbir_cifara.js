var x=prompt("Unesite trocifreni broj");
x=Number(x);

var s=Math.floor(x/100);
var d=Math.floor((x%100)/10);
var j=x%10;

var zbir=s+d+j;

console.log(s);
console.log(d);
console.log(j);

if(x%zbir==0)console.log("Broj je djeljiv sa zbirom cifara("+zbir+").");
else console.log("Broj nije djeljiv sa zbirom cifara("+zbir+").");