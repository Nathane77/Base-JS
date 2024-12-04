# **README BaseJS exo 3**

## **base-JS Exercise 3**

## **Introduction**

This exercise is here to learn how to use `Active Classes` to interact with CSS and play animation using JS. 

## **Main function of the project**


This function is used when clicked, it checks if the square is **NOT** active. if it's **NOT** active, it will add the active class `animation1`. 
```js
function animation(square){
    if(square.className == "square"){
        square.classList.add("animation1");
    }
    else{
        square.classList.remove("animation1");
    }
}
```
Otherwise it will simply remove the active class.

## **if you have question about the project you can contact me on my [linkedIn](https://www.linkedin.com/in/nassim-hammoudi-8a5235334/)**
