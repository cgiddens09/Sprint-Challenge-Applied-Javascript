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
function factory(item){
    const card = document.createElement('div');
    card.classList.add('card');
    
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = `${item.headline}`;
    
    const author = document.createElement('div');
    author.classList.add('author');
    
    const imgCont = document.createElement('div');
    imgCont.classList.add('img-container');
    
    const image = document.createElement('img');
    image.setAttribute('src', `${item.authorPhoto}`);
    
    const authName = document.createElement('span');
    authName.textContent = `By ${item.authorName}`;
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    author.appendChild(authName);
    imgCont.appendChild(image);
    
    return card;
    }

const cardsCont = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    const data = Object.values(response.data.articles);
    data.forEach((items) => {
        items.forEach((items) => {
            const info = factory(items)
            cardsCont.append(info)
        })
    })
})
.catch()

