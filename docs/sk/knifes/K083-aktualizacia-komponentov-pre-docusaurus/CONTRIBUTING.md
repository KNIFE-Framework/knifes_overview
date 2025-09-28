---
id: K083_04
parent: K083
guid: "ea4135ce-9848-4fef-918a-a9fbccba35d3"
dao: knife
title: ""
author: ""
created: 2025-09-26
modified: 2025-09-26
status: draft
type: knife
category: deliverable
tags: []
sidebar_label: "K083_04 –"
locale: sk
copyright: "© 2025 Roman Kazička / SystemThinking"
rights_holder_content: ""
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Educational content. Use at your own risk."
author_id: ""
author_did: ""
---
# Contributing Guide
<!-- fm-visible: start -->

> **GUID:** `"ea4135ce-9848-4fef-918a-a9fbccba35d3"`
>   
> **Category:** `deliverable` · **Type:** `knife` · **Status:** `draft` · **Author:** "" · **License:** "CC-BY-NC-SA-4.0"
<!-- fm-visible: end -->


Tento projekt používa **Node.js v22 (LTS)** a Docusaurus 3.
Aktualizácie balíkov vykonáva len maintainer.

## Verzia Node
- Verzia je zafixovaná v súbore `.nvmrc`.
- Ak používaš `nvm`, stačí `nvm use`.
- Ak používaš Homebrew, maj v PATH `node@22` binárky.

## Inštalácia závislostí
```bash
npm ci
```

## Development
```bash
make dev
```

## Build
```bash
npm run build
```

## Pravidlá (študenti)
- ❌ Neupravuj `package.json` ani `package-lock.json`.
- ❌ Nespúšťaj `npm i` bez pokynu učiteľa.
- ✅ Používaj Node v22 (`nvm use` / Homebrew PATH).
- ✅ Používaj `npm ci`.
