# Študentský checklist

## Čo nikdy nerobiť
- ❌ Neupgradovať balíky (`npm update`, `ncu`, …).
- ❌ Nemeň `package.json`/`package-lock.json`.

## Rýchly štart
1) Nastav Node **v22** (pozri `SETUP.md`).
2) Inštaluj závislosti:
```bash
npm ci
```
3) Spusti dev server:
```bash
make dev
```
4) Pri commite upravuj len obsah (MD, obrázky).

## Kontrola KNIFE (ak je k dispozícii)
```bash
make knife-validate
```
