/*Napiši funkciju indeksRavnoteze(niz), koja vraća indeks gdje je zbroj elemenata lijeve strane jednak zbroju desne strane. Ako ne postoji, vrati -1.

    Ulaz: 

console.log(indeksRavnoteze([1, 7, 3, 6, 5, 6]));
console.log(indeksRavnoteze([1, 2, 3]));

    Izlaz: 
	
3
-1
*/

const indeksRavnoteze = (niz) => {
    let leftCounter = 0;
    let rightCounter = 0;

    for (let i = 0; i < niz.length; i++) {
        leftCounter += niz.at(i);

        rightCounter=0;
        for (let j = niz.length - 1; j > i+1; j--)    rightCounter += niz[j];

        if (leftCounter === rightCounter) return i+1;
    }

    return -1;
}

console.log(indeksRavnoteze([1, 7, 3, 6, 5, 6]));
console.log(indeksRavnoteze([1, 2, 3]));
