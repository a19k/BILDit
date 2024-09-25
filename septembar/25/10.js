//https://edabit.com/challenge/JDkyQJqNfJNhvjmRW

function seriesResistance(arr) {
	let sum=0;
	for(let i=0;i<arr.length;i++)sum+=arr[i];
	if(sum>1)return sum+" ohms";
	else return sum+" ohm";
}