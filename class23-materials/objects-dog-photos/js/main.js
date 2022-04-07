//Get a dog photo from the dog.ceo api and place the photo in the DOM
let dog = document.querySelector('.dog');

fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => {
        if (!resp.ok) {
            throw new Error('derp');
        }
        return resp.json();
    })
    .then(dogurl => {
        dog.src = dogurl.message;
    })
