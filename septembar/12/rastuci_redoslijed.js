console.log("Unesi prvi broj");
var a=prompt();

console.log("Unesi drugi broj");
var b=prompt();

console.log("Unesi treći broj");
var c=prompt();

a=Number(a);
b=Number(b);
c=Number(c);

var max=0;
var mid=0;
var min=0;

console.log(max);

if(a>b && a>c){
    max=a;
    console.log("Prvi uslov :"+max);
        
    if(b>c)
    {mid=b;
    min=c;}
    else
    {mid=c;
    min=b;}
    console.log("Prvi uslov :"+max)
    }
if(b>a && b>c){
    max=b;
        
    if(a>c)
    {mid=a;min=c;}
    else
    {mid=c;min=a;}
    console.log("Drugi uslov :"+max)
    }
if(c>a && c>b){
    max=c;
        
    if(a>b)
    {mid=a;
    min=b;}
    else
    {mid=b;
    min=a};
    console.log("treci uslov :"+max)
    }

console.log(min);
console.log(mid);
console.log(max);