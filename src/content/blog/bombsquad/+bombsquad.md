---
published: true
name: "BombSquad : AI minesweeper solver"
icon: 'code'
description: An AI agent that solves Minesweeper using logic-based constraint propagation.
date: 2026-01-22 
---

Minesweeper has a reputation for being unsolvable without guessing. But a surprisingly large chunk of any given board is actually solvable through pure logic — if you're systematic enough.

I wanted to build an agent that could prove that.

---

## The idea

The classic Minesweeper game presents a grid of covered cells. Some cells contain mines. Numbers reveal how many adjacent cells contain mines. The goal: uncover all safe cells without hitting a mine.

An AI solver that plays purely by logic should be able to clear every deterministically solvable cell without a single guess — and only guess when no logical move is available.

---

## What was built

**BombSquad** is an AI minesweeper solver built on constraint propagation and set-based reasoning.

The agent maintains a knowledge base of constraints — each discovered number cell becomes a constraint over its neighboring covered cells. When a constraint's mine count equals the number of remaining covered neighbors, all those neighbors are flagged. When a constraint's mine count is zero, all remaining neighbors are safe to uncover.

More interestingly, the agent performs **subset reasoning**: if one constraint's covered cells are a subset of another's, the difference in mine counts applies to the difference in cells. This allows the solver to make deductions that naive cell-by-cell inspection would miss.

---

## What was learned

- **Knowledge Representation:** Encoding game state as logical constraints and reasoning over them was my first real exposure to knowledge-based AI agents.
- **Subset Inference:** The subset deduction step was the most intellectually satisfying part — watching the agent make non-obvious moves from pure constraint math.
- **Handling Uncertainty:** When no logical move is available, the agent falls back to probabilistic guessing based on mine density. This introduced me to the limits of purely deductive systems.
