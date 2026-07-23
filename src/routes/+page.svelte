<script>
	import LogoAnimated from '$lib/components/LogoAnimated.svelte';
</script>

<main>
	<div class="container">
		<div class="row">
			<div class="logo">
				<LogoAnimated />
			</div>
			<div class="heading">
				<h1>sukhraj singh</h1>
			</div>
		</div>
		<p class="bio"> hey there! i'm a cse student at shiv nadar institute of eminence. .</p>
		<nav>
			<a class="nav" href="/about">
				<span class="arrow">-></span><span class="slash">/</span>about
			</a>
			<a class="nav" href="/projects">
				<span class="arrow">-></span><span class="slash">/</span>projects
			</a>
			<a class="nav" href="/blog">
				<span class="arrow">-></span><span class="slash">/</span>blog
			</a>
			<a class="nav" href="/contact">
				<span class="arrow">-></span><span class="slash">/</span>contact
			</a>
			<a class="nav" href="/resume.pdf" target="_blank">
				<span class="arrow">-></span><span class="slash">/</span>resume
			</a>
		</nav>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		max-height: calc(100vh - 12rem);
		margin: 0 1.5rem;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.logo {
		width: 3.75rem;
		height: 3.75rem;
		flex-shrink: 0;
	}

	.heading {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0;
	}

	.role {
		font-size: 1.125rem;
		font-family: 'Space Mono', monospace;
		color: var(--txt-2);
		margin: 0;
	}

	.sep {
		margin: 0 0.5ch;
	}

	.bio {
		font-size: 1.25rem;
		margin: 1rem 0;
	}

	nav {
		display: flex;
		gap: 2rem;

		a {
			font-size: 1.5rem;
			font-family: 'Space Mono', monospace;
		}
	}

	p {
		font-size: 1.25rem;
		margin: 1rem 0;
	}

	@media (max-width: 600px) {
		nav {
			flex-direction: column;
			gap: 1rem;
		}
		.row {
			flex-direction: column;
			gap: 0.75rem;
			align-items: flex-start;
		}
	}
</style>
