<script>
	import { onMount } from 'svelte';

	let initialLoadComplete = false;
	let isHovering = false;
	let isAnimating = false;

	onMount(() => {
		// Wait for initial load to complete
		setTimeout(() => {
			initialLoadComplete = true;
		}, 3000); // 3s
	});

	function handleMouseEnter() {
		// Only trigger if initial load is done
		if (!initialLoadComplete) return;
		isHovering = true;
		if (!isAnimating) {
			isAnimating = true;
		}
	}

	function handleMouseLeave() {
		if (!initialLoadComplete) return;
		isHovering = false;
	}

	function handleAnimationEnd() {
		// After animation completes, check if still hovering
		if (initialLoadComplete) {
			if (isHovering) {
				// Restart animation by toggling the class
				isAnimating = false;
				setTimeout(() => {
					isAnimating = true;
				}, 0);
			} else {
				isAnimating = false;
			}
		}
	}
</script>

<svg
	width="100%"
	height="100%"
	viewBox="0 0 300 300"
	xmlns="http://www.w3.org/2000/svg"
	style="display: block; cursor: {initialLoadComplete ? 'pointer' : 'default'};"
	role="img"
	aria-label="Animated logo"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<defs>
		<style>
			/* Initial page load animations - 3s */
			@keyframes initial-load-180 {
				0% {
					transform: rotate(0deg) scaleX(0);
				}
				23.33% {
					transform: rotate(0deg) scaleX(1);
				}
				100% {
					transform: rotate(180deg) scaleX(1);
				}
			}

			@keyframes initial-load-420 {
				0% {
					transform: rotate(0deg) scaleX(0);
				}
				23.33% {
					transform: rotate(0deg) scaleX(1);
				}
				100% {
					transform: rotate(420deg) scaleX(1);
				}
			}

			@keyframes initial-load-660 {
				0% {
					transform: rotate(0deg) scaleX(0);
				}
				23.33% {
					transform: rotate(0deg) scaleX(1);
				}
				100% {
					transform: rotate(660deg) scaleX(1);
				}
			}

			/* Hover loop animations - full 4s cycle */
			@keyframes hover-loop-180 {
				0% {
					transform: rotate(180deg) scaleX(1);
				}
				17.5% {
					transform: rotate(180deg) scaleX(0);
				}
				18% {
					transform: rotate(0deg) scaleX(0);
				}
				35.5% {
					transform: rotate(0deg) scaleX(1);
				}
				90% {
					transform: rotate(180deg) scaleX(1);
				}
				100% {
					transform: rotate(180deg) scaleX(1);
				}
			}

			@keyframes hover-loop-420 {
				0% {
					transform: rotate(420deg) scaleX(1);
				}
				17.5% {
					transform: rotate(420deg) scaleX(0);
				}
				18% {
					transform: rotate(0deg) scaleX(0);
				}
				35.5% {
					transform: rotate(0deg) scaleX(1);
				}
				90% {
					transform: rotate(420deg) scaleX(1);
				}
				100% {
					transform: rotate(420deg) scaleX(1);
				}
			}

			@keyframes hover-loop-660 {
				0% {
					transform: rotate(660deg) scaleX(1);
				}
				17.5% {
					transform: rotate(660deg) scaleX(0);
				}
				18% {
					transform: rotate(0deg) scaleX(0);
				}
				35.5% {
					transform: rotate(0deg) scaleX(1);
				}
				90% {
					transform: rotate(660deg) scaleX(1);
				}
				100% {
					transform: rotate(660deg) scaleX(1);
				}
			}

			.spinner-line1 {
				animation: initial-load-180 3s cubic-bezier(0.55, 0.06, 0.36, 1) forwards;
				transform-origin: 150px 150px;
			}

			.spinner-line2 {
				animation: initial-load-420 3s cubic-bezier(0.55, 0.06, 0.36, 1) forwards;
				transform-origin: 150px 150px;
			}

			.spinner-line3 {
				animation: initial-load-660 3s cubic-bezier(0.55, 0.06, 0.36, 1) forwards;
				transform-origin: 150px 150px;
			}

			/* Static logo state after initial load completes */
			.spinner-line1.complete:not(.animating) {
				animation: none;
				transform: rotate(180deg) scaleX(1);
			}

			.spinner-line2.complete:not(.animating) {
				animation: none;
				transform: rotate(420deg) scaleX(1);
			}

			.spinner-line3.complete:not(.animating) {
				animation: none;
				transform: rotate(660deg) scaleX(1);
			}

			/* Hover animation - runs exactly once */
			.spinner-line1.animating {
				animation: hover-loop-180 4s cubic-bezier(0.55, 0.06, 0.36, 1) 1 forwards !important;
			}

			.spinner-line2.animating {
				animation: hover-loop-420 4s cubic-bezier(0.55, 0.06, 0.36, 1) 1 forwards !important;
			}

			.spinner-line3.animating {
				animation: hover-loop-660 4s cubic-bezier(0.55, 0.06, 0.36, 1) 1 forwards !important;
			}
		</style>
	</defs>
	<!-- Line 3 (Purple) - bottom layer -->
	<g
		class="spinner-line3"
		class:complete={initialLoadComplete}
		class:animating={isAnimating}
		on:animationend={handleAnimationEnd}
	>
		<line
			x1="27.92"
			y1="150"
			x2="272.66"
			y2="150"
			stroke="rgb(189, 99, 238)"
			stroke-width="19.84"
			stroke-linecap="round"
		/>
	</g>
	<!-- Line 2 (Blue) - middle layer -->
	<g
		class="spinner-line2"
		class:complete={initialLoadComplete}
		class:animating={isAnimating}
		on:animationend={handleAnimationEnd}
	>
		<line
			x1="27.92"
			y1="150"
			x2="272.66"
			y2="150"
			stroke="rgb(98, 98, 238)"
			stroke-width="19.84"
			stroke-linecap="round"
		/>
	</g>
	<!-- Line 1 (Cyan/Teal) - top layer -->
	<g
		class="spinner-line1"
		class:complete={initialLoadComplete}
		class:animating={isAnimating}
		on:animationend={handleAnimationEnd}
	>
		<line
			x1="27.92"
			y1="150"
			x2="272.66"
			y2="150"
			stroke="rgb(38, 187, 217)"
			stroke-width="19.84"
			stroke-linecap="round"
		/>
	</g>
</svg>
