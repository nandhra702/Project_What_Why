---
published: true
name: "Palladium : my try at getting me to read news"
icon: 'globe'
description: A local NLP news aggregation platform that clusters events and highlights publisher bias.
date: 2026-07-11
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

It all started with my promise to myself that I'd read the news. I installed an app, scrolled through it for a few days, then revoked its notification permissions because it would send me close to 10 notifications daily. Before I knew it, I hadn't opened that app for weeks.

My aim was not to know every news event — just the major ones. I also noticed something interesting: depending on which site I opened, the exact same event read like two completely different stories. One outlet would hyper-focus on a single quote, while another completely ignored it to highlight a different angle.

I wanted a clean dashboard that laid out international coverage side-by-side without hidden biases or tracking. I thought it would be interesting to compare news sources on the basis of what kind of coverage had been done for the same event.

And so, I started.

---

## 1. What was the issue

- I wanted a platform that automatically aggregates global news events and highlights exactly where publishers agree and where they diverge.
- The modern news landscape makes it tedious to cross-verify facts across multiple international outlets.
- Using ChatGPT to summarize an event takes effort to specially search for it.
- I did not have access to paid LLM APIs, and the free tier ones are always busy.
- I did not want AI to include any information not present in the articles — just stick to the point.

---

## 2. What has been built

<Image image="home_page.png" alt="palladium homepage" />

**Palladium** is a lightweight, cross-source media intelligence platform offering:

- **Short Event Summary:** Displays a short event summary, locally generated (without LLMs) and recommends top 2 articles to read to get maximum event coverage.

<Image image="article.png" alt="palladium article view" />

- **Semantic Event Clustering:** Collects articles from international RSS feeds every 6 hours and uses vector embeddings to group articles talking about the exact same real-world event.

<Image image="coverage_analysis.png" alt="palladium coverage analysis" />


- **Publisher Focus Tracking:** Uses deterministic math (TF-IDF) to pinpoint terms and themes that specific outlets uniquely emphasized.

- **Exclusive Fact Isolation:** Flags "Only Mentioned By" data points — spotlighting information that appeared in just a single publisher's coverage.

<Image image="heatmap.png" alt="palladium heatmap" />


- **Common Ground Detection:** Automatically extracts and highlights named entities (people, places, organizations) that *every* single publisher mentioned.
- **Chronological Reporting Timeline:** Displays all coverage of an event on a clean timeline, letting you watch the story evolve across different publishers over time.

<Image image="overlap.png" alt="palladium overlap view" />


---

## Why build an entirely local NLP pipeline?

Modern news aggregation tools usually throw an LLM prompt at the problem to generate summaries and find similarities.

- **The Bottleneck:** Relying on third-party AI APIs means paying per request, dealing with rate limits, and introducing latency. If your background worker processes hundreds of articles a day, API bills rack up fast. Plus, LLMs can accidentally invent facts or insert their own biases.
- **The Solution:** Build an entirely local, deterministic pipeline. By using a small, local sentence-transformer model (`all-MiniLM-L6-v2`), the system handles text embedding right on the server for free. For analysis, it swaps out chat models for classic NLP (spaCy and TF-IDF matrix math). The result is an incredibly fast, predictable engine that costs $0 to run.

## How does the architecture fit together?

The project is split into three main layers:

1. **Ingestion & Automation Layer (Python & APScheduler):** Wakes up every 6 hours to pull data from the RSS registry (`feeds.json`), parsing raw XML and extracting clean article body text using **BeautifulSoup4** and **trafilatura**.
2. **Vector & Clustering Engine (Scikit-Learn & PyTorch):** Converts text into dense vector math using the sentence-transformer. It then runs an Agglomerative Clustering algorithm to decide which articles belong to the same event bubble based on semantic closeness.
3. **Presentation & Analytics Layer (Flask & SQLite):** Stores the relational clusters locally. When a user loads the dashboard, Flask runs the spaCy entity extraction and TF-IDF comparisons on the fly, rendering a clean, lightweight HTML interface.

---

## 3. What was learned

1. **Local NLP over LLM Hype:** You don't need a massive generative AI model to group text or analyze word weights. Using specialized, smaller models locally is faster, private, and entirely free.
2. **My introduction to Vector Embeddings:** I learned how text is transformed into high-dimensional mathematical space so computers can calculate "meaning" and semantic similarity, which introduced me to clustering algorithms.
3. **Deterministic vs. Generative Analysis:** Building the comparison engine taught me the power of TF-IDF and Named Entity Recognition (NER). Instead of asking an AI *"what is the difference?"*, calculating mathematical word-frequency variances yields an objective, unbiased answer.
4. **State Management in Data Pipelines:** Because the ingestion pipeline runs in the background via APScheduler, I had to ensure using a database that supports writes and reads independently. SQLite is best when there is a single writer and multiple readers.
5. **Free-Tier Cloud Deployment:** Writing a `render.yaml` configuration taught me how to bundle Python environments, download native machine learning models (like spaCy language packs), and orchestrate automatic build pipelines on constrained cloud environments.
6. **Disk Going To Sleep Workaround:** If the website isn't requested every 15 minutes, the next query takes 3-4 minutes for the disk to spin up. I used UpTimeRobot — an offloaded cron job that pings the website every 14 minutes — to work around this.
