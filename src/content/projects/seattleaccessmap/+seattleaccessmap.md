---
published: true
name: seattleaccessmap
description: an accessibility visualization and routing tool
thumbnail: sam.png
images: [sam3.png, sam4.png, sam5.png, sam6.png, sam1.png]
github: https://github.com/refact0r/seattleaccessmap
website: https://refact0r.github.io/seattleaccessmap/
date: "2026-02-08"
---

seattleAccessMap is an accessibility data visualization and routing tool for Seattle. It uses the [Project Sidewalk](https://sidewalk-sea.cs.washington.edu/) dataset, which consists of ~80,000 crowdsourced observations of accessibility barriers such as missing curb ramps, broken surfaces, obstacles, and missing sidewalks.

The project won 1st place in the 2026 [DubsTech Datathon](https://dubstech.org/) in the Access to Everyday Life track.

## recap

Building this project was my first time participating in a "data hackathon". It was an interesting experience compared to normal hackathons, because we were provided datasets and given tighter constraints and prompts to work within. 

To be honest, I was kind of disappointed with the datasets we were given. The climate dataset only provided pollution numbers by county, so it wasn't very granular. The web accessibility dataset was alright, but I felt like building an ML model on it was pointless since checking web accessibility issues is largely a deterministic process. So we ended up choosing the Project Sidewalk dataset, where I saw opportunity to build some cool visualizations and tools (also because my teammate literally works for the lab that created it lol).

We initially explored possible ML opportunities, but didn't really see much potential beyond clustering. So we first built a basic visualization and clustered the points using HDBSCAN to show accessibility "hotspots". Then we had the idea to build an accessibility routing tool, which didn't really fit the classic data hackathon project archetype, but seemed like it could be useful. It turned out to be somewhat straightforward, basically using Djikstra's algorithm on the street network graph weighted by accessibility issue severity. Finally, we did some more basic data analysis with graphs etc, and packaged it all into a nice looking website (with no frameworks, just a a monstrous HTML and CSS file).

You can read more about the data/algorithm details on the actual [project website](https://refact0r.github.io/seattleaccessmap).

This was certainly not the most technically complex project I've worked on, but a win is a win.
