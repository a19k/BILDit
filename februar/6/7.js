/*Napiši funkciju obrniRijeci(str), koja obrće svaku riječ u stringu, ali zadržava redoslijed riječi.


	Ulaz: 

	console.log(obrniRijeci("Ovo je izazov"));

	Izlaz: 

	"ovO ej vezazi"
*/

const obrniRijeci=(str)=>{
let fragmented=str.split(" ");
fragmented.forEach((e,i,arr)=>arr[i]=arr[i].split("").reverse().join(""));

return fragmented.join(" ");
}

console.log(obrniRijeci("Ovo je izazov"));
