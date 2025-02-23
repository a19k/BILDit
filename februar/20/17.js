
/*Napraviti modalni prozor koji se otvara i zatvara klikom na dugmad.

Kreirati <div> element koji sadrži poruku i dugme "Zatvori".
Dodati <button> s tekstom "Otvori modal".
Kada korisnik klikne "Otvori modal", prikaže se modal.
Kada klikne "Zatvori", modal se sakrije.
*/

const modal  = document.querySelector('#modal');
const close = document.querySelector('#close');

modal.style.display = 'none';
close.addEventListener('click', () => {modal.style.display = 'none';});

const open = document.createElement("button");
open.textContent = "Open modal";
open.addEventListener('click', () => {modal.style.display = 'block';});

document.body.appendChild(open);