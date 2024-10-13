// Napiši funkciju koja prima niz i string, i provjerava da li niz sadrži dati string.

function sadrziString(niz,str){
    for(let i=0;i<str.length;i++)
        if(niz[i]==str) return true;

    return false;
}


console.log(sadrziString(["JavaScript", "Python", "Java"], "Python"));
