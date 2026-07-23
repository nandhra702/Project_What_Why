<script>
	import Image from '$lib/components/Image.svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	let { data } = $props();

	let { default: content, metadata } = data.post;

	let emblaApi;
	let options = { loop: true, align: 'center' };
	let loop = $state(true);

	function emblaInit(event) {
		emblaApi = event.detail;
		loop = emblaApi.internalEngine().slideLooper.canLoop();
	}

	function emblaNext() {
		emblaApi.scrollNext();
	}

	function emblaPrev() {
		emblaApi.scrollPrev();
	}

	const Content = $derived(content);
</script>

<main>
	<div class="head-1">
		<a href="/projects" class="back"><span class="arrow">&lt;-</span>projects</a>
	</div>
	<div class="head-2">
		<div class="row">
			<h1>{metadata.name}</h1>
			<div class="links">
				{#if metadata.website}
					<a class="external" href={metadata.website} target="_blank">
						site<span class="arrow">/></span>
					</a>
				{/if}
				{#if metadata.github}
					<a class="external" href={metadata.github} target="_blank">
						github<span class="arrow">/></span>
					</a>
				{/if}
				{#if metadata.blog}
					<a class="external" href={metadata.blog}>
						blog<span class="arrow">/></span>
					</a>
				{/if}
			</div>
		</div>
		<p class="description">
			{metadata.description}
		</p>
	</div>
	<div class="content">
		<Content />
	</div>
	{#if metadata.images && metadata.images.length > 0}
	<div class="embla" use:emblaCarouselSvelte={{ options }} onemblaInit={emblaInit}>
		<div class="embla__container" class:loop>
			{#each metadata.images as image, index}
				<div class="embla__slide" class:tall={metadata.aspect_ratio === 'tall'}>
					<Image
						{image}
						alt={metadata.description}
						sizes="(min-width: 800px) 50vw, 100vw"
						loading={index === 0 ? 'eager' : 'lazy'}
						fetchpriority={index === 0 ? 'high' : 'auto'}
					/>
				</div>
			{/each}
		</div>
		<button class="embla__prev" onclick={emblaPrev}><span>&lt;-</span></button>
		<button class="embla__next" onclick={emblaNext}><span>-></span></button>
	</div>
	{/if}
</main>

<style>
	main {
		width: 100%;
		padding: 1.5rem 0rem 10rem 0rem;
		margin: auto;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0;
		margin-right: auto;
	}

	.head-1 {
		margin: 0 auto;
		padding: 0 1.5rem;
		width: 100%;
		max-width: 53rem;
	}

	.head-2 {
		margin: 1rem auto 2rem auto;
		padding: 0 1.5rem;
		width: 100%;
		max-width: 53rem;

		a {
			font-family: 'Space Mono', monospace;
			font-size: 1.5rem;
		}

		.row,
		.links {
			display: flex;
			align-items: center;
			gap: 1rem 2rem;
		}

		.description {
			font-size: 1.125rem;
			margin: 0.5rem 0;
			font-style: italic;
			color: var(--txt-2);
		}
	}

	.content {
		width: 100%;
		max-width: 53rem;
		margin: auto;
		margin-top: 2rem;
		padding: 0 1.5rem;
	}

	.embla {
		overflow: hidden;
		position: relative;
		width: 100%;
		max-width: 53rem;
		margin: 2rem auto 0 auto;
		padding: 0 1.5rem;
	}
	.embla__container {
		display: flex;
		justify-content: center;

		&.loop {
			justify-content: unset;
		}
	}
	.embla__slide {
		flex: 0 0 80%;
		min-width: 0;
		margin-left: 0.75rem;
		margin-right: 0.75rem;

		&.tall {
			flex: 0 0 40%;
			max-width: 20rem;
		}
	}
	.embla__prev,
	.embla__next {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1.5rem;
		background: none;

		span {
			display: inline-block;
			color: var(--txt);
			font-size: 1.5rem;
			font-family: 'Space Mono', monospace;
			transform: scale(1);
			transition: 0.2s;
			opacity: 0;
			background: var(--bg-2);
			width: 2rem;
			height: 2rem;
			line-height: 1.8rem;
			border: 2px solid var(--bg-3);
		}

		&:hover span {
			opacity: 1;
			transform: scale(1.1);
		}
	}
	.embla__next {
		right: 1.5rem;
	}
	.embla__prev {
		left: 1.5rem;
	}

	@media (max-width: 850px) {
		.embla__slide {
			flex: 0 0 calc(100% - 1.5rem);

			&.tall {
				flex: 0 0 calc(100% - 1.5rem);
			}
		}
		.embla__prev,
		.embla__next {
			span {
				opacity: 1;
			}
		}
	}

	@media (max-width: 650px) {
		.head-2 {
			.row {
				flex-wrap: wrap;
			}
		}
	}
</style>
