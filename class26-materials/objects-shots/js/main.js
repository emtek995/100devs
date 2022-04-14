// The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
document.querySelector('button').addEventListener('click', (e) => {
    let drink = document.querySelector('input').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
    });
})
