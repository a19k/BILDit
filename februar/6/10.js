/*Napiši funkciju promijeniVelicinuSlova(str), koja mijenja velika slova u mala, a mala u velika u stringu.

	Ulaz: 

console.log(promijeniVelicinuSlova("JaSam JavaScript"));
console.log(promijeniVelicinuSlova("Učimo programirati"));

	Izlaz: 
	
"jAsAM jAVAsCRIPT"
"uČIMO PROGRAMIRATI"
*/


const promijeniVelicinuSlova=(str)=>{
    let negative="";
    str.split("").forEach((e)=>{
        if(e.charCodeAt(0)>90)negative+=e.toUpperCase();
        else negative+=e.toLowerCase();
    })

    return negative;
}

console.log("hello".charCodeAt());


console.log(promijeniVelicinuSlova("JaSam JavaScript"));
console.log(promijeniVelicinuSlova("Učimo programirati"));