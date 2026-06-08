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

## G0 · Test Summary – Results per Test Area

| Area | Section | Key finding | Verdict |
|---|---|---|---|
| A1 · Repository exploration (chat queries) | [B – Chat](../04-KERNARO-Chat/kernaro-chat.md) | Natural language queries work reliably; token cost acceptable | ✅ |
| A1 · Document generation from full repository | [B1 – Model Statistics](../04-KERNARO-Chat/B1-model-statistics/kernaro-chat-B1-statistics.md) | ~6M tokens for 4,734 diagrams — cost killer; test abandoned | ⚠️ scope required |
| A2 · Specification & documentation | [B – Chat](../04-KERNARO-Chat/kernaro-chat.md) | Model → readable document for stakeholders and contracts | ✅ |
| A3 · Diagram quality validation | [C – Agents](../05-KERNARO-AI_Agent/kernaro-AI-agents.md) | Event-driven enforcement of local methodology rules | ✅ |
| Agent governance | [C – Agents](../05-KERNARO-AI_Agent/kernaro-AI-agents.md) | Planning as Worker ↔ Digital Worker consultation | ✅ |
| Agent reliability | [C – Agents](../05-KERNARO-AI_Agent/kernaro-AI-agents.md) | Hallucination resolved by prompt discipline | ✅ when governed |
| D · JavaScript generation | [D – JavaScript](../06-KERNARO-JavaScripts/kernaro-javascripts.md) | `new Enumerator()` hallucination; language instruction not honoured | ⚠️ workaround required |
| B · Cost (Claude Console) | [B – Chat](../04-KERNARO-Chat/kernaro-chat.md) | Token cost scales with context scope, not task complexity | ✅ when scoped |
| Corporate security | — | Model data leaves the organisation via external LLM API | ⚠️ review before production |

---

### A1 · Repository Exploration

Kernaro Chat was used to query an unfamiliar production repository (~800 MB, MariaDB, 4,734 diagrams).

Natural language exploration worked reliably — model name, package hierarchy, diagram inventory, element counts returned correctly with reasonable token usage.

**Where cost becomes critical: document generation from an unscoped repository**

> Task: generate a Word document listing all diagrams in the full repository (4,734 diagrams).
> Result: ~6,000,000 tokens consumed → ~$2.42 for a partial run (generation stopped manually before completion).
> Root cause: Kernaro serialises model content and injects it into each LLM prompt (context injection). Without scope limits, the entire model travels to the API with every request.

**Finding:** Scoping with a package GUID is not an optimisation — it is a prerequisite for cost-controlled work on large repositories. Without it, a single document generation task can exhaust an API budget.
A model with clear package structure and taxonomy allows precise, low-cost queries. An unstructured model forces the agent to scan everything.

---

### A2 · Specification & Documentation Generation

The Coffee Machine model was built entirely from scratch — using only natural language prompts. No manual EA modelling. Kernaro created the package structure, Use Case diagram, actors, Activity diagram, and State diagram through a sequence of chat instructions.

> Starting point: empty QEA file.
> Process: prompts only — describe what you need, Kernaro builds it step by step.
> Output: a functional UC model, activity and state diagrams, and a Word specification document.
> Practical use: stakeholder review, contract basis, handover package to development.

**Finding — EA Structured Scenarios not used:**
For Use Case steps, Kernaro populated Operations or Attributes on the UseCase element instead of using EA's native Structured Scenario tab. This is less optimal for traceability to test cases, but the output was usable for stakeholder communication.

For a user unfamiliar with EA, this result is acceptable — they get a working model and readable documentation without needing to know EA's advanced modelling conventions. An experienced EA architect would add the instruction: *"populate Scenarios tab, use EA Structured Scenario format"* — see [E3b](../07-KERNARO-Test-Findings/kernaro-test-findings.md#e3b--finding--structured-scenarios-not-utilised).

**The broader finding:** The model is the single source of truth. Not every stakeholder can open Enterprise Architect.
Kernaro generates readable, signable documentation directly from the model — without manual rewriting.
This closes the communication gap between the modelling team and the business or legal side.

---

### A3 · Diagram Quality Validation — Encoded Methodology

Define a rule once. Kernaro enforces it automatically on every diagram close.

> **Rule (APV methodology):** every Actor element must have Notes filled in.
> **Trigger:** `EA_OnPostCloseDiagram` — fires when you close a diagram.
> **Agent:** scans Actor elements → checks Notes → writes `QA_Status = Missing Note` to non-compliant elements.
> **Output:** quality status embedded directly in the model.

Without AI: a senior reviewer checks the model manually — once per sprint, if at all.
With AI: the check runs on every diagram close, for every analyst on the team, with no reviewer bottleneck.

**Finding:** Methodology rules that live in a senior's head or a PDF handbook become an active enforcement mechanism.
This is shift-left quality applied to architecture governance — errors are caught at the moment of work, not at review time.

---

### Agent Governance — Worker ↔ Digital Worker

Before any write operation, Kernaro presents a complete plan and waits for human approval. Each step can be confirmed or rejected individually.

> You instruct: *"Add QA_Status to all Actor elements in this package."*
> Kernaro responds: *"I plan to modify these 5 elements. Approve?"*
> You review the list. If it shows 50 elements instead of 5 — you stop it before a single change is made.

**Finding:** This is not a UX feature. It is the communication protocol between a human worker and a digital worker:
the human defines intent, the AI proposes execution, the human approves.
The same principle governs every mature change control process in SDLC.
Kernaro applies it natively to AI-driven model modifications.

---

### Agent Reliability — Prompt Discipline

The hallucination in [E1](../07-KERNARO-Test-Findings/kernaro-test-findings.md#e1--ro-tools--hallucination--fix) was not a Kernaro defect. The agent had no write tool, yet reported:
*"Added QA_Status=Missing Note to Customer element."*
It completed the most probable sentence — not the true one.

One rule added to the prompt resolved it completely:
> *"Never report an action as completed if the corresponding tool was not available."*

After: *"SKIPPED — no write tool available."*

**Finding:** AI output quality is 80% the quality of instructions, 20% model capability.
An incomplete prompt does not produce a wrong answer — it produces a confident wrong answer.
The prompt author carries the majority of the responsibility for what the agent does.

---

### D · JavaScript Generation

Kernaro was used to generate EA Script Manager scripts for bulk element operations.

> Issue D3-1: `new Enumerator()` hallucination — incompatible EA API syntax, persisted after correction.
> Issue D2-1: Python instruction produced JavaScript output instead.

**Finding:** JavaScript generation is functional for simple scripts but requires manual verification for EA-specific API patterns. The `new Enumerator()` pattern is a known hallucination — use `.Count` / `.GetAt(i)` as a workaround until the model is retrained.
A fix was submitted as recommendation [E4-1](../07-KERNARO-Test-Findings/kernaro-test-findings.md#e4--recommendations-for-kernaro-team).

---

### B · Cost Management — Claude Console

The test used two models — and that decision was made deliberately after the first cost observation.

**Model 1 — Production repository (800 MB, MariaDB, 4,734 diagrams)**
Used only for initial Chat exploration. One document generation attempt consumed ~6M tokens ($2.42 for a partial run, stopped manually). After this finding, the large model was abandoned for functional testing.

**Model 2 — Coffee Machine QEA (SQLite, built from scratch)**
All subsequent testing — agents, JavaScript, specification, document generation — was done on this clean test model. Token consumption was acceptable throughout.

| Scope | Tokens (approx.) | Cost (approx.) |
|---|---|---|
| Word document from full repository (4,734 diagrams) | ~6M | ~$2.42 (partial run, stopped) |
| GUID-scoped package query | ~3,000 | ~$0.34 |
| Single element agent operation | ~1,144 | ~$0.05 |
| Full test period (April 8–30, 2026) | — | **$7.53 USD** |

**Finding:** The switch from a large production model to a clean test model was not a limitation of the test — it was the right approach. Verifying functionality on a controlled model avoids cost surprises and keeps production data out of external API calls.

For production adoption: start with a well-scoped package (GUID), not the full repository. Invest in model structure and taxonomy — it directly reduces AI operating cost and improves output quality.

---

### Corporate Security — Before Production Adoption

Kernaro routes model content through an external LLM API (Claude / OpenAI).
This means: content from your EA repository leaves your organisation.

In this test, a controlled QEA test file (Coffee Machine) was used deliberately — no production data was sent externally.

**Key questions for corporate adoption:**
- Has your EA repository been classified for data sensitivity? (personal data, trade secrets, architecture of critical systems)
- Do you have an approved external AI API usage policy?
- Is Azure OpenAI (private endpoint) an option? Kernaro supports this as an enterprise compliance path — not tested in this Beta.

**Recommendation:** Complete a data classification review of the EA repository before enabling Kernaro on production models. GUID-scoped queries (package-level context) also limit the surface area of data sent per request.

---

### Issue distribution

| Severity | Count | Notes |
|---|---|---|
| High | 2 | C1-2 resolved by prompt; D3-1 workaround available |
| Medium | 4 | Workarounds available or in Kernaro roadmap |
| Low | 1 | UX/session issue |

Full findings and 9 recommendations for the Kernaro team → [E – Findings & Recommendations](../07-KERNARO-Test-Findings/kernaro-test-findings.md)

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

### Context first — no evaluation without scope

There is a question that has no useful answer: *"Which is better — Apple or Windows?"*
The answer depends entirely on who is asking, what they are trying to do, and under what constraints.

The same applies to any AI tool evaluation. Testing Kernaro without defining context first would produce an opinion, not a finding.

Before the first test was run, the following was established:
- **Who** is evaluating: a functional analyst role in an SDLC context
- **What** is being evaluated: Beta version, specific capabilities (Chat, Agents, JavaScript)
- **Why**: to assess fit for enterprise architecture support across the SDLC
- **Constraints**: data privacy (no production data to external API), budget ($20), time (Beta to April 30)

Only with this context do the findings become interpretable and transferable to other teams and contexts.

---

### Scale — what this test actually produced

| Dimension | Value |
|---|---|
| Test period | April 8–30, 2026 (~3 weeks) |
| Main sections | 10 + article map |
| Screenshots captured | 113+ |
| Issues documented | 7 |
| Recommendations submitted to Kernaro | 9 |
| Total API cost (Claude Console) | $7.53 USD |
| EA models used | 2 (production 800 MB + Coffee Machine QEA) |

Preparing the test scenarios, executing them, capturing observations, debugging errors, structuring findings, and writing this report represents a significant investment of time. This level of depth and breadth — by one person — would not have been achievable without AI assistance.

---

### Worker ↔ Digital Worker — what this collaboration actually produced

The AI used in this process (Claude Sonnet 4.6 in VS Code) was not a writing tool.
It was a knowledge partner across every phase of the work.

| Phase | What the AI contributed |
|---|---|
| Test design | Structuring use cases, identifying gaps in coverage |
| Error analysis | Interpreting EA error messages, proposing fixes for JavaScript hallucinations |
| Pattern recognition | Identifying recurring issues across separate test sessions |
| Structured writing | Converting raw OneNote observations into coherent, linked KNIFE sections |
| Iterative verification | Checking drafts against actual test results, catching factual errors |

**What was most valuable was not speed. It was the dialog.**

Raw observation in OneNote → discussed with Claude → structured finding → verified against screenshots → corrected → published. Each cycle caught something the previous pass had missed.

This is not an ad hoc process. It follows a principle we apply as a standard working cycle:

> **Communication → Understanding → Trust → Synergy → Collaboration → Output**

The same cycle works between human colleagues. It works between a worker and a digital worker.
Trust is built through repeated, verified interactions — not assumed from the start.
Synergy emerges when both sides understand the context, the constraints, and the goal.
The output reflects the quality of the collaboration that produced it.

> Without this collaboration: the test would have been shallower, narrower, and less structured.
> The findings would exist as notes — not as a reusable, linked knowledge base.

This report is itself a demonstration of what the Worker ↔ Digital Worker model produces when applied consistently.

---

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

## G6 · Q&A Takeaway — Questions for Reflection

Every reader is a student. Every article is a learning opportunity — not just a report to read and close.

These questions have no single correct answer. They are designed to provoke thinking, not test memory.
Use them individually, in a team discussion, or as a course assignment.

---

### Context & Evaluation

1. Why is the question *"Which is better — Apple or Windows?"* meaningless without context? Give an equivalent example from enterprise modelling or your own field.
2. What four questions would you define before starting any AI-assisted project in your organisation? *(Who, What, Why, Constraints)*
3. Design a testing strategy for an AI tool in your own work context — define scope, role, and constraints before you touch the tool.

---

### Chat, Cost & Model Quality

1. Why did a query against the full repository (~800 MB) consume ~6M tokens, while a scoped package query cost a fraction? What principle explains the difference?
2. What is the relationship between model structure (taxonomy, package hierarchy) and the cost of AI queries?
3. Write a concrete prompt for a large enterprise EA model that would be both cost-effective and precise. What must it include?

---

### Agents & Hallucination

1. The agent reported a successful write operation — but had no write tool. What is this phenomenon called, and why does it occur?
2. Complete the sentence: *"AI agent output quality depends 80% on \_\_ and 20% on \_\_."*
3. Write a CRITICAL OUTPUT RULE for an agent that sends notifications. What failure cases must the rule explicitly cover?

---

### Governance — Planning as Consultation

1. How does *planning as consultation* differ from a standard chatbot interaction? Why is it a governance mechanism, not a UX feature?
2. At what point in a process would you allow an AI agent to write to a production repository without human approval? Justify your answer.
3. Connect the Worker ↔ Digital Worker principle to change management practices you know from your organisation or from the literature.

---

### Security in Corporate Environments

1. What data in an EA repository should be classified as sensitive before enabling an external LLM API connection?
2. What is the difference between Claude API (public cloud) and Azure OpenAI (private endpoint) from a compliance perspective?
3. Draft a security checklist for an IT Security team evaluating Kernaro for production use in a regulated institution (e.g. a bank or insurance company).

---

### Synthesis

1. *"Taxonomy, Ontology, and SSOT are prerequisites for real AI value."* Do you agree? Can you construct a counter-argument?
2. Design an AI tool adoption plan for your organisation — steps, risks, and success criteria.
3. Identify three insights from this article you will apply directly: one **immediately**, one **this semester / quarter**, one **within two years**.

---

> *Practice and education are one system.*
> The most valuable learning happens when a concept from a real test becomes a question you cannot stop thinking about.

---

## Product & Reference Links

[1] Bizzdesign Horizzon – https://bizzdesign.com  
[2] Kernaro AI for EA – https://kernaro.sparxsystems.com  
[3] Anthropic Console – https://console.anthropic.com  
[4] KNIFE repository – http://knifes.systemthinking.sk  
[5] SystemThinking – https://systemthinking.xyz  

---

← [Back to index](../index.md)
