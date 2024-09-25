//https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
	let min=arr[0];
	let max=arr[0];
	for(let i=0;i<arr.length;i++){
		if(arr[i]<min)min=arr[i];
		if(arr[i]>max)max=arr[i];
	}
	return [min,max];
}