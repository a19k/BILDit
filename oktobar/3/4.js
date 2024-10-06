function nadjiDuplikate(niz) {
    let duplikati = [];
    let br = 1;

    for (let i = 0; i < niz.length; i++) {
        br = 1;

        for (let j = i + 1; j < niz.length; j++) {
            if (niz[i] == niz[j]) br++;
        }

        for (j = 0; j < duplikati.length || duplikati.length==0; j++) {
            if (niz[i] == duplikati[j]) break;
            else if (br > 1) {duplikati.push(niz[i]);break;}
        }
    }


    console.log(niz);

    return duplikati;
}

console.log(nadjiDuplikate([1, 2, 33, 3, 3, 6,7,0,7,-1, 1, 58, 4, 1, 6]));//1 3 6
