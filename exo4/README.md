# **README BaseJS exo 3**

## **base-JS Exercise 3**

## **Introduction**

This exercise is here to apply all the knowledge learned on the **three first exercise**

it uses `addEventListener` and `QuerySelector` from exo1,

`array.forEach(element => { });` to assign `AddEventListener` from exo2,

and `Active Classes` from exo3.

## **Main function of the project**


This function is used when clicked, it checks if the square is **NOT** active. if it's **NOT** active,
it will add the active class `zoom` and change the body `background-color` to grey, its default `background color`.
It also changes the `display` of the paragraph to `none` to make it invisible. 
```js
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

```
Otherwise it will **add** the active class,
and change the `display` of the paragraph to `flex` to make it visible.

## **if you have question about the project you can contact me on my [linkedIn](https://www.linkedin.com/in/nassim-hammoudi-8a5235334/)**