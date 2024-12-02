# **README BaseJS exo 2**

## **base-JS Exercise 2**

## **Introduction**

This exercise is here to learn how to use `array.forEach(element => { });` to assign `AddEventListener`to a list of elements in JS.

## **Main function of the project*


This function add an `addEventListener` to each button in the array of buttons.
```js
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
```
Then it gives the function to executre when a button in clicked, here it gets the style of the clicked button and applies it to the neutral square.


## **if you have question about the project you can contact me on my **[linkedIn](https://www.linkedin.com/in/nassim-hammoudi-8a5235314/)**
