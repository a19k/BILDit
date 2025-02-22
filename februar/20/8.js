/*Kada korisnik izabere opciju iz <select> elementa, tekst na stranici treba da se promijeni.

Kreirati HTML stranicu s <select> elementom koji sadrži nekoliko opcija.
Kreirati <p> element koji će prikazivati odabranu opciju.
Kada korisnik promijeni izbor, ažurirati sadržaj <p> elementa.
*/

const container = document.querySelector("#container");
const menu = document.querySelector("#menu");
const p = document.createElement("p");

p.textContent = menu.value;
menu.addEventListener("change", e => {p.textContent = menu.value;});

container.appendChild(p);
