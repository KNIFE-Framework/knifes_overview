---
fm_version: "1.0.1"
fm_build: "2026-06-02T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000109_EN"
guid: "ca0ef489-f0a7-4c91-85ce-e74e9caedcb8"

dao: "knife"
title: "K000109 – ESCO, SFIA and CAA: Three Layers of Skills Governance in IT Organizations"
description: "A three-layer model for skills governance in IT: ESCO as the ontological foundation, SFIA as the operational framework, and CAA as the application layer. Why taxonomy quality directly determines AI output quality."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [ESCO, SFIA, CAA, Taxonomy, Ontology, SkillsGovernance, SDLC, AI]

locale: "en"

created: "2026-06-02 00:00"
modified: "2026-06-02 00:00"
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

# ESCO, SFIA and CAA: Three Layers of Skills Governance in IT Organizations

---

## 1. Context: Why Conceptual Clarity Is Not Just a Terminology Problem

Every discipline that wants to call itself a science builds a conceptual apparatus. From Aristotle to Linnaeus — almost 2,000 years of systematic work. Biology could not advance without taxonomy. Chemistry could not scale without the periodic table.

IT organizations face the same challenge — and largely ignore it.

The same word carries five different meanings across five teams. Five meanings produce five interpretations. Five interpretations produce one failing project. This is not a soft problem. It is a structural risk embedded in every phase of the SDLC.

Industries like Automotive addressed this systematically — through 8D, Lean, Six Sigma, and QRM. In IT, the response has been mostly declarative. Frameworks exist. Adoption is uneven.

:::caution[AI makes this gap critical]
AI does not work with intuition. If it receives conceptual chaos, it reproduces and amplifies it — fast and confidently. The quality of taxonomy directly determines the quality of AI outputs.
:::

This article introduces a three-layer model for skills governance in IT organizations, built on three complementary frameworks: **ESCO**, **SFIA**, and **CAA**.

---

## 2. Layer 1 – ESCO: The Ontological Foundation

### What is ESCO?

ESCO (European Skills, Competences, Qualifications and Occupations) is the European multilingual classification of skills, competences, qualifications, and occupations. It was developed by the European Commission (DG Employment, Social Affairs and Inclusion) starting in 2010 [1]. The first full version (ESCO v1) was published on 28 July 2017 [1].

The current version, **ESCO v1.2**, was released in May 2024 [2]. It was built using a data-driven approach that combines human expertise with AI techniques for content creation and quality improvement [2].

### What ESCO Contains

- **3,039 occupations** — each mapped to ISCO-08 (International Standard Classification of Occupations) [1]
- **13,939 skills and knowledge concepts** linked to those occupations [1]
- Available in **multiple languages** — all official EU languages plus Norwegian, Icelandic, Ukrainian, Arabic, and others [1]
- Free to use, accessible via portal and API [1]

### Why ESCO Is an Ontology, Not Just a List

ESCO is technically published as **RDF (Resource Description Framework)** — specifically in Turtle format, with support for SKOS, OWL, JSON-LD, CSV, and XML [3][4].

The complete ESCO dataset contains approximately **6.5 million RDF triples** [3]. This means every concept has:

- A unique URI identifier
- Formal hierarchical relationships (`broader` / `narrower`)
- Associative relationships (`related`)
- Multilingual labels
- Machine-readable metadata

This is what distinguishes ESCO from a spreadsheet or a glossary. It is a **linked data structure** — queryable via SPARQL, integrable via API, processable by semantic systems [3].

### ESCO in Practice

ESCO is used by:
- **EURES** — the European job mobility portal
- National Public Employment Services (PES) across EU member states
- AI-powered recruitment and matching platforms
- Education and training providers for curriculum alignment

---

## 3. Layer 2 – SFIA: The Operational Framework

### What is SFIA?

SFIA (Skills Framework for the Information Age) is a global skills and competency framework for the digital world. First published in 2000 [5], it has evolved through successive versions shaped by practitioner input.

The current version is **SFIA 9**, published in October 2024 [5].

### What SFIA Contains

- **147 professional skills** (up from 121 in SFIA 8) [5]
- **672 unique skill-level descriptions** (up from 495 in SFIA 8) [5]
- **7 levels of responsibility** — defined by generic attributes: Autonomy, Influence, Complexity, Knowledge, and Collaboration/Communication [5]
- Technology-agnostic and vendor-neutral [5]

SFIA 9 added new skills in areas including AI/ML, cybersecurity, digital health, financial analysis, and cloud computing [5]. It also significantly expanded entry-level coverage — 99 of the 147 skills are now described at Level 1 or Level 2 [5].

### How SFIA Is Used

SFIA defines what skills exist, what they mean, and at what level of proficiency they are exercised. It does not specify job titles. Instead, it provides a stable vocabulary for:

- Defining role requirements
- Assessing individual capability
- Designing learning and development paths
- Supporting workforce planning and organization design

SFIA is widely adopted by governments, enterprises, and professional bodies globally [5]. See [K000107 – SFIA](../K000107_TaxonomyAndOntology/K000107-SFIA-index) for a practical guide to using SFIA in SDLC teams.

---

## 4. ESCO vs. SFIA: Comparison

| Dimension | ESCO | SFIA |
|---|---|---|
| Scope | All professions + skills (EU labour market) | IT and digital professions |
| Owner | European Commission (DG EMPL) | SFIA Foundation (UK) |
| Primary use | Labour market, AI recruitment, job matching | HR, IT org design, role definition |
| Granularity | Broad, shallow for IT | Deep, leveled for IT |
| Machine readability | Native — RDF, SKOS, OWL, JSON-LD | Limited — PDF, Excel, RDF (registration required) |
| Languages | All official EU languages + several additional | English primary |
| Cost | Free | Free to use; tools may require licensing |
| Relationship model | Network (broader/narrower/related) | Linear (skill → level) |
| Coverage of IT skills | Partial | Comprehensive |

:::info[ESCO and SFIA are not competitors]
They operate at different layers of abstraction and serve different purposes. Used together, they are more powerful than either alone.
:::

---

## 5. Layer 3 – CAA: The Application Layer

### What is CAA?

CAA (Context-Aware Approach) is the application layer in this three-layer model. It is the design approach that leads toward **Context-Aware Systems** and ultimately **Context-Aware Solutions** — see [K000103](../K000103-CAA_IN_SDLC/).

In the context of skills governance, CAA addresses the operational question: **How are skills applied to specific people, roles, and project contexts — given that context changes what matters?**

The same skill at the same SFIA level may have very different relevance depending on the type of project, the phase of the SDLC, the organizational context, or the team composition. CAA makes this context explicit rather than assumed.

CAA operates at the level of:

- Mapping individual capability profiles to project role requirements in a given context
- Resolving context-specific skill priorities (e.g. the same SFIA skill at different effective levels for different project types)
- Supporting competency-based decisions across the SDLC
- Bridging the gap between what frameworks define and what a specific situation requires

---

## 6. The Three-Layer Model

```
┌─────────────────────────────────────────────────────────┐
│  Layer 1: ESCO                                          │
│  Ontological foundation — what skills exist, EU-wide    │
│  RDF, linked data, multilingual, 13,939 concepts        │
├─────────────────────────────────────────────────────────┤
│  Layer 2: SFIA                                          │
│  Operational framework — what IT skills mean &          │
│  at what level they are exercised (147 skills, 7 lvls)  │
├─────────────────────────────────────────────────────────┤
│  Layer 3: CAA                                           │
│  Application layer — how skills are assigned to         │
│  people, roles, and project contexts in practice        │
└─────────────────────────────────────────────────────────┘
```

Each layer answers a distinct question:

| Layer | Question answered |
|---|---|
| ESCO | What skills exist? (EU-scale, machine-readable) |
| SFIA | What do IT skills mean and at what level? |
| CAA | How do skills apply given a specific context, role, and project? |

The three layers together form a complete skills governance stack — from ontology to operation.

---

## 7. AI Implication: Taxonomy Quality Determines AI Output Quality

AI systems do not interpret intent. They process structure. When an AI recruitment system, a skills matching platform, or an LLM-based assistant receives well-structured, ontologically sound input — ESCO-aligned, SFIA-leveled — the output is correspondingly precise.

When it receives ambiguous, inconsistent, or undefined terminology — the same system amplifies and propagates that ambiguity at scale.

This is not a hypothetical risk. ESCO v1.2 itself was built using AI techniques applied to structured skills data [2]. The AI worked with taxonomy — not with free text. That is the model.

:::tip[Recommendation]
Organizations that intend to use AI for workforce planning, skills matching, or SDLC tooling should establish their taxonomy layer first. ESCO + SFIA provides a proven, standards-based starting point.
:::

---

## 8. Related KNIFE Articles

- [K000107 – Taxonomy and Ontology in SDLC](../K000107_TaxonomyAndOntology/) — how taxonomy is implemented in organizations: examples, methodologies, tools
- [K000107 – SFIA deep-dive](../K000107_TaxonomyAndOntology/K000107-SFIA-index) — practical guide to SFIA in SDLC teams
- [K000103 – CAA in SDLC](../K000103-CAA_IN_SDLC/) — the CAA communication chain and context-aware approach

---

### Sources

1. https://esco.ec.europa.eu/en/about-esco/what-esco
2. https://esco.ec.europa.eu/en/about-esco/escopedia/escopedia/esco-v12
3. https://esco.ec.europa.eu/en/about-esco/escopedia/escopedia/rdf
4. https://esco.ec.europa.eu/en/use-esco/download
5. https://sfia-online.org/en/sfia-9/sfia-9

---

<!-- body:start -->
<!-- nav:knifes -->
