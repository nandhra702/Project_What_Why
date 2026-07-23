<script>
	let { image, alt, sizes = '', loading = 'eager', fetchpriority = 'auto' } = $props();

	const isExternalUrl = $derived(image ? /^https?:\/\//.test(image) : false);

	const localImages = import.meta.glob('/src/content/**/*.{jpeg,jpg,png,gif,webp,svg}', {
		import: 'default',
		eager: true
	});

	function importImage(image) {
		for (const [path, src] of Object.entries(localImages)) {
			if (path.includes(image)) {
				return src;
			}
		}
	}

	const src = $derived(image && !isExternalUrl ? importImage(image) : null);
</script>

{#if isExternalUrl}
	<img
		src={image}
		{alt}
		{loading}
		{fetchpriority}
		onload={(e) => (e.target.style.opacity = 1)}
	/>
{:else if src}
	<img
		{src}
		{alt}
		{loading}
		{fetchpriority}
		onload={(e) => (e.target.style.opacity = 1)}
	/>
{/if}

<style>
	img {
		display: block;
		width: var(--width, 100%);
		height: var(--height, auto);
		aspect-ratio: var(--aspect-ratio, auto);
		object-fit: cover;
		transition: opacity 0.2s;
		opacity: 0;
		margin: auto;
	}
</style>
