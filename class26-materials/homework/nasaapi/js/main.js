URL = 'https://api.nasa.gov/planetary/apod?api_key=NapaAgoYgyrciCYsxBx1WXdygh8sXkoINkclbeHf'


//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    fetch(URL)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.querySelector('img').src = data.hdurl;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}