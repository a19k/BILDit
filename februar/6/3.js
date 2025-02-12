/*Napiši funkciju zamijeniSamoglasnike(tekst), koja prima string i zamjenjuje sve samoglasnike (a, e, i, o, u) sa *.
Ulaz: 

    console.log(zamijeniSamoglasnike("javascript"));
console.log(zamijeniSamoglasnike("petlja i nizovi"));

    Izlaz: 

    "j*v*scr*pt"
"p*tlj* * n*z*v*"
*/


const zamijeniSamoglasnike = (tekst) => {
    let modified=[];
    tekst.split("").forEach((e, i) => {
        if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") modified[i] = "*"; else modified[i]=e;
    });
    
    return modified.join("");
}


console.log(zamijeniSamoglasnike("javascript"));
console.log(zamijeniSamoglasnike("petlja i nizovi"));