/*Napraviti dugme koje mijenja temu stranice iz svijetle u tamnu i obrnuto.

Kreirati HTML stranicu s <button> elementom "Promijeni temu".
Kada korisnik klikne na dugme, dodati/ukloniti klasu dark-mode na body elementu.
Definisati CSS stilove za dark-mode (tamna pozadina, svijetli tekst).
*/

const btn = document.querySelector('#btn');
btn.addEventListener('click', e => {document.body.classList.toggle("dark-mode");});
