/* Provjeriti da li korisnik unosi ispravan e-mail.

Kreirati HTML stranicu s <input> poljem i <button> dugmetom za provjeru.
Kada korisnik klikne dugme, provjeriti da li uneseni tekst ima znak "@" i tačku ".".
Ako unos nije validan, prikazati upozorenje u <p> elementu.
*/

const container = document.querySelector('#container');
const email = document.querySelector('#email');
const btn = document.querySelector('#submit');

const p = document.createElement('p');
p.textContent = ".";

btn.addEventListener('click', (e) => {
    const str = email.value;
    const at = new RegExp(/@/);
    const dot = new RegExp(/\./);
    if(!at.test(str) || !dot.test(str)) p.textContent = "Please enter a valid email address";
})

container.appendChild(p);