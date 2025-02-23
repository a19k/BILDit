/*Kada korisnik klikne na dugme, njegova boja treba da se nasumično mijenja.

Kreirati HTML stranicu s jednim <button> elementom.
Kada se dugme klikne, promijeniti mu backgroundColor na nasumičnu boju.
*/

const btn = document.querySelector('#btn');

btn.addEventListener('click', e => {
    const hex = Math.round(Math.random()*10000000).toString(16);
    console.log(hex);
    btn.style.backgroundColor = "#" + hex;
});