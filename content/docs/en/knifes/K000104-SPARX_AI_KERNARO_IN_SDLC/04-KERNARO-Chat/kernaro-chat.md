---
fm_version: "1.0.1"
fm_build: "2026-04-29T06:56:28.587132+00:00"
fm_version_comment: ""

id: "K000104-04-chat"
guid: "1248460f-b911-4fa9-bbc7-4c6bb9269b60"

dao: "knife"
title: "B – Chat"
description: "Natural language queries against the EA model via Kernaro Chat: model exploration, element lookup, and context-aware responses."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: "KNIFE"
type: ""
priority: ""
tags: [SDLC, AI, KERNARO]

locale: "en"

created: "2026-04-29 08:56"
modified: "2026-04-29 08:56"
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

## B1 · Model exploration

Natural language queries against the open EA model work reliably.

**Test query:**
```
What is the name of current repository?
```

Kernaro returned a structured model overview including all root models with package hierarchy, diagram inventory, and a cost estimation for document generation.

**Important:** For large repositories, always specify a GUID or package name to limit context scope. Without scoping, Kernaro sends large portions of the model as context with each request – see B2.

---

## B2 · Token cost – context injection

**Test:** Generate a Word document with diagram list for the full repository (~800 MB, MariaDB [1], 4,734 diagrams).

**Result:** ~6,000,000 tokens consumed. Cost: ~$2.42 USD for a partial run.

**Root cause:** Kernaro uses **context injection** – model data is serialised and sent as part of each LLM prompt. The entire model (or large portions) travels to the Anthropic API [2] with each request.

| Scope | Approx. tokens | Approx. cost |
|---|---|---|
| Full model, no scope limit | ~6,000,000 | ~$2.00–$3.50 |
| GUID-scoped package | ~3,000 | ~$0.34 |
| Single element agent | ~1,144 | ~$0.05 |

**Recommendation:** Always include a GUID or package name in chat queries.

```
GUID ={8208DC8D-B283-10B3-86D0-E8D891DD8861}. 
List all elements in this package that have empty Notes field.
Show element name and type.
```
<!-- 
<figure><img src="/knifes/kernaro-beta/img/B2-token-cost.png" width="700" alt="Anthropic Console – monthly token cost chart" /></figure>

![Anthropic Console – monthly token cost](./img/B2-token-cost.png)
 -->
---

## B3 · Document generation – Coffee Machine Use Case

**Scenario:** Create a Use Case specification for a Coffee Machine system including functional requirements, Status diagram, and Activity diagram. Generate a Word document from the result.

**Test model:** Empty QEA (SQLite) file, populated during the test session.

**Result:** ✅ Document was generated and was usable for stakeholder communication.

Kernaro's planned approach (presented before execution):
1. Script Agent exports the package/diagram structure to JSON
2. Document Agent uses Python + `python-docx` to build the Word document with TOC, H1/H2 headings per package level, and diagram names
<!-- 
<figure><img src="/knifes/kernaro-beta/img/B3-generation-plan.png" width="700" alt="Kernaro document generation plan" /></figure>

![Kernaro document generation plan](./img/B3-generation-plan.png)
 -->
---

## B4 · Finding – Structured Scenarios not utilised (Operations used instead)

This finding is also referenced in [E – Findings, section E3b](../07-KERNARO-Test-Findings/kernaro-test-findings.md).

### Background

EA supports two distinct native mechanisms for capturing Use Case steps:

**Structured Scenarios (Scenarios tab)**
Accessible via `UseCase → Scenarios tab`. Columns: Step, Action, Uses, Results, State.
This is the full EA structured scenario – linked to test cases, traceable, exportable.

**Operations**
Accessible via `UseCase → Inspector → Operations`.
A formal list of operations with name and return type. Separate from Structured Scenario rows.

### What happened

Kernaro populated **Operations** on the UseCase elements – the Scenarios tab remained empty.
<!-- 
<figure><img src="/knifes/kernaro-beta/img/B4-scenarios-tab-empty.png" width="700" alt="Scenarios tab – empty on Maintain Machine UseCase" /></figure>

![Scenarios tab – empty](./img/B4-scenarios-tab-empty.png)

*Scenarios tab: empty. Basic Path has no steps.*

<figure><img src="/knifes/kernaro-beta/img/B4-operations-filled.png" width="500" alt="Inspector – Operations filled by Kernaro" /></figure>

![Inspector – Operations filled by Kernaro](./img/B4-operations-filled.png)
 -->
*Inspector → Operations: Kernaro populated 10 steps with state transitions (OFF → HEATING → READY → BREWING → DISPENSING).*

### Comparison

| | Operations (what Kernaro used) | Structured Scenario (Scenarios tab) |
|---|---|---|
| Location | Inspector → Operations | Scenarios tab → Basic Path |
| Structure | Step name + return state | Step + Action + Uses + Results + State |
| Scenarios tab populated | ❌ Empty | ✅ Filled |
| Reportable | ✅ Yes | ✅ Yes |
| Test case traceability | Partial | Full |

### Assessment

Kernaro did not use a generic Class element – it correctly identified the UseCase element and used native Operations. This is meaningfully better than the initial test run. However, the Scenarios tab (full Structured Scenarios) remained empty, which limits downstream traceability to test cases.

**Root cause: prompt ambiguity.** Kernaro confirmed this when asked – it listed three EA mechanisms and noted that saying *"use the Scenarios tab"* or *"add as operations"* removes ambiguity. Without explicit instruction, it defaulted to Operations.

### Kernaro's self-advice

> *EA has 3 ways to capture UC steps:*
> *– Operations — formal, reportable, visible in Scenarios tab*
> *– Notes text — free-form*
> *– Linked «scenario» element — what your «scenario» class already does*
> *Saying "use the Scenarios tab" or "add as operations" removes ambiguity.*
<!-- 
<figure><img src="/knifes/kernaro-beta/img/B4-kernaro-self-advice.png" width="700" alt="Kernaro chat – advice on UC step mechanisms" /></figure>

![Kernaro self-advice](./img/B4-kernaro-self-advice.png)
 -->
*Screenshot: Kernaro chat with /instructions suggestions and UC mechanism explanation. Add to /img.*

### Recommended prompt addition

```
For each Use Case, populate the Scenarios tab with a Basic Path 
using EA Structured Scenario format: Step, Action, Uses, Results, State.
Do NOT use Operations. Do NOT use Notes text.
```

### Recommendation for Kernaro team

Default behaviour for Use Case modelling should prefer Structured Scenarios over Operations, especially when `/instructions` indicate an SDLC-oriented repository.

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
