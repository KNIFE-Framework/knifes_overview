---
fm_version: "1.0.1"
fm_build: "2026-06-01T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000107-SFIA-index"
guid: ""

dao: "knife"
title: "K000107 – SFIA: Skills Framework for the Information Age"
description: "SFIA is not yet an ISO standard — but it is the closest thing the IT industry has to a shared vocabulary for skills. A practical guide to using SFIA in SDLC teams: what it is, where it came from, and how to apply it without a full programme."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [SFIA, Taxonomy, Skills, SDLC, Roles, CAA]

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

# SFIA – Skills Framework for the Information Age

> Part of [K000107 – Taxonomy and Ontology in SDLC](./)

---

## 🎯 What problem does SFIA solve?

In every SDLC project, roles are defined.
But how they are defined varies wildly — across organisations, vendors, and even teams within the same company.

A "Business Analyst" in one organisation covers requirements, facilitation, and some architecture.
In the next, the same title means data reporting and Excel automation.

The result: projects underestimate capability gaps, overpay for mismatched skills, and fail quietly at the boundaries between roles.

SFIA is the framework that addresses this. It provides a shared vocabulary for describing and measuring what people in IT actually do — and at what level.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/SFIA-01.png').default} alt="SFIA 9 – framework overview" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

## 📜 A brief history

SFIA was created in 1999 by a consortium led by the British Computer Society (BCS), together with e-skills UK and other professional bodies. It emerged from a practical need: the UK IT industry needed a common language for skills that could be used across employers, training providers, and government bodies.

The framework has been updated through multiple versions:
- SFIA 1 (2000) — initial release, 55 skills across 7 levels
- SFIA 6 (2015) — significant restructuring, broader coverage
- SFIA 8 (2021) — added digital, data, and emerging technology skills
- SFIA 9 (2024) — current version, 102 skills across 7 levels, used in ~200 countries

The SFIA Foundation (established 2003) now manages the framework independently of any single organisation. Adoption is free for individuals and organisations; commercial licensing applies to tools and training providers.

---

## 🏛 Is SFIA a standard?

Not formally. SFIA is **not an ISO standard**.

It is a de facto industry framework — widely adopted, internationally recognised, but not mandated by any standards body. Think of it as the ITIL of skills: broad adoption without formal standardisation.

:::info[What this means in practice]
You can use SFIA freely as a reference framework without certification or compliance obligations.
This is an advantage: you can adopt it selectively, apply it to the parts of your SDLC where vocabulary gaps hurt most, and extend it where needed.
There is no audit, no badge, no mandatory rollout.
:::

Some national governments and large enterprises do mandate SFIA-based role definitions in contracts and procurement. If you work with public sector clients in the UK, Australia, or Singapore, you may already be expected to use it.

---

## 🧩 How SFIA is structured

SFIA classifies skills along two axes:

**Skills** — 102 professional skills, organised into 9 categories:

| Category | Example skills |
|---|---|
| Strategy and architecture | Enterprise and business architecture, Information security |
| Change and transformation | Project management, Change management |
| Development and implementation | Software development, Testing, Database administration |
| Delivery and operation | Service desk, Infrastructure management |
| People and skills | Learning design, People management |
| Relationships and engagement | Stakeholder management, Sales support |
| Data and information | Data management, Business intelligence |
| Technology | Emerging technology monitoring, Cloud services |
| Procurement and management support | Contract management, Financial management |

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/SFIA-02.png').default} alt="SFIA 9 – all skills A-Z with categories" style={{maxWidth: '800px', width: '100%'}} />
</div>

**Levels** — 7 levels of responsibility (not seniority per se):

| Level | Description |
|---|---|
| 1 | Follow — applies routine instructions |
| 2 | Assist — works under supervision |
| 3 | Apply — works with guidance, some autonomy |
| 4 | Enable — works independently, contributes to team |
| 5 | Ensure, advise — influences, manages others |
| 6 | Initiate, influence — drives strategy, leads change |
| 7 | Set strategy, inspire — shapes direction at organisation level |

---

## 🧪 Practical use cases in SDLC

You do not need a full SFIA programme to get value from the framework. Here are concrete entry points:

### 1. Project kickoff — define role profiles

Before a project starts, map required roles to SFIA skills and levels.

Example: for a data migration project, you might need:
- **Data management** (DATM) at level 4 — independent data modelling
- **Testing** (TEST) at level 3 — applies test frameworks with guidance
- **Change management** (CHMG) at level 5 — advises on adoption strategy

This makes assumptions explicit before the team is assembled, not after the first retrospective.

### 2. Skill gap analysis

Compare the SFIA profile of your current team against the project profile.
Gaps become visible before they become risks.

This is especially useful when:
- Onboarding vendors or contractors (do they meet the level you need?)
- Scaling a team for a new phase
- Evaluating whether internal staff can take over from a vendor

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/SFIA-03.png').default} alt="SFIA 9 – skills profiles for role families and job titles" style={{maxWidth: '800px', width: '100%'}} />
</div>

### 3. Cross-team communication

When you reference SFIA in contracts, statements of work, or handover documents, both sides are talking about the same thing.

A "Data Engineer at SFIA level 4" means the same to the client's procurement team, the vendor's delivery manager, and the hiring agency.

### 4. AI-assisted role matching

If your SDLC tooling or HR systems use AI for role matching or skills gap analysis, feeding them SFIA-structured data dramatically improves output quality.
AI can process SFIA's taxonomy reliably. It cannot reliably interpret "Senior Developer with 5 years of experience."

---

## ⚡ Quick start

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/SFIA-04.png').default} alt="SFIA 9 – summary chart with roles across skill categories and levels" style={{maxWidth: '800px', width: '100%'}} />
</div>

You don't need to implement all 102 skills. Start with the skills that cross the most role boundaries in your current project.

Typical starting points:
- **REQM** (Requirements definition and management) — often the biggest source of vocabulary gaps
- **ARCH** (Solution architecture) — where IT and business language collides
- **TEST** (Testing) — where responsibility handoffs happen
- **RLMT** (Relationship management) — often undefined in IT teams

---

:::tip[SFIA as a shared reference, not a compliance exercise]
The value of SFIA is not in the certificate.
It is in having a document — a job profile, a statement of work, a capability review — where both sides agree on what the words mean.
That is the same principle as APV, TBM, and the CAA communication chain: shared vocabulary enables communication, communication enables trust.
:::

---

### Resources

- [SFIA 9 – Framework overview](https://sfia-online.org/en/sfia-9)
- [SFIA 9 – All skills A-Z](https://sfia-online.org/en/sfia-9/skills/all-skills-a-z)
- [SFIA 9 – Skills profiles for role families and job titles](https://sfia-online.org/en/tools-and-resources/standard-industry-skills-profiles/sfia-9-skills-for-role-families-job-titles)
- [SFIA 9 – Summary chart with roles](https://sfia-online.org/en/sfia-9/sfia-views/sfia-9-multi-view/sfia-9-en-summary-chart-with-roles)

---

> ← [Back to K000107 overview](./) · [APV – Assets, Perspectives, Views](./K000107-APV-index) · [TBM →](./K000107-TBM-index)

<!-- body:start -->
<!-- nav:knifes -->
