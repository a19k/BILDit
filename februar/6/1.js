/*Napiši funkciju kompresujString(tekst), koja uzima string i vraća njegovu RLE kompresovanu verziju 
(broj ponavljanja svakog karaktera). Ako je rezultat duži od originala, vrati originalni string.

	Ulaz: 

	console.log(kompresujString("aaabbcddd"));
    console.log(kompresujString("abcdef"));

	Izlaz: 

	"a3b2c1d3"
    "abcdef"
*/

let s="sadas";


const kompresujString=(str)=>{
    let compressedStr="";
    let currentChar;
    str.split("").reduce((acc,e,i,arr)=>{

        if(e===currentChar){
            acc+=1;
            if(i!==arr.length-1) return acc
        }

        if(currentChar)compressedStr+=currentChar+acc;
        
        currentChar=e;
        return 1;
    },1)

    return compressedStr;
}

console.log(kompresujString("aaabbcddd"));
console.log(kompresujString("abcdef"));
