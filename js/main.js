

const id = window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("class");
const color = window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("background-color");
const height = window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("height");
const width =  window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("width");
const display =  window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("display");
const font =  window.getComputedStyle(document.querySelector('.square'), null).getPropertyValue("font-family");




const btn = document.querySelector('#btn');

btn.addEventListener("click", showInfo);

function showInfo(){
    alert("information du carré  \n\tcouleur: "+ color+
   "\n\thauter: "+ height+
   "\n\tlargeur: "+ width+
   "\n\tafichage: "+ display+
   "\n\tfont:"+ font
);
}