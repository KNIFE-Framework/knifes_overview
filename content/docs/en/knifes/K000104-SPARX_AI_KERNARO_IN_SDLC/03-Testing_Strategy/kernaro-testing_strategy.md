---
fm_version: "1.0.1"
fm_build: "2026-04-29T06:56:28.587132+00:00"
fm_version_comment: ""

id: "K000104-03-testing-strategy"
guid: "a688c6f5-0dd4-4bfb-aa27-a6b27fc5c161"

dao: "knife"
title: "Testing Strategy"
description: "Outline of the Kernaro Beta testing approach: scenarios from the EA model side and the Claude Console side."

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
status: "published"
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

# Testing Strategy

← [Back to index](../index.md)

---

I had limited time for testing. I therefore decided to familiarise myself with the capabilities of AI-Kernaro through simple and practically common use cases.

**A. Working with AI-Kernaro directly in Enterprise Architect**

1. Analysis of an unfamiliar repository
   1. Basic model element statistics
   2. Generating documents from a larger model
2. Creating a functional specification for a Coffee Machine
   1. Use case model with typical roles and scenario descriptions
   2. Activity diagram
   3. State diagram
   4. Generating a Word document with the UC model and its description
3. Diagram quality validation
   1. Identifying elements without a description

From a technical perspective, AI-Kernaro supports several collaboration modes:
1. Chat
2. Agents
   1. Internal
   2. Python
3. Documentation generation

**B. Working with the Claude Platform Console**
1. What is the approximate token consumption for different types of tasks?
2. What is the cost of individual actions – e.g. generating a Word document from a repository?
3. How can LLM costs be optimised?

---

| Chapter | Topic |
|---|---|
| [B – Chat](../04-KERNARO-Chat/kernaro-chat.md) | Natural language queries, document generation, TOC |
| [C – Agents](../05-KERNARO-AI_Agent/kernaro-AI-agents.md) | Script Agent, Python execution, parallel agents |
| [D – JavaScript](../06-KERNARO-JavaScripts/kernaro-javascripts.md) | EA Script Manager integration |
| [E – Findings](../07-KERNARO-Test-Findings/kernaro-test-findings.md) | Consolidated test findings and recommendations |

---

← [Back to index](../index.md) | → [B – Chat](../04-KERNARO-Chat/kernaro-chat.md)
