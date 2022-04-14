<script>
    import { flip } from 'svelte/animate';

    export let drinks;

    const rotateLeft = e => {
        const transitioningImage = drinks[drinks.length - 1];
        document.getElementById(transitioningImage.idDrink).style.visibility = 'hidden';
        drinks = [drinks[drinks.length -1],...drinks.slice(0, drinks.length - 1)]
        setTimeout(() => document.getElementById(transitioningImage.idDrink).style.visibility = 'visible', 500);
    }

    const rotateRight = e => {
        const transitioningImage = drinks[0];
        document.getElementById(transitioningImage.idDrink).style.visibility = 'hidden';
        drinks = [...drinks.slice(1, drinks.length), drinks[0]]
        setTimeout(() => document.getElementById(transitioningImage.idDrink).style.visibility = 'visible', 500);
    }
</script>

<div id='carousel-container'>
    <div id='carousel-images'>
    {#each drinks as drink (drink.idDrink)}
    <div animate:flip={{duration: 500}} class='drink-card' id={drink.idDrink}>
        <h2>{drink.strDrink}</h2>
        <img src={drink.strDrinkThumb} alt=''>
    </div>
    {/each}
    </div>
</div>
<div id='buttons'>
    <button id='left' on:click={rotateLeft}>Previous</button>
    <button id='right' on:click={rotateRight}>Next</button>
</div>

<style>
    h2 {
        color: white;
    }

    #carousel-container {
        display: flex;
        width: 100vw;
    }

    #carousel-images {
        display: flex;
        overflow: hidden;
    }

    button {
        padding: 0.5rem;
        border-radius: 0.25rem;
        margin: 1rem;
        border: thin solid lightgrey;
    }

    #buttons {
        display: flex;
        padding: 2rem;
    }

    .drink-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        border: thin solid lightgray;
        border-radius: 2rem;
    }

    img {
        height: 400px;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
    }
</style>
