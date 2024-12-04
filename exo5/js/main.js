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


    // if(quote['content'] == localStorage[quote['author']]){
    //     console.log("j'ai recupére les info de "+quote);
    // }
    // else{
    //     console.log("je n'ai PAS recupére les info de "+quote['author']);

    // }
    // console.log(quote['content']);
});


const favButtons = document.querySelectorAll('.favBtn');

favButtons.forEach(favButton => {
    favButton. addEventListener('click', function(){
        fav(favButton);
     });
});
   
function fav(favButton){

    let author = favButton.parentElement.children[2].children[0].textContent;
    let content = favButton.parentElement.children[1].children[0].textContent;

    if(favButton.children[0].classList.contains('fa-solid')){
        favButton.children[0].classList.replace('fa-solid','fa-regular');
        favButton.parentElement.classList.remove('favorite');
        
        localStorage.setItem(author, content);
    }
    else{
        favButton.children[0].classList.replace('fa-regular','fa-solid');
        favButton.parentElement.classList.add('favorite');


        localStorage.setItem(author, content);
        // console.log(localStorage['Biff Tannen']);

        // localStorage.setItem(favButton.nextSibling)
    }
};

