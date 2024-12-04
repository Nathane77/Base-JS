//imports the list of quotes from the file quotes.js
import {quotes} from './quotes.js'
//gets the div container from the html
const container = document.querySelector('.container');

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
});

//selects all my star favorite button
const favButtons = document.querySelectorAll('.favBtn');

//adds the function to each button individually
favButtons.forEach(favButton => {
    favButton. addEventListener('click', function(){
        fav(favButton);
     });
});
   
//function to add favorits to your locale storage
function fav(favButton){

    //creation of the function, author and content, got from the relationship of the button
    let author = favButton.parentElement.children[2].children[0].textContent;
    let content = favButton.parentElement.children[1].children[0].textContent.replace('"', '');

    //removes all the "quotes" from the content string.
    let contentRep = content.replace('"', '');

    //checks if the fav button is active or not,
    if(favButton.children[0].classList.contains('fa-solid')){

        //if it is, it removes the class, and removes the quote from the local storage
        favButton.children[0].classList.replace('fa-solid','fa-regular');
        favButton.parentElement.classList.remove('favorite');
        
        localStorage.removeItem(author, contentRep);
    }
    else{

        //otherwise, it will add the class to the button, and add the quotes to the locale storage.
        favButton.children[0].classList.replace('fa-regular','fa-solid');
        favButton.parentElement.classList.add('favorite');
        localStorage.setItem(author, contentRep);
    }
};

