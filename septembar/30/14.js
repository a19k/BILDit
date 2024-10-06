function najveciBroj(a,b,c){
    if(a>b && a>c)return a;
    else if(b>a && b>c)return b;
    else if(c>a && c>b)return c;
}

console.log(najveciBroj(4,213,-32));
