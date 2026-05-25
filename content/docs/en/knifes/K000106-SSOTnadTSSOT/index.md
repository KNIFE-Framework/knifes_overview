---
fm_version: "1.0.1"
fm_build: "2026-05-25T09:00:00.000000+00:00"
fm_version_comment: ""

id: "K000106_EN"
guid: ""

dao: "knife"
title: "K000106 – SSOT and TSSOT: How Many Truths Does It Take to Deliver a Successful Solution?"
description: "Single Source of Truth and Trusted Single Source of Truth — why consistent, verified data is the prerequisite for successful solutions, effective AI, and shared understanding across SDLC phases."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [SSOT, TSSOT, DataQuality, SDLC, CAA, EnterpriseArchitecture, AI]

locale: "en"

created: "2026-05-25 09:00"
modified: "2026-05-25 09:00"
status: "published"
privacy: "public"

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2026 Roman Kazicka"

origin_system: "CAA"
origin_author: "Roman Kazicka"
---

# KNIFE – SSOT and TSSOT

## How many truths does it take to deliver a successful solution?

---

## 🎯 What it solves (purpose, goal)

In most organisations, the same customer exists in five systems under five different names.
The same product has three different prices depending on who you ask.
The same project status looks different in the spreadsheet, the CRM, and the presentation to management.

This is not a technical problem. It is an organisational and cultural problem — and it silently kills projects, decisions, and trust.

:::caution[The core problem]
When everyone works from a different version of reality, coordination becomes negotiation.
Every meeting starts with: *"Which number are we using?"*
Every decision is contested. Every AI output is unreliable.
:::

--- 

**SSOT** and **TSSOT** are the response to this problem.



## 🧩 How it solves it (principle)

### SSOT – Single Source of Truth

**One source. One record. One owner.**

SSOT means that for any given piece of information, there is exactly one authoritative place where it lives.
All other systems either reference it or derive from it — they do not duplicate it.

:::info[SSOT definition]
**Single Source of Truth (SSOT)** is the practice of structuring information models and associated data schema such that every data element is mastered (or edited) in only one place. Any possible linkages to this data element are by reference only.
:::

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/00-Islands.png').default} alt="00 – Islands of Knowledge: fragmented enterprise systems with no shared source" style={{maxWidth: '800px', width: '100%'}} />
</div>

--- 

### TSSOT – Trusted Single Source of Truth

SSOT tells you **where** the truth lives.
*** TSSOT tells you **whether you can trust it.**

A source can be single without being trusted — if it is outdated, incomplete, or unverified.
TSSOT adds the dimension of **verification and currency**: the digital representation of reality is actively maintained, validated, and acknowledged as reliable.

:::info[TSSOT definition]
**Trusted Single Source of Truth (TSSOT)** is an SSOT where the data is also verified, current, and acknowledged as the authoritative basis for decisions — not just technically singular, but organisationally trusted.
:::
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/05-ants.png').default} alt="05 – Ants: Communication → Understanding → Trust → Collaboration → Success – the CAA chain" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

### Three metaphors that explain the problem

**🪣 Multiple wells**

Every department digs its own well.
Finance has its well. Sales has its well. IT has its well.
Each well may contain water — but the water is different.

The goal is not to have fewer wells.
The goal is to know:
- What is in each well
- How each well is fed
- Which wells share the same source
- Which well is the master

SSOT defines the master well.
TSSOT certifies that the water in it is clean.
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/01-multiple-wells.png').default} alt="01 – Multiple wells in the desert: every department has its own source of truth" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

**🧊 The iceberg**

What you see above the waterline — reports, dashboards, AI outputs — represents roughly 10% of the information landscape.

The 90% below the surface: requirements, decisions, assumptions, relationships, history, context.

:::caution[AI and the iceberg]
AI works with what is visible and accessible.
If the 90% below the waterline is inconsistent, unverified, or missing — AI will confidently produce outputs based on a distorted picture of reality.
Speed does not fix this. It accelerates the problem.
:::

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/04-iceberg-ssot.png').default} alt="04 – SDLC iceberg: 10% visible product, 90% hidden lifecycle below the surface" style={{maxWidth: '800px', width: '100%'}} />
</div>

--- 

**🗼 The Tower of Babel**

When different teams, roles, and systems use the same word with different meanings — or different words for the same thing — communication breaks down.

Not because people are incompetent.
Because they never agreed on a shared vocabulary.

The Tower of Babel did not fall because the builders lacked skill.
It fell because they stopped understanding each other.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/02-babylon.png').default} alt="02 – The Tower of Babel: consequence of different vocabularies and no shared foundation" style={{maxWidth: '800px', width: '100%'}} />
</div>

In SDLC terms: every phase produces artefacts that the next phase depends on.
If the vocabulary shifts between phases, the chain breaks.


<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/03-Solid-Building.png').default} alt="03 – Solid building with deep foundations: TSSOT as the trusted, verified base" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

### SSOT in the context of SDLC

Every phase of the V-Model (see [K000103](../K000103-CAA_IN_SDLC/)) produces outputs that become inputs for the next phase.


| Phase | Produces | Depends on |
|---|---|---|
| Business | Requirements, goals | Market context |
| Architecture | Design decisions | Business requirements |
| Analysis | Specifications | Architecture decisions |
| Design | Detailed models | Specifications |
| Implementation | Working solution | Design models |
| Testing | Verified behaviour | Implementation + requirements |
| Operations | Running service | All of the above |

:::caution[Broken chain]
If any phase works from an unverified or inconsistent source, the error propagates forward — and compounds.
By the time it surfaces in testing or operations, the cost of correction is exponentially higher.
:::


---

## 🧪 How to use it (application)

### Questions to ask before declaring SSOT

1. **Who owns this data element?**
   Every record must have a single owner responsible for its accuracy.

2. **Where is it mastered?**
   Which system is the authoritative source? All others must reference, not duplicate.

3. **How is it fed?**
   What process creates, updates, or retires this record? Is that process documented and followed?

4. **How is it verified?**
   What mechanism confirms the record is accurate and current? Who performs this verification?

5. **Who consumes it?**
   Which roles, systems, and phases depend on this record? Are they aware of where it comes from?

6. **What happens when it changes?**
   Is there a change notification mechanism? Do dependent systems update automatically or manually?

---

### SSOT maturity levels

| Level | Description |
|---|---|
| 0 – Chaos | Multiple conflicting sources, no ownership |
| 1 – Awareness | Sources identified, ownership unclear |
| 2 – Defined | One source designated, others still exist |
| 3 – Managed | One source enforced, others deprecated |
| 4 – Trusted (TSSOT) | Source verified, current, acknowledged organisationally |

Most organisations are at Level 1–2 when they start an AI initiative.
AI requires Level 3–4 to produce reliable outputs.

---



## 📜 Detailed Article

### Why this matters for AI

:::caution[AI amplifies what it receives]
AI does not evaluate the quality of its input.
It processes what it is given — and produces output proportional to that quality.

*Garbage in, garbage out* is not new.
What is new is the speed and confidence with which AI delivers the garbage.
:::

An AI assistant querying an enterprise model (such as through KERNARO — see [K000104](../K000104-SPARX_AI_KERNARO_IN_SDLC/)) will produce:
- Accurate, useful results — if the model is an SSOT/TSSOT
- Plausible-sounding but unreliable results — if the model contains inconsistencies

The tool is not the problem.
The foundation is the problem — or the solution.

---

### The shared methodology — what connects all wells

The goal is not a single well for the entire organisation.
Complex organisations have many domains, many systems, many teams.

What they need is a **shared set of rules** that governs how all wells behave:
- Naming conventions
- Ownership rules
- Verification processes
- Change management
- Integration patterns

This shared methodology is what enables **common understanding** — which enables **trust** — which enables **collaboration** — which enables **synergy**.

:::info[CAA connection]
This directly connects to the CAA communication chain from [K000103](../K000103-CAA_IN_SDLC/):

- Without Communication — there is no Understanding
- Without Understanding — there is no Trust
- Without Trust — there is no good Collaboration
- Without good Collaboration — there is no Synergy
- Without Synergy — there is no Success

SSOT/TSSOT is the information foundation that makes this chain possible.
:::

---

## 💡 Tips and Notes

:::tip[Start small]
You do not need organisation-wide SSOT on day one.
Start with one domain, one critical data entity, one phase of SDLC.
Prove the value. Then expand.

*A drop wears through stone — not by force, but by consistency.*
:::

:::tip[SSOT is not a technology project]
The biggest mistake organisations make: they buy a tool and call it SSOT.
SSOT is a governance decision first. A process decision second. A technology decision third.
:::

---

## ✅ Value / Summary

SSOT and TSSOT are not about having fewer sources of information.
They are about knowing what each source contains, trusting it, and connecting them through shared rules.

Without this foundation:
- Projects build on sand
- AI produces confident noise
- Phases of SDLC talk past each other
- The Tower of Babel grows taller

With this foundation:
- Decisions are faster and better
- AI amplifies real understanding
- Every phase of SDLC builds on verified inputs
- Common vocabulary enables common purpose

---

### Bridge to the next topic

SSOT tells you **where the truth lives** and whether you can trust it.

But even a trusted source does not guarantee shared understanding.

> *Does everyone in your organisation understand the word "customer" the same way?*
> *Does "risk" mean the same thing to the business analyst and the security architect?*

This is the domain of **Taxonomy, Ontology, and the APV methodology** — covered in the next KNIFE article.

See: K000106 – Taxonomy, Ontology and APV *(coming soon)*

---
<!-- body:start -->

<!-- nav:knifes -->
<!-- nav:knifes -->
> [⬅ KNIFES – Overview](../knifes_overview/KNIFE_Overview_Blog.md) • [List](../knifes_overview/KNIFE_Overview_List.md) • [Details](../knifes_overview/KNIFE_Overview_Details.md)