/*Napraviti dugme koje broji koliko puta je kliknuto.

Kreirati HTML stranicu s <button> elementom s tekstom "Klikni me".
Dodati <p> element koji prikazuje broj klikova.
Svaki put kada se dugme klikne, povećati broj prikazanih klikova.
*/

const container = document.querySelector("#container");
const btn = container.querySelector("#btn");

const p = document.createElement("p");
p.textContent=0;

btn.addEventListener("click",()=>{
    p.textContent = +p.textContent + 1;
})

container.appendChild(p);