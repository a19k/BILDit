
let Math={
    apsolutnaVrijednost(broj){
        if(broj<0)
        return -broj;
        else return broj;
    },
    stepenuj(broj,stepen){
        return broj**stepen;
    },
    veciBroj(a,b){
        if(a>b)return a;
        else if(b>a)return b;
        else return null;
    },
    manjiBroj(a,b){
        if(a<b)return a;
        else if(b<a)return b;
        else return null;
    }
};

console.log(Math.apsolutnaVrijednost(-15.7));
console.log(Math.stepenuj(2,4));
console.log(Math.veciBroj(2,4));
console.log(Math.manjiBroj(2,4));



