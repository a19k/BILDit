function obrnutiRijeci(str) {
    let noviStr = "";
    let zadnjiSpace = -1;
    for (let i = 0; i <= str.length; i++) {

        if ((str[i] == " " || str[i]==undefined) && i != 0){
            for (let j = i - 1; j > zadnjiSpace; j--) {
                noviStr += str[j];
            }
            zadnjiSpace=i;
            noviStr+=" ";
        }
        console.log(noviStr);
    }

    return noviStr;
}

console.log(obrnutiRijeci("Dobar dan svima"));
