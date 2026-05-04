---
fm_version: "1.0.1"
fm_build: "2026-05-04T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000104-04-chat-b4"
guid: "d6e1a5f4-7e2b-8c9d-0f1a-2b3c4d5e6f7a"

dao: "knife"
title: "B4 – Coffee Machine Functional Specification"
description: "Kernaro Chat – functional specification of a Coffee Machine system: Use Cases, Scenarios tab vs Operations finding, and prompt recommendations."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: "KNIFE"
type: ""
priority: ""
tags: [SDLC, AI, KERNARO]

locale: "en"

created: "2026-05-04 00:00"
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

# B4 – Coffee Machine Functional Specification

:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::

← [Back to index](../../index.md) | ← [B – Chat](../kernaro-chat.md) | ← [B3 – TOC Generation](../B3-toc-generation/kernaro-chat-B3-toc.md) | → [C – Agents](../../05-KERNARO-AI_Agent/kernaro-AI-agents.md)

---

<!-- TODO: content – describe the Coffee Machine functional specification use case -->

---

## B4 · Finding – Structured Scenarios not utilised (Operations used instead)

This finding is also referenced in [E – Findings, section E3b](../../07-KERNARO-Test-Findings/kernaro-test-findings.md).

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

### Recommended prompt addition

```
For each Use Case, populate the Scenarios tab with a Basic Path 
using EA Structured Scenario format: Step, Action, Uses, Results, State.
Do NOT use Operations. Do NOT use Notes text.
```

### Recommendation for Kernaro team

Default behaviour for Use Case modelling should prefer Structured Scenarios over Operations, especially when `/instructions` indicate an SDLC-oriented repository.

---

← [Back to index](../../index.md) | ← [B – Chat](../kernaro-chat.md) | ← [B3 – TOC Generation](../B3-toc-generation/kernaro-chat-B3-toc.md) | → [C – Agents](../../05-KERNARO-AI_Agent/kernaro-AI-agents.md)

<!-- IMAGES:BEGIN -->

---

## Images

<!-- COPY-PASTE REFERENCE
  Inline image (no caption):
    <img src={require('./img/...').default} style={{maxWidth:'800px',width:'100%'}} />

  Endnote image with caption (replace [IMG-xx] with #### heading):
    <a id="img-07"></a>
    #### IMG-07 · Short descriptive title
    <img src={require('./img/...').default} style={{maxWidth:'800px',width:'100%'}} />

  Reference from text:
    [[IMG-07]](#img-07)
    → see [[IMG-07]](#img-07)
-->

<a id="img-01"></a>
[IMG-01]
<img src={require('./img/01-Coffee-Machine.png').default} alt="img/01-Coffee-Machine.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-02"></a>
[IMG-02]
<img src={require('./img/02-Coffee-Machine.png').default} alt="img/02-Coffee-Machine.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-03"></a>
[IMG-03]
<img src={require('./img/03-Coffee-Machine.png').default} alt="img/03-Coffee-Machine.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-04"></a>
[IMG-04]
<img src={require('./img/04-Coffee-Machine.png').default} alt="img/04-Coffee-Machine.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-05"></a>
[IMG-05]
<img src={require('./img/05-Coffee-Machine.png').default} alt="img/05-Coffee-Machine.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-06"></a>
[IMG-06]
<img src={require('./img/06-Claude-Dashboard.png').default} alt="img/06-Claude-Dashboard.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-07"></a>
[IMG-07]
<img src={require('./img/07-Coffee-Machine.png').default} alt="img/07-Coffee-Machine.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-08"></a>
[IMG-08]
<img src={require('./img/08-Claude-Dashboard.png').default} alt="img/08-Claude-Dashboard.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-09"></a>
[IMG-09]
<img src={require('./img/09-Coffee-Machine.png').default} alt="img/09-Coffee-Machine.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-10"></a>
[IMG-10]
<img src={require('./img/10-Claude-Dashboard.png').default} alt="img/10-Claude-Dashboard.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-11"></a>
[IMG-11]
<img src={require('./img/11-Claude-Dashboard.png').default} alt="img/11-Claude-Dashboard.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-12"></a>
[IMG-12]
<img src={require('./img/12-Coffee-Machine.png').default} alt="img/12-Coffee-Machine.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-13"></a>
[IMG-13]
<img src={require('./img/13-Claude-Dashboard-Limits.png').default} alt="img/13-Claude-Dashboard-Limits.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-14"></a>
[IMG-14]
<img src={require('./img/14-Claude-Dashboard-costs.png').default} alt="img/14-Claude-Dashboard-costs.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-15"></a>
[IMG-15]
<img src={require('./img/15-Coffee-Machine-activity-diag.png').default} alt="img/15-Coffee-Machine-activity-diag.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-16"></a>
[IMG-16]
<img src={require('./img/16-Coffee-Machine-status-diag.png').default} alt="img/16-Coffee-Machine-status-diag.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-17"></a>
[IMG-17]
<img src={require('./img2-gen/01-generateElements-chats-setingSkills.png').default} alt="img2-gen/01-generateElements-chats-setingSkills.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-18"></a>
[IMG-18]
<img src={require('./img2-gen/02-generateElements-chats.png').default} alt="img2-gen/02-generateElements-chats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-19"></a>
[IMG-19]
<img src={require('./img2-gen/03-generateElements-chats.png').default} alt="img2-gen/03-generateElements-chats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-20"></a>
[IMG-20]
<img src={require('./img2-gen/04-generateElements-chats.png').default} alt="img2-gen/04-generateElements-chats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-21"></a>
[IMG-21]
<img src={require('./img2-gen/05-generateElements-chats.png').default} alt="img2-gen/05-generateElements-chats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-22"></a>
[IMG-22]
<img src={require('./img2-gen/06-generateElements-chats.png').default} alt="img2-gen/06-generateElements-chats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-23"></a>
[IMG-23]
<img src={require('./img2-gen/07-generateElements-chats.png').default} alt="img2-gen/07-generateElements-chats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-24"></a>
[IMG-24]
<img src={require('./img2-gen/08-generateElements-chats.png').default} alt="img2-gen/08-generateElements-chats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-25"></a>
[IMG-25]
<img src={require('./img2-gen/09-generateElements-OPERATIONSchats.png').default} alt="img2-gen/09-generateElements-OPERATIONSchats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-26"></a>
[IMG-26]
<img src={require('./img2-gen/10-generateElements-OPERATIONSchats.png').default} alt="img2-gen/10-generateElements-OPERATIONSchats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-27"></a>
[IMG-27]
<img src={require('./img2-gen/11-generateElements-chats.png').default} alt="img2-gen/11-generateElements-chats.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-28"></a>
[IMG-28]
<img src={require('./img2-gen/12-generateElements-structuredScenario-chats.png').default} alt="img2-gen/12-generateElements-structuredScenario-chats.png" style={{maxWidth: '800px', width: '100%'}} />

<!-- IMAGES:END -->