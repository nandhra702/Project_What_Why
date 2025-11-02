<script>
	let { image, alt, sizes = '', loading = 'eager' } = $props();

	// Check if the image is an external URL
	const isExternalUrl = $derived(image ? /^https?:\/\//.test(image) : false);
	const isGif = $derived(image ? image.endsWith('.gif') : false);

	async function importImage(image) {
		if (image.endsWith('.gif')) {
			const gifs = import.meta.glob(`/src/content/**/*.gif`, {
				import: 'default'
			});

			for (const [path, src] of Object.entries(gifs)) {
				if (path.includes(image)) {
					return await src();
				}
			}
		}

		const pictures = import.meta.glob(`/src/content/**/*.{avif,heif,jpeg,jpg,png,tiff,webp}`, {
			import: 'default',
			query: {
				enhanced: true,
				w: '2400;2000;1600;1200;800;400'
			}
		});

		for (const [path, src] of Object.entries(pictures)) {
			if (path.includes(image)) {
				return await src();
			}
		}
	}
</script>

{#if isExternalUrl}
	<img src={image} {alt} {loading} {sizes} onload={(e) => (e.target.style.opacity = 1)} />
{:else if isGif}
	{#await importImage(image) then src}
		<img {src} {alt} {loading} onload={(e) => (e.target.style.opacity = 1)} />
	{/await}
{:else}
	<picture>
		{#await importImage(image) then src}
			<source srcset={src.sources.avif} type="image/avif" {sizes} />
			<source srcset={src.sources.webp} type="image/webp" {sizes} />
			<img
				src={src.img.src}
				{alt}
				{loading}
				width={src.img.w}
				height={src.img.h}
				onload={(e) => (e.target.style.opacity = 1)}
			/>
		{/await}
	</picture>
{/if}

<style>
	picture {
		aspect-ratio: var(--aspect-ratio, auto);
	}

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
