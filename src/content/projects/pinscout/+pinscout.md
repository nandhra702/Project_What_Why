---
published: true
name: pinScout
description: a crowdsourced, gamified urban exploration map
thumbnail: pinscout.png
images: [pinscout.png, pinscout2.png, pinscout3.png, pinscout4.png]
github: https://github.com/refact0r/pinscout
website: https://pinscout.vercel.app
date: 2025-02-20
---

pinScout is a crowdsourced, gamified urban exploration map. Users can create pins to label things ranging from restrooms to historical landmarks. Once a pin has been created, users can submit images or reviews to provide additional information about it. We planned to include a gamified aspect (but didn't have enough time to full implement it) where users would earn points from participating. There would also be leaderboards and challenges to further motivate users to explore their cities.

pinScout was created for [EmP Hackfest Winter 2025](https://winter-2025-emp-hackfest.devpost.com/), and won 3rd place.

## motivation

The theme of the hackathon was "facilitate access to urban or natural resources". We decided to focus on the idea of outdoor urban exploration. Often, when in parks or cities, it is difficult to find utilities like restrooms, water fountains, trash cans, etc. Additionally, we wanted to encourage people to share cool places or points of interest like art installations, scenic viewpoints, and more. Finally, transportation, especially public transportation is important for facilitating urban exploration, so we decided to include that as well.

## implementation

pinScout was built on the SvelteKit framework. It uses Mapbox for the map implementation, and Supabase for database and auth. It is hosted on Vercel.

I thought at the beginning that the map implementation would be the hardest part, but it wasn't too bad. The only annoying part was getting user location working. In the end we probably spent the most time setting up the database and integrating it with the app.

## thoughts

I'm happy with how this project turned out, but I feel like we overplanned and underdelivered. We definitely should've focused more on implementing the gamification aspect, and more clearly explaining to the judges the motivations and uses of the app. Also, I wished we could've done a more unique visual design.
