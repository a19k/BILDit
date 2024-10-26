
let tv={

    brand:"SHARP",
    model:"123",
    dijagonala:"50inch",
    horizontalnaRezolucija:1920,
    vertikalnaRezolucija:1080,
    refresh_rate:60,
    isSmart:false,
    trenutniKanal:0,
    volume:0,

    upali(){console.log("          Dobrodošli.          ");},
    ugasi(){console.log("          Doviđenja            ");},

    setTrenutniKanal(brojKanala){this.trenutniKanal=brojKanala;},
    trenutniKanalUp(){if(this.trenutniKanal==9)this.trenutniKanal=0;else this.trenutniKanal++;},
    trenutniKanalDown(){if(this.trenutniKanal==0)this.trenutniKanal=9;else this.trenutniKanal--;},

    volumeUp(){this.volume++},
    volumeDown(){this.volume--},

}

tv.volumeUp();
tv.setTrenutniKanal(9);

console.log(tv);

tv.volumeUp();
tv.volumeUp();
tv.volumeDown();
tv.volumeDown();
tv.volumeDown();
tv.trenutniKanalUp();

console.log(tv);

