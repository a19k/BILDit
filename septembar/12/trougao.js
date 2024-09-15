var a=prompt("Unesi prvu stranicu trougla");
var b=prompt("Unesi drugu stranicu trougla");
var c=prompt("Unesi treću stranicu trougla");

if((a+b>c)||(a+c>b)||(b+c>a)){
    if(a==b && b==c) console.log("Jednakostranični");
    else if(a==b || a==c || b==c) console.log("Jednakokraki");
    else console.log("Raznostranični");
}
else console.log("Trougao ne može biti formiran!");