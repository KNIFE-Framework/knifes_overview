---
fm_version: "1.0.1"
fm_build: "2026-04-29T06:56:28.587132+00:00"
fm_version_comment: ""

id: "K000104-05-ai-agents"
guid: "0a6e6e7f-cc02-45ae-ad5a-f6e0c6e731fe"

dao: "knife"
title: "C – Agents"
description: "Event-driven AI agents in Kernaro: detecting missing documentation, applying QA tags, and bulk operations triggered from EA diagram events."

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

# C – Agents

:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::

← [Back to index](../index.md)

| Agent | Topic |
|---|---|
| [C1 – Missing Notes](#c1--agent-missing-notes-in-element) | Detect empty Notes, apply QA tags via EA_OnPostCloseDiagram |
| [C2 – APV Integrity Check](#c2--agent-apv-methodology-integrity-check-uc-01) | Validate REF linkage in Instance diagrams |
| [C3 – Python Execution](./kernaro-python-execution.md) | Python vs. built-in tools — 3 attempts, 2 side effects |

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
<!-- 
<figure><img src="/knifes/kernaro-beta/img/B1-agent-approval.png" width="600" alt="Kernaro Agent Approval dialog" /></figure>

![Kernaro Agent Approval dialog](./img/B1-agent-approval.png)
 -->
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
<!-- 
<figure><img src="/knifes/kernaro-beta/img/apv-diagram.png" width="600" alt="Windows Instances diagram – missing Realization on left instance" /></figure>

![Windows Instances diagram](./img/apv-diagram.png)
 -->
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

← [Back to index](../index.md) | → [D – JavaScript](../06-KERNARO-JavaScripts/kernaro-javascripts.md)
