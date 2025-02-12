/*Napiši funkciju nadjiParove(niz, cilj), koja pronalazi sve parove brojeva u nizu koji zbrojem daju zadanu vrijednost cilj.

	Ulaz: 
	
console.log(nadjiParove([1, 2, 3, 4, 5, 6], 7));
console.log(nadjiParove([10, 15, 3, 7], 17));


	Izlaz: 

	[[1, 6], [2, 5], [3, 4]]
    [[10, 7]]
*/


const nadjiParove=(nums,target)=>{
    let parovi=[];

    nums.forEach((e1,i,arr) => {
        nums.forEach((e2,j,arr)=>{
            let currentCouple;
            if(e1+e2===target) {
                currentCouple=[e1,e2];
                arr[i]=null;
                arr[j]=null;
            }
            else return;
            
            parovi.push(currentCouple);
        })
    });

    return parovi;
}


console.log(nadjiParove([1, 2, 3, 4, 5, 6], 7));
console.log(nadjiParove([10, 15, 3, 7], 17));