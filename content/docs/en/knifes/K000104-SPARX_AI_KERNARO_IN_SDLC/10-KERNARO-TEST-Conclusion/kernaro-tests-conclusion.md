---
fm_version: "1.0.1"
fm_build: "2026-04-29T06:56:28.587132+00:00"
fm_version_comment: ""

id: "K000104-10-conclusion"
guid: "5410d127-8626-49de-9a54-813f57405e2f"

dao: "knife"
title: "G – Conclusions & How This Was Made"
description: "Overall assessment of Kernaro Beta: competitive positioning, governance insights, and a transparent note on how this test report was produced."

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

# G – Conclusions & How This Was Made

← [Back to index](../index.md)

---

## G1 · Overall Assessment

Kernaro met and in some areas exceeded expectations for a Beta product.

It represents a genuinely new level of architecture management – not a chat assistant bolted onto a tool, but an AI layer that understands the live model, can act on it, and can be governed through event-driven agents.

### From a competitive perspective: 
- Kernaro supports active model creation and modification
- Event-driven automation, and the entire SDLC scope at a fraction of the price of comparable EAM platforms. 
- Competitors like Bizzdesign [1] currently offer read-only AI assist at a cost that is at minimum 5× higher, while covering only the CxO layer of the SDLC.

**Key insight from this test:**

> AI will not replace architects, analysts, or developers.  
> It will amplify those who have built the systematic foundations beneath it –  
> TAXONOMY, ONTOLOGY, and role-based VIEWS.  
> Those who have not will expect AI to substitute for that work. It cannot.

---

## G2 · CAA – Context Aware Approach

The most important principle demonstrated by this entire test is **Context Aware Approach (CAA)**.

Before any tool was evaluated, context was defined:

```
1. Why are we digitising reality?
   → To support understanding and decision-making across SDLC roles.

2. What problem does Kernaro solve?
   → Communication gap between model specialists and non-specialist stakeholders.

3. What is the test scope?
   → Beta evaluation on a controlled QEA model (Coffee Machine specification).
   → Agents, JavaScript generation, APV methodology integrity.

4. What are the constraints?
   → Data privacy (no production data to external LLM without compliance review).
   → Budget ($20 API credits).
   → Time (Beta extended to April 30, 2026).
```

Only after this context was established did the actual testing begin.

> **The output of a tool, an AI, or any SDLC process is only as good  
> as the context that was defined before it started.**

This is not a new principle. It is the same discipline that separates a well-scoped project from a runaway one. CAA simply names it explicitly and applies it consistently.

---

## G3 · How This Report Was Made – KNIFE + Claude + OneNote

This report did not emerge from a single session. It is the output of an iterative process that mirrors standard SDLC practice.

### Tools used

| Tool | Role |
|---|---|
| **OneNote** | Continuous notes during testing – raw observations, screenshots, error messages, timestamps |
| **Claude Sonnet 4.6** | Knowledge partner – analysis, prompt engineering, debugging, structured writing |
| **KNIFE framework** | Knowledge structure – each section is an independent, reusable knowledge unit |
| **Kernaro Beta** | The subject of the test – also used to generate some of its own test material |

### Process

```
1. CONTEXT DEFINITION
   Define why, what, for whom, under what constraints
   → OneNote: initial scope and goals

2. EXPLORATION
   Run tests iteratively, note findings as they happen
   → OneNote: raw log with timestamps and screenshots

3. ANALYSIS WITH CLAUDE
   Process raw notes → identify patterns, classify findings,
   draft structured content, debug agent prompts
   → Claude Sonnet 4.6: several conversation iterations

4. KNIFE STRUCTURE
   Organise output into independent, reusable sections
   → Central index + sub-files A–G
   → Each section can stand alone or link to others

5. REVIEW & CORRECTION
   Check against actual screenshots and test results
   → Corrections applied per section (e.g. wrong tools list, MariaDB vs SQL Server)

6. PUBLISH
   Send to Sparx Systems for feedback → LI post series → GitHub KNIFE (public)
```

This is SDLC applied to knowledge production. The same discipline that governs software delivery governs the creation of this document.

### KNIFE as a publication framework

KNIFE (Knowledge Is Not For Everyone, or simply: shareable knowledge units) is a personal framework for capturing and publishing practical knowledge from real work.

The approach:
- Each KNIFE is a self-contained, linkable unit
- Written from practice, not from theory
- Published openly on GitHub (public, Like & Share license)
- Designed to be referenced in LinkedIn posts, presentations, and client work

This Beta test report is KNIFE #103 (Kernaro AI Beta). It references and will be referenced by related KNIFEs on CAA, SDLC tooling, and prompt engineering.

> The goal is not to produce content for content's sake.  
> The goal is to demonstrate systematický prístup – the value of systematic thinking –  
> through real, verifiable examples.  
> If that attracts partners, clients, or collaborators, the approach validated itself.

---

## G4 · What Was Not Tested

For completeness – areas explicitly out of scope for this Beta:

- Prolaborate + Genie AI integration
- EA Native AI Assist (OpenAI / Gemini) – comparison test
- JP MCP Server (Sparx Systems Japan) – practical setup
- Trerado – not yet released
- Azure OpenAI backend for Kernaro – enterprise compliance path
- Python Execution via Kernaro – Script Agent defaulted to JavaScript
- UC-02 and beyond in APV methodology integrity check

These remain as candidates for future KNIFE articles and tests.

---

## G5 · Next Steps

| Priority | Action |
|---|---|
| Immediate | Send this report to Sparx Systems (kernaro@sparxsystems.com) |
| Short term | LI post series (3 posts: hook → technical → conceptual) |
| Medium term | Complete KNIFE #103 with sections A, B + images |
| Medium term | Draft KNIFE: Digitalizácia reality – Prečo a Ako |
| Later | Test JP MCP Server + Claude Desktop |
| Later | Evaluate Kernaro + Azure OpenAI backend for enterprise PoC |

---

## Product & Reference Links

[1] Bizzdesign Horizzon – https://bizzdesign.com  
[2] Kernaro AI for EA – https://kernaro.sparxsystems.com  
[3] Anthropic Console – https://console.anthropic.com  
[4] KNIFE repository – http://knifes.systemthinking.sk  
[5] SystemThinking – https://systemthinking.xyz  

---

← [Back to index](../index.md)
