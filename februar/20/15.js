/*Napraviti jednostavnu validaciju forme koja provjerava da li su svi podaci uneseni.

Kreirati HTML formu s nekoliko <input> polja i dugmetom "Pošalji".
Kada korisnik klikne dugme, provjeriti da li su svi podaci uneseni. Ako nisu, prikazati poruku o grešci.
*/

const form  = document.querySelector('#form');
const nameField = document.querySelector('#i1');
const emailField = document.querySelector('#i2');

form.addEventListener('submit', (e) => {
    if(nameField.value === '' || emailField.value === '') alert("Please enter a valid name and email");
})