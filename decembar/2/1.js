

class Proizvod {
    #naziv;
    #cijena;
    #kolicina_na_skladistu;
    kategorija;

    constructor(naziv, cijena, kolicina_na_skladistu, kategorija) {
        this.#naziv = naziv;
        this.#cijena = cijena;
        this.#kolicina_na_skladistu = kolicina_na_skladistu;
        this.kategorija = kategorija;
    }

    get naziv() {
        return this.#naziv;
    }

    get cijena() {
        return this.#cijena;
    }

    get kolicina_na_skladistu() {
        return this.#kolicina_na_skladistu;
    }

    smanjiKolicinu(kolicina) {
        this.kolicina_na_skladistu -= kolicina;
    }
    provjeriDostupnost(kolicina) {
        if (this.kolicina_na_skladistu >= kolicina)
            return true;
    }
}




class Korisnik {
    #ime;
    #email;
    #lozinka;
    #korpa = [];

    constructor(ime, email, lozinka) {
        this.#ime = ime;
        this.#email = email;
        this.#lozinka = lozinka;
    }

    get ime() {
        return this.#ime;
    }

    get korpa(){
        return this.#korpa;
    }

    dodajUKorpu(proizvod, kolicina=1) {
        if (proizvod.provjeriDostupnost(kolicina) === true) {
            let indexProizvoda=this.#korpa.indexOf(proizvod);
            if(indexProizvoda===-1){
                proizvod.uzetaKolicina = kolicina;
                this.#korpa.push(proizvod);
            }
            else{
                this.#korpa[indexProizvoda].uzetaKolicina+=kolicina;
            }
        }
        
        else console.log("Zahtjevana količina proizvoda nije dostupna");
    }

    ukloniIzKorpe(proizvod) {
        this.#korpa.splice(this.#korpa.indexOf(proizvod));
    }

    prikaziKorpu(){
        console.log("------------------------------");
        console.log("Korpa - "+this.#ime,"\n");

        this.#korpa.forEach((artikal) => {
            if(artikal!==undefined)
            console.log(artikal.naziv + " : " + artikal.uzetaKolicina + " x " + artikal.cijena + " = " + artikal.uzetaKolicina * artikal.cijena);
        });
        console.log("------------------------------");
    }
}





class Narudzba{
    #brojNarudzbe;
    #korisnik;
    #listaProizvoda=[];
    #ukupnaCijena=0;
    #status;
    static ID_Brojac=1;

    constructor(korisnik,status="na čekanju"){
        this.#brojNarudzbe=Narudzba.ID_Brojac++;
        this.#korisnik=korisnik;
        this.#listaProizvoda = [...korisnik.korpa];
        
        for(let i = 0;i < this.#listaProizvoda.length;i++){
            this.#ukupnaCijena+=(this.#listaProizvoda[i].cijena * this.#listaProizvoda[i].uzetaKolicina);
        }

        this.#status=status;

        Admin.listaNarudzbi.push(this);
    }

    get brojNarudzbe(){
        return this.#brojNarudzbe;
    }
    get korisnik(){
        return this.#korisnik;
    }
    get ukupnaCijena(){
        return this.#ukupnaCijena;
    }
    get status(){
        return this.#status;
    }

    promijeniStatus(noviStatus){
        if(noviStatus==="isporučena" || noviStatus==="otkazana")
        this.#status=noviStatus;
        else console.log("\nNepravilan unos statusa!\n");
    }

    prikaziDetalje(){
        console.log("------------------------------");
        console.log("Narudzba ",this.#brojNarudzbe);
        console.log(this.#korisnik.ime);
        
        this.#listaProizvoda.forEach((artikal) => {
            if(artikal!==undefined)
            console.log(artikal.naziv + " : " + artikal.uzetaKolicina + " x " + artikal.cijena + " = " + artikal.uzetaKolicina * artikal.cijena);
        });

        console.log(this.#status);
        
        console.log("------------------------------");
    }
}



class Admin extends Korisnik{
    static listaNarudzbi=[];

    dodajProizvod(proizvod){
    };

    static prikaziNaruzbe(){
        this.listaNarudzbi.forEach(element=>{
            console.log("Narudzba ", element.brojNarudzbe, "  -  ", element.status);
        })
    }

    static upravljajNarudzbom(narudzba,noviStatus){
        return this.listaNarudzbi.find((element,i,arr)=>{
            if(element===narudzba){
                arr[i].promijeniStatus(noviStatus);
                return true;
            }
        })
    }
}









let petit=new Proizvod("Keks Petit",1.5,14,"Prehrana");

let ja = new Korisnik("Anis","email","pass");
ja.dodajUKorpu(petit);
ja.dodajUKorpu(petit,2);
ja.prikaziKorpu();

new Narudzba(ja);
let fiskalniRacun=Admin.listaNarudzbi[0];

ja.ukloniIzKorpe(petit);
ja.prikaziKorpu();

fiskalniRacun.promijeniStatus("isporučen");
fiskalniRacun.prikaziDetalje();

Admin.prikaziNaruzbe();

Admin.upravljajNarudzbom(fiskalniRacun, "isporučena")

Admin.prikaziNaruzbe();