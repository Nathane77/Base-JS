// const rows = document.querySelectorAll('.row');
const squares = document.querySelectorAll('.square');
const squareTxt = document.querySelectorAll('.squareText');
let i = 0;

squares.forEach(square =>{
   
    square.addEventListener("click", function(){
       animation(square);
    })
    }
);

function animation(square){
    if(square.className == "square"){
        square.classList.add("animation1");
    }
    else{
        square.classList.remove("animation1");
    }
}