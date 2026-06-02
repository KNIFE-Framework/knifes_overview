---
fm_version: "1.0.1"
fm_build: "2026-06-01T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000107-APV-index"
guid: ""

dao: "knife"
title: "K000107 – APV: Assets, Perspectives, Views"
description: "APV emerged from production lines, not academic research. How a framework built on Technical Cybernetics, Six Sigma, and manufacturing quality principles solves the vocabulary gap in IT and SDLC."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [APV, SFIA, Taxonomy, SDLC, EnterpriseArchitecture, CAA]

locale: "en"

created: "2026-06-01 00:00"
modified: "2026-06-01 00:00"
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

# APV – Assets, Perspectives, Views

> Part of [K000107 – Taxonomy and Ontology in SDLC](./)

---

## 🧩 Why vocabulary matters more than technology

Automotive solved this systematically — 8D (Ford Motor Company, 1980s), Lean, Six Sigma, QRM.
In manufacturing companies, the cost of poor quality is standard agenda.
In IT companies, what I have mostly encountered is declarations, not action.

:::info[QRM connection]
Quick Response Manufacturing (Rajan Suri, 1990s) explicitly extended its principles to office and knowledge work processes — precisely the domain where SDLC lives.
The message is the same: without shared vocabulary, you cannot measure. Without measurement, you cannot improve.
:::

---

## Where APV comes from

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

---

## The APV framework

- **Assets** — what exists and needs to be managed
- **Perspectives** — who looks at it and from which angle
- **Views** — what they actually see, filtered for their role and context

The goal: keep your solution's assets in order, across all roles, across all SDLC phases.

### Physical Map of Enterprise vs Digital Map – the two realities that APV bridges

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/01-Digital-Reality.png').default} alt="Physical Map of Enterprise vs Digital Map – the two realities that APV bridges" style={{maxWidth: '800px', width: '100%'}} />
</div>

### Reference Model vs Instance Model – how APV separates the blueprint from the reality

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/02-Ref_Inst.png').default} alt="Reference Model vs Instance Model – how APV separates the blueprint from the reality" style={{maxWidth: '800px', width: '100%'}} />
</div>

### APV Framework layers – Business, Systems, Technologiers in structural context

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/03-APV-Layers.png').default} alt="APV Framework layers – Assets, Perspectives, Views in structural context" style={{maxWidth: '800px', width: '100%'}} />
</div>

### APV pillars – Assets from Perspectives of specific Stakeholder visualised on Views

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/04-APV-Pillars.png').default} alt="APV pillars – Assets from Perspectives of specific Stakeholder visualised on Views" style={{maxWidth: '800px', width: '100%'}} />
</div>

### APV relationship between Reference and Instance model – how the blueprint connects to deployed reality

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/05-APV-Relationship-REF-INST.png').default} alt="APV relationship between Reference and Instance model – how the blueprint connects to deployed reality" style={{maxWidth: '800px', width: '100%'}} />
</div>

### APV practical example – applying Assets, Perspectives, Views in a real project context

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/06-APV-Example.png').default} alt="APV practical example – applying Assets, Perspectives, Views in a real project context" style={{maxWidth: '800px', width: '100%'}} />
</div>

### APV process in daily live. From conceptual element to vocabulary

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/08-APV-DailyProcess.png').default} alt="APV process in daily live. From conceptual element to vocabulary" style={{maxWidth: '800px', width: '100%'}} />
</div>


:::tip[APV in three questions]
Before building any model or document in your SDLC:
1. What **asset** are we describing?
2. From whose **perspective** are we looking at it?
3. What **view** does this stakeholder actually need to see?
:::

---

## APV implementation steps

1. Identify your key **Assets** — what solution elements need to be modelled and managed
2. Map your **Stakeholders** and their perspectives — who cares about what
3. Define **Views** — what each stakeholder actually needs to see (not everything, just their relevant slice)
4. Implement in your tooling (Enterprise Architect, GitHub, or any structured repository)
5. Iterate — vocabulary evolves with the solution

---

## SFIA – Skills Framework for the Information Age

If APV addresses the vocabulary of solution assets, SFIA addresses the vocabulary of the people who deliver them.

Where APV keeps your solution assets in order, SFIA keeps your team's capabilities in order.
Both frameworks solve the same root problem from different angles: without shared vocabulary, you cannot measure, and without measurement, you cannot manage.

→ See the dedicated page: [K000107 – SFIA](./K000107-SFIA-index)

---

:::tip[Not everyone creates — but everyone consumes]
You do not need to build a full taxonomy to benefit from one.
The goal is to have one authoritative source that all roles can rely on.
Start with the vocabulary that crosses the most boundaries in your organisation.
:::

---

> ← [Back to K000107 overview](./) · [TBM – Technology Business Management →](./K000107-TBM-index)

<!-- body:start -->
<!-- nav:knifes -->
