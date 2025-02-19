/*Napiši funkciju balansiraneZagrade(str), koja provjerava da li su sve zagrade u stringu ispravno ugniježđene i zatvorene. Podržane su (), {}, [].

	Ulaz: 
	
console.log(balansiraneZagrade("({[]})"));
console.log(balansiraneZagrade("([)]"));
console.log(balansiraneZagrade("{[()]}"));

	Izlaz: 
	
true
false
true
*/

const balansiraneZagrade=(str)=>{
    let currentlyOpen=[];
    let isBalanced=true;

    str.split("").forEach((e,i,arr)=>{
        if(e==="(")currentlyOpen.push(")");
        else if(e==="[")currentlyOpen.push("]");
        else if(e==="{")currentlyOpen.push("}");
        
        if(e===")"){
            if(currentlyOpen.length===0 || currentlyOpen.at(-1)!==e){ isBalanced=false; currentlyOpen.pop();}
            else currentlyOpen.pop();
        }
        else if(e==="]"){
            if(currentlyOpen.length===0 || currentlyOpen.at(-1)!==e){ isBalanced=false; currentlyOpen.pop();}
            else currentlyOpen.pop();
        }
        else if(e==="}"){
            if(currentlyOpen.length===0 || currentlyOpen.at(-1)!==e){ isBalanced=false; currentlyOpen.pop();}
            else currentlyOpen.pop();
        }
    });

    return isBalanced;
}


console.log(balansiraneZagrade("({[]})"));
console.log(balansiraneZagrade("([)]"));
console.log(balansiraneZagrade("{[()]}"));