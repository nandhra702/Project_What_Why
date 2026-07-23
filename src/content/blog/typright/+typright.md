---
published: true
name: "Typright : A notepad just for me"
icon: 'code'
description: A lightweight hybrid notepad with intelligent autocomplete and real-time spellchecking.
date: 2026-05-31
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

I remember using the default Windows 11 notepad when I first started college. I used it to keep notes, copies of code, open code files quickly and what not. Now, I could have used MS-Word, but MS-Word takes some time to open up. Moreover, saving a word document took a whole lot of effort compared to just a plain text file.

Then, I started looking for other options — I wanted customisation and something that didn't get in my way. On the suggestion of a trusted friend, I ended up downloading Notepad++. Yes, the famous green chameleon.

Everything was working fine... until it wasn't. I liked the extra features Notepad++ provided, especially the autocomplete. The issue was, it only took words that had already been written into consideration. It was good, but I wanted more.

And so, I decided to make a notepad with the features I actually wanted.

---

## 1. What was the issue

- Word docs take a lot of time opening and closing.
- No spellchecker in the default Windows notepad or Notepad++.
- The autocomplete wasn't what I wanted — I wanted something smarter.

---

## 2. What has been built

**Typright** is a lightweight desktop notepad application offering:

<Image image="Typright.png" alt="typright editor" />

- **Intelligent Autocomplete:** As you type, the editor suggests matching words dynamically in a drop-down list positioned directly under your cursor.
- **Real-time Spellchecking:** Pressing the spacebar triggers a lookup that instantly identifies misspelled words and flags them with a red underline.
- **Typo Correction Suggestions:** For misspelled words, the editor provides correction suggestions ordered by similarity.
- **Desktop Notepad Features:** Native menus (New, Open, Save, Save As), a custom `.type` file format.
- **Dark Mode:** Toggleable dark mode for low-light writing.

<Image image="Typright_spelling.png" alt="typright spellcheck" />


---

## Why build a hybrid application?

Modern word processors and autocomplete engines handle dictionary lookups across lists containing hundreds of thousands of words.

- **The Bottleneck:** Implementing prefix searches and dynamic programming similarity metrics (like Levenshtein distance) in pure Python can introduce significant latency. If the GUI thread takes even some time per keystroke, the user experiences noticeable typing lag. Moreover, I wanted to try to build things using C++.
- **The Solution:** Build a hybrid system. Python handles the quick GUI layer (**Tkinter**). C++ handles the memory-intensive, CPU-bound dictionary traversal and edit-distance math. I felt the learning curve of QT was a bit steep, so for fast prototyping I stuck with Tkinter.

## How does the architecture fit together?

The project is split into three main layers:

1. **GUI / Presentation Layer (Python):** Intercepts user keystrokes, controls text formatting tags, manages dynamic UI overlays, and loads the initial dictionary.
2. **Glue / Binding Layer (C++ & Pybind11):** Integrates native C++ binaries with the Python runtime, marshaling data types (e.g., converting Python strings to C++ `std::string` and C++ `std::vector` back to Python lists).
3. **Algorithmic Engine (C++):** A memory-efficient Trie data structure containing the core vocabulary, plus a Wagner-Fischer dynamic programming algorithm for edit-distance calculations.

---

## 3. What was learned

1. **Hybrid Software Engineering:** Using Python for rapid, declarative UI layouts and C++ for CPU-bound computations offers a clean architecture that combines the strengths of both languages.
2. **My introduction to Tries:** I learnt how spellcheckers and autocomplete systems work, which introduced me to the Trie data structure and its primary uses.
3. **Tkinter and QT:** I had started with QT tutorials, but struggled to get it working. Hence, I switched to Python-based Tkinter.
4. **How applications written in different languages talk to each other:** I got introduced to pybind11 and got an overview of how it bridges C++ and Python.
5. **Cross-Platform Build Pipelines:** Writing configuration scripts (e.g., `setup.py` using pybind11) showed me how to coordinate compiler flags and header includes to produce native dynamic modules on both Linux and Windows.
