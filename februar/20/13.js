/*Napraviti dugme koje prikazuje ili skriva sliku na klik.

Kreirati HTML stranicu s <img> elementom i dugmetom "Prikaži/Sakrij".
Kada se dugme klikne, ako je slika vidljiva – sakriti je, a ako je skrivena – prikazati je.
*/

const image = document.querySelector("#image");
const btn = document.querySelector("#btn");

btn.addEventListener("click", e => {
    image.toggleAttribute("hidden");
})