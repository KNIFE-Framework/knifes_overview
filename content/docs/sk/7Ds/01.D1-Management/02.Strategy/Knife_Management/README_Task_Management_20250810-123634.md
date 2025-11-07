---
fm_version: 1.0.1
fm_build: '2025-11-05T09:52:55Z'
fm_version_comment: ''
id: 01_D1-MANAGEMENT_02_STRATEGY_KNIFE_MANAGEMENT_README_TASK_MANAGEMENT_20250810-123634_A37838
guid: 544cf38f-f9f2-43a3-a1ce-0a492375f154
dao: 7ds
title: Knife_Management
description: ''
author: Roman Kazička
authors:
- '{{AUTHOR}}'
category: ''
type: ''
priority: ''
tags:
- knife
- 7ds
locale: sk
created: '2025-11-05T09:52:55Z'
modified: ''
status: draft
privacy: public
rights_holder_content: Roman Kazička
rights_holder_system: Roman Kazička (CAA/KNIFE/LetItGrow)
license: CC-BY-NC-SA-4.0
disclaimer: Use at your own risk. Methods provided as-is; participation is voluntary
  and context-aware.
copyright: © 2025 Roman Kazička
origin_repo: ''
origin_repo_url: ''
origin_commit: ''
origin_system: CAA/KNIFE
fm_reserved1: ''
fm_reserved2: ''
---
# Project Task Management – Minimal, GitHub-first

<!-- fm-visible: start -->
> **GUID:** `94f360ff-201a-4c7c-bfc7-c2255ee6c7fb`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

_Last updated: 20250810-123634_

## Goals
- Jedno miesto pre úlohy (**Issues**) + vizualizácia (**Projects**).
- Zachovať jednoduchosť (inbox → triáž → realizácia).
- Prenositeľné do ZenHub bez migrácie údajov.

## Structure
- **Repo:** `999-github-management` (centrálny inbox).
- **Project:** `CAA & Work Management Dashboard` (multi-view).
- **Labels (taxonomy):**
  - **Topics:** `KNIFE-K***`, `CAA-Core`, `GH-Admin`, `STH-Class`, `Infra`, `Docs`, `Automation`.
  - **Priority/State:** `urgent`, `high`, `medium`, `low`, `idea`, `research`, `blocked`.
- **Milestones:** `2025-Q3`, `2025-Q4`, `Semester-2025-2026-Part1`, `Release-v1.0`.

## Views (suggested)
- **Kanban:** Inbox → In Progress → Done.
- **Priorities:** filter `label:urgent` + due date.
- **KNIFE:** filter `label:KNIFE-*`.
- **Quarter planning:** filter `milestone:2025-Q3`.

## Daily Flow
1. Rýchly zápis → vytvor **Issue** s minimom (názov, popis, label).
2. Denná **triáž** → doplň milestone, prioritu, presuň na boarde.
3. Uzavretie úlohy = presun do **Done** (automaticky).

## Templates
V `.github/ISSUE_TEMPLATE/` použi:
- `task` – jednorazová úloha.
- `epic.md` – väčší celok (voliteľné, ak nepoužívaš ZenHub Epics).

## Moving 7Ds into language folders
Pre `knife_preview` (Docusaurus/MkDocs/Pages) maj:
```
docs/
  sk/
    7Ds/
      D1.md
      ...
    knife/
      KNIFE_Overview_List.md
      KNIFE_Overview_Details.md
  en/
    7Ds/   # (preklad neskôr)
    knife/ # (preklad neskôr)
```
> Ak sú 7Ds momentálne v roote, **presuň ich do `docs/sk/7Ds/`**. Preklady neskôr pridáš do `docs/en/7Ds/`.
