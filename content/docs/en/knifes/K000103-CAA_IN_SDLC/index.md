---
fm_version: "1.0.1"
fm_build: "2026-04-29T06:56:28.587132+00:00"
fm_version_comment: ""

id: "K000103"
guid: "b0a589dc-ccab-43a3-a07e-30acf9eb6be5"

dao: "knife"
title: "K000103 – Context Aware Approach in SDLC"
description: "Context Aware Approach (CAA) applied to Solution Development Life Cycle — why context must be understood before any tool or technology decision is made."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [SDLC, CAA, EnterpriseArchitecture]

locale: "en"

created: "2026-04-29 08:56"
modified: "2026-04-29 08:56"
status: "backlog"
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

# KNIFE Context Aware Approach in SDLC

(SDLC – Solution Development Life Cycle)

## 🎯 What it solves (purpose, goal)

No solution in any domain exists in isolation — it lives within a specific context that fundamentally shapes what is being built.
It follows naturally that every solution must begin with understanding that context.
This spans a wide range of topics: people, processes, technology, politics, market conditions, and more.
In this article we focus on describing context for delivering IT solutions, but the principles apply broadly.


<img src={require('./img/CAA-Approach-In-SDLC.png').default} alt="CAA – Context Aware Approach in SDLC" style={{maxWidth: '800px', width: '100%'}} />




## 🧩 How it solves it (principle)

Visualizing context greatly helps with understanding it — which in practice means mapping the real world into a digital form.
A wide spectrum of tools and applications is available for this purpose. Which one to choose, and what criteria to apply?

In our case, we emphasize the following principles and properties. Technologies should support these principles as broadly as possible.

**1. Principles**

1. One picture is worth a thousand words.
2. One model is worth a thousand pictures.
3. There is no good solution without pictures.
   - This requires clarifying:
     - what "good solution" means
     - what "picture / diagram" means
4. The following principles help deliver better solutions (where "better" also needs to be defined):
   - Without Communication — there is no Understanding
   - Without Understanding — there is no Trust
   - Without Trust — there is no good Collaboration
   - Without good Collaboration — there is no Success
5. Every solution passes through the basic phases defined in the V-Model:
   Idea → High-Level Design → Analysis → Detailed Design → Implementation → Verification & Testing → Operations → Change Management
   - The order, depth, and time spent on each phase depend on the solution — but every solution must at minimum go through a mental exercise from idea to operations, regardless of the delivery approach (Waterfall, Agile, hybrid).

**2. Functional requirements for supporting tools across SDLC roles**
*(brief, highly selective — depends on solution context and team/organization character)*

- Simplicity and intuitiveness
- How many SDLC roles does the tool support?
- Degree to which a single technology satisfies the needs of individual roles
- Universal vs. specialized tool
- Openness of the technology:
  - Interoperability
    - Third-party integrations
  - Modularity
  - Ability to extend the system with new capabilities
  - Support for workflow automation

**3. Non-functional requirements**

- Market presence:
  - Product/system reach in the market / specific domains / areas
  - Availability of know-how
  - Community
  - Knowledgeable individuals within the organization
- Market longevity:
  - Startup vs. established company
- Quality support
- Market and segment recognition
- University and broader community support
- Deployment options:
  - On-premise
  - On-client
  - Cloud solution
  - Mobile devices
- Licensing model:
  - Floating licenses
  - Dedicated licenses
- Payment model:
  - One-time + upgrade/renewal
  - Subscription
- Personal preferences:
  - Positive past experience with the technology's features
  - Existing knowledge of the product, including its strengths and weaknesses

## 🧪 How to use it (application)

When evaluating a specific technology, it is advisable to consider as many criteria as possible before starting the assessment.
Every selection is individual and valid only within the specific context of a given organization, team, or person.
When benchmarking, comparable criteria and comparable contexts must be established — otherwise the results will be misleading.

---

## ⚡ Quick Guide (Top)

The following images support the visualization of my context when selecting and evaluating tools suitable for solution delivery.

## 📜 Detailed Article

### Why do we draw pictures? (sketches, diagrams, models)

Mapping reality into digital form.

Image published with kind permission of IASA:
Aaron Tan Dani, FSCS — Chief Architect, Digital Enterprise Architecture Office
Mtech (NUS), CITA-F, CITA-A, TOGAF, ArchiMate, COBIT, PMP
https://iasaglobal.org/Services/Public/News/Articles/Establishing-Digital-Transformation-and-Smart-Factory-Blueprint-with-EA.aspx


<img src={require('./img/01-DigitalMappingOdReality.png').default} alt="01 – Mapping the Real World to the Digital World" style={{maxWidth: '800px', width: '100%'}} />

---

Why do we put so much effort into mapping reality to the digital world?
I believe it is because:
- It increases the chance of shared understanding among roles and people within the solution lifecycle.
- It supports decision-makers.
  - 3Rs: Right Information – for the Right Role – at the Right Time


<img src={require('./img/02-Market-SDLC.png').default} alt="02 – Relationship Between Supplier and Customer in the SDLC Context" style={{maxWidth: '800px', width: '100%'}} />


<img src={require('./img/03-SDLC-Deliverables.png').default} alt="03 – SDLC and Deliverables Between SDLC Phases" style={{maxWidth: '800px', width: '100%'}} />


<img src={require('./img/04-Tools-Focus_AI.png').default} alt="04 – Areas for Tool Assessment from Multiple Perspectives (incomplete)" style={{maxWidth: '800px', width: '100%'}} />


<img src={require('./img/05-All_in_One.png').default} alt="05 – Everything in One Picture" style={{maxWidth: '800px', width: '100%'}} />

## 💡 Tips and Notes

The presented topic is highly complex and requires techniques suited to complex challenges.
See KNIFE [Cynefin](../K000101-CYNEFIN_Framework/).

The core idea for addressing complex questions follows this pattern:

**Probe → Sense → Respond**

Try → Observe first experiences → Consciously react and refine your original understanding.

## ✅ Value / Summary

What is better?
A Bentley or a ŠKODA?
Mac or Windows?

What is an application? What is a platform?

How many endless discussions and arguments, for and against.
But why? Isn't it a pointless debate with no winner?

As long as the **context** for the question, problem, or challenge is not defined — there is no point in continuing the discussion or the solution.

Once we at least attempt to understand the solution context to a sufficient depth, we gain constraints and boundaries that fundamentally help us understand the solution, find the right answers — and to do so constructively.
Without unnecessary arguing, quarreling, and wasting precious time.

> No tool, no technology will ever be perfect for all contexts.
> Our task is to understand the context and choose a **good enough** solution for that specific context.

<!-- body:start -->

<!-- nav:knifes -->