---
title: HOWTO – Nový KNIFE príspevok
---

# HOWTO – Ako vytvoriť nový KNIFE príspevok

## 1. Predpoklady

- KNIFE template,
- Makefile target `knife-new`,
- CSV alebo metadá v štruktúre projektu.

## 2. Vytvorenie KNIFE

```bash
make knife-new ID=K123 NAME="Moja téma" LOCALE=sk
```

Výsledok:

- priečinok `content/docs/sk/knifes/K123-moja-tema/`,
- `index.md` s front matter.

## 3. Čo doplniť ručne

- popis,
- obrázky,
- podstránky.

## 4. Overenie

- `make dev`
- broken links,
- KNIFE v overview.
