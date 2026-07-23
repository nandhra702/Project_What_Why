---
published: true
name: "Markout : spot the differences in terminal"
icon: 'code'
description: A fast C++ CLI diff tool that highlights only meaningful changes and ignores the noise.
date: 2025-12-24
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

While working on an internship project, I realised that I was facing difficulties figuring out what was new in a file a friend sent me. I agree, sending files is not that efficient, but I was new to GitHub and collaborative coding environments, and so was my friend.

I wanted a tool or a command to run that would directly tell me what was different, and in which lines.

Hence, I made Markout. The project that started my self-help journey.

---

## What was the issue

- Too much noise in file diffs
- Difficulty spotting meaningful changes quickly
- Lack of a fast, minimal CLI-focused tool
- Tools were either overly complex, or completely GUI-based
- Manual mental filtering of comments and blanks

---

## What has been built

MarkOut was built specifically to address these pain points by:

- Ignoring empty lines and comments automatically
- Highlighting only meaningful changes (in red)
- Providing a single-command CLI workflow
- Being extremely fast due to a C++ implementation
- Complete and direct visibility in terminal

```bash
# Clone the repository
git clone https://github.com/nandhra702/MarkOut.git

# Go into the directory
cd MarkOut

# Build the binary
make

# Install globally (requires sudo)
sudo install diff /usr/local/bin/differentiate
```
<Image image="markout.png" alt="markout diff output" />

---

## What all did I learn

- **GitHub** — This was my first proper interaction with GitHub.
- **Shell programming** — I got to know how to inject colors into the shell output.
- **Data preprocessing** — I had to remove all blank spaces and lines, both from inside as well as the start and end of content.
- **Rspec testing** — A Ruby-based testing framework I picked up along the way.
