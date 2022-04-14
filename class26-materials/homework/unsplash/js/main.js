const ACCESS = 'SMwaB3koYy6VmjZ2m5_d_N8dC4Ye4zpog2M_AhPQS-s';
const URL = 'https://api.unsplash.com/photos/random';

//Example fetch using pokemonapi.co
document.querySelector('#get-photos').addEventListener('click', getFetch)

async function getFetch() {
    let headers = new Headers();
    headers.append('Authorization', 'Client-ID ' + ACCESS);
    headers.append('Accept-Version', 'v1');
    let data = await fetch(URL, { headers })
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    document.getElementById('rand-image').src = data.urls.small;
}