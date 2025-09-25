---
id: readme
guid: class-readme-b8514b71-e9d7-4e0e-b3ca-dbd2536f423c
dao: class
title: 20250917-Knifes-Duplicity
description: ""
author: Roman Kazička
authors: ["Roman Kazička"]
category: ""
type: ""
priority: ""
tags: []
# slug: "/README"
created: 2025-09-23
modified: ""
status: draft
locale: sk
sidebar_label: 20250917-Knifes-Duplicity
rights_holder_content: Roman Kazička
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
---
# KNIFE De-dupe Report

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
