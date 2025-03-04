<script>
	import DiscordIcon from '~icons/ph/discord-logo';
	import EmailIcon from '~icons/ph/envelope';

	let status = $state('submit ->');

	const handleSubmit = async (data) => {
		data.preventDefault();

		status = 'submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		object.access_key = 'e2076be5-0774-40df-b59a-4faead3fa269';
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});

		const result = await response.json();
		if (result.success) {
			status = 'message sent!';
		}
	};
</script>

<main>
	<h1>contact</h1>
	<p>ways to get in touch, in order from fastest to slowest.</p>
	<div class="info">
		<DiscordIcon />discord <span class="sub">-></span>
		<a href="https://discord.com/users/508863359777505290" class="external"
			>refact0r<span class="arrow">/></span>
		</a>
	</div>
	<div class="info">
		<EmailIcon />email <span class="sub">-></span>
		<a href="mailto:refact0r.contact@gmail.com" class="external"
			>refact0r.contact@gmail.com<span class="arrow">/></span>
		</a>
	</div>
	<br />
	<br />
	<h3>contact form</h3>
	<form onsubmit={handleSubmit}>
		<input type="text" name="name" placeholder="name" required />
		<input type="email" name="email" placeholder="email (if you want a reply)" required />
		<textarea name="message" placeholder="your message..." required rows="4"></textarea>
		<button type="submit">{status}</button>
	</form>
</main>

<style>
	main {
		width: 100%;
		max-width: 53rem;
		margin: 0 auto 10rem auto;
		padding: 0 1.5rem;
	}
	a {
		font-family: 'Space Mono', monospace;
		font-size: 1.2rem;
	}

	.info {
		font-size: 1.2rem;
		margin: 0.5rem 0;
		font-family: 'Space Mono', monospace;

		:global(svg) {
			vertical-align: sub;
			margin-right: 0.75ch;
			transform: translateY(6%);
			font-size: 1.1em;
		}
	}

	form {
		display: grid;
		grid-template-columns: auto auto;
		gap: 1rem;
	}

	input[type='text'],
	input[type='email'],
	textarea,
	button {
		background-color: transparent;
		border: none;
		padding: 1rem;
		color: inherit;
		font: inherit;
		font-size: 1.1rem;
		border: 2px solid var(--bg-3);
		transition: 0.2s;
		background-color: var(--bg-2);
		/* border-radius: 0.5rem; */

		&:focus {
			outline: none;
			border: 2px solid var(--txt-2);
		}
	}

	::placeholder {
		color: var(--txt-2);
	}

	textarea,
	button {
		grid-column: 1 / -1;
	}

	textarea {
		resize: vertical;
	}

	button {
		font-family: 'Space Mono', monospace;
		padding: 1rem 1.2rem;
		&:hover {
			border: 2px solid var(--txt-2);
		}
	}

	@media (max-width: 600px) {
		form {
			grid-template-columns: auto;
		}
	}
</style>
