/*Napraviti dugme koje prikazuje ili sakriva padajući meni kada se klikne.

Kreirati HTML stranicu s <button> elementom i <ul> listom koja predstavlja meni.
Kada korisnik klikne na dugme, meni se prikazuje ili sakriva.
*/

const btn = document.querySelector('#btn');
const menu = document.querySelector('#menu');

btn.addEventListener('click', e => {
    menu.toggleAttribute("hidden");
})