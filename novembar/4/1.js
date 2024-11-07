
class Dinosaur{
    #vrsta;
    #spol;
    #period;
    #ishrana;
    #staniste;

    constructor(vrsta,spol,period,ishrana,staniste){
        this.#vrsta=vrsta;
        this.#spol=spol;
        this.#period=period;
        this.#ishrana=ishrana;
        this.#staniste=staniste;
    }

    getVrsta(){
        return this.#vrsta;
    }
    getSpol(){
        return this.#spol;
    }
    getPeriod(){
        return this.#period;
    }
    getIshrana(){
        return this.#ishrana;
    }
    getStaniste(){
        return this.#staniste;
    }


    spavaj(){
        console.log("\n   Zzz...");
    }

    jedi(){
        console.log("\n   njam njam");
    }
}


class Raptor extends Dinosaur{
    #temperament;
    #sara;
    #boja;
    #iskustvo;

    constructor(vrsta,spol,period,ishrana,staniste,temperament,boja,sara,iskustvo){
        super(vrsta,spol,period,ishrana,staniste);
        this.#temperament=temperament;
        this.#sara=sara;
        this.#boja=boja;
        this.#iskustvo=iskustvo;
    }

    getTemperament(){
        return this.#temperament;
    }
    getSara(){
        return this.#sara;
    }
    getBoja(){
        return this.#boja;
    }
    getIskustvo(){
        return this.#iskustvo;
    }

    setIskustvo(iskustvo){
        if(iskustvo>1)this.#iskustvo=1;
        else if(iskustvo<0)this.#iskustvo=0;
        else this.#iskustvo=iskustvo;
    }

    zov(){
        console.log("\n   rawr.");
    }
    grebi(){
        console.log("\n   fweep.");
    }
}


let raptor=new Raptor("Utahraptor","F","Kreta","Mesojed","Kišna Šuma","Radoznalo","Zelena","Jednostavna",0.6);

raptor.spavaj();
raptor.jedi();
raptor.grebi();
raptor.zov();

console.log();

console.log(raptor.getVrsta());
console.log(raptor.getSpol());
console.log(raptor.getIshrana());
console.log(raptor.getPeriod());
console.log(raptor.getStaniste());
console.log(raptor.getTemperament());
console.log(raptor.getBoja());
console.log(raptor.getSara());

raptor.setIskustvo(0.7);
console.log(raptor.getIskustvo());