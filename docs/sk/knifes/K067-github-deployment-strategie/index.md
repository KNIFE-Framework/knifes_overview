---
id: "K067"
guid: "knife-K067-83572f2b-c6d2-4f75-9a41-22457168d71e"
dao: "knife"
title: "GitHub Deployment stratégie"
description: "Deployment obsahu v GitHube sa dá vykonať viacerými spôsobmi."
author: "Roman Kazicka"
authors: ["Roman Kazicka"]
created: "2025-09-17"
modified: "2025-09-17"
date: "2025-09-17"
status: "new"
tags: ["KNIFE"]
slug: "/sk/knifes/k067-github-deployment-strategie"
sidebar_label: "K067 – GitHub Deployment stratégie"
sidebar_position: "67"
locale: "sk"
---
<!-- body:start -->
---

## 🚀 Quickstart

Pre študentov a rýchly štart je k dispozícii skrátený návod, ktorý pomáha rýchlo pochopiť základné kroky nasadenia. Viac informácií nájdete v [README pre zvedavých](./K067_ReadmePreZvedavych.md).

1. Vytvor repozitár na GitHube.
2. Pridaj obsah a použi **Branch deploy** (`npm install && npm run deploy`).
3. Skontroluj publikovanú stránku v Settings → Pages.

## 🔎 Porovnanie stratégií

| Kritérium                  | Stratégia A – Branch deploy | Stratégia B – Actions deploy | Stratégia C – Custom domain |
|-----------------------------|-----------------------------|------------------------------|-----------------------------|
| **Jednoduchosť**            | ✅ Najjednoduchšie           | ❌ Viac setupu                | ➖ DNS krok navyše           |
| **Stabilita**               | ✅ Overené a robustné        | ✅ Stabilné, auditované       | ➖ Závisí od DNS             |
| **Škálovanie (viac repo)**  | ✅ Študenti zvládnu          | ❌ Každý repo potrebuje init  | ❌ Nevhodné pre triedy       |
| **Profesionálne projekty**  | ➖ Menej elegantné           | ✅ CI/CD audit, pravidlá      | ✅ Profesionálne riešenie    |
| **Vlastná doména**          | ➖ Nie                       | ➖ Nie                        | ✅ Áno                       |

---
<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](/sk/knifes/knifesOverview.md) • [Zoznam](../KNIFE_Overview_List.md) • [Detaily](../KNIFE_Overview_Details.md)
---
# KNIFE K067 – GitHub Deployment stratégie

## 🎯 Čo rieši (účel, cieľ)

GitHub umožňuje jednoduché nasadenie statických webových stránok priamo z repozitára. Tento KNIFE popisuje rôzne stratégie, ako efektívne nasadiť obsah pomocou GitHub Pages, vrátane výhod a nevýhod jednotlivých prístupov.

## 🧩 Ako to rieši (princíp)

Tento KNIFE rozoberá tri hlavné stratégie nasadenia obsahu na GitHub Pages, podrobne popísané nižšie a v prílohách:

- **Stratégia A – Branch deploy**: Nasadenie obsahu do určenej vetvy (`gh-pages` alebo `docs`), kde GitHub Pages automaticky publikuje web. (Pozri [Appendix – Makefile](./K067_makefile_appendix.md))
- **Stratégia B – Actions deploy**: Automatizované nasadenie pomocou GitHub Actions a CI/CD pipeline, ktorá buildne a nasadí web do správnej vetvy. (Pozri [Appendix – docusaurus.config.ts](./K067_docusaurus_config_ts_appendix.md))
- **Stratégia C – Custom domain**: Nastavenie vlastnej domény pre GitHub Pages, vrátane konfigurácie DNS a súboru `CNAME`. (Pozri [README pre zvedavých](./K067_ReadmePreZvedavych.md))

## 🧪 Ako to použiť (aplikácia)

- **Stratégia A (Branch deploy):** Pre jednoduché projekty publikujte obsah priamo do vetvy určenej pre GitHub Pages (`gh-pages` alebo `docs`).
- **Stratégia B (Actions deploy):** Ak potrebujete automatizované buildy a nasadzovanie (napr. pri používaní Docusaurus, Hugo, atď.), nastavte GitHub Actions na build a deploy do správnej vetvy.
- **Stratégia C (Custom domain):** Ak chcete používať vlastnú doménu, nakonfigurujte DNS a súbor `CNAME` podľa návodu.

---

## ⚡ Rýchly návod (Top)

1. **Vytvorte repozitár na GitHub.**
2. **Stratégia A (Branch deploy):**  
   - Pridajte obsah (napr. Markdown alebo HTML) do vetvy `gh-pages` alebo `docs`.
   - V nastaveniach GitHub Pages vyberte túto vetvu ako zdroj.
3. **Stratégia B (Actions deploy):**  
   - Pripravte build skript (napr. Makefile, npm script).
   - Nastavte GitHub Actions workflow na build a deploy do `gh-pages`.
4. **Stratégia C (Custom domain):**  
   - Pridajte súbor `CNAME` do rootu stránky s názvom domény.
   - Nastavte DNS záznamy podľa GitHub odporúčaní.
5. Počkajte na publikovanie a navštívte výslednú URL.

## 📜 Detailný článok

GitHub Pages umožňuje hostovať statické weby priamo z GitHub repozitára. Vybrať si môžete z týchto stratégií:

### Stratégia A – Branch deploy

Obsah (Markdown, HTML, buildnutý web) sa nasadzuje priamo do určenej vetvy (`gh-pages` alebo `docs`). GitHub Pages automaticky publikuje obsah podľa nastavenia v repozitári.
- **Konfigurácia:**  
  - Pridajte obsah do správnej vetvy (`gh-pages` alebo `docs`).
  - Nastavte v repozitári, ktorá vetva slúži ako zdroj pre Pages.
- **Viac v:** [Appendix – Makefile](./K067_makefile_appendix.md)

### Stratégia B – Actions deploy

Build a nasadenie webu prebieha automatizovane cez GitHub Actions workflow. Po commite sa automaticky spustí build (napr. Docusaurus, Hugo, MkDocs) a výsledok sa nasadí do `gh-pages`.
- **Konfigurácia:**  
  - Pripravte build skript (Makefile, npm run build, atď.).
  - Nastavte GitHub Actions workflow na build a deploy.
- **Viac v:** [Appendix – docusaurus.config.ts](./K067_docusaurus_config_ts_appendix.md)

### Stratégia C – Custom domain

Ak chcete používať vlastnú doménu, je potrebné:
- Pridať súbor `CNAME` s doménou do rootu stránky.
- Správne nastaviť DNS záznamy podľa návodu GitHubu.
- **Viac v:** [README pre zvedavých](./K067_ReadmePreZvedavych.md)

Pre pravidlá tvorby názvov subdomén pozri [Appendix – Naming Convention](./K067_NamingConventionPreDomeny.md).

## 💡 Tipy a poznámky

- Pre rýchle testovanie použite **Branch deploy**.
- Ak potrebujete vlastný build proces a automatizáciu, použite **Actions deploy**.
- Pre vlastnú doménu nezabudnite na správne nastavenie DNS a súboru `CNAME`.
- Pozrite si prílohy pre konkrétne ukážky konfigurácie a workflow.


## ✅ Hodnota / Zhrnutie

GitHub Pages ponúka flexibilné možnosti nasadenia statických webov – od jednoduchého deployu do vetvy, cez plne automatizované workflow, až po nasadenie na vlastnú doménu. Výber správnej stratégie závisí od vašich potrieb, skúseností a požiadaviek na správu webu. Prílohy obsahujú konkrétne príklady konfigurácie a postupov.

---

## 📎 Súvisiace podstránky

- [Appendix – Makefile](./K067_makefile_appendix.md)
- [Appendix – docusaurus.config.ts](./K067_docusaurus_config_ts_appendix.md)
- [README pre zvedavých](./K067_ReadmePreZvedavych.md)
- [Appendix – Naming Convention pre domény](./K067_NamingConventionPreDomeny.md)
