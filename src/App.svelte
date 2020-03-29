<script>
	export let appName;
	export let user;
	export function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

<svelte:head>
	<title>E-commerce App Demo</title>
</svelte:head>

<main>
	<h1>{appName}</h1>
	<p>This app consumes Sylius REST API to show products data.</p>

	{#if user.loggedIn}
		<button on:click={toggle}>
			Log out
		</button>
	{/if}

	{#if !user.loggedIn}
		<button on:click={toggle}>
			Log in
		</button>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>