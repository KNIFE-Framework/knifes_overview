---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2026-11-16T12:00:00.000000+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript
id: "K000123"

# Unikátne UUID – generuje skript
guid: "69d4eea7-ad3b-4e62-8358-a6743c0219db"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "knife"

# Názov zápisu – dopĺňa používateľ
title: "K000123 – Islamic finance for technologists: sukuk, tokenization and Shariah in practice (Finweek KL 2026)"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "A concept primer on Islamic finance (riba, gharar, sukuk, maqasid, zakat, waqf), Labuan as a regulated hub, tokenized sukuk, and differences between Malaysia, Türkiye and Saudi Arabia. For architects and product builders who need the vocabulary of Finweek Kuala Lumpur 2026."


# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Roman Kazicka"

# Zoznam autorov – generuje skript
authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: ""

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: "guide"

# Priorita (low/medium/high) – voliteľné
priority: "medium"

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: ["islamic-finance","sukuk","tokenization","maqasid","zakat","waqf","labuan","malaysia","fintech"]


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "en"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2026-11-16 12:00"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2026-11-16 12:00"

# Stav dokumentu – default "backlog"
status: "done"

# Viditeľnosť – default "public"
privacy: "public"


# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

# Držiteľ práv k obsahu – dopĺňa skript
rights_holder_content: "Roman Kazicka"

# Systémový vlastník práv
rights_holder_system: "CAA / KNIFE / LetItGrow"

# Licencia
license: "CC-BY-NC-SA-4.0"

# Disclaimer
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."

# Copyright
copyright: "© 2025 Roman Kazicka"


# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

# Repozitár pôvodu
origin_repo: ""

# URL pôvodného repozitára
origin_repo_url: ""

# Commit pôvodu
origin_commit: ""

# Branch pôvodu
origin_branch: ""

# Systém pôvodu (CAA/KNIFE/STHDF…)
origin_system: "CAA"

# Pôvodný autor
origin_author: "Roman Kazicka"

# Importovaný zdroj
origin_imported_from: ""

# Dátum importu
origin_import_date: ""


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

> **KNIFE** – Knowledge In Friendly Examples
> **Series:** Systemic Thinking in IT & Digital Fabrication
> **Level:** Beginner
> **Tags:** `islamic-finance` `sukuk` `tokenization` `maqasid` `zakat` `waqf` `labuan` `malaysia` `fintech`

# Islamic finance for technologists: sukuk, tokenization and Shariah in practice

> Based on notes from **Finweek Kuala Lumpur 2026** (11–13 Nov 2026). This is a **concept primer and map**, not a record of the sessions. We do not claim what was said on stage.

## 🎯 What it solves

At a fintech conference in Kuala Lumpur, Islamic finance is everyday language: sukuk, maqasid, waqf, tokenization. An architect, analyst or product builder from outside this world often cannot tell what really differs from conventional banking, or where it meets technology (blockchain, smart contracts).

This KNIFE gives one page of orientation: **core terms, a comparison table, tokenized sukuk, and how three key markets differ** (Malaysia, Türkiye, Saudi Arabia).

## 🧩 How it solves it

Islamic finance rests on one idea: **money should not earn money by itself; profit should come from real economic activity and shared risk.** The rules that follow can be read as product design constraints:

| Principle | Meaning |
|---|---|
| **Riba** | prohibition of interest |
| **Gharar** and **maysir** | prohibition of excessive uncertainty and pure speculation |
| **Haram sectors** | no financing of e.g. alcohol, gambling, weapons |
| **Real asset** | every transaction rests on something tangible |
| **Shariah board** | an independent body approves and monitors products |

### Islamic vs. conventional bank

| Area | Islamic bank | Conventional bank |
|---|---|---|
| Price of money | Profit from trade, leasing, partnership | Interest |
| Client relationship | Business partner | Lender and borrower |
| Financing | Murabaha, Ijara | Interest-bearing loan |
| Risk sharing | Musharaka, Mudaraba: profit and loss are shared | Mainly the borrower |
| Underlying | Real asset | Not required |
| Bond | Sukuk | Bond |
| Oversight | Regulator + Shariah board | Regulator |

An honest note: the economic outcome of, say, murabaha can resemble a fixed-rate loan. How "truly Islamic" that is remains a matter of scholarly debate. This is where **maqasid** (below) enters.

## 🧪 How to use it

### Sukuk, tokenization and smart contracts

- **Sukuk**: a certificate of ownership share in a real asset (building, infrastructure). The investor receives part of the asset's return, not interest. The "asset-backed" vs. "asset-based" distinction is debated: does the investor own the asset, or only hold a claim on a cash flow?
- **Tokenization**: rights to an asset recorded as a digital token (fractional ownership, faster settlement, programmable payouts).
- **Tokenized sukuk**: a sukuk issued or recorded as a token, with a smart contract paying out the return. **A Shariah board must still approve it**, and scholarly opinions on digital assets differ.
- **Blockchain** is a distributed ledger that cannot be altered retroactively. A **smart contract** is a program on it that executes when conditions are met. It automates an agreement, but **is not automatically a legally binding contract**. Code executes its bugs as faithfully as its logic, which is why it is audited.

### Offshore, Labuan and transparency

Offshore is not illegal in itself. Failing to declare income and accounts, tax evasion and money laundering are. Countries now exchange account data automatically (CRS, FATCA), so a tax resident of the EU must declare foreign income and assets.

**Labuan IBFC** is Malaysia's international financial centre (since 1990), with a single regulator, Labuan FSA. It calls itself "mid-shore": a regulated jurisdiction with supervision, not an unsupervised tax haven [2][3][4]. It focuses on banking, wealth management, insurance (captive), digital services and Islamic finance [4]. It also cites a "Shariah-compliant blockchain hub" strategy and a first climate sukuk [5][6].

### Maqasid and maslahah

**Maqasid al-Shariah** are the higher objectives of Shariah, meaning the purpose of the rules, not only their letter. In Islamic finance these are cited as circulation of wealth, fair and transparent practices, and justice [7]. **Maslahah** is public interest, closely tied to maqasid [8]. The practical consequence is a "substance over form" argument: a product that is formally compliant but economically resembles a loan can be criticized.

### Zakat and waqf (Islamic social finance)

- **Zakat**: an obligatory charitable payment to those in need (commonly about 2.5% of eligible wealth; exact rules vary).
- **Waqf**: a permanent endowment. The asset is given in perpetuity and its yield serves public-benefit goals (a school, a hospital).
- **World Zakat and Waqf Forum (WZWF)**: a platform of institutions managing these funds. Founded 2010 as World Zakat Forum, renamed in 2021, its 14th edition took place 13–15 Oct 2025 in Kuching, and Malaysia is its permanent secretariat [9][10][11]. The Global Zakat and Waqf Policy Advisory Council issues Zakat Core Principles and Waqf Core Principles [12].
- Linking waqf with sukuk or tokenization is discussed in the literature. It is not an established standard.

### Three markets, three accents

| | Malaysia | Türkiye | Saudi Arabia |
|---|---|---|---|
| Role | Central hub, Labuan IBFC, deep Islamic capital market | Participation banks; sukuk known as *kira sertifikaları* (lease certificates) [13][14] | One of the world's largest sukuk issuers, 2025: ≈ USD 72.5 bn (S&P) [15] |
| Governance | Centralized Shariah advisory councils at the regulators | Capital-market regulation (CMB), sukuk through lease-certificate structures [13] | More decentralized Shariah board model, strong influence of AAOIFI standards |
| Contested structures | Generally more permissive (e.g. conditionally permitted *bai inah* and *tawarruq*) [16] | Ijara, murabaha, musharaka, mudaraba-based certificates [13] | Gulf approach is generally stricter [16] |

Figures and characterizations are indicative and come from secondary sources. Verify with the regulator and a Shariah adviser before relying on them in a contract or product.

## ⚡ Quick Guide

Before a first meeting with an Islamic finance partner, ask yourself:

1. Which market are you targeting (Malaysia, Türkiye, the Gulf)? Shariah interpretation differs between them.
2. Is the product built on a real asset and shared risk, or is it a conventional loan "re-labelled"?
3. Who is your Shariah board or adviser, and what do you need from them in writing?
4. If you tokenize: what is actually on-chain and what is not? Personal data **never on-chain** (GDPR, right to erasure); at most a hash.
5. What is the legal nature of the token in that jurisdiction (in the EU e.g. MiCA, verify with counsel)?

## 💡 Tips and Notes

- **Tokenize only when the task demands it.** A smart contract makes sense where it solves a concrete problem (e.g. automatic revenue sharing among several partners), not as an end in itself. Until then, one interface in the architecture (record-keeping and settlement) that can be swapped later is enough.
- When working from audio or slides, verify spelling. "Makashi" heard in a talk was most likely *maqasid*. For local transcription of recordings see [K000122](../K000122-Local-Audio-Transcription/).
- What is **not** here: a record of the panel on tokenizing waqf and sukuk, how Labuan FSA regulates Islamic banks and digital assets, and a detailed Shariah view on tokenized assets. These are open questions for a follow-up KNIFE.

## ✅ Summary

Islamic finance is **real asset + shared risk + Shariah oversight**. Sukuk is its "bond"; tokenization and smart contracts are a technical layer on top, not a replacement for the legal framework or Shariah approval. Malaysia, Türkiye and Saudi Arabia use the same vocabulary with different accents, so choose the market and the adviser first.

## Sources

[1] https://fintechnews.my/fintech-events-conference-forum-expo-malaysia/event/finweek-kuala-lumpur-2026/

[2] https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/infographics/35th%20Anniversary/LabuanIBFC-35th-Infographic-in_A4size_v11_2209.pdf

[3] https://newswav.com/article/mission-to-reset-labuan-ibfc-A2609_ACxg1c

[4] https://theedgemalaysia.com/node/812647

[5] https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/infographics/35th%20Anniversary/LabuanIBFC-35th-Infographic-in_A4size_v11_2209.pdf

[6] https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/annual-reports/2026/Labuan-FSA-MR-2025.pdf

[7] https://ikr.inceif.org/handle/INCEIF/3417

[8] https://jmifr.usim.edu.my/index.php/jmifr/article/download/334/224

[9] https://pressreleases.responsesource.com/newsroom/SusieAsburyPR/release/103064

[10] https://azka.zakat.com.my/2025/ppz-maiwp-supports-world-zakat-waqf-forum-2025-as-corporate-partner/

[11] https://azka.zakat.com.my/?p=12715

[12] https://islamiceconomicsproject.com/2024/11/11/roundup-of-world-zakat-waqf-forum-2024/

[13] https://erdem-erdem.av.tr/en/insights/prominence-of-sukuk-in-turkey-as-an-islamic-finance-instrument

[14] https://f.invest.gov.tr/en/library/publications/lists/investpublications/turkiye-nexus-of-participation-finance.pdf

[15] https://www.arabnews.pk/node/2629160/business-economy

[16] https://www.malaymail.com/news/money/2014/05/21/malaysia-gulf-coming-closer-on-islamic-bai-inah-deals/673105

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Overview](../knifes_overview/KNIFE_Overview_Blog.md) • [List](../knifes_overview/KNIFE_Overview_List.md) • [Details](../knifes_overview/KNIFE_Overview_Details.md)
