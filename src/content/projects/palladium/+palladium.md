---
published: true
name: palladium
description: local NLP news aggregator that clusters events and compares publisher coverage
thumbnail: home_page.png
images: ['home_page.png', 'article.png', 'coverage_analysis.png', 'heatmap.png', 'overlap.png', 'flow.png']
github: https://github.com/nandhra702/Palladium
blog: /blog/palladium
date: 2026-07-18
---

A media intelligence dashboard built with **Flask, SQLite, spaCy, and sentence-transformers**. Ingests international RSS feeds every 6 hours, clusters articles by semantic similarity using `all-MiniLM-L6-v2` embeddings and agglomerative clustering — then compares what each publisher emphasized, what only one outlet mentioned, and where they all agreed. Zero LLM API calls.

Key features:
- **Semantic clustering** — groups articles about the same real-world event using vector embeddings
- **Publisher focus tracking** — TF-IDF highlights unique terms per outlet
- **Exclusive fact isolation** — flags data points mentioned by only one publisher
- **Common ground detection** — spaCy NER extracts entities every publisher agreed on
- **LexRank summarization** — generates event summaries without any generative AI

Read the [blog post](/blog/palladium) for the full write-up on the architecture.
