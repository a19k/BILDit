/*Napraviti jednostavnu to-do listu gdje korisnik može dodavati i uklanjati stavke.

Kreirati HTML stranicu s <input> poljem, <button> za dodavanje i <ul> listom.
Kada korisnik unese tekst i klikne "Dodaj", kreirati novi <li> element s tim tekstom.
Dodati dugme "Obriši" pored svake stavke, koje će je ukloniti iz liste.
*/

const container = document.querySelector("#container");
const field  = container.querySelector("input")
const add = document.querySelector("#dodajBtn");
const todo =  document.querySelector("#todo");

add.addEventListener("click", e => {
    const item = document.createElement("li");
    item.textContent = field.value;

    const remove = document.createElement("button");
    remove.textContent = "Ukloni";
    remove.addEventListener("click", e => {
        todo.removeChild(item);
        todo.removeChild(remove);
    });

    todo.appendChild(item);
    todo.appendChild(remove);
})