//assigns the span with the id btn to the const btn
const btn = document.querySelector('#btn');

// assigns each css value to the coresponding const
const id = document.querySelector('.square').className;
const color = window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("background-color");
const height = window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("height");
const width =  window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("width");
const display =  window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("display");
const font =  window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("font-family");

//add the checker for the click on the span
btn.addEventListener("click", showInfo);

//function to show the alert with all the const of information
function showInfo(){
    alert("information de "+id+" \n\tcouleur: "+ color+
   "\n\thauter: "+ height+
   "\n\tlargeur: "+ width+
   "\n\tafichage: "+ display+
   "\n\tfont:"+ font // \n = new line \t = indentation
);
}
