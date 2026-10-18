---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2026-10-18T12:24:05.506055+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript
id: "K000121"

# Unikátne UUID – generuje skript
guid: "0c6a9ff5-8fe2-40ec-8e2f-d32f9172455c"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "knife"

# Názov zápisu – dopĺňa používateľ
title: "K000121 – Kernaro AI Hub: centralizovaný prístup k AI pre tím"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "Ako nasadiť Kernaro AI Hub ako centrálny AI server pre tím alebo triedu: architektúra, prerekvizity, pridelenie licencií, monitoring relácií. Pre správcov EA prostredia, vrátane akademického nasadenia (65 študentov)."


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
priority: ""

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: ["kernaro", "ea", "ai-hub", "licensing", "windows-server"]


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2026-10-18 14:24"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2026-10-18 14:24"

# Stav dokumentu – default "backlog"
status: "published"

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

# K000121 – Kernaro AI Hub: centralizovaný prístup k AI pre tím

> **KNIFE** – Knowledge In Friendly Examples
> **Séria:** Systemic Thinking in IT & Digital Fabrication
> **Úroveň:** Intermediate
> **Tagy:** `kernaro` `ea` `ai-hub` `licencovanie` `sprava-pouzivatelov` `windows-server`

**Verzia:** 1.0 | **Dátum:** 2026-10-18 | **Súvisí s:** [K000104 – SPARX AI Kernaro v SDLC](../K000104-SPARX_AI_KERNARO_IN_SDLC/index.md)

## 🎯 Čo rieši (účel, cieľ)

Kernaro AI existuje v dvoch modeloch nasadenia:

| Model | Kde beží AI | Pre koho |
|---|---|---|
| **Kernaro Assist** | Plugin na každom EA klientovi | 1 licencia = 1 stroj |
| **Kernaro AI Hub** | Centrálny server | 1 server = N používateľov |

Tento KNIFE pokrýva **Hub model** — vhodný pre tímové alebo akademické prostredie. Kontext použitia Kernaro v SDLC nájdeš v K000104.

## 🧩 Ako to rieši (princíp)

AI beží na jednom serveri; EA klienti sa naň prihlasujú cez plugin Kernaro Assist a Hub rozdeľuje licenčné miesta (seats) a sleduje relácie.

![Kernaro AI Hub – architektúra](./img/kernaro-hub-architecture.svg)

### Prerekvizity inštalácie (server)

| Komponent | Zdroj |
|---|---|
| Windows Server 2019+ | — |
| PostgreSQL 16 alebo 17 | postgresql.org |
| pgvector | GitHub: pgvector/pgvector (build cez VS C++ x64) |
| Git | git-scm.com |
| Visual Studio Community (C++) | visualstudio.microsoft.com |
| EA Graphlink | inštalovať **pred** Kernaro Hub |
| KernaroAI-Setup.exe | vyžiadať od Sparx Systems |

> ⚠️ Inštalátor nie je voľne dostupný — vyžiadaj ho cez „Request Kernaro Hub Installer" na sparxsystems.com/kernaro.

## 🧪 Ako to použiť (aplikácia)

### Správa používateľov

Dva typy účtov: **Admin** (plný prístup) | **Regular** (obmedzený prístup).

Tok pridelenia licencie:

1. `Configuration → User Management → Add User`
2. `User & Access Control → Assist Access → Assign Users to Kernaro Assist`
3. Nastav **Write Access** (Enabled = tvorba obsahu; Disabled = len čítanie)
4. Hub sleduje počty seats: **Available / Assigned / Total**

Limited License zobrazuje počítadlá seats. Unlimited License ich skrýva; správa funguje rovnako.

### Monitoring sessions

- **Real-time:** `User & Access Control → Assist Active Sessions` — User, Machine, Last Used, IP Address, Status. Admin môže revokovať jednotlivú session alebo všetky naraz.
- **Audit log:** `Assist Session History` — Sign-In, Sign-Out, Session Refresh, Revocation, Access Denied, Expiration.

### Poznámky pre akademické nasadenie

- 65 študentov = licencia na 65 Assist seats (Limited License)
- Odporúčam Write Access **zapnúť** — aktívna AI interakcia má vzdelávaciu hodnotu
- Overiť pred spustením: LAN alebo VPN? → ovplyvní konfiguráciu firewallu a portov
- Session History = evidencia aktivity študentov (pedagogická hodnota)

## ✅ Hodnota / Zhrnutie

Jeden server namiesto N inštalácií AI: centrálna správa licencií, prehľad o aktívnych reláciách a auditná stopa. Pre tím alebo triedu je to jednoduchšie ako licencovať každý stroj zvlášť.

## Zdroje

[1] https://sparxsystems.com/kernaro/resources/kernaro-ai/kernaro-user-management-user-guide/

[2] https://sparxsystems.com/kernaro/resources/kernaro-ai/kernaro-installation-guide/

[3] https://sparxsystems.com/kernaro/kernaro-ai-hub/

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
