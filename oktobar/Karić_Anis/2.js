//proizvod cifara

function proizvodCifara(broj) {
    let cifre=[];
    let proizvod=1;
    while(broj>0){
        cifre.unshift(broj%10);
        broj=Math.round(broj/10);
    }

    for(let i=0;i<cifre.length;i++)
        proizvod*=cifre[i];

    return proizvod;
}

console.log(proizvodCifara(341));
