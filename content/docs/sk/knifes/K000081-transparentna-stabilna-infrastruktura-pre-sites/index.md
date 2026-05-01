---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000081"
guid: "02921a34-5a83-4713-bafa-1be560a98d18"
dao: "knife"
title: "K000081 – Transparentná -Stabilná infraštruktúra pre Sites"
description: "Počas práce s GitHub a Pages je potrebné mať zladené prostredie na klientovi a na serveri. Lokál je závislý od OS, od verzií vývojových nástrojov. Ideálne by bolo, keby existovalo stabilné, opakovateľné prostredie pre vytvorenie lokálneho prostredia, bez ohľadu na operačný systém na klientovi – Windows, Mac, Linux."
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: ""
type: ""
priority: "no"
tags: ["KNIFE","images"]
locale: "sk"
created: "2025-09-24"
modified: "2025-09-24"
status: "backlog"
privacy: "public"
rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazička / SystemThinking"
origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_system: ""
author_id: ""
author_did: ""
fm_reserved1: ""
fm_reserved2: ""
#sidebar_label: "K000081 – Transparentná -Stabilná infraštruktúra pre Sites"
date: "2025-09-24"
sidebar_position: "81"
sidebar_label: "K000081 – Transparentná -Stabilná infraštruktúra pre Sites"
---

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---

# KNIFE K000081 – Transparentná -Stabilná infraštruktúra pre Sites

<!-- fm-visible: start -->
> **GUID:** `02921a34-5a83-4713-bafa-1be560a98d18`
> **Status:** `backlog` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## 🎯 Čo rieši (účel, cieľ)

- Počas práce s GitHub a Pages je potrebné mať zladené prostredie na klientovi a na serveri.
- Lokál je závislý od OS, od verzií vývojových nástrojov. Ideálne by bolo, keby existovalo stabilné, opakovateľné prostredie pre vytvorenie lokálneho prostredia, bez ohľadu na operačný systém na klientovi – Windows, Mac, Linux.
- Ak padneme do pasce lokálnej infraštruktúry, tak je veľká pravdepodobnosť, že nebudeme rieč'šiť obsah samotný, ale našu infraštruktúru pre generátor statických HTML stránok.
- Infraštruktúra nie je našim cieľom
- Preto hľadám spôsob, ktorý mi zabezpečí stabilné prostredie na klientovi pre rôzne generátory statických napríklad pre stránok pre HitGub Docusaurus, (Docusaurus, Docsys, ... [Pozri tabuľku porovnania](#porovnanie-roznych-statickych-generatorov-nielen-pre-github).)

## ⚠️ Identifikované problémy 

- na Macu, ale to bude všade podobné je pre účely lokálneho testovania potrebné inštalovať rôzne generátory statických HTML stránok, podľa preferencie používateľa.
- GitHub má vlastný web server, ktorý rozpoznáva HTML stránky.
- Ak sa mu do jeho priestoru dostanú pretransformované md súboru z repozitára, tak ich zobrazí.
- Generovanie takzvaného buildu sa deje rôznymi spôsobmi, na lokáli, na serveri pomocou Actions (CI/CD)
- Ja som narazil na nekonečné syntaktické a sémantické problémy pri práci s Docusaurus generátorom
  - Keď sa mi niečo podarilo rozchodiť na lokále, tak na serveri to padalo,chyby typu 'break links', 'link cannot be resolved' ma viedli k zúfalstvu
-  
Základná architektúra je popísaná v KNIFE_027 [KNIFE_027-K000027-git-for-dummies-central-concepts](../K000027-git-for-dummies-central-concepts/index.md)
  
## 🧩 Ako to rieši (princíp)

- hľadám riešenie, ktoré by bolo nezávislé od operačného systému
- v danom operačnom systéme by som si nainštaloval systém s označením 301 pre Windows, 302 pre Mac, 303 pre Linux.
- Detaily viď obrázok

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/GitHub-Sites-Concepts-clientSolution.png').default} alt="OS system agnostic riešenie" style={{maxWidth: '800px', width: '100%'}} />
</div>

## 🧪 Ako to použiť (aplikácia)
- Existuje jednoduché transparentné riešenie?
- Vyskúšam preveriť rôzne riešenia
  
- Od komunity cassandragargoyle produkt https://portunix.ai/ ((https://github.com/cassandragargoyle/Portunix)
---

## ⚡ Rýchly návod (Top)
  #TODO - doplniť
## 📜 Detailný článok

## 💡 Tipy a poznámky

## 🧰 Public Templates (in progress)

📁 Repositories for Git-based documentation:

---

## Porovnanie rôznych statických generátorov, nielen pre GitHub {#porovnanie-roznych-statickych-generatorov-nielen-pre-github}

| # | Method           | Repozitár                                                                           | Pages URL                                                                                                                       | Popis                                        |
| - | ---------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| 1 | **Markdown**     | [docs-md-demo](https://github.com/GitDocs-Lab/docs-md-demo)                         | ✖ *(bez Pages)*                                                                                                               | Čistý Markdown (README + odkazy), bez buildu |
| 2 | **GitHub Pages** | [docs-sites-demo](https://github.com/GitDocs-Lab/docs-sites-demo)                   | [https://gitdocs-lab.github.io/docs-sites-demo/](https://gitdocs-lab.github.io/docs-sites-demo/)                              | `docs/` priečinok + Pages aktivovaný         |
| 3 | **MkDocs**       | [docs-mkdocs-demo](https://github.com/GitDocs-Lab/docs-mkdocs-demo)                 | [https://gitdocs-lab.github.io/docs-mkdocs-demo/](https://gitdocs-lab.github.io/docs-mkdocs-demo/) *(ak buildnuté)*           | `mkdocs.yml` + buildnutý výstup              |
| 4 | **Docusaurus**   | [docs-docusaurus-demo](https://github.com/GitDocs-Lab/docs-docusaurus-demo)         | [https://gitdocs-lab.github.io/docs-docusaurus-demo/](https://gitdocs-lab.github.io/docs-docusaurus-demo/) *(po deploy)*      | Viacjazyčný React-based dokumentátor         |
| 5 | **Hugo**         | [docs-hugo-demo](https://github.com/GitDocs-Lab/docs-hugo-demo)                     | [https://gitdocs-lab.github.io/docs-hugo-demo/](https://gitdocs-lab.github.io/docs-hugo-demo/) *(po deploy)*                 | Ultra-rýchly web s peknými témami            |
| 6 | **Docsy (Hugo)** | [docs-hugo-docsy-example](https://github.com/GitDocs-Lab/docs-hugo-docsy-example)   | [https://gitdocs-lab.github.io/docs-hugo-docsy-example/](https://gitdocs-lab.github.io/docs-hugo-docsy-example/) *(po deploy)* | Technická dokumentácia s Hugo + Docsy témou |
| 7 | **VitePress**    | [docs-vitepress-demo](https://github.com/GitDocs-Lab/docs-vitepress-demo)           | [https://gitdocs-lab.github.io/docs-vitepress-demo/](https://gitdocs-lab.github.io/docs-vitepress-demo/) *(po deploy)*        | Elegantný Vue-based dokumentačný generátor   |

---

## ✅ Hodnota / Zhrnutie