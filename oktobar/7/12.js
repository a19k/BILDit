function spojiURecenicu(strings){

    let recenica="";

    for(let i=0;i<strings.length;i++)
        recenica+=strings[i]+" ";
        
    return recenica;
}

console.log(spojiURecenicu(["JavaScript", "je", "jezik", "svih", "vremena."]));
