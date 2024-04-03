/*console.log("hello!");
//alert("Hey Welcome");
window.console.log("Vinita");
console.dir(document.body);


//selecting by ID
let heading = document.getElementById("heading");
console.log(heading);


//selecting by Class
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

//selecting byQuery selector 
let firstEl = document.querySelector("#id"); //1st element
let allEle = document.querySelectorAll(".myClass"); //all elements
console.dir(allEle);

let elements = document.querySelector("div");*/

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " From Apna College";

let divs = document.querySelectorAll(".box");
//console.log(divs);

let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`
}

/*divs[0].innerText = "new unique value 1 ";
divs[1].innerText = "new unique value 2 ";
divs[2].innerText = "new unique value 3 ";*/