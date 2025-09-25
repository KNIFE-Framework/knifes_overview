# Contributing Guide

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
