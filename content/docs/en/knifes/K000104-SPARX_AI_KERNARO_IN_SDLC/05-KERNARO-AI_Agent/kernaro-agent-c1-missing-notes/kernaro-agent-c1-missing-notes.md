---
fm_version: "1.0.1"
fm_build: "2026-05-06T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000104-05-agent-c1"
guid: "e7f2b3a4-8d5c-9e0f-1a2b-3c4d5e6f7a8b"

dao: "knife"
title: "C1 – Missing Notes Agent"
description: "Kernaro AI Agent: detect elements with empty Notes field and apply QA tagged values via EA_OnPostCloseDiagram trigger."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: "KNIFE"
type: ""
priority: ""
tags: [SDLC, AI, KERNARO]

locale: "en"

created: "2026-05-06 00:00"
modified: "2026-05-06 00:00"
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

# C1 – Missing Notes Agent

← [Back to index](../../index.md) | ← [C – Agents](../kernaro-AI-agents.md) | → [C2 – APV Integrity Check](../kernaro-agent-c2-apv-check/kernaro-agent-c2-apv-check.md)

---

## C1 · Agent: Missing Notes in element

**Purpose:** Enforce documentation completeness – detect elements with empty Notes field, apply QA tagged values.

**Configuration:**
- Trigger: `EA_OnPostCloseDiagram`
- Tools enabled: read-only set + `add_tagged_value`, `bulk_add_tagged_values`
- Approval: ON

**Result:** ✅ Trigger fired correctly on diagram close. Approval dialog appeared with full detail.

```
Agent:        01-Missing Note in element
Triggered By: EA_OnPostCloseDiagram
Action:       Modify
Target:       QA_Status
Tool:         add_tagged_value
```

---

### Finding C1-1 – Trigger requires EA restart

After defining a trigger, the change took effect only after restarting the EA client.

System log before restart:
```
Refreshed event mappings: 0 active mappings loaded.
```

System log after restart:
```
Refreshed event mappings: 1 active mappings loaded.
Agent Execution Manager initialized. Loaded 1 active mappings.
```

**Recommendation for Kernaro team:** Trigger changes should activate without full EA restart.

---

### Finding C1-2 – Agent hallucinated write action

Without explicit output constraints in the prompt, the agent reported:
```
Action: Added QA_Status="Missing Note"
```
...even when the `add_tagged_value` tool was not available in the toolset.

After adding a `CRITICAL OUTPUT RULE` to the prompt, the agent correctly reported:
```
Action: SKIPPED – no write/create tagged value tool available
```

**Lesson:** The prompt author is responsible for the majority of agent errors.  
LLM has infinite imagination – the prompt must constrain the output format explicitly.

**Corrective prompt addition:**
```
CRITICAL OUTPUT RULE:
Never report an action as completed if the tool was not available.
Use only: Action: WRITTEN | SKIPPED | FAILED | NO TOOL
```

---

### Final agent prompt (production-ready)

```
You are a model quality assurance agent for a Sparx Systems EA repository.

Role: Enforce documentation completeness by detecting elements 
with missing or empty Notes fields.

Starting instruction:
1. Call get_opened_diagram to identify the active diagram.
2. Use get_diagram_by_id to retrieve diagram details.
3. For each element, call get_element_by_id and get_element_tagged_values.
4. Only then proceed with validation.
Never rely on a GUID passed in the trigger context.

Validation logic:
- Strip whitespace from Notes. If empty → Notes: MISSING
- If MISSING: attempt add_tagged_value QA_Status="Missing Note"
             attempt add_tagged_value QA_Date=YYYY-MM-DD HH:MM:SS
- Never overwrite existing QA_Status or QA_Date tags.

CRITICAL OUTPUT RULE:
Never report an action as completed if the tool was unavailable.
Use only: Action: WRITTEN | SKIPPED | FAILED | NO TOOL

Output format (plain text, copy-paste ready):
QA Validation – [Diagram Name] – [YYYY-MM-DD HH:MM:SS]
=======================================================
| # | Element Name | Type | GUID | Notes | Action |
```

---

← [Back to index](../../index.md) | ← [C – Agents](../kernaro-AI-agents.md) | → [C2 – APV Integrity Check](../kernaro-agent-c2-apv-check/kernaro-agent-c2-apv-check.md)



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
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/01-AI-Missing_note.png').default} alt="img/01-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-02"></a>
[IMG-02]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/02-AI-Missing_note.png').default} alt="img/02-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-03"></a>
[IMG-03]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/03-AI-Missing_note.png').default} alt="img/03-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-04"></a>
[IMG-04]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/04-AI-Missing_note.png').default} alt="img/04-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-05"></a>
[IMG-05]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/05-AI-Missing_note.png').default} alt="img/05-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-06"></a>
[IMG-06]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/06-AI-Missing_note.png').default} alt="img/06-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-07"></a>
[IMG-07]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/07-AI-Missing_note.png').default} alt="img/07-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-08"></a>
[IMG-08]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/08-AI-Missing_note.png').default} alt="img/08-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-09"></a>
[IMG-09]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/09-AI-Missing_note.png').default} alt="img/09-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-10"></a>
[IMG-10]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/10-AI-Missing_note.png').default} alt="img/10-AI-Missing_note.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<!-- IMAGES:END -->
