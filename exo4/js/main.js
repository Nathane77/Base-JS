//get constant of my buttons and my neutral square and the neutral square's text paragraph.
const btns = document.querySelectorAll(".square");
const body = document.querySelector("body");

//make a foreach on the list of buttons to give them the event listener.
btns.forEach(btn =>{
    btn.addEventListener("click", function(){

         //create a variable with the style info of the clicked button.
        let btnStyle = window.getComputedStyle(btn);

        //create a variable with the background color of the clicked button.
        let btnBackground = btnStyle.getPropertyValue("background-color");

        //sets the color for the body to the color of the last clicked square.
        body.style.backgroundColor = btnBackground;

        //calls the right function.
        zoom(btn);
    })   
});


function zoom(btn){

    //checks if the button is active or not
    if(btn.classList.contains("zoom")){

    //if it is, removes the active class from the square, and turns the background back to grey.
        btn.classList.remove("zoom");
        body.style.backgroundColor = "#646464";

    //finds the P form it's relationship with the square, and changes it's display to hide it.
        btn.children[1].style.display = "none"
    }
    else{   
    //else, it adds the active class to the square 
        btn.classList.add("zoom");

    //finds the P form it's relationship with the square, and changes it's display to show it.

        btn.children[1].style.display = "flex"
    }
}
