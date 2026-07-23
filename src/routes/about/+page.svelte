<script>
	import GithubIcon from '~icons/ph/github-logo';
	import LinkedinIcon from '~icons/ph/linkedin-logo';
	import EmailIcon from '~icons/ph/envelope';
	import FileIcon from '~icons/ph/file-text';

	let content = {
		tech: {
			languages: ['c', 'c++', 'python', 'javascript', 'sql', 'html', 'css'],
			frameworks: ['flask', 'fastapi', 'django', 'tkinter', 'spacy', 'sentence-transformers', 'sveltekit'],
			databases: ['sqlite', 'mysql', 'supabase'],
			tools: ['git', 'docker', 'bash', 'apscheduler', 'pybind11'],
			concepts: ['dsa', 'oop', 'dbms', 'os', 'computer networks', 'nlp', 'information retrieval', 'vector search']
		}
	};

	let experience = [
		{
			org: 'Hewlett Packard Enterprise',
			role: 'cpp3 intern',
			period: 'jan 2026 – may 2026',
			
		},
		{
			org: 'Hewlett packard enterprise',
			role: 'cpp2 intern',
			period: 'may 2025 – jan 2026',
			
		},
		{
			org: 'Shiv Nadar University',
			role: 'Teaching Assistant',
			period: 'sept 2025 – may 2026',
			
		},
		{
			org: 'Association of Computing Machinery Club SNU',
			role: 'Content team lead',
			period: 'sept 2025 – may 2026',
			
		}
	];
</script>

<main>
	<h1>about</h1>
	<p>
		Hey! I'm Sukhraj, a computer science student at Shiv Nadar institution of Eminence. I build small tools that make my life easier, read documentation, and try to
		understand how things work internally. i enjoy building solutions, tinkering with systems, and
		occasionally touching grass.
	</p>
	<p>
		This site is where i keep notes on everything i build: what it does, why i made it, how it
		works, and what i learned. I call it "project_what_why".
	</p>

	<h2>links</h2>
	<div class="links">
		<a href="https://github.com/nandhra702" class="external icon">
			<GithubIcon /><span class="text">github</span><span class="arrow">/></span>
		</a>
		<a href="https://www.linkedin.com/in/sukhraj-singh-nandhra-85b03a279" class="external icon">
			<LinkedinIcon /><span class="text">linkedin</span><span class="arrow">/></span>
		</a>
		<a href="mailto:sukhrajsinghnandhra@gmail.com" class="external icon">
			<EmailIcon /><span class="text">email</span><span class="arrow">/></span>
		</a>
		<a href="/resume.pdf" target="_blank" class="external icon">
			<FileIcon /><span class="text">resume</span><span class="arrow">/></span>
		</a>
	</div>

	<h2>experience</h2>
	{#each experience as { org, role, period, points }}
		<div class="exp-block">
			<div class="exp-header">
				<span class="exp-org">{org}</span>
				<span class="sub"> — </span>
				<span class="exp-role">{role}</span>
				<span class="exp-period">{period}</span>
			</div>
			<ul class="exp-points">
				{#each points as point}
					<li>{point}</li>
				{/each}
			</ul>
		</div>
	{/each}

	<h2>tech</h2>
	{#each Object.keys(content.tech) as category}
		<div class="info">
			{category} <span class="sub">-></span>
			{#each content.tech[category] as item}
				{item}
				{#if item !== content.tech[category][content.tech[category].length - 1]}
					<span class="sub">/</span>&nbsp;
				{/if}
			{/each}
		</div>
	{/each}

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
		font-size: 1.25rem;
		margin: 0.5rem 0;
		display: block;
	}

	.info {
		font-size: 1.125rem;
		margin: 0.5rem 0;
		font-family: 'Space Mono', monospace;
	}

	.links {
		display: flex;
		flex-direction: column;
	}

	.icon {
		display: flex;
		align-items: center;
		gap: 0.75ch;

		:global(svg) {
			font-size: 1.125em;
			vertical-align: middle;
		}
	}

	.exp-block {
		margin: 1.25rem 0;
	}

	.exp-header {
		font-family: 'Space Mono', monospace;
		font-size: 1.125rem;
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0 0.5ch;
	}

	.exp-org {
		color: var(--txt);
	}

	.exp-role {
		color: var(--txt);
	}

	.exp-period {
		margin-left: auto;
		color: var(--txt-2);
		font-size: 1rem;
	}

	.exp-points {
		margin: 0.5rem 0 0 1.25rem;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.exp-points li {
		font-size: 1rem;
		color: var(--txt-2);
		line-height: 1.5;
		list-style: disc;
	}

	@media (max-width: 600px) {
		.exp-period {
			margin-left: 0;
			width: 100%;
		}
	}
</style>
