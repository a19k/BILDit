/*Dodati novi element u listu klikom na dugme.

Kreirati HTML stranicu s neuređenom listom (<ul>) i nekoliko <li> elemenata.
Dodati <button> s tekstom "Dodaj stavku".
Kada se dugme klikne, dodati novi <li> element s tekstom "Nova stavka".
*/

const container = document.querySelector("#pašteta")
const lista = container.querySelector("#lista");

const btn = document.createElement("button");
btn.textContent = "Dodaj stavku";
btn.addEventListener("click",()=>{
    const stavka = document.createElement("li");
    stavka.textContent = "Nova stavka";

    lista.appendChild(stavka);
})

container.appendChild(btn);

