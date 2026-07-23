---
published: true
name: "ATOM : visual terminal directory viewer"
icon: 'code'
description: A terminal file explorer that lets you browse visually without leaving the keyboard.
date: 2026-07-23
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

One thing always bothered me while working in the terminal.

I knew exactly where my files were.

I just didn't always remember what they were called.

Sure, I could keep typing `ls`, `cd`, `find`, and `tree`.

But whenever I wanted to quickly explore a directory, it felt like I was forcing a graphical task into a command-line workflow.

I didn't want another file manager.

I wanted one that belonged inside the terminal.

That's how **ATOM** was born.

---

## 1. What was the issue

Linux offers some incredible command-line tools.

But navigating an unfamiliar directory often looks like this:

```bash
ls
cd project
ls
cd src
ls
cd utils
...
```

Or worse:

```bash
find . -name "*.cpp"
```

The shell is excellent for knowing exactly what you want. It's much less convenient when you simply want to *browse*.

Graphical file managers solve this problem — but switching between keyboard, mouse, and different windows constantly breaks the workflow.

I wanted something that stayed entirely inside the terminal.

---

## 2. What has been built

<Image image="folder.png" alt="atom folder view" />

ATOM is a visual terminal file explorer built using **C++** and **ncurses**, that you open via the key-binding `Ctrl+O`.

Instead of showing one directory at a time, it splits the interface into two panels.

The left panel displays directories. The right panel displays the files inside the currently selected folder.

Navigation is entirely keyboard-driven.

- Arrow keys move the cursor.
- `Tab` switches between panels.
- `Backspace` moves to the parent directory.
- `Enter` either opens a folder or launches a file.

No mouse required.

<Image image="file-view.png" alt="atom file view" />


---

Instead of asking which application to use every time, ATOM automatically launches the appropriate program.

For example:

- Markdown files open in **Zed**
- Source code opens in **VS Code**
- PDFs and HTML files open in **Chrome**
- Everything else falls back to `xdg-open`

The goal was to reduce friction. You browse. You press Enter. The right application appears.

---

Normally, terminal applications exit back to the directory you started from.

ATOM remembers where you were browsing. When you press `q`, your shell is automatically moved into that directory. No additional `cd` command required.


<Image image="open_file.png" alt="atom open file" />

---

## 3. Why build it in the terminal?

Modern graphical file managers are already excellent. That wasn't the point.

The idea was to build something for people like me who want to quickly browse to the directory, and then type in the commands.

Developers spend hours switching between editors, Git, compilers, Docker, and shell commands. Opening a graphical file manager for a two-second task feels surprisingly disruptive.

ATOM keeps everything in one environment. The terminal never loses focus.

---

## 4. How does the architecture fit together?

The project intentionally keeps dependencies minimal.

1. ncurses renders the two-panel interface.
2. The C++ filesystem library scans directories.
3. Keyboard events update navigation.
4. File extensions determine which application to launch.
5. A lightweight shell wrapper restores your working directory after quitting.

Everything runs locally with almost no overhead. No configuration files. No background services. No indexing. Just direct interaction with the filesystem.

---

## 5. What I learned

1. **Building Terminal User Interfaces:** Developing with **ncurses** showed me how terminal applications manually manage windows, cursor movement, colors, and screen refreshes. Unlike graphical frameworks, every element has to be drawn and updated explicitly.

2. **Modern C++ Filesystem APIs:** Using `std::filesystem` introduced me to efficient directory traversal, file metadata handling, and edge cases like symbolic links, permission errors, and invalid paths without relying on platform-specific code.

3. **Designing Keyboard-First Experiences:** Removing the mouse entirely forced me to think about user interaction differently. Every common action had to be reachable in one or two keystrokes, leading to a much faster and more natural navigation workflow.

4. **Parent vs. Child Process Limitations:** One interesting challenge was implementing the **"cd on quit"** feature. Since a child process cannot change the working directory of its parent shell, I learned how shell wrapper functions can bridge that limitation and create a seamless user experience.

5. **Context-Aware File Launching:** Instead of treating every file the same, I implemented extension-based routing that automatically opens files in the most appropriate application. This taught me how small automation decisions can significantly improve developer productivity.

6. **Keeping Software Lightweight:** It was tempting to keep adding features like search, previews, bookmarks, or Git integration. Building ATOM reinforced an important engineering lesson: sometimes the best tool is one that stays focused, starts instantly, and solves one problem exceptionally well.
