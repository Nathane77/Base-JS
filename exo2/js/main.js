//get constant of my buttons and my neutral square and the neutral square's text paragraph.
const btns = document.querySelectorAll(".square");
const squareN = document.querySelector('.squareNeutral');
const squareNText = document.querySelector('.neutralText');

//make a foreach on the list of buttons to give them the event listener.
btns.forEach(btn =>{
    btn.addEventListener("click", function(){
      
    //create a variable with the style info of the clicked button.
    let btnStyle = window.getComputedStyle(btn);
    //create a variable with the background color of the clicked button.
    let btnBackground = btnStyle.getPropertyValue("background-color");
    
    //sets the color for the neutral square to the color of the last clicked square.
    squareN.style.backgroundColor = btnBackground;

    //sets the text on the neutral square to the value of the background color.
        squareNText.textContent = btnBackground;
    })
    
});