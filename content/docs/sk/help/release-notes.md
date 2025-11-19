---
title: Release Notes
---

# Release Notes – KNIFE Overview & STHDF Framework

Táto stránka zhromažďuje zmeny, ktoré ovplyvňujú:
- generátory (KNIFE & STHDF),
- šablóny,
- HELP dokumentáciu,
- infraštruktúru pre výuku a class templaty.

---

## v0.3.0 – STHDF HELP & Generátor (2025-11-18)

### 📘 Nové HOWTO
- `new-knife.md` – kompletný návod pre vytvorenie nového KNIFE z CLI aj Makefile.
- `new-sthdf.md` – návod pre generovanie novej STHDF inštancie (študent/ročník).

### 🧰 Generátor `new_item_instance.py`
- KNIFE: `title` = **"ID – Názov"** (bez sidebar_label).
- STHDF: automatické generovanie dvojice:
  - `ID – projekty`
  - `ID – študenti`

### 🧹 Fix skripty
- pridaný jednorazový skript `knifes_fix_titles_once.py`
  na doplnenie ID do starších KNIFE názvov.

---

## v0.2.0 – Docusaurus pomocník & OS inštalácie (2025-11-15)

### 📘 Ako nainštalovať Docusaurus
- nový súbor `help/docusaurus.md`

### 💻 OS Install Guides
- macOS
- Windows + MSYS2
- Linux

---

## v0.1.0 – Inicializácia štruktúry (2025-11-10)

- základná štruktúra KNIFE Overview,
- sidebar + lokalizácia,
- prvé KNIFE dokumenty,
- Makefile pre build & dev server.

---

> ✨ *Release notes sú motorom dlhodobého poriadku.  
Keď systém rastie, práve tu ostáva história rozhodnutí.“*