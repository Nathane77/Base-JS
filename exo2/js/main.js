const btns = document.querySelectorAll(".square");
const squareN = document.querySelector('.squareNeutral');
const squareNText = document.querySelector('.neutralText')
let btnStyle = null;

// btn1.addEventListener("click", test1);
// btn2.addEventListener("click", test2);
// btn3.addEventListener("click", test3);
// btn4.addEventListener("click", test4);

btns.forEach(btn =>{
    btn.addEventListener("click", function(){
      
    btnStyle = window.getComputedStyle(btn);
    let btnBackground = btnStyle.getPropertyValue("background-color");

    squareN.style.backgroundColor = btnBackground;

    NeutralSquareStyle = window.getComputedStyle(squareN);
    let NeutralSquareRGB = NeutralSquareStyle.getPropertyValue("background-color");

        squareNText.textContent = NeutralSquareRGB;
    })
    
});

