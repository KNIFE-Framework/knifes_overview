---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "readme"
guid: "b8514b71-e9d7-4e0e-b3ca-dbd2536f423c"
dao: "class"
title: "20250917-Knifes-Duplicity"
description: ""
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: ""
type: ""
priority: "no"
tags: []
locale: "sk"
sidebar_label: "20250917-Knifes-Duplicity"
created: "2025-09-23"
modified: ""
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
---
# KNIFE De-dupe Report

<!-- fm-visible: start -->
> **GUID:** `b8514b71-e9d7-4e0e-b3ca-dbd2536f423c`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## Použitie
1) Skopíruj `scripts/knife-dedupe-report.mjs` do rootu svojho repozitára.
2) Spusť:
```bash
node scripts/knife-dedupe-report.mjs
```
3) Pozri si výstup v `knife_dedupe_report.md`.

Voliteľné (Makefile cieľ):
```
.PHONY: verify-dupes
verify-dupes:
	node scripts/knife-dedupe-report.mjs || true
```
