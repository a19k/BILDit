//string->boolean->number->string

let x="0";
console.log(x);//"0"

x=Boolean(x);
console.log(x);//true

x=Number(x);
console.log(x);//1

x=String(x);
console.log(x);//"1"wtf


console.log(null==0);//false
console.log(null>0);//false
console.log(null>=0);//true