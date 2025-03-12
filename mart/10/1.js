

let text = "Hello World";
text = text.split("");


const body = document.querySelector("body")
const p = document.createElement("p");
body.appendChild(p);

console.log(text);

let count = 0;
const intervalID = setInterval(()=>{
    if(count < text.length)
        p.textContent+=text[count++];
    else clearInterval(intervalID);
},300)