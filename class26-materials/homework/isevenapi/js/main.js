const URL = 'https://api.isevenapi.xyz/api/iseven/';

document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
    const num = document.querySelector('input').value;
    const answer = document.querySelector('#answer').value;
    
    fetch(URL + num + '/', {mode: 'no-cors'})
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);
            //answer.innerText = data.iseven;
        })
        .catch(err => {
            console.log(`error ${err}`);
    });
}