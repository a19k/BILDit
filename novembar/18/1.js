

class Racun{
    #broj_racuna;
    #ime_vlasnika;
    #stanje;

    constructor(broj_racuna,ime_vlasnika,stanje=0){
        if(stanje<0)return;
        this.#broj_racuna=broj_racuna;
        this.#ime_vlasnika=ime_vlasnika;
        this.#stanje=stanje;
    }

    get broj_racuna(){
        return this.#broj_racuna;
    }
  //set broj_racuna je nepoželjno mijenjati
    get ime_vlasnika(){
        return this.#ime_vlasnika;
    }
    set ime_vlasnika(ime){
        this.#ime_vlasnika=ime;
    }
    get stanje(){
        return this.#stanje;
    }
    set stanje(delta){
        this.#stanje+=delta;
    }

    prikaziInformacije(){
        console.log("------------------------------");
        console.log("Broj Racuna : " + this.broj_racuna);
        console.log("Ime Vlasnika : " + this.ime_vlasnika);
        console.log("Stanje : " + this.stanje);
        console.log("------------------------------");
    }
}

function provjeriBrojRacuna(broj_racuna){
    let duzina_stringa=broj_racuna_trenutnog_racuna.length;
    let neispravno=false;

    if(duzina_stringa!==13){//provjerava dužinu stringa
    console.log("Broj računa se mora sastojati od 13 karaktera");
    neispravno=true;
    }

    for(let i=0;i<12;i++)//provjerava 12 cifara u stringu
        if(typeof broj_racuna_trenutnog_racuna[i]!=='string'){
            console.log("Format broja računa mora biti : XXXXXXXXXXXXR (X - cifra)!");
            neispravno=true;
            break;
        }
    
    if(broj_racuna_trenutnog_racuna[duzina_stringa-1]!=='R'){//provjerava 1 slovo u stringu
        console.log("Zadnji karakter mora biti R!");
        neispravno=true;
    }

    return neispravno;
}

function provjeriStanjeRacuna(stanje){
    if(stanje<0){
        console.log("Error : Stanje računa ne smije biti manje od 0");
        return true
    }
    else return false;
}

let broj_racuna_trenutnog_racuna="012345678910R".toUpperCase();
let ime_vlasnika_trenutnog_racuna="Karić Anis";
let stanje_trenutnog_racuna=-10;

let racunOsobeA;

if(provjeriBrojRacuna(broj_racuna_trenutnog_racuna)===false)
    if(provjeriStanjeRacuna(stanje_trenutnog_racuna)===false)
        racunOsobeA=new Racun(broj_racuna_trenutnog_racuna,ime_vlasnika_trenutnog_racuna,-1);

racunOsobeA.prikaziInformacije();
console.log(racunOsobeA);
