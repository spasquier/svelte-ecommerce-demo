<script context="module">
    let promise;
	async function getProducts() {
		const res = await fetch('https://sylius.mysite.app/api/v1/products/?page=1&limit=6', { 
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer YmZkYmIzY2Y5OWE3NjMyNjEwMWMyZTYyNDVhMjJmNzVlZDE3MTcwZmNhNmZkZWI4NWQ5ZjY4MjdhMDZhZDI5NQ'
            })
        });
        const data = await res.text();
		if (res.ok) {
            return JSON.parse(data);
		} else {
			throw new Error(data);
		}
    }
    
    export function handleClick() {
		promise = getProducts();
	}
</script>

{#await promise}
	<p>Wait a moment please...</p>
{:then products}
	<div class="row">
        <div class="col">
            <div class="row">
                {#each products._embedded.items as product}
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <img class="card-img-top" src="https://sylius.mysite.app/media/image/{product.images[0].path}" alt="{product.name}">
                            <div class="card-body">
                                <h4 class="card-title"><a href="#" title="View Product">{product.name}</a></h4>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corrupti magnam praesentium vero. Sit, magni id! Neque dicta adipisci porro debitis perferendis blanditiis sit hic tempore veniam similique! Omnis, repellat!.</p>
                                <div class="row">
                                    <div class="col">
                                        <p class="btn btn-danger btn-block">99.00 $</p>
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-success btn-block">View details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
.card {
    margin-bottom: 1em;
}
.card .card-title {
    min-height: 60px;
}
</style>