---
id: K067
title: Naming Convention pre Subdomény
status: draft
date: 2024-06-10
---

# Naming Convention pre Subdomény

Táto dokumentácia popisuje konvenciu pomenovania subdomén používaných v rámci našich projektov a nasadení. Dodržiavanie jednotnej štruktúry a pravidiel zabezpečuje konzistenciu, lepšiu orientáciu a správu domén.

## Povolené znaky

- Malé písmená (a-z)
- Číslice (0-9)
- Pomlčka (-)

Nie sú povolené medzery, veľké písmená ani špeciálne znaky.

## Štruktúra

Subdoména je tvorená z viacerých častí oddelených pomlčkami, podľa nasledujúceho vzoru:

```
<typ>-<rok/identifikator>-<popis>
```

Kde:

- `<typ>` označuje druh subdomény (napr. `dev`, `test`, `prod`)
- `<rok/identifikator>` je rok alebo iný relevantný identifikátor nasadenia
- `<popis>` krátky opis alebo názov projektu/služby

## Typy subdomén

- `dev` – vývojové prostredie
- `test` – testovacie prostredie
- `prod` – produkčné prostredie
- `stage` – staging prostredie
- `demo` – demo alebo ukážkové prostredie

## Rok/identifikátor

- Používame štvormiestny formát roka, napr. `2024`
- Alternatívne môže byť použitý iný identifikátor, napr. číslo sprintu, verzia alebo kód projektu

## Príklady

- `dev-2024-novyprojekt` – vývojová subdoména pre projekt "novyprojekt" v roku 2024
- `prod-2023-ecommerce` – produkčná subdoména pre e-commerce projekt z roku 2023
- `test-45-beta` – testovacia subdoména pre beta verziu s identifikátorom 45
- `stage-2024-intranet` – staging prostredie pre intranet v roku 2024
- `demo-2023-prezentacia` – demo prostredie pre prezentáciu z roku 2023
