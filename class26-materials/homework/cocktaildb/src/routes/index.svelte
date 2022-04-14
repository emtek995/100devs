<script>
	import Carousel from '../components/carousel.svelte';

	let search = '';
	let drinks = [];

	async function getDrinks() {
		await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
			.then((resp) => resp.json())
			.then((data) => (drinks = data.drinks));
        console.log(drinks);
	}
</script>

<svelte:head>
	<title>Drink Picker 9000</title>
</svelte:head>

<h1>Which Cocktail?</h1>

<div class="user-input">
	<input type="text" name="" bind:value={search} placeholder="Enter a drink" />
	<button on:click={getDrinks} type="button" name="button">Get Cocktail</button>
</div>

<Carousel {drinks} />

<style>
	h1 {
		color: white;
	}

	.user-input {
		border: thin solid lightgray;
		border-radius: 0.5rem;
		padding: 2rem;
		margin-bottom: 2rem;
	}

	.user-input button,
	.user-input input {
		border: thin solid lightgray;
		padding: 0.5rem;
		border-radius: 0.25rem;
	}
</style>
