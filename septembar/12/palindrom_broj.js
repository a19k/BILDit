console.log("Unesite trocifren broj");
var n=prompt();

var x=Math.floor(n/100);
var y=n%10;

if(x==y) console.log("Palindrom");
else console.log("Nije palindrom");