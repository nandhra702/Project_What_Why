---
published: true
name: bombsquad
description: AI minesweeper solver using constraint propagation and subset reasoning
thumbnail: 
images: []
github: https://github.com/nandhra702/bombsquad
blog: /blog/bombsquad
date: 2025-12-24
---

An AI agent that plays Minesweeper using a logic-based knowledge base. Uses constraint propagation and set-based inference to clear every deterministically solvable cell without guessing, then falls back to probabilistic moves only when pure logic runs out.

The agent encodes each revealed number as a constraint over its covered neighbors. When constraints can be subset-compared, the difference in mine counts applies to the difference in cells — enabling deductions that naive cell-by-cell inspection would miss. Built in Python with a Rich-powered TUI.

Read the [blog post](/blog/bombsquad) for the full write-up on the constraint reasoning engine.
