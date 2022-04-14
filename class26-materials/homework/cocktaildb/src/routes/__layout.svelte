<svelte:head>
    <link rel="stylesheet" href="../css/global.css">
</svelte:head>

<section class='container'>
    <slot />
</section>

<style>
    .container {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
</style>