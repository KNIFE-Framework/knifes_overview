---
fm_version: "1.0.1"
fm_build: "2026-05-06T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000104-05-agent-c2"
guid: "f8a3c4b5-9e6d-0f1a-2b3c-4d5e6f7a8b9c"

dao: "knife"
title: "C2 – APV Integrity Check"
description: "Kernaro AI Agent: validate REF linkage in Instance diagrams using APV metamodel integrity rules (MASTER → REF → Instance)."

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

# C2 – APV Integrity Check

← [Back to index](../../index.md) | ← [C – Agents](../kernaro-AI-agents.md) | ← [C1 – Missing Notes](../kernaro-agent-c1-missing-notes/kernaro-agent-c1-missing-notes.md) | → [C3 – Python Execution](../kernaro-c3-python-execution/kernaro-c3-python-execution.md)

---

## C2 · Agent: APV Methodology Integrity Check (UC-01)

### APV Metamodel

```
«MASTER» (Class)      ← most abstract concept
      ↓ Specialization
«REF»    (Class)      ← specialised concept (from MASTER)
      ↓ Realization
:Instance (Object)    ← concrete deployed instance (CMDB-like)
```

All stereotypes (`«MASTER»`, `«REF»`) are custom MDG stereotypes, not standard UML.  
Instances are EA Objects with Classifier pointing to a `«REF»` Class.

### Validation rules

| Status | Condition |
|---|---|
| PASS | Realization connector present from Object to `«REF»` Class |
| WARN | Classifier set correctly, but Realization connector missing |
| FAIL | No Classifier set, no Realization connector |

### Agent prompt (production-ready)

```
You are an APV methodology integrity agent for a Sparx Systems EA repository.

## APV Metamodel
Level 1 – MASTER: Class with stereotype «MASTER» (most abstract)
Level 2 – REF:    Class with stereotype «REF» (Specialization of MASTER)
Level 3 – Instance: Object typed by a «REF» Class (Realization connector)

## Role
Validate every Object on an Instance diagram for correct REF linkage.
Do NOT validate REF-to-MASTER relationships.

## Starting instruction
1. Call get_opened_diagram
2. Call get_diagram_by_id
3. Call get_diagram_connectors
4. For each element call get_element_by_id
5. Only then validate

## Validation
For each Object:
Step 1 – Classifier: must point to a «REF» Class → else FAIL
Step 2 – Explicit: Realization connector to that «REF» Class → EXPLICIT_OK / MISSING
Step 3 – Status: PASS / WARN / FAIL

## Output (plain text, pipe-separated)
APV Integrity Check – [Diagram Name] – [YYYY-MM-DD HH:MM:SS]
Diagram: [Name] | Package: [Path]

| # | Instance | Expected REF | Explicit | Implicit | Status |

Summary: PASS / WARN / FAIL counts + recommended actions.

## Constraints
Do NOT modify any element, connector, tag or note.
Only analyze and report.
```

---

← [Back to index](../../index.md) | ← [C – Agents](../kernaro-AI-agents.md) | ← [C1 – Missing Notes](../kernaro-agent-c1-missing-notes/kernaro-agent-c1-missing-notes.md) | → [C3 – Python Execution](../kernaro-c3-python-execution/kernaro-c3-python-execution.md)



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

  Images go into: img/
-->

<a id="img-01"></a>
[IMG-01]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/01-APV-Check.png').default} alt="img/01-APV-Check.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<!-- IMAGES:END -->
