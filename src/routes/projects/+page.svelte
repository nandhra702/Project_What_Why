<script>
	let { data } = $props();
</script>

<main>
	<h1>
		projects<span class="count" aria-label="{data.posts.length} projects"
			>[{data.posts.length}]</span
		>
	</h1>
	<div class="posts">
		{#each data.posts as post}
			<a href={'/projects/' + post.slug} class="link">
				<h2>{post.name}<span class="arrow">-></span></h2>
				<div class="description">{post.description}</div>
			</a>
		{/each}
	</div>
</main>

<style>
	main {
		padding: 0 4rem 4rem 4rem;
	}

	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		gap: 2rem;
		max-width: 100%;
	}

	h2 {
		margin: 0.75rem 0 0.25rem 0;
		color: var(--txt);
		font-size: 1.5rem;
	}

	.count {
		color: var(--bg-3);
	}

	@media (max-width: 850px) {
		main {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		.posts {
			grid-template-columns: auto;
		}
	}
</style>
