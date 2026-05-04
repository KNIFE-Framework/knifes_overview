---
fm_version: "1.0.1"
fm_build: "2026-05-04T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000104-04-chat"
guid: "1248460f-b911-4fa9-bbc7-4c6bb9269b60"

dao: "knife"
title: "B – Chat"
description: "Kernaro Chat overview – natural language queries against the EA model: model exploration, document generation, TOC, and functional specification."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: "KNIFE"
type: ""
priority: ""
tags: [SDLC, AI, KERNARO]

locale: "en"

created: "2026-04-29 08:56"
modified: "2026-05-04 00:00"
status: "inProgress"
privacy: "public"

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazicka"

origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_branch: ""
origin_system: "CAA"
origin_author: "Roman Kazicka"
origin_imported_from: ""
origin_import_date: ""

fm_reserved1: ""
fm_reserved2: ""
---

# B – Chat

:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::

← [Back to index](../index.md)

---

Natural language queries against the open EA model via Kernaro Chat — model exploration, document generation, and context-aware responses.

| Use Case | Topic |
|---|---|
| [B1 – Model Statistics](./B1-model-statistics/kernaro-chat-B1-statistics.md) | Model exploration, token cost for 800 MB repository |
| [B2 – Document Generation](./B2-document-generation/kernaro-chat-B2-document-generation.md) | Word document generation, context injection, stop generation |
| [B3 – TOC Generation](./B3-toc-generation/kernaro-chat-B3-toc.md) | TOC from model up to L2 level |
| [B4 – Coffee Machine Spec](./B4-coffee-machine-spec/kernaro-chat-B4-coffee-machine-spec.md) | Functional specification of Coffee Machine system |

---

## B5 · Chat limitations observed

| Limitation | Description |
|---|---|
| Screenshot paste | Clipboard image paste returns Error 400 (empty base64). Workaround: describe the error in text. |
| Script execution | Chat can generate JavaScript code but cannot run it in EA Script Manager automatically. Manual copy-paste required. |
| Session corruption | After image error, session became unreliable. Full session reset resolved it. |

---

## Product links

[1] MariaDB – https://mariadb.org  
[2] Anthropic Console – https://console.anthropic.com  

---

← [Back to index](../index.md) | → [C – Agents](../05-KERNARO-AI_Agent/kernaro-AI-agents.md)

<!-- IMAGES:SKIP -->
