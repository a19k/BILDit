/*Napraviti dugme koje prikazuje nasumičan citat svaki put kada se klikne.

Kreirati HTML stranicu s <p> elementom gdje će se prikazivati citat.
Napraviti niz sa nekoliko različitih citata.
Dodati dugme "Prikaži citat" koje će na svaki klik mijenjati prikazani citat.
*/

const container = document.querySelector("#container");
const citat = document.querySelector("#citat");

const citati = ["citat1","citat2","citat3"];

const btn = document.createElement("button");
btn.textContent = "Prikaži citat";
btn.addEventListener("click", e => {
    citat.textContent = citati[(Math.round(Math.random()*10)%citati.length)];
})

container.appendChild(btn);