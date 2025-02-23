/*Napraviti input polje gdje korisnik može unositi brojeve i dugme koje izračunava prosjek svih unesenih brojeva.

Kreirati <input> polje i <button> "Izračunaj prosjek".
Kada korisnik klikne dugme, izračunati prosjek unešenih brojeva i prikazati ga ispod.
*/

const container = document.querySelector("#container");
const field  = document.querySelector('#field');
const add = document.querySelector('#add');
const avg = document.querySelector('#avg');

const arr = [];
const p = document.createElement('p');

add.addEventListener('click', e => {
    if(+field.value !== undefined && +field.value !== null && !isNaN(+field.value)) arr.push(+field.value);
    else p.textContent = "error";
})

avg.addEventListener('click', e => {
    let sum = 0;
    arr.forEach(e => {sum += e});
    p.textContent = sum/arr.length + "";
})

container.appendChild(p);