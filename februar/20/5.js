/*Prikazati uživo tekst koji korisnik unosi u polje za unos.

Kreirati HTML stranicu s <input> poljem i <p> elementom.
Kada korisnik unese tekst u input polje, taj isti tekst treba da se prikazuje unutar <p> elementa.
*/

const container = document.querySelector("#container");

const field = container.querySelector("#input");

const p = document.createElement("p");

field.addEventListener("input",(e)=>{
    p.textContent = e.target.value;
})

container.appendChild(p);