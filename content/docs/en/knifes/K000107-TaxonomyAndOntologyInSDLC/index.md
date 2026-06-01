---
fm_version: "1.0.1"
fm_build: "2026-06-01T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000107_EN"
guid: ""

dao: "knife"
title: "K000107 – Taxonomy and Ontology in SDLC"
description: "Why every science that wants to call itself a science builds a conceptual vocabulary — and why computer science is still catching up. Practical frameworks: APV, SFIA, TBM, and their application across SDLC."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [Taxonomy, Ontology, SDLC, APV, SFIA, TBM, AI, EnterpriseArchitecture, CAA, ContextAwareApproach]

locale: "en"

created: "2026-06-01 00:00"
modified: "2026-06-01 00:00"
status: "draft"
privacy: "public"

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2026 Roman Kazicka"

origin_system: "CAA"
origin_author: "Roman Kazicka"
---

# KNIFE – Taxonomy and Ontology in SDLC

## When will computer science catch up with the natural sciences?

---

## 🎯 What it solves

Do you remember biology class?
Species, subspecies, family, class, order...

Every discipline that wants to call itself a science builds a conceptual vocabulary.
Aristotle began classifying living organisms around 350 BC.
Linnaeus completed it into a system in 1735 — 11 pages that changed science.
From Aristotle to Linnaeus: nearly 2,000 years of systematic work.

:::caution[The daily reality in SDLC]
Every day, practitioners across the SDLC encounter conceptual ambiguity.
The same word. Five interpretations.
Five interpretations. One failing project.

This is not a technology problem. It is a vocabulary problem.
:::

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/07-people-profits-from-apv.png').default} alt="Customer vs IT-Service Provider – without communication there is no understanding, without understanding there is no trust" style={{maxWidth: '800px', width: '100%'}} />
</div>

The diagram above shows the complexity of a typical IT service relationship.
Customer on the left: Board, CFO, Process Owners, IT Management, Operations.
IT-Service Provider on the right: CEO, Operations Managers, Account Executive, dozens of process roles.

Not everyone needs to create the taxonomy.
But everyone needs to rely on it.

---

## 🧩 How it solves it

### The problem: why vocabulary matters more than technology

Automotive solved this systematically — 8D (Ford Motor Company, 1980s), Lean, Six Sigma, QRM.
In manufacturing companies, the cost of poor quality is standard agenda.
In IT companies, what I have mostly encountered is declarations, not action.

:::info[QRM connection]
Quick Response Manufacturing (Rajan Suri, 1990s) explicitly extended its principles to office and knowledge work processes — precisely the domain where SDLC lives.
The message is the same: without shared vocabulary, you cannot measure. Without measurement, you cannot improve.
:::

### APV – Assets, Perspectives, Views

APV did not emerge from academic research. It emerged from production lines.

My degree was in Technical Cybernetics — measurement technology and automation.
The core principles: fast feedback, deviation detection, proportional corrective action.
These apply not only to industrial control systems. They apply equally to managing organisations.

After graduating, I spent several years in manufacturing — consumer electronics (Philips, Sagem) and automotive components (Wabash Technology). I worked on product quality using SPC (Statistical Process Control), GR&R (Gage Reproducibility and Repeatability), Six Sigma, 5S, and 8D.

These were not just tools. They were a **shared vocabulary**.
Everyone on the production line — from technician to manager — understood what "out of control" meant, what "root cause" meant, what "corrective action" meant.

When I moved into IT, I encountered something unexpected: the vocabulary was missing.
The same word meant different things to different roles.
"Architecture" for an infrastructure engineer and "architecture" for a business analyst were two different things.
Projects failed not because of missing technology, but because of missing shared understanding.

**APV is the framework I developed to address this.**

- **Assets** — what exists and needs to be managed
- **Perspectives** — who looks at it and from which angle
- **Views** — what they actually see, filtered for their role and context

The goal: keep your solution's assets in order, across all roles, across all SDLC phases.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/00-physical-vs-digital.png').default} alt="Physical Map of Enterprise vs Digital Map – IASA model" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/05-apv-framework.png').default} alt="APV Framework – Assets, Stakeholder Perspectives, Reference Model, Instance Model, Views" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/04-ekm-hierarchy.png').default} alt="Enterprise Knowledge Management – Hierarchy and Relationships: Terms Catalogues, Stakeholder Perspectives, Diagrams" style={{maxWidth: '800px', width: '100%'}} />
</div>

:::tip[APV in three questions]
Before building any model or document in your SDLC:
1. What **asset** are we describing?
2. From whose **perspective** are we looking at it?
3. What **view** does this stakeholder actually need to see?
:::

### SFIA – Skills Framework for the Information Age

If APV addresses the vocabulary of solution assets, SFIA addresses the vocabulary of the people who deliver them.

SFIA is an internationally recognised standard for describing and measuring the skills of IT and digital technology professionals. It classifies 102 professional skills across 7 levels of responsibility and is used in nearly 200 countries.

For SDLC teams, SFIA provides a common language for:
- Defining roles and responsibilities across phases
- Identifying skill gaps before a project begins
- Communicating capability expectations with stakeholders

Without a framework like SFIA, every organisation reinvents its own role descriptions — and they are never compatible across team boundaries.

### TBM – Technology Business Management

TBM addresses the vocabulary of IT costs — connecting technology spending to business value.

Founded in 2012, the TBM Council formalised a discipline that helps organisations link technology costs, consumption, and performance to business outcomes. TBM Taxonomy provides a common language across Finance, IT, and Business.

Key principle: **if you cannot name it consistently, you cannot measure it. If you cannot measure it, you cannot manage it.**

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/06-tbm-summary.png').default} alt="TBM Taxonomy 5.0 Summary View – Technology Consumers, Solutions, Resource Towers, Cost Pools" style={{maxWidth: '800px', width: '100%'}} />
</div>

**Yärken** is a FinOps and TBM platform that implements TBM Taxonomy as a working product — helping enterprises manage cloud, SaaS, and IT costs with AI-driven insights. It is a concrete example of taxonomy enabling business value at scale.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/13-yarken-overview.png').default} alt="Yärken platform – FinOps and TBM implementation overview" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/14-yarken-tbm.png').default} alt="Yärken – TBM taxonomy in practice" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/15-yarken-finops.png').default} alt="Yärken – FinOps cost visibility" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

## 🧪 How to use it

### Starting point: map the vocabulary gap

Before choosing a framework, map where your vocabulary breaks down.

| Question | Where to look |
|---|---|
| Where do roles talk past each other? | Requirement handoffs, design reviews |
| Where do the same words mean different things? | Business vs IT boundaries |
| Where do documents conflict silently? | Architecture vs implementation vs operations |
| Where does AI produce confident nonsense? | Wherever the above problems exist |

### APV implementation steps

1. Identify your key **Assets** — what solution elements need to be modelled and managed
2. Map your **Stakeholders** and their perspectives — who cares about what
3. Define **Views** — what each stakeholder actually needs to see (not everything, just their relevant slice)
4. Implement in your tooling (Enterprise Architect, GitHub, or any structured repository)
5. Iterate — vocabulary evolves with the solution

### SFIA in SDLC context

Use SFIA to define role profiles at the start of each project phase.
Map required skills to SFIA categories and levels.
This makes capability gaps visible before they become delivery risks.

### TBM in practice

TBM requires organisational commitment — it is not a technology project.
Start with one cost domain (e.g. cloud), apply TBM Taxonomy, prove value, then expand.
Yärken and similar platforms automate the taxonomy application across data sources.

---

## ⚡ Quick Guide

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/01-ekm-concept.png').default} alt="Enterprise Knowledge Management concept – Assets, Perspectives, Views overview" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/03-ekm-apv.png').default} alt="EKM – Assets, Perspectives, Views structure" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/09-tbm-towers.png').default} alt="TBM Technology Resource Towers hierarchy" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

## 📜 Detailed Article

### The logarithmic acceleration

Computer science is 80 years old. From Aristotle to Linnaeus it took roughly 2,000 years.
But look at the pace of change:

| Transition | Duration | Context |
|---|---|---|
| 1st → 2nd industrial revolution | ~100 years | Steam → electricity & mass production |
| 2nd → 3rd | ~80 years | Electricity → computers & automation |
| 3rd → 4th | ~30 years | Computers → Industry 4.0, IoT |
| 4th → massive AI adoption | 9 years | Industry 4.0 → generative AI |

It is shortening logarithmically. Today it might already be months.

The urgency is real: AI does not work on intuition.
Feed it conceptual chaos and it reproduces that chaos — quickly and confidently.
**The quality of your taxonomy directly determines the quality of your AI outputs.**

### TBM taxonomy decomposition

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/10-tbm-towers-hierarchy.png').default} alt="TBM Towers Hierarchy – Domain, Tower, Sub-Tower, Sub-Tower Element, Tags" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/08-tbm-cost-pools.png').default} alt="TBM Cost Pools and Sub-Pools – from financial source data to technology allocation" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/11-tbm-solutions.png').default} alt="TBM Solutions, Type and Category hierarchy" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/12-tbm-consumers.png').default} alt="TBM Technology Consumers – Business Functions, Value Streams, Partners, External" style={{maxWidth: '800px', width: '100%'}} />
</div>

### APV in enterprise knowledge management

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/02-ekm-assets-perspectives.png').default} alt="EKM Assets and Perspectives – Reference Model vs Instance Model" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

## 💡 Tips and Notes

:::tip[Not everyone creates — but everyone consumes]
You do not need to build a full taxonomy to benefit from one.
The goal is to have one authoritative source that all roles can rely on.
Start with the vocabulary that crosses the most boundaries in your organisation.
:::

:::tip[Taxonomy is governance, not technology]
The biggest mistake: buying a tool and calling it a taxonomy.
Taxonomy is a governance decision first. A process decision second. A technology decision third.
:::

:::caution[AI without taxonomy]
AI amplifies what it receives.
If your SDLC vocabulary is inconsistent across roles and phases, AI will consistently amplify that inconsistency — at speed and at scale.
:::

---

## ✅ Summary

Taxonomy and ontology in SDLC are not academic concepts.
They are the prerequisite for any organisation that wants to:
- Communicate effectively across roles and phases
- Measure what matters
- Build AI systems that produce reliable outputs

APV provides the framework for solution asset vocabulary.
SFIA provides the framework for people and skills vocabulary.
TBM provides the framework for cost and value vocabulary.

None of them requires starting from scratch.
All of them require organisational commitment to shared language.

:::info[CAA connection]
This connects directly to the CAA communication chain from [K000103](../K000103-CAA_IN_SDLC/):
Without Communication → no Understanding
Without Understanding → no Trust
Without Trust → no Collaboration
Without Collaboration → no Synergy
Without Synergy → no Success

Taxonomy is the infrastructure of Communication.
:::

---

### Bridge to next topic

A taxonomy tells you what the words mean.
KERNARO shows you how AI can navigate that vocabulary in practice — see [K000104](../K000104-SPARX_AI_KERNARO_IN_SDLC/).

---

### Sources

[1] https://www.britannica.com/biography/Carolus-Linnaeus
[2] https://www.visionlearning.com/en/library/Biology/2/Taxonomy-I/70/
[3] https://sfia-online.org
[4] https://www.tbmcouncil.org
[5] https://quality-one.com/8d/
[6] https://rajansuri.com
[7] https://www.yarken.com/home

---

<!-- body:start -->
<!-- nav:knifes -->
