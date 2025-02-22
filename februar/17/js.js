// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph1 = document.createElement("p");
paragraph1.style.color = "red";
paragraph1.textContent = "Hey, I'm red."

container.appendChild(paragraph1);

const blueh3 = document.createElement("h3");
blueh3.style["color"] = "blue";
blueh3.textContent = "I’m a blue h3!";

container.appendChild(blueh3);

const div1 = document.createElement("div");
div1.style.borderColor = "black";
div1.style.backgroundColor = "pink";

const h1inadiv = document.createElement("h1");
h1inadiv.textContent = "I'm in a div!";
div1.appendChild(h1inadiv);

const paragraphinadiv = document.createElement("p");
paragraphinadiv.textContent = "ME TOO";
div1.appendChild(paragraphinadiv);

container.appendChild(div1);