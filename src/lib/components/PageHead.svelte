<script>
	import { page } from '$app/stores';

	let { title, description, type = 'website' } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:site_name" content="sukhraj" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content={type} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={$page.url.href} />
</svelte:head>
