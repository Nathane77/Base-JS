const btns = document.querySelectorAll(".btn");
let btnStyle = null;

// btn1.addEventListener("click", test1);
// btn2.addEventListener("click", test2);
// btn3.addEventListener("click", test3);
// btn4.addEventListener("click", test4);

btns.forEach(btn =>{
    btn.addEventListener("click", function(){
      
  btnStyle = window.getComputedStyle(btn);
  console.log(btnStyle);
  let btnBackground = btnStyle.getPropertyValue("background-color");
         console.log(btnBackground);
    })
});

// const array1 = ['a', 'b', 'c'];

// btns.forEach((element) => console.log(element));
// console.log(btns);



//     // i => i.addEventListener
// function test1(){
//     console.log("btn");
//     // newSquare = taskCard.cloneNode(true); 
// }
// function test2(){
//     console.log("btn2"); 
// }
// function test3(){
//     console.log("btn3"); 
// }
// function test4(){
//     console.log("btn4"); 
// }

// console.log(btn1.className);

