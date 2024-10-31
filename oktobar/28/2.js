
class Knjiga{
    naslov;//string
    autor;//string
    godina_izdavanja;//int
    dostupnost;//bool
    
    prikazi_informacije(){
        console.log("--------------------");
        
        console.log(
            `~Naslov : ${this.naslov}\n`+
            `~Autor : ${this.autor}\n`+
            `~Godina izdavanja : ${this.godina_izdavanja}\n`+
            `~Dostupnost : ${this.dostupnost}`);

        console.log("--------------------");

    }

    posudi_knjigu(){
        if(this.dostupnost===true){
            console.log("Knjiga je posuđena.");
            this.dostupnost=false;
        }
    }

    vrati_knjigu(){
        if(this.dostupnost===false){
            console.log("Knjiga je vraćena.");
            this.dostupnost=true;
        }
    }

    constructor(naslov,autor,godina_izdavanja,dostupnost){
        this.naslov=naslov;
        this.autor=autor;
        this.godina_izdavanja=godina_izdavanja;
        this.dostupnost=dostupnost;
    }
}



class Biblioteka{
    ime;//string
    knjige;//lista

    dodaj_knjigu(knjiga){
        this.knjige.push(knjiga);
    }

    prikazi_sve_knjige(){
        console.log("--------------------");
        console.log("~Naslovi\n~");

        for(let i=0;i<this.knjige.length;i++){
            let trenutnaKnjiga=this.knjige[i];
            console.log("~"+trenutnaKnjiga.naslov);
        }

        console.log("--------------------");

    }

    prikazi_dostupne_knjige(){

        console.log("--------------------");
        console.log("~Dostupni naslovi\n~");

        for (let i = 0; i < this.knjige.length; i++) {
            let trenutnaKnjiga=this.knjige[i];

            if(trenutnaKnjiga.dostupnost===true)
                console.log("~"+trenutnaKnjiga.naslov);
        }

        console.log("--------------------");

    }

    pronadji_knjigu(naslov){
        for(let i=0;i<this.knjige.length;i++){
            let trenutnaKnjiga=this.knjige[i];

            if(trenutnaKnjiga.naslov==naslov) {trenutnaKnjiga.prikazi_informacije();return;}
        }

        console.log("Knjiga ne postoji u Biblioteci.");
    }


    constructor(ime){
        this.ime=ime;
        this.knjige=[];
    }
}



const k1=new Knjiga("Jadi Mladog Vertera","Goethe",1789,true);
const k2=new Knjiga("Odiseja","Homer",-300,false);
const k3=new Knjiga("Starac i More","Hemingvej",1855,true);

k1.prikazi_informacije();
k1.posudi_knjigu();
k1.vrati_knjigu();



const b=new Biblioteka("aaa");

b.dodaj_knjigu(k1);
b.dodaj_knjigu(k2);
b.dodaj_knjigu(k3);
b.prikazi_dostupne_knjige();
b.prikazi_sve_knjige();
b.pronadji_knjigu("Kanconijer");
b.pronadji_knjigu("Odiseja");