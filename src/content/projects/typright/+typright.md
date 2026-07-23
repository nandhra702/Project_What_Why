---
published: true
name: typright
description: hybrid desktop notepad with autocomplete and spellcheck
thumbnail: Typright.png
images: ['Typright.png', 'Typright_spelling.png']
github: https://github.com/nandhra702/Typright
blog: /blog/typright
date: 2026-05-31
---

A lightweight desktop notepad built in **Python + C++** (via Pybind11). Features a Trie-based autocomplete engine, real-time spellchecking with red underline, and typo correction suggestions — all running locally with no dependencies on cloud services.

The architecture is intentionally hybrid: Python handles the Tkinter GUI layer, while C++ handles the memory-intensive Trie traversal and Wagner-Fischer edit-distance math. Ships with a custom `.type` file format, dark mode toggle, and a native File menu.

Read the [blog post](/blog/typright) for the full write-up on the hybrid architecture.
