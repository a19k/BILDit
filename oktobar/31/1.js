let fgGreen="\x1b[32m";
let colorReset="\x1b[0m";

class Film{
    naslov;//string
    reziser;//string
    godinaIzdavanja;//number
    recenzije;//niz

    constructor(naslov,reziser,godinaIzdavanja,recenzije){
        this.naslov=naslov;
        this.reziser=reziser;
        this.godinaIzdavanja=godinaIzdavanja;

        if(recenzije!==undefined)
            this.recenzije=recenzije;
        else
            this.recenzije=[];
    }

    dodajRecenziju(recenzija){
        this.recenzije.push(recenzija);
    }

    prikaziInformacije(){
        console.log("\n------------------------------\n");
        
        console.log("Film\n");
        //stanje objekta
        for (const key in this) {
            const element = this[key];

            if(key==="recenzije")
                for(let i=0;i<element.length;i++) element[i].prikaziRecenziju();
            else if(key==="godinaIzdavanja")
                console.log(key+" : ",element);
            else
                console.log(key+" : ",fgGreen+element+colorReset);

        }
        //prosjecna ocjena
        console.log("Prosječna ocjena : ",this.izracunajProsjecnuOcjenu());

        console.log("\n------------------------------\n");
    }

    izracunajProsjecnuOcjenu(){
        let sum=0;
        for(let i=0;i<this.recenzije.length;i++)
            sum+=this.recenzije[i].ocjena;

        let prosjek=sum/this.recenzije.length;

        return prosjek;
    }
}

class Recenzija{
    kriticar;//string
    ocjena;//number
    komentar;//string
    
    constructor(kriticar,ocjena,komentar){
        this.kriticar=kriticar;
        this.ocjena=ocjena;
        this.komentar=komentar;
    }

    prikaziRecenziju(){
        console.log(this);  
    }
}


class Videoteka{
    naziv;//string
    filmovi;//niz

    constructor(naziv,filmovi){
        this.naziv=naziv;
        
        if(filmovi!==undefined)
            this.filmovi=filmovi;
        else
            this.filmovi=[];
    }

    dodajFilm(film){
        this.filmovi.push(film);
    }

    prikaziSveFilmove(){
        console.log("\n------------------------------\n");

        console.log("Naslovi :\n");

        for(let i=0;i<this.filmovi.length;i++)
        console.log(fgGreen+this.filmovi[i].naslov+colorReset);

        console.log("\n------------------------------\n");
    }

    prikaziFilmPoNazivu(naslov){

        for (let i = 0; i < this.filmovi.length; i++) {
            const trenutniFilm=this.filmovi[i];

            if(naslov===trenutniFilm.naslov){
                trenutniFilm.prikaziInformacije();
                return;
            }
        }
        console.log("\n------------------------------\n");

        console.log("Film ne postoji u Videoteci.");

        console.log("\n------------------------------\n");

    }

    prikaziSveRecenzijeFilma(naslov){

        console.log("\n------------------------------\n");
        

        for (let i = 0; i < this.filmovi.length; i++) {
            const trenutniFilm = this.filmovi[i];

            if(naslov===trenutniFilm.naslov){
                console.log("Recenzije za ",fgGreen+naslov+colorReset,"\n");
                
                console.log(trenutniFilm.recenzije);

                console.log("\n------------------------------\n");

                return;
            }
        }

        console.log("Film ne postoji u Videoteci.");

        console.log("\n------------------------------\n");
        
    }

}

//recenzije
const recenzija1=new Recenzija("John Doe",9,"komentar");
const recenzija2=new Recenzija("Jane Doe",8,"komentar");
const recenzija3=new Recenzija("John Doe",10,"nevalja");

//filmovi
const film1=new Film("Back To The Future","Spielberg",1985,[recenzija1]);
const film2=new Film("Back To The Future 2","Spielberg",1989)

//dodaje recenzije na filmove
film1.dodajRecenziju(recenzija2);
film2.dodajRecenziju(recenzija3);

//test za prikaziInformacije koja isto tako ukljucuje i izracunajProsjecnuOcjenu iz Film klase
film1.prikaziInformacije();
film2.prikaziInformacije();


//videoteka
const videoteka=new Videoteka("abc",[film1]);

//dodaje film u videoteku
videoteka.dodajFilm(film2);

//prikazuje sve filmove u videoteci
videoteka.prikaziSveFilmove();

//test prikaziFilmPoNazivu
videoteka.prikaziFilmPoNazivu("Back To The Future 3");
videoteka.prikaziFilmPoNazivu("Back To The Future 2");

//test prikaziSveRecenzijeFilma
videoteka.prikaziSveRecenzijeFilma("Back To The Future");


