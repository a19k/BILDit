/*Napiši funkciju spojiBezDuplikata(niz1, niz2), koja spaja dva niza, ali uklanja duplikate.

	Ulaz: 

console.log(spojiBezDuplikata([1, 2, 3], [3, 4, 5]));
console.log(spojiBezDuplikata(["a", "b", "c"], ["b", "c", "d"]));

	Izlaz: 
	
	[1, 2, 3, 4, 5]
["a", "b", "c", "d"]
*/


const spojiBezDuplikata=(niz1,niz2)=>{
    return [...new Set(niz1.concat(niz2))];
}

console.log(spojiBezDuplikata([1, 2, 3], [3, 4, 5]));
console.log(spojiBezDuplikata(["a", "b", "c"], ["b", "c", "d"]));
