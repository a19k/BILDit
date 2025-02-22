/*Napraviti web stranicu s dugmetom koje, kada se klikne, mijenja tekst unutar <p> elementa.

Kreirati HTML stranicu s <p> elementom koji ima neki početni tekst.
Dodati <button> s tekstom "Promijeni tekst".
Kada se dugme klikne, ažurirati <p> element tako da prikaže "DOM manipulacije, DOM malverzacije."
*/

const container = document.querySelector("#container");

const button = document.createElement("button");
button.textContent="Promijeni tekst";
button.addEventListener("click",()=>document.querySelector("#container > p").textContent = "DOM manipulacije, DOM malverizacije");

container.appendChild(button);