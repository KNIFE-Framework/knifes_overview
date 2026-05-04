---
fm_version: "1.0.1"
fm_build: "2026-05-04T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000104-04-chat-b2"
guid: "b4c9e3d2-5c0f-6a7b-8d9e-0f1a2b3c4d5e"

dao: "knife"
title: "B2 – Document Generation"
description: "Kernaro Chat – Word document generation from an EA model, including context injection behaviour and stop generation."

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

# B2 – Document Generation

:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::

← [Back to index](../../index.md) | ← [B – Chat](../kernaro-chat.md) | ← [B1 – Model Statistics](../B1-model-statistics/kernaro-chat-B1-statistics.md) | → [B3 – TOC Generation](../B3-toc-generation/kernaro-chat-B3-toc.md)

---

## B3 · Document generation – Coffee Machine Use Case

**Scenario:** Create a Use Case specification for a Coffee Machine system including functional requirements, Status diagram, and Activity diagram. Generate a Word document from the result.

**Test model:** Empty QEA (SQLite) file, populated during the test session.

**Result:** ✅ Document was generated and was usable for stakeholder communication.

Kernaro's planned approach (presented before execution):
1. Script Agent exports the package/diagram structure to JSON
2. Document Agent uses Python + `python-docx` to build the Word document with TOC, H1/H2 headings per package level, and diagram names

---

## B3.1 · Stop generation

<!-- TODO: content – add description and screenshots of stopping the generation mid-run -->

---

## Product links

[1] Anthropic Console – https://console.anthropic.com  

---

← [Back to index](../../index.md) | ← [B – Chat](../kernaro-chat.md) | ← [B1 – Model Statistics](../B1-model-statistics/kernaro-chat-B1-statistics.md) | → [B3 – TOC Generation](../B3-toc-generation/kernaro-chat-B3-toc.md)

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
<img src={require('./img/11-KERNARO-Chat.png').default} alt="img/11-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-02"></a>
[IMG-02]
<img src={require('./img/12-KERNARO-Chat.png').default} alt="img/12-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-03"></a>
[IMG-03]
<img src={require('./img/13-KERNARO-Chat.png').default} alt="img/13-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-04"></a>
[IMG-04]
<img src={require('./img/14-KERNARO-Chat.png').default} alt="img/14-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-05"></a>
[IMG-05]
<img src={require('./img/15-CLAUDE-Tokens-Chat.png').default} alt="img/15-CLAUDE-Tokens-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-06"></a>
[IMG-06]
<img src={require('./img/16-STOP-KERNARO-Chat.png').default} alt="img/16-STOP-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<!-- IMAGES:END -->