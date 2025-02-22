/* Napraviti dugme koje prikazuje ili skriva tekst kada se klikne.

Kreirati HTML stranicu s <p> elementom koji sadrži neki tekst.
Dodati <button> s tekstom "Prikaži/Sakrij".
Kada se dugme klikne, ako je tekst vidljiv – sakriti ga, a ako je skriven – prikazati ga.
*/

const container = document.querySelector("#container");
const p = container.querySelector("#aaa");

const btn = document.createElement("button");
btn.textContent = "Prikaži / Sakrij";
btn.addEventListener("click",()=>{
    p.toggleAttribute("hidden");
})
container.appendChild(btn);