/* Napiši funkciju minimalniBrojKovanica(iznos, kovanice), koja pronalazi najmanji broj kovanica potreban da se postigne određeni iznos.

    Ulaz: 

console.log(minimalniBrojKovanica(11, [1, 2, 5]));
console.log(minimalniBrojKovanica(7, [1, 3, 4, 5]));

    Izlaz: 

3 // (5 + 5 + 1)
2 // (3 + 4)
*/

const minimalniBrojKovanica = (iznos, kovanice) => {
    kovanice.sort((a, b) => b-a);

    let counter=0;
    let tempIznos=iznos;

    kovanice.forEach((e)=>{
        counter+=Math.floor(tempIznos/e);
        tempIznos=tempIznos%e;
        console.log(counter);
        
    })
    
    return counter;
}


console.log(minimalniBrojKovanica(11, [1, 2, 5]));
console.log(minimalniBrojKovanica(7, [1, 3, 4, 5]));
