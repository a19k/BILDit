//https://edabit.com/challenge/3kcrnpHk7krNZdnKK

function binary(decimal) {
	var bin=0;
	if(decimal>=512){bin+=1000000000;decimal-=512}
	if(decimal>=256){bin+=100000000;decimal-=256}
	if(decimal>=128){bin+=10000000;decimal-=128}
	if(decimal>=64){bin+=1000000;decimal-=64}
	if(decimal>=32){bin+=100000;decimal-=32}
	if(decimal>=16){bin+=10000;decimal-=16}
	if(decimal>=8){bin+=1000;decimal-=8}
	if(decimal>=4){bin+=100;decimal-=4}
	if(decimal>=2){bin+=10;decimal-=2}
	if(decimal>=1){bin+=1;decimal-=1}
	
	return String(bin);
}