// Diffrent types of selectors in DOM.
let box = document.getElementsByClassName("box");
box[0].style.backgroundColor = "blue";

let box2 = document.getElementById("box2");
box2.style.backgroundColor = "green";

let box3 = document.querySelector(".box3");
box3.style.backgroundColor = "brown";

let box4 = document.querySelector("#box4");
box4.style.backgroundColor = "purple";

let boxes = document.querySelectorAll(".box");
boxes.forEach((e)=>{
    e.style.color = "yellow";
})


// innerText and innerHTML
let container2 = document.querySelector(".container2");
console.log(container2.innerText); 
console.log(container2.innerHTML);
container2.innerText = "hello world";


// hiden
console.log(container2.hidden);
container2.hidden = true;


// hasAttribute, setAttribute and removeAttribute
console.log(container2.hasAttribute);
container2.setAttribute("style", "display: flex");
container2.removeAttribute("style");


// createElement, append, prepend, before, after
let container1 = document.querySelector(".container1");

let div = document.createElement("div");
div.innerHTML = "this is appended div";
container1.append(div);

let p = document.createElement("p");
p.innerHTML = "this is prepended paragraph.";
container1.prepend(p);

let span = document.createElement("span");
span.innerHTML = "insert span before container1";
container1.before(span);

let h2 = document.createElement("h2");
h2.innerHTML = "insert h2 tage after container1";
container1.after(h2);


// replaceWith
let b = document.createElement("b");
b.innerHTML = "replacement element";
div.replaceWith(b);


// remove
p.remove();

//classList, classList.add, classList.remove and classList.toggle
h2.classList.add("myClass");
h2.classList.remove("myClass");
h2.classList.toggle("blue"); //add -> remove  ||  remove -> add