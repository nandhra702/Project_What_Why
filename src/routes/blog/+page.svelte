<script>
	import { formatDate } from '$lib/js/utils.js';
	import { iconMap } from '$lib/js/icons.js';

	let { data } = $props();
</script>

<main>
	<h1>blog</h1>

	<div class="posts">
		{#each data.posts as post}
			{@const Icon = iconMap[post.icon]}
			<a href={'/blog/' + post.slug} class="link">
				<div class="date">{formatDate(post.date)}</div>
				<h2>
					{#if post.icon}
						<Icon class="icon" />
					{/if}{post.name}<span class="arrow">-></span>
				</h2>
				<div class="description">{post.description}</div>
			</a>
		{/each}
	</div>
</main>

<style>
	main {
		width: 100%;
		max-width: 53rem;
		margin: 0 auto 10rem auto;
		padding: 0 1.5rem;
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		max-width: 100%;
	}

	h2 {
		font-size: 1.5rem;
		margin: 0;
		color: var(--txt);
	}

	h2 :global(.icon) {
		margin-right: 0.75ch;
	}

	.date {
		font-size: 1.2rem;
		font-family: 'Space Mono', monospace;
		color: var(--txt-2);
		margin-top: 0.2rem;
	}

	a {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: left;
		gap: 0.8rem 2rem;
	}

	.description {
		grid-column: 2;
	}

	@media (max-width: 600px) {
		a {
			grid-template-columns: auto;
			gap: 0.8rem;

			.description {
				grid-column: 1;
			}
		}
	}
</style>
