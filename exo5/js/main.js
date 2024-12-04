import {quotes} from './quotes.js'

const container = document.querySelector('.container');

quotes.forEach(quote => {
    const quoteDiv = document.createElement('div');
    container.appendChild(quoteDiv);
    quoteDiv.classList.add('quote');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        quoteDiv.appendChild(titleDiv);

            const tilteTxt = document.createElement('p');
            const tilteTxtContent = document.createTextNode(quote['title']);
            tilteTxt.classList.add('txt');
            tilteTxt.classList.add('title');
            tilteTxt.appendChild(tilteTxtContent);
            titleDiv.appendChild(tilteTxt);
            

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        quoteDiv.appendChild(contentDiv);

            const ContentTxt = document.createElement('p');
            const contentTxtContent = document.createTextNode('"'+quote['content']+'"');
            ContentTxt.classList.add('txt');
            ContentTxt.classList.add('content');
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
});