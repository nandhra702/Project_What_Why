---
published: true
name: dubflow
description: a context-aware desktop focus companion
thumbnail: dubflow.png
images: [dubflow.png]
github: https://github.com/refact0r/dubflow
date: 2025-10-19
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

DubFlow is a smart focus tracker that keeps you accountable in the cutest way possible. It's a desktop app/overlay that uses both webcam video and window monitoring to recognize when you're focused or distracted. Your on-screen companion, Dubs (the UW mascot), reacts in real time to your behavior.

This project was created for DubHacks 2025.

<CaptionImage image="dubs.gif" alt="Dubs sleeps when you're focused." sizes="20rem" --width="20rem" />

## the idea

A lot of focus/study apps have the same problem: they're just glorified timers. We wanted to build something that could **actively** keep you focused across your entire workflow. Since the theme of DubHacks was "Play with ideas," we thought it would be fun to create a playful companion that could help keep you focused. To differentiate from other apps, we focused on real-time context awareness.

## the app

DubFlow has a main dashboard that allows users to start new focus sessions, view focus analytics, control Dubs, and view past session history. Once a focus session is started, the Dubs overlay appears and begins monitoring your focus in real-time.

There are two ways to trigger a distracted state: looking away from the screen or switching to a distracting app/website. Dubs will then respond with a context-aware message like: "Only 20 minutes remain for those integrals, so put that phone away before I eat it." The session is visualized on the progress bar, with yellow segments indicating distracted periods and purple segments indicating focused periods.

## implementation

DubFlow is built with SvelteKit and Electron. The architecture combines multiple data sources to create a complete picture of your focus state.

<CaptionImage image="diagram.jpg" alt="System architecture diagram of the main distraction flow." sizes="50rem" />

The vision processing component uses OpenCV locally for real-time eye tracking and AWS Rekognition for detailed context analysis. Rekognition detects distracting objects in the frame such as phones, drinks, or other devices. For window monitoring, we use get-windows to track active applications and websites.

All this context is piped to an AWS Bedrock-hosted LLM, which generates relevant and concise messages that keep you focused. The messages are displayed on-screen, spoken aloud through ElevenLabs, and sent to the user's phone via Pushover notifications.

## challenges

One of the main challenges was managing state across multiple data inputs and outputs. We had to carefully design event triggers for when Dubs should react while managing the avatar's state changes from webcam input and window activity. Getting these systems to stay in sync without spamming reactions required building a unified distraction manager that could handle overlapping signals and implement grace periods.

Building the progress bar visualization was also somewhat challenging. We wanted to show focused and distracted periods as colored segments on a timeline, but this meant storing state changes, and building a system that could efficiently update the progress bar in real-time without overlaps or gaps.

Integrating AWS Rekognition and Bedrock came with its own hurdles. We worked hard on engineering prompts for Bedrock that would generate short, natural, funny messages instead of repetitive ones.

## thoughts

I'm proud that we built a tool we'd actually use ourselves! Even as we were developing DubFlow, I found myself using Dubs to stay positive and productive during the hackathon.

My biggest learning was managing a project with many different parts. This was definitely the most technically complex hackathon project I've worked on. I pushed for creating a clear system architecture diagram early on, which helped immensely with implementation and collaboration.

Plus, our Dubs is super cute. (All animations and sprites 100% hand drawn by my teammate Derek!)
