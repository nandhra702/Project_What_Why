---
published: true
name: "PitchPerfect : Started as a joke"
icon: 'code'
description: Building a speech coach that measures clarity instead of confidence.
date: 2026-07-20
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

During one of our internship presentations, a friend and I noticed that a classmate kept saying **"so"** every few seconds.

We joked,

> "Someone should really make a So Counter."

It was funny for about five minutes. Then I realized that everyone around us — including me — had a filler word they overused without even noticing.

That tiny joke eventually became **PitchPerfect**.

---

## 1. What was the issue

People spend hours preparing **what** they're going to say. Very few prepare **how** they say it.

Whether it's an interview, presentation, viva, or meeting, the biggest problems are usually the same:

- Speaking before thinking.
- Using filler words to buy time.
- Having no objective way to measure improvement.
- Practicing only prepared speeches instead of spontaneous speaking.

Existing speech-analysis platforms often require subscriptions or cloud processing. I wanted something that anyone could run completely offline.

---

## 2. What has been built

PitchPerfect is a browser-based speech practice platform that simulates impromptu speaking. Instead of asking users to upload speeches, it encourages daily practice.

<Image image="home.png" alt="pitchperfect home" />

Users first receive a random speaking topic. The randomness is intentional — it prevents memorized speeches and encourages thinking on the spot.

They are then given one minute to organize their thoughts. After that, recording starts automatically for two minutes.

<Image image="timer.png" alt="pitchperfect think timer" />

Once recording finishes, the audio is processed locally using Faster-Whisper. No cloud APIs are involved. The generated transcript is then analyzed for filler words such as:

- so / like / um / actually / you know / i mean

Instead of simply counting occurrences, the application calculates:

- Total words
- Total fillers
- Vocabulary diversity
- Speaking speed
- Individual filler frequencies
- Clean Speech Score

<Image image="report.png" alt="pitchperfect report card" />

Finally, users receive a visual report card showing exactly where they need improvement. The idea isn't to eliminate personality from speech — it's to remove unnecessary words that distract from the actual message.

<Image image="recomendation.png" alt="pitchperfect recommendations" />

---

## 3. Why build it offline?

Most speech analysis tools upload recordings to external servers. For something as personal as practicing interviews or presentations, I preferred an entirely local workflow.

Running Whisper locally means:

- No API costs.
- No rate limits.
- No internet dependency.
- Better privacy.

The only thing leaving the microphone is... nothing. Everything stays on the user's machine.

---

## 4. How does the architecture fit together?

The application is intentionally simple.

1. The browser records audio using the MediaRecorder API.
2. FastAPI receives the recording.
3. Faster-Whisper converts speech into text.
4. A lightweight regex engine detects filler words.
5. The frontend visualizes the analysis as an interactive report.

Keeping each component independent made it much easier to experiment with different transcription models and analysis algorithms.

---

## 5. What I learned

1. **Offline AI Can Be Practical:** Running **Faster-Whisper** locally is surprisingly fast while keeping user recordings private and eliminating API costs.

2. **Working with Browser Media APIs:** Implementing microphone recording introduced me to the **MediaRecorder API**, handling audio streams in JavaScript, and managing recording lifecycles between the frontend and backend.

3. **Designing Meaningful User Feedback:** Simply displaying a transcript isn't particularly useful. Visual statistics — speech scores, filler counts, vocabulary diversity, speaking speed — make progress much easier to understand.

4. **Text Processing with Regular Expressions:** Detecting filler words became more challenging than expected once multi-word phrases like **"you know"** and **"I mean"** were involved. Designing the regex pipeline taught me the importance of matching longer phrases before individual words to avoid incorrect counts.

5. **Modular Application Design:** Separating recording, transcription, analysis, and visualization into independent components resulted in a cleaner architecture that is easier to maintain and can later be extended with pronunciation scoring, pause detection, or sentiment analysis.

6. **Privacy-First Development:** Building the entire pipeline to run locally reinforced how much can be achieved without relying on external services.
