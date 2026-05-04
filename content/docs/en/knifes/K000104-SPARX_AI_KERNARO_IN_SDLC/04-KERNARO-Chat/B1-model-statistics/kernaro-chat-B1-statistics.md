---
fm_version: "1.0.1"
fm_build: "2026-05-04T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000104-04-chat-b1"
guid: "a3f8d2c1-4b9e-5f6a-7c8d-9e0f1a2b3c4d"

dao: "knife"
title: "B1 – Model Statistics"
description: "Kernaro Chat – natural language model exploration and token cost analysis for an 800 MB EA repository."

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

# B1 – Model Statistics

:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::

← [Back to index](../../index.md) | ← [B – Chat](../kernaro-chat.md) | → [B2 – Document Generation](../B2-document-generation/kernaro-chat-B2-document-generation.md)

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

---

## Product links

[1] MariaDB – https://mariadb.org  
[2] Anthropic Console – https://console.anthropic.com  

---

← [Back to index](../../index.md) | ← [B – Chat](../kernaro-chat.md) | → [B2 – Document Generation](../B2-document-generation/kernaro-chat-B2-document-generation.md)

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
<img src={require('./img/01-KERNARO-Chat.png').default} alt="img/01-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-02"></a>
[IMG-02]
<img src={require('./img/02-KERNARO-Chat.png').default} alt="img/02-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-03"></a>
[IMG-03]
<img src={require('./img/03-KERNARO-Chat.png').default} alt="img/03-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-04"></a>
[IMG-04]
<img src={require('./img/04-KERNARO-Chat.png').default} alt="img/04-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-05"></a>
[IMG-05]
<img src={require('./img/05-KERNARO-Chat.png').default} alt="img/05-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-06"></a>
[IMG-06]
<img src={require('./img/06-KERNARO-Chat.png').default} alt="img/06-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-07"></a>
[IMG-07]
<img src={require('./img/07-KERNARO-Chat.png').default} alt="img/07-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-08"></a>
[IMG-08]
<img src={require('./img/08-KERNARO-Chat.png').default} alt="img/08-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-09"></a>
[IMG-09]
<img src={require('./img/09-KERNARO-Chat.png').default} alt="img/09-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<a id="img-10"></a>
[IMG-10]
<img src={require('./img/10-KERNARO-Chat.png').default} alt="img/10-KERNARO-Chat.png" style={{maxWidth: '800px', width: '100%'}} />

<!-- IMAGES:END -->