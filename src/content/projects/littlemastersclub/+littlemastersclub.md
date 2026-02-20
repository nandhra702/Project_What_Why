---
published: true
name: little masters club
description: website for little masters club
thumbnail: lmc0.png
images: [lmc.png, lmc2.png, lmc3.png, lmc4.png, lmc5.png]
github: 
website: https://littlemastersclub.org
date: 2024-04-15
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

Little Masters Club (LMC) is a 501(c)(3) nonprofit that helps kids become learners, mentors, and leaders through community service, cultural exploration, and education. I joined a team of around 10 volunteers to build their new website. We were split between content and technical work, and I ended up becoming the tech lead for the project.

## tech

The project is built with SvelteKit and uses Sanity as a headless CMS. This combo gives us a fast, SEO-friendly frontend while providing administrators with a user-friendly interface to manage content. The project also uses Typescript and SCSS. It is hosted and deployed on Vercel. Analytics are tracked using a self-hosted Umami instance,

## cms

One of the main goals was to make the site easy for non-developers to update. We decided on Sanity because it supported Sveltekit and had good headless CMS features. Sanity provides an intuitive studio interface where administrators can create and manage various content types like events, programs, newsletters, etc. It also allows administrators to edit content in specific custom sections like the homepage and create entirely new generic pages. Unfortunately, I wasn't able to implement live previews before launch, but I believe Sanity does support this feature.

## performance

Beyond the usual optimizations like using modern image formats, I implemented Vercel's Incremental Static Regeneration (ISR). ISR caches pages so they can be served from CDNs as static pages, which improves loading speed.

Unfortunately this system does bring a good amount of complexity. Since the pages are cached, there needs to be a mechanism for updating the cache when content changes. To handle this, we set up a Sanity webhook that calls the `/api/revalidate` endpoint on the site whenever the CMS is updated. This dynamically refreshes the ISR cache for the specific page that was changed, so users always see fresh content without sacrificing performance.

## thoughts

This was my first real professional web development experience. Beyond just writing code, I got to do design work, creating prototypes in Figma, presenting them to nonprofit leadership, and iterating based on feedback. We also ran user surveys to understand what visitors actually needed from the site.

Getting familiar with Sanity was a big part of the project. I wanted to provide a professional CMS system so that non-technical staff could edit the website on their own. Sanity's structured content approach was great for this.

That said, I think the SvelteKit/Sanity stack with the ISR system was maybe a bit overkill. It introduced a fair amount of complexity and maintenance overhead—webhook configurations, cache invalidation logic, and the general learning curve for future maintainers. On the other hand, it did allow for completely custom styling and a really performant final product.

Overall, this project taught me a lot about working with stakeholders, coordinating with a team, and making technical decisions. I'm happy I was able to help LMC expand their online presence.
