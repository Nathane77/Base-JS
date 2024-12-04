# **README BaseJS exo 5**

## **base-JS Exercise 5**

## **Introduction**

This exercise is made to show quotes on the screen, with a favoured system using JS.

## **Main function of the project**

This function is made for creating the `HTML elements` using `Javascript` and `JSON` files.
```js
//goes into the nodeList of quotes, and runs code once for every quote
quotes.forEach(quote => {

    //creates the div for the quote
    const quoteDiv = document.createElement('div');

    //adds a class 'quote' on the quoteDiv
    quoteDiv.classList.add('quote');

    //makes the quoteDiv a child of the container
    container.appendChild(quoteDiv);


        //creates a div for the title
        const titleDiv = document.createElement('div');

        //adds a class 'title' to the titleDiv
        titleDiv.classList.add('title');

        //makes the titleDiv a child of the QuoteDiv
        quoteDiv.appendChild(titleDiv);

            //like above, creates the text paragraphe for the title 
            const tilteTxt = document.createElement('p');
            const tilteTxtContent = document.createTextNode(quote['title']);

            //gives the classes to the divs
            tilteTxt.classList.add('txt');
            tilteTxt.classList.add('title');

            //link the relation ship with the parents
            tilteTxt.appendChild(tilteTxtContent);
            titleDiv.appendChild(tilteTxt);
            
        //creates the divs
        const contentDiv = document.createElement('div');

        //gives the classes to the divs
        contentDiv.classList.add('content');

        //link the relation ship with the parents
        quoteDiv.appendChild(contentDiv);

            //creates the divs
            const ContentTxt = document.createElement('p');
            const contentTxtContent = document.createTextNode('"'+quote['content']+'"');

            //gives the classes to the divs
            ContentTxt.classList.add('txt');
            ContentTxt.classList.add('content');

            //link the relation ship with the parents
            contentDiv.appendChild(ContentTxt);
            ContentTxt.appendChild(contentTxtContent);


        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        quoteDiv.appendChild(authorDiv);
            
            const authorTxt = document.createElement('p');
            const authorTxtContent = document.createTextNode(quote['author']);
            authorTxt.classList.add('txt');
            authorTxt.classList.add('author');
            authorDiv.appendChild(authorTxt);
            authorTxt.appendChild(authorTxtContent);

        const favButton = document.createElement('div');
        favButton.classList.add('favBtn');
        
        const favImg = document.createElement('i');
        const favImgIcon = document.createTextNode('');
        favImg.classList.add('fa-regular');
        favImg.classList.add('fa-star');
        quoteDiv.appendChild(favButton);       
        favButton.appendChild(favImg);
        favImg.appendChild(favImgIcon);

    //checks the local storage for matchin favoured quotes
    if(quote['content'] == localStorage[quote['author']]){

        //changes the class to full heart to show favoured quotes 
       quoteDiv.children[3].children[0].classList.replace('fa-regular','fa-solid');
    }
})
```
## **On the side**
this was also a chance to use **[fontAwesome](https://fontawesome.com/)** for the heart icons.
And learn how to use `localStorage` and `JSON` files.

## **if you have question about the project you can contact me on my [linkedIn](https://www.linkedin.com/in/nassim-hammoudi-8a5235334/)**
