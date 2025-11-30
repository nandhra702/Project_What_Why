---
published: true
name: orbit
description: ai-powered hyperlocal professional networking
thumbnail: orbit-thumbnail.png
images: [orbit.png, orbit2.png, orbit3.png, orbit4.png]
github: 
date: 2025-09-21
aspect_ratio: tall 
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

Orbit is a hyperlocal networking app that helps users discover and connect with nearby professionals. It combines real-time location, AI-powered semantic search, and an intuitive interface to make networking at conferences, hackathons, and other events more seamless and engaging.

This project was created for the CascadiaJS 2025 Hackathon.

## the idea

Networking at large events is kinda hard. You meet interesting people in passing, but exchanging contact information feels awkward. Even when you do connect, it's easy to forget who someone was or what they were working on.

We built Orbit to solve this by creating a faster, more intuitive way to discover and connect with people who are physically nearby. The original idea was for events, but the system we built could work anywhere, like coffee shops, coworking spaces, or college campuses.

## the app

Orbit's main screen features a honeycomb grid of profile picture bubbles arranged around the user at the center, representing nearby people to connect with. This interface was inspired by the Apple Watch app selector. The bubbles are organized by physical proximity: the closest people appear in the first ring, the next closest in the second ring, and so on. The bubbles also scale dynamically as the user pans their view. Tapping a bubble opens that person's full profile with their bio, LinkedIn, and other links, plus a "wave" button to send them a quick hello via SMS.

The second screen provides a traditional map view with the same interactive bubbles. This page also includes semantic search powered by vector embeddings. Users can search naturally for skills, interests, or expertise, and Orbit intelligently matches them with relevant people nearby.

Finally, there's a profile page where users can edit their information and manage their account.

## implementation

Orbit is built as a SvelteKit web app optimized for mobile. The backend is an Express server that handles real-time updates via websockets, keeping the frontend synchronized with everyone's current positions.

We used Supabase for authentication (GitHub OAuth) and storing user profiles. The AI-powered search was implemented through Langflow, which processes user queries with OpenAI embeddings to perform semantic matching across all nearby users. We wanted to expand this feature to proactively recommend people based on complementary skills or shared interests, but we ran out of time. Twilio is used for the SMS wave feature, sending quick introduction messages between users. This was another area we had hoped to expand more.

## challenges

This was our first time working with Langflow, and we encountered some unexpected difficulties integrating it with our stack. Managing state with WebSockets was also challenging. Keeping location data synchronized across multiple clients while handling edge cases required careful planning.

Implementing the map and geolocation features went relatively smoothly since I had prior experience from PinScout, but coordinating the real-time aspect with the UI still took some work.

## thoughts

I think we built a solid MVP that demonstrates the core concept. There was definitely a lot of room for improvement though. We could have fleshed out the recommendation system, and my teammate had ambitious ideas about adding facial recognition for a "who's that" feature, but time constraints got the better of us.

The UI design was quite simple, but effective. I'm particularly proud of the Apple Watch-inspired homescreen. It makes browsing nearby people feel more playful and engaging compared to a standard grid or list.

Orbit was a great opportunity to experiment with real-time data and mobile UI design. I learned a lot about integrating new AI tools and working with websockets.
