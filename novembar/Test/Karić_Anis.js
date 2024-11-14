

class Lik{
    ime;
    zdravlje;
    snaga;
    nivo=1;
    iskustvo=1;
    predmet=null;

    constructor(ime,zdravlje,snaga){
        this.ime=ime;
        this.zdravlje=zdravlje;
        this.snaga=snaga;
    }

    napad(){
        console.log();
        console.log(`${this.ime}, Nivo : ${this.nivo}, napada koristeći Snagu ( ${this.snaga} )!`);
        console.log();
    }
    odbrana(){
        console.log();
        console.log(`${this.ime}, Nivo : ${this.nivo}, se brani koristeći Snagu ( ${this.snaga} )!`);
        console.log();
    }
    prikaziInformacije(){
        console.log();
        console.log(this); 
        console.log();
    }

    set povecajIskustvo(iskustvo){
        this.nivo=Math.trunc(iskustvo/10);
    }
    set obuciPredmet(predmet){
        if(this.nivo>=predmet.nivo) this.predmet=predmet;
    }
}


class Borac extends Lik{
    oruzje;
    vjestine=[];

    constructor(ime,zdravlje,snaga,oruzje){
        super(ime,zdravlje,snaga);
        this.oruzje=oruzje;
    }

    napadSaOruzjem(){
        console.log();
        console.log(`Borac, ${this.ime}, napada sa ${this.oruzje}!`);
        console.log();
    }
    trening(vjestina){
        this.vjestine.push(vjestina);
    }
    prikaziVjestine(){
        console.log();
        console.log(`${this.ime} - Vjestine:`);
        
        for(let i=0;i<this.vjestine.length;i++)
            console.log(this.vjestine[i]);
        console.log();
    }
}


class Mag extends Lik{
    tip_magije;
    #mana=100;

    constructor(ime,zdravlje,snaga,tip_magije){
        super(ime,zdravlje,snaga);
        this.tip_magije=tip_magije;
    }

    baciMagiju(){
        console.log();
        console.log(`Mag, ${this.ime}, baca ${this.tip_magije} magiju!`);
        this.#mana-=10;
        this.iskustvo+=2;
        console.log();
    }

    meditacija(){
        console.log();
        this.#mana=100;
        console.log(`Mag, ${this.ime}, meditira. Mana iznosi 100.`);
        console.log();
    }

    get mana(){
        return this.#mana;
    }
}

class Trgovac extends Lik{
    inventar=[];
    #kolicina_novca;

    constructor(ime,zdravlje,snaga,kolicina_novca){
        super(ime,zdravlje,snaga);
        this.#kolicina_novca=kolicina_novca;
    }

    trgovina(){
        console.log();
        console.log(`${this.ime} - Inventar`);
        for(let i=0;i<this.inventar.length;i++)
            console.log(this.inventar[i]);
        console.log();
    }
    traziPredmet(imePredmeta){
        for(let i=0;i<this.inventar.length;i++)
            if(this.inventar[i]===imePredmeta) return true;
        return false;
    }
    set prodajPredmet(imePredmeta){
        for(let i=0;i<this.inventar.length;i++)
            if(this.inventar[i]===imePredmeta){
                this.inventar[i]=undefined;
                this.inventar.sort();
                this.#kolicina_novca+=10;
                this.iskustvo+=10;
            }
    }
    set kupiPredmet(predmet){
        let imaUInventaru=false;

        for(let i=0;i<this.inventar.length;i++)
            if(this.inventar[i]===imePredmeta)imaUInventaru=true;

        if(imaUInventaru===true) return;
        else{
            this.inventar.push(predmet);
            this.#kolicina_novca-=predmet.cijena;
            this.iskustvo+=10;
        }
    }
}

class Predmet{
    ime;
    cijena;
    nivo;
    raritet;

    constructor(ime,cijena,nivo,raritet){
        this.ime=ime;
        this.cijena=cijena;
        this.nivo=nivo;
        this.raritet=raritet;
    }
}


let p=new Predmet("Kamen",5,1,"Nerijetko")
let l=new Lik("Anis",100,10);

l.obuciPredmet=p;
l.prikaziInformacije();
l.napad();
l.odbrana();

let b=new Borac("Dzevad",150,20,"sjekira");

b.napadSaOruzjem();
b.trening("belegija");
b.trening("bjesnilo");
b.prikaziVjestine();

let m=new Mag("Mustafa",120,30,"crna");

m.baciMagiju();
console.log(m.mana);
m.meditacija();

let t=new Trgovac("Tahir",60,8,500);
console.log(t.traziPredmet(p));
t.kupiPredmet=p;
console.log(t.traziPredmet(p));
t.trgovina();
t.prodajPredmet=p;
console.log(t.traziPredmet(p));