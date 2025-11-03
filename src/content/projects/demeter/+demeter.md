---
published: true
name: demeter
description: an ai farming assistant powered by real-time data
thumbnail: demeter-thumbnail.png
images: [demeter.png, demeter2.png, demeter3.png, demeter4.png, demeter5.png, demeter6.png]
github: https://github.com/refact0r/demeter
date: 2025-10-26
aspect_ratio: tall 
---

<script>
    import CaptionImage from '$lib/components/CaptionImage.svelte';
</script>

Demeter is a mobile farming assistant that aims to level the playing field for small farmers by providing enterprise-grade insights. It combines satellite data, weather data, market data, and environmental analysis with an AI chatbot to help farmers make informed decisions.

This project was created for [CalHacks 12.0](https://cal-hacks-12-0.devpost.com/).

## the idea

Small farmers struggle to compete with industrial agricultural firms that have access to enterprise tools and data. We wanted to create an affordable, convenient platform that democratizes these insights.

Researching past digital solutions for small farmers (like DigitalGreen's FarmerChat), we learned that farmers appreciated straightforward answers from chatbots. However, text-only chatbots have limitations: they can't communicate complex live data or address issues tied to environmental, climatic, and economic conditions. We built Demeter to solve these problems by baking data-driven analysis directly into an intuitive mobile interface.

## the app

Demeter features multiple different tools that work together to give farmers a complete picture of their farm's health:

**Satellite imagery and analysis** shows satellite images of vegetation and moisture across the farm. The app uses this data to make recommendations for preventing issues like drought.

**Topsoil and environmental health tools** display soil pH levels and other environmental data like nitrogen levels across the farm. If Demeter detects excessively acidic pH levels, it will recommend actions like liming to neutralize the soil.

**Market data and analysis** provides real-time commodity prices, helping small farmers make informed decisions about harvesting, selling, and pricing their produce.

At the center of all this is an AI chatbot with access to a wealth of agricultural knowledge that farmers can consult about any problems they encounter. Farmers can describe issues or even take pictures of crops to diagnose pests, disease, drought, or other conditions. All of the chatbot's recommendations are informed by the satellite, environmental, and market data that Demeter continuously collects.

## implementation

Demeter's core architecture is split into frontend, backend, and agentic data collection.

<CaptionImage image="demeter/diagram.jpg" alt="system architecture diagram" sizes="50rem" />

We used multiple Fetch.ai agents that collaborate to keep a Supabase database updated with real-time data from multiple sources: Google Earth Engine for satellite imagery and environmental data, Open-Meteo for weather data, and USDA NASS for market prices. The satellite data processing was particularly interesting, as we had to learn Google Earth Engine's API to extract meaningful metrics like NDVI (vegetation health) and moisture levels from raw satellite imagery.

The frontend communicates with a Python backend server that handles all the data processing and orchestration. When the user messages the chatbot, the input is first split into chunks by a splitter. These chunks are used to search a Chroma vector database containing semantically indexed agricultural knowledge like crop manuals and guides. Then, an LLM running through Lava Gateway combines the retrieved knowledge with real-time data from the Supabase database to generate accurate, context-aware responses. These responses are then streamed back to the frontend.

## challenges

One of the main challenges was working with satellite data. Getting up-to-date, high-resolution imagery and extracting insights from it required learning new tools and APIs. We spent a lot of time figuring out how to process the Google Earth Engine data into actionable metrics.

We also struggled with context engineering for the LLM. We needed to provide the LLM with enough relevant context from both the vector database and real-time data without overwhelming it. We also needed the model to remember previous messages in the conversation to maintain continuity.

## thoughts

I'm quite happy that we built a working app with so many different parts: agentic AI, satellite data processing, vector databases, real-time data pipelines, and a mobile interface all working together. Even though there were some parts that were definitely unfinished, like the soil analysis and action items list, the core app was functional and demonstrated its potential.

To be honest, some of the work we did was just to satisfy the hackathon sponsor tracks. For example, we probably did not need an entire "agentic AI" just to fetch weather data from an API. However, it was a good learning experience to explore these technologies and see how they could fit into a real-world application.

I'm also pretty satisfied with how the app looks! I aimed for a more playful, but still professional aesthetic with bright colors and rounded elements to make the app approachable. It's not very original or polished, but I think we did a good job given the time constraints.
