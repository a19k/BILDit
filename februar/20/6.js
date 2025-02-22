/*Napraviti dugmad koja povećavaju i smanjuju veličinu teksta.

Kreirati HTML stranicu s <p> elementom koji sadrži neki tekst.
Dodati dva dugmeta: "Povećaj tekst" i "Smanji tekst".
Kada korisnik klikne na dugme, veličina fonta u <p> elementu treba da se poveća ili smanji.	
*/

const container = document.querySelector("#container");
const p = container.querySelector("#paragraph");
p.style.fontSize = "16";
pFontSizeDummy = 16;

const btnUp = document.createElement("button");
btnUp.textContent = "Povećaj tekst";
btnUp.addEventListener("click",()=>{p.style.fontSize = ++pFontSizeDummy;});

const btnDown = document.createElement("button");
btnDown.textContent = "Smanji tekst";
btnDown.addEventListener("click",()=>{p.style.fontSize = --pFontSizeDummy;})

container.appendChild(btnUp);
container.appendChild(btnDown);