---
fm_version: 1.0.1
fm_build: '2025-11-05T09:52:55Z'
fm_version_comment: ''
id: 01_D1-MANAGEMENT_05_WORKACTIVITIESEVIDENCE_2025_202509_20250917-KNIFES-DUPLICITY_README_12571F
guid: 7154f826-bf83-478b-9436-caf907e99519
dao: 7ds
title: 20250917-Knifes-Duplicity
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
