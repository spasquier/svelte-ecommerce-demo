<script>
	import Product, { handleClick } from './components/product/Product.svelte';
	import { fade } from 'svelte/transition';

	export let appName;
	export let authenticated;
	export function toggle() {
		authenticated = !authenticated;
		handleClick();
	}
</script>

<svelte:head>
	<title>E-commerce App Demo</title>
</svelte:head>

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
	<a class="navbar-brand" href="/">E-commerce App Demo</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarsExampleDefault">
		<ul class="navbar-nav mr-auto">
		</ul>
		<ul class="navbar-nav md-auto">
			<li class="nav-item">
			{#if authenticated }
				<a class="nav-link" href="#" on:click={toggle}>Log out</a>
			{:else}
				<a class="nav-link" href="#" on:click={toggle}>Connect</a>
			{/if}
			</li>
		</ul>
	</div>
</nav>

<main role="main" class="container">
	<div class="content">
		<h1>{appName}</h1>
		{#if authenticated }
			<div transition:fade>
				<Product></Product>
			</div>
		{:else}
			 <p>This app consumes Sylius REST API to show products data.</p>
		{/if}
	</div>
</main>

<style>
	.content {
		padding-top: 100px;
		text-align: center;
	}

	.content h1 {
		color: #ff3e00;
		font-size: 3em;
		font-weight: 100;
		padding-bottom: 1em;
	}

	.content p {
		font-size: 1.5em;
	}
</style>