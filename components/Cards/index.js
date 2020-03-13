// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//create entry point at .cards-container

const cards = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
    console.log(`this is the cards response`,response);
    console.log(`this is the response data`, response.data);
    console.log(`this is the response data articles`, response.data.articles);
    let articleData = response.data.articles;
    articleData.javascript.forEach(obj => {
        const newCard = cardMaker(obj);
        cards.appendChild(newCard);
    })
    articleData.bootstrap.forEach(obj => {
        const newCard = cardMaker(obj);
        cards.appendChild(newCard);
    })
    articleData.technology.forEach(obj => {
        const newCard = cardMaker(obj);
        cards.appendChild(newCard);
    })
    articleData.jquery.forEach(obj => {
        const newCard = cardMaker(obj);
        cards.appendChild(newCard);
    })
    articleData.node.forEach(obj => {
        const newCard = cardMaker(obj);
        cards.appendChild(newCard);
    })
    })
    
.catch(error => {
    console.log(`we have an error`, error)
});

function cardMaker(element){

    //elements
const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imgContainer = document.createElement('div');
const authorImage = document.createElement('img');
const authorName = document.createElement('span');
    //structure
card.appendChild(headline);
card.appendChild(author);
author.appendChild(imgContainer);
authorImage.appendChild(imgContainer);
author.appendChild(authorName);
    //classes
card.classList.add('card');
headline.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');
    //content
headline.textContent = `${element.headline}`;
authorImage.setAttribute = ('src', element.authorPhoto);
authorName.textContent = `By ${element.authorName}`;

    return card
}
