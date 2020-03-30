import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		appName: 'E-commerce App Demo',
		authenticated: false
	}
});

export default app;