<script>
	let { svg } = $props();

	const svgs = import.meta.glob(`/src/content/*/*/*.svg`, {
		import: 'default',
		eager: true,
		query: '?raw'
	});

	function importSVG(svg) {
		for (const [path, src] of Object.entries(svgs)) {
			if (path.includes(svg)) {
				return src;
			}
		}
	}

	const src = $derived(svg ? importSVG(svg) : null);
</script>

<div class="svg-container">
	{#if src}
		{@html src}
	{/if}
</div>

<style>
	:global(.svg-container svg) {
		width: 100%;
		height: 100%;
	}
</style>
