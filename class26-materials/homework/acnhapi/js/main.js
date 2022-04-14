//Example fetch using 
const URL = 'http://acnhapi.com/v1a/';

let btn = document.getElementById('click').addEventListener('click', getItems);

async function getItems() {
    let data = await fetch(URL + 'bugs')
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    displayItems(data);
}

function displayItems(data) {
    let docFrag = document.createDocumentFragment();
    data.forEach(e => {
        let divCard = document.createElement('div');
        divCard.classList.add('div-card');
        let title = document.createElement('h3');
        title.innerText = `${e['name']['name-USen']}`;
        divCard.appendChild(title);
        let price = document.createElement('p');
        price.innerText = `Price: ${e['price']}`;
        divCard.appendChild(price);
        docFrag.appendChild(divCard);
    });
    document.body.appendChild(docFrag);
}

