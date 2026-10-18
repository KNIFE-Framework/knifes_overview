---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2026-10-18T12:24:05.538730+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript
id: "K000121_EN"

# Unikátne UUID – generuje skript
guid: "9773f99f-da26-407c-8822-9150d1eb027a"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "knife"

# Názov zápisu – dopĺňa používateľ
title: "K000121 – Kernaro AI Hub: centralized AI access for teams"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "How to deploy Kernaro AI Hub as a central AI server for a team or class: architecture, prerequisites, license assignment and session monitoring. For EA environment admins, including academic deployments (65 students)."


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
locale: "en"


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

# K000121 – Kernaro AI Hub: centralized AI access for teams

> **KNIFE** – Knowledge In Friendly Examples
> **Series:** Systemic Thinking in IT & Digital Fabrication
> **Level:** Intermediate
> **Tags:** `kernaro` `ea` `ai-hub` `licensing` `user-management` `windows-server`

**Version:** 1.0 | **Date:** 2026-10-18 | **Related:** [K000104 – SPARX AI Kernaro in SDLC](../K000104-SPARX_AI_KERNARO_IN_SDLC/index.md)

## 🎯 What it solves (purpose, goal)

Kernaro AI has two deployment models:

| Model | Where AI runs | For whom |
|---|---|---|
| **Kernaro Assist** | Plugin on each EA client | 1 license = 1 machine |
| **Kernaro AI Hub** | Central server | 1 server = N users |

This KNIFE covers the **Hub model** — suitable for team or academic environments. For Kernaro use in an SDLC context see K000104.

## 🧩 How it solves it (principle)

AI runs on a single server; EA clients sign in through the Kernaro Assist plugin, and the Hub allocates license seats and tracks sessions.

![Kernaro AI Hub – architecture](./img/kernaro-hub-architecture.svg)

### Server installation prerequisites

| Component | Source |
|---|---|
| Windows Server 2019+ | — |
| PostgreSQL 16 or 17 | postgresql.org |
| pgvector | GitHub: pgvector/pgvector (build via VS C++ x64) |
| Git | git-scm.com |
| Visual Studio Community (C++) | visualstudio.microsoft.com |
| EA Graphlink | install **before** Kernaro Hub |
| KernaroAI-Setup.exe | request from Sparx Systems |

> ⚠️ The installer is not publicly downloadable — request it via "Request Kernaro Hub Installer" at sparxsystems.com/kernaro.

## 🧪 How to use it (application)

### User management

Two account types: **Admin** (full access) | **Regular** (restricted access).

License assignment flow:

1. `Configuration → User Management → Add User`
2. `User & Access Control → Assist Access → Assign Users to Kernaro Assist`
3. Set **Write Access** (Enabled = create/edit content; Disabled = read only)
4. Hub tracks seats: **Available / Assigned / Total**

Limited License displays seat counters. Unlimited License hides them; management works identically.

### Session monitoring

- **Real-time:** `User & Access Control → Assist Active Sessions` — User, Machine, Last Used, IP Address, Status. Admin can revoke individual or all sessions.
- **Audit log:** `Assist Session History` — Sign-In, Sign-Out, Session Refresh, Revocation, Access Denied, Expiration.

### Notes for academic deployment

- 65 students = license for 65 Assist seats (Limited License)
- Write Access recommended **enabled** — active AI interaction has educational value
- Verify before launch: LAN or VPN? → affects firewall / port configuration
- Session History = student activity log (pedagogical value)

## ✅ Value / Summary

One server instead of N separate AI installations: central license management, an overview of active sessions and an audit trail. For a team or a class this is simpler than licensing each machine separately.

## Sources

[1] https://sparxsystems.com/kernaro/resources/kernaro-ai/kernaro-user-management-user-guide/

[2] https://sparxsystems.com/kernaro/resources/kernaro-ai/kernaro-installation-guide/

[3] https://sparxsystems.com/kernaro/kernaro-ai-hub/

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Overview](../knifes_overview/KNIFE_Overview_Blog.md) • [List](../knifes_overview/KNIFE_Overview_List.md) • [Details](../knifes_overview/KNIFE_Overview_Details.md)
