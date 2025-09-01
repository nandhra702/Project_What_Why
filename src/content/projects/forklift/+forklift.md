---
published: true
name: forklift
description: your ai-powered shortcut to open source
thumbnail: forklift-1.png
images: [forklift-1.png, forklift-2.png, forklift-3.png, forklift-4.png, forklift-5.png, forklift-6.png]
github: https://github.com/refact0r/forklift
website: https://fork-lift.vercel.app/
date: 2025-08-31
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

Forklift is an ai-powered platform that helps users find repositories, understand codebases, discover issues, and start contributing.

This project was created for the [Roo Code Hackathon](https://roo-code-hackathon.devpost.com/). It won Best First Time Hack (two members of the team were first-time hackathon participants).

## idea

My teammate [yaoderek](https://github.com/yaoderek) came up with the main idea. He wanted to contribute to open source projects but found it difficult to onboard and understand codebases. Based on this, we came up with 3 key areas of focus: repository discovery, codebase understanding/onboarding, and issue discovery. These formed the core features of forklift.

## implementation

Early on, my team vibecoded a React prototype and Python backend. I was honestly surprised by how well it worked. Eventually, we decided to rebuild the app with SvelteKit, as I was more experienced with it. Half of the team continued to vibecode on the React prototype, testing out various features. While it wasn't very efficient to have two separate codebases, it did allow us to explore different approaches. Eventually, we were able to port the backend functionality to the SvelteKit app and pair it with a more refined frontend.

We used the Github API to fetch repository data, and the OpenAI API to generate summaries, guides, and classify issue difficulty. User logins and data were handled with Supabase and Github OAuth. We also implemented a caching layer with Redis, as generating certain pages could take like 15 seconds. The Sveltekit site was hosted on Vercel.

## thoughts

This was the first hackathon where I was really trying to use AI at every stage. I was surprised a few times by how well one-shot or two-shot prompts worked for implementing features. For more complex tasks, I found that discussing first with the AI, then asking it to summarize into a general instructions doc, and then prompting it to write code snippets based on that doc worked well. Still, there was a lot of manual revising and deleting, especially when it came to CSS.

Overall, I'm very happy with our performance. While the functionality of the project isn't the most exciting, it serves a real usecase. The app's interface is clean and actually quite polished. We also finished like 7 hours before the deadline, which was certainly a first for me.
