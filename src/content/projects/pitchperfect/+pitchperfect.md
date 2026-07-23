---
published: true
name: pitchperfect
description: offline speech coach that analyzes filler words and speaking clarity
thumbnail: home.png
images: ['home.png', 'timer.png', 'report.png', 'recomendation.png']
github: https://github.com/nandhra702/Pitch-Perfect
blog: /blog/pitchperfect
date: 2026-07-20
---

A browser-based speech practice platform powered by **Faster-Whisper** running entirely offline. Gives you a random topic, lets you think for a minute, records two minutes of speech, then produces a report card with filler word counts, vocabulary diversity, speaking speed, and a clean speech score — no cloud APIs involved.

Built with **FastAPI** on the backend and plain HTML/CSS/JS on the frontend. Audio is captured via the MediaRecorder API, sent to Faster-Whisper for local transcription, then analyzed with a regex engine tuned for multi-word fillers like "you know" and "I mean."

Read the [blog post](/blog/pitchperfect) for the full write-up on how it was built.
