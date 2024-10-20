

function hailstone(n) {
    do{
        console.log(n);
        
        if(n%2==0)n=n/2;
        else n=(3*n)+1;
    }
    while(n!=1)

    console.log(n);
}

let n=256;

console.log("Hailstone sekvenca za broj"+n+" je : ");
hailstone(n);
