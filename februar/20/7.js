/*Prikazati broj karaktera koje korisnik unese u polje za unos.

Kreirati HTML stranicu s <input> poljem i <p> elementom koji prikazuje broj karaktera.
Kada korisnik unese tekst, broj karaktera treba da se ažurira uživo.
*/

const p = document.querySelector("#counter")
const field =  document.querySelector("#input");

field.addEventListener("input",(e)=>{p.textContent=e.target.value.length;});