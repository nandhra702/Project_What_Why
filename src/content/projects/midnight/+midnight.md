---
published: true
name: midnight
description: a dark, rounded discord theme
thumbnail: midnight.png
images: [midnight2.png, midnight-ctp.png, midnight-vc.png]
github: https://github.com/refact0r/midnight-discord
website: https://betterdiscord.app/theme/midnight
date: 2021-10-02
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

Midnight is a dark, rounded, and customizable theme for Discord. It is designed to be visually appealing but simple and performant, with minor improvements such as separated panels, animations, corner rounding, and a new font. The theme is completely customizable through CSS variables, and preset "flavors" (like catppuccin!) are available in the Github repository.

## a brief history

Midnight began with the typing test <https://monkeytype.com>. The website had a customizable color theme system, so I made a super dark, bluish theme. Surprisingly, it was added to the website (my 4th ever pull request!).

<CaptionImage image="midnight-mt.png" alt="the original monkeytype midnight theme" sizes="50rem" loading="lazy"/>

I also began customizing various aspects of the Monkeytype interface using custom CSS. I had a lot of fun messing around and experimenting with CSS. Around the same time I discovered BetterDiscord, and I decided to tackle the challenge of creating a Discord theme myself.

### v1

The first version of midnight was essentially a port of the Monkeytype theme colors into Discord, by overwriting Discord's color variables. I changed the colors to be less blue and more readable.

<CaptionImage image="midnight-v1.png" alt="the first version of midnight discord" sizes="50rem" loading="lazy"/>

Eventually I added some CSS tweaks, such as separating the chat panels into rounded boxes (inspired by the Zelk theme), and adding MacOS-style window control buttons (inspired by the Tokyo Night theme).

The more I added, the more I discovered how terrible Discord's CSS is. Almost half the theme was dedicated to fixing Discord's CSS so that their own variables would apply correctly. It was a bit of a mess, but it worked.

### rewrites

The thing with Discord themes is that they are never finished. Discord is constantly changing, and the theme has to be updated to keep up. As of 2025, the theme has been completely rewritten at least 3 separate times.

<CaptionImage image="midnight-ctp.png" alt="midnight's catppuccin flavor" sizes="50rem" loading="lazy"/>

## thoughts

I have been surprised with midnight's success, gaining over 300,000 downloads on BetterDiscord and over 1,000 GitHub stars. I'm happy that I've been able to make something that so many people enjoy using. This project has also taught me a ton about CSS. It's been my longest running project so far, and I don't see it ending anytime soon.
