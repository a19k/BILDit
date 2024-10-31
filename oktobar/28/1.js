
class GPU {
    brand;
    model;
    series;
    clockBase;
    clockBoost;
    vramCapacity;
    vramType;
    maxFanSpeed;

    constructor(brand,model,series,clockBase,clockBoost,vramCapacity,vramType,maxFanSpeed){
        this.brand=brand;
        this.model=model;
        this.series=series;
        this.clockBase=clockBase;
        this.clockBoost=clockBoost;
        this.vramCapacity=vramCapacity;
        this.vramType=vramType;
        this.maxFanSpeed=maxFanSpeed;
    }
}

const gpu1=new GPU("AMD","RX 570","RX",1234,1400,4,"GDDR5",1000);
const gpu2=new GPU("AMD","RX 570","RX",1234,1400,8,"GDDR5",1000);


console.log(gpu1);
console.log(gpu2);
