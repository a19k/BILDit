//ispisuje duplikate u nizu

let niz = [1, 2, 2, 2, 4, 7, 8, 9, 9, 2, 3, 4, 1]
let duplikati = [];
let duplikatiBezDuplikata = [];


let br = 0;

for (let i = 0; i < niz.length - 1; i++) {
    br = 1;

    for (let j = i + 1; j < niz.length; j++)
        if (niz[i] == niz[j]) br++;

    for (j = 0; j < duplikati.length || duplikati.length == 0; j++) {
        if (niz[i] == duplikati[j]) break;
        else if (br > 1) { duplikati.push(niz[i]); break; }
    }

}

for (i = 0; i < duplikati.length - 1; i++)
    for (j = i + 1; j < duplikati.length;j++){
        if(duplikati[i]!=null)
            if(duplikati[i]==duplikati[j])duplikati[j]=null;}

for(i = 0; i < duplikati.length; i++)
    if(duplikati[i]!=null)duplikatiBezDuplikata.push(duplikati[i]);

console.log(duplikatiBezDuplikata);
