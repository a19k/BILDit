/*Napraviti polje za unos teksta koje broji koliko riječi je uneseno.

Kreirati HTML stranicu s <textarea> poljem i <p> elementom koji prikazuje broj riječi.
Kada korisnik unese tekst, broj riječi treba da se ažurira uživo.
*/

const textarea = document.querySelector("#text");
const counter = document.querySelector("#counter");

textarea.addEventListener("input", e => {
    let text = e.target.value.trim();
    console.log(text);
    let wordCount = 0;

    text.split("").reduce((acc,e) => {
        if(e === " " && acc !== " ") wordCount++;
        return e;
    },"");

    if(wordCount > 0 || text.length !== 0) wordCount++;

    counter.textContent = wordCount + "";
})