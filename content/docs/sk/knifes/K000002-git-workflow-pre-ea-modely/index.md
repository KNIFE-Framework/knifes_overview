---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000002"
guid: "6cf87ac0-1644-4134-8c67-8e61da2dca78"
dao: "knife"
title: "K000002 – Git workflow pre EA modely"
description: "Multirelease stratégie, LemonTree, merge politiky"
author: "Roman Kazicka"
authors: ["Roman Kazička",""]
category: ""
type: ""
priority: "no"
tags: ["KNIFE", "git", "ea", "lemontree"]
locale: "sk"
created: "2025-09-17"
modified: "2025-09-17"
status: "inprogress"
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
#sidebar_label: "K000002 – Git workflow pre EA modely"
date: "2025-09-17"
sidebar_position: "2"
sidebar_label: "K000002 – Git workflow pre EA modely"
---

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
# KNIFE K000002 – Git workflow pre EA modely

<!-- fm-visible: start -->
> **GUID:** `6cf87ac0-1644-4134-8c67-8e61da2dca78`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

> **KNIFE** – Knowledge In Friendly Examples
> **Séria:** Systemic Thinking in IT & Digital Fabrication
> **Tagy:** `git` `enterprise-architect` `lemontree` `tutorial`

> 🚧 **Rozpracované — pracujeme na obsahu.**
> Kompletný návod vzniká popri prednáške STHDF (október 2026).

## ⚡ Rýchly návod (Top)

*Čoskoro.* Zatiaľ sú funkčné kroky v README repozitára s modelom:
**[ea_model_sthdf_2026-2027](https://github.com/06-STH-Projects/ea_model_sthdf_2026-2027)**.

```mermaid
flowchart LR
  P["PARENT model<br/>(main)"] --> A["Študent A<br/>(vetva ST0XX-a)"]
  P --> B["Študent B<br/>(vetva ST0XX-b)"]
  A -->|"PR + LemonTree merge"| P
  B -->|"PR + LemonTree merge"| P
```

## 🎯 Čo tu bude

1. Stiahnutie `.qea` modelu z GitHubu a otvorenie v Enterprise Architect.
2. Vlastná vetva a zmena len vo vlastnom balíku.
3. Commit, push a Pull Request.
4. Trojcestný merge v LemonTree: *parent* (spoločný predok), *ours*, *theirs*.
5. Pravidlá, ktoré držia konflikty malé, a čo robiť, keď sa niečo pokazí.

*English version:* K000002 (EN).
