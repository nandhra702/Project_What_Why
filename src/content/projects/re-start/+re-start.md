---
published: true
name: re-start
description: a tui-style browser startpage
thumbnail: re-start.png
images: [re-start.png]
github: https://github.com/refact0r/re-start
website: https://refact0r.github.io/re-start/
date: 2025-07-07
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

re-start is a tui-style browser startpage built with Svelte. The design was based on my [system24 discord theme](/projects/system24). Features include:

- task list with multiple backend options (local, todoist, google tasks)
- smart task input with natural date and project parsing
- weather summary (from open-meteo)
- customizable quick links
- stats (load time, ping, fps, viewport size)
- multiple color themes
- custom css support
- lightweight & performant (~100kb including fonts, loads in <50ms)

## motivation

I believe the startpage (aka new tab page) is a core part of the web browsing experience. You probably see it dozens of times every day! Yet most browsers have a bland startpage with only a couple links and a logo.

For a couple years now, I've been experimenting with various custom startpages, inspired by [r/startpages](https://www.reddit.com/r/startpages). But I never stuck with one for long. With re-start, I wanted to create a startpage that was actually useful, but still simple and enjoyable to use.

## implementation

This seems like a simple project, but there were a couple challenges.

1. I underestimated the complexity of the Todoist API. After an initial "full sync" to get all task data, the API will return a token that can then be used to do "partial syncs" that only return updated tasks. Merging these syncs with cached task data and ensuring consistency was a bit tricky. Along the way, I ended up discovering a bug with Todoist's backend where rapidly completing/uncompleting a task would add checkmark characters to the task name due to their Google Calendar integration. I reported it, but it has yet to be fixed.

2. I wanted to ensure that the startpage always displayed up-to-date information, but I had to be mindful of API rate limits. Weather data is cached for 15 minutes after every fetch. Todoist data is also cached, but the limits are generous enough to allow for partial syncs on every page load/visibility change. Both types of data can be manually refreshed by clicking the panel labels.

3. I wanted other people to actually use the startpage, so there had to be a way to change the weather location, todoist token, imperial/metric units, links, etc. I ended up building a settings menu that can be accessed from a hidden button in the top right. The settings are saved to localstorage, and everything updates instantly. It was a pretty good exercise in Svelte 5 state management.

4. Google tasks was pretty annoying to implement. I had to create a Google Cloud project, setup an OAuth app, and submit my OAuth app for verification (which required creating a video, a privacy policy, and a terms of service). I also found out you have to have a backend to securely handle PKCE OAuth flows. So I ended up switching to chrome.identity.getAuthToken(), which unfortunately only works in Chrome but simplifies the process and avoids the need for a separate server.

## thoughts

I'm pretty happy with how re-start turned out. It's something that actually helps me on a daily basis, and I hope others find it useful too. It's also the first browser extension I've published, so it was a good learning experience.

---

[privacy policy](/projects/re-start/privacy-policy) • [terms of service](/projects/re-start/terms-of-service)
