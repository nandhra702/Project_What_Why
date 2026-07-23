---
published: true
name: "FocusFeed : build your feed"
icon: 'globe'
description: A curated YouTube feed builder to stop the endless scroll at dinner time.
date: 2026-05-15
---

It's a normal Wednesday dinner in the hostel mess. You slept through the evening and woke up just in time for dinner. Your friends have all had their dinner and now you gotta sit alone. Cool, "me time". So you connect your earphones and start scrolling through YouTube for an interesting video to watch while you eat.

And boom, 15 minutes pass by and you just can't seem to decide what to watch.

That's where FocusFeed comes in.

---

## 1. What was the issue

- Endless scrolling with no clear intention.
- YouTube's recommendation algorithm pushes content you didn't ask for.
- No way to pre-curate a focused watch queue before sitting down.
- Decision fatigue kicks in before the food even gets cold.

---

## 2. What has been built

**FocusFeed** lets you build a focused YouTube feed based on your actual interests — not what the algorithm thinks you want.

You define your topics and channels upfront. FocusFeed fetches recent videos matching your criteria and presents them as a clean, distraction-free list. No recommendations, no autoplay rabbit holes, no sidebar noise.

The idea is simple: decide what you want to watch *before* you sit down to eat.

---

## 3. What was learned

- **YouTube Data API:** Learned how to query videos by channel and topic, handle pagination, and work around quota limits.
- **Curation over Recommendation:** There's a meaningful difference between building tools that serve users and algorithms that serve engagement metrics.
- **Offline-first thinking:** Keeping the feed generation fast and predictable meant avoiding live API calls at watch time — fetch once, cache, display cleanly.
