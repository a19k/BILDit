/*Napraviti kalkulator koji može sabirati, oduzimati, množiti i dijeliti dva broja.

Kreirati HTML stranicu s dva <input> polja za unos brojeva.
Dodati dugmad za osnovne matematičke operacije (+, -, *, /).
Kada korisnik klikne na dugme operacije, prikazati rezultat u <p> elementu.
*/

const calc = document.querySelector("#calc")
const prvi = calc.querySelector("#prvi");
const drugi = calc.querySelector("#drugi");
const rezultat = calc.querySelector("#rezultat");

const add = document.createElement("button");
const subtract = document.createElement("button");
const multiply = document.createElement("button");
const divide = document.createElement("button");

add.textContent = "+";
subtract.textContent = "-";
multiply.textContent = "*";
divide.textContent = "/";

add.addEventListener("click", e => {
    if(prvi.value === "" || drugi.value === "") rezultat.textContent = 0 + "";
    else rezultat.textContent = +prvi.value + +drugi.value + "";
})

subtract.addEventListener("click", e => {
    if(prvi.value === "" || drugi.value === "") rezultat.textContent = 0 + "";
    else rezultat.textContent = +prvi.value - +drugi.value + "";
})

multiply.addEventListener("click", e => {
    if(prvi.value === "" || drugi.value === "") rezultat.textContent = 0 + "";
    else rezultat.textContent = +prvi.value * +drugi.value + "";
})

divide.addEventListener("click", e => {
    if(prvi.value === "" || drugi.value === "") rezultat.textContent = 0 + "";
    else rezultat.textContent = +prvi.value / +drugi.value + "";
})

calc.appendChild(add);
calc.appendChild(subtract);
calc.appendChild(multiply);
calc.appendChild(divide);