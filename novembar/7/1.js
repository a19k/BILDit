

class Zivotinja{
    ime;//string
    godine;//cijeli broj
    vrsta;//string

    constructor(ime,godine,vrsta){
        this.ime=ime;
        this.godine=godine;
        this.vrsta=vrsta;
    }

    jedi(){
        console.log("Životinja jede.");
    }
    spavaj(){
        console.log("Životinja spava.");
    }
    napraviZvuk(){
        console.log("Životinja pravi zvuk.");
    }
}


class Sisavac extends Zivotinja{
    bojaKrzna;//string

    constructor(ime,godine,vrsta, bojaKrzna){
        super(ime,godine,vrsta);
        this.bojaKrzna=bojaKrzna;
    }

    jedi(){
        console.log("Sisavac pase ili lovi hranu.");
    }
    porodiSe(){
        if(this.godine>=2)console.log("Sisavac se rađa živ.");
        else console.log("Sisavac je premlad za porođaj.");
    }
    napraviZvuk(){
        console.log("Sisavac proizvodi zvuk.");
    }
}


class Primalja extends Sisavac{
    nivoInteligencije;//string , "visok"/"nizak"

    constructor(ime,godine,vrsta,bojaKrzna, nivoInteligencije){
        super(ime,godine,vrsta, bojaKrzna);
        this.nivoInteligencije=nivoInteligencije;
    }

    spavaj(){
        console.log("Primalja pravi gnijezdo i spava.");
    }
    koristiAlate(){
        console.log("Primalja koristi alate.");
    }
    jeInteligentna(){
        if(this.nivoInteligencije==="visok")return true;
        else return false;
    }

}



class Covjek extends Primalja{
    posao;//string

    constructor(ime,godine,vrsta,bojaKrzna,nivoInteligencije, posao){
        super(ime,godine,vrsta,bojaKrzna, nivoInteligencije);
        this.posao=posao;
    }

    napraviZvuk(){
        console.log("Čovjek govori.");
    }
    koristiAlate(){
        console.log("Čovjek koristi složene alate i mašine.");
    }
    radi(){
        if(this.godine>=18)console.log("Čovjek radi kao {",this.posao,"}");
        else console.log("Čovjek je premlad da bi radio.");
    }
}


class Zoo{
    zivotinje=[];//niz objekata Zivotinja

    dodajZivotinju(zivotinja){
        this.zivotinje.push(zivotinja);       
    }
    popisZvukova(){
        for (let i = 0; i < this.zivotinje.length; i++) {
            const element = this.zivotinje[i];
            element.napraviZvuk();
        }
    }
    nahraniSveZivotinje(){
        for (let i = 0; i < this.zivotinje.length; i++) {
            const element = this.zivotinje[i];
            element.jedi();
        }
    }
    povecajGodineZaSve(){
        for (let i = 0; i < this.zivotinje.length; i++) {
            this.zivotinje[i].godine++;
        }
    }
    prikaziSveInformacije(){
        for (const key in this) {
                const value = this[key];
                console.log(key," : ",value);
        }
    }
}


let zoo=new Zoo();

let sisavacObj=new Sisavac("Pujdo",1,"Pas","Žuta");
let primaljaObj=new Primalja("Marmun",2,"Majmun","Crna","nizak");
let covjekObj=new Covjek("Rahim",48,"Homo Sapiens","Žuta","nizak","Lopov");

zoo.dodajZivotinju(sisavacObj);
zoo.dodajZivotinju(primaljaObj);
zoo.dodajZivotinju(covjekObj);

zoo.popisZvukova();
console.log();
zoo.nahraniSveZivotinje();
console.log();
zoo.povecajGodineZaSve();
zoo.prikaziSveInformacije();

