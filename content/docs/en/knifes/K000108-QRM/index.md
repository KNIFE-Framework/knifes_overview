---
fm_version: "1.0.1"
fm_build: "2026-06-01T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000108_EN"
guid: ""

dao: "knife"
title: "K000108 – Quick Response Manufacturing (QRM)"
description: "QRM is a company-wide strategy for reducing lead times — invented by Rajan Suri in the 1990s. Originally designed for manufacturing, QRM explicitly extends to office and knowledge work processes, making it directly relevant to SDLC and IT delivery."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [QRM, LeadTime, Manufacturing, SDLC, KnowledgeWork, Lean, SixSigma, MCT, QROC, CAA]

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

# KNIFE – Quick Response Manufacturing (QRM)

## Is your SDLC suffering from the same problem that nearly killed high-mix manufacturing?
:::note[Before you read on — four questions worth sitting with]
- Is software development just manufacturing without the machines?

- Why does a car factory know its lead time to the hour — and your IT project does not?

- Your factory solved quality problems in the 80s. Why is your IT team still having the same meetings?

- Manufacturing had 8D, Lean, Six Sigma, QRM. What does your SDLC have?
:::


---

## 🎯 What it solves

QRM was invented by Rajan Suri in the 1990s. The primary goal is relentless reduction of lead time — internal process flow times. Application of these concepts enables a company to compete on speed, flexibility, and agility.

In IT and SDLC terms: **lead time is the time from a requirement entering a phase to a verified output leaving it.** Every handoff, every queue, every "it's in review" is lead time waste.

:::caution[The SDLC parallel]
SDLC projects fail for the same reasons manufacturing failed before QRM:
- Functional silos that create handoff delays
- "Utilisation traps" — keeping people 100% busy creates bottlenecks
- Batching work instead of flowing it
- No shared metric for how long things actually take
:::

---

## 🧩 How it solves it

### Core principle: one metric to rule them all

Lead time reduction can be used to drive other performance improvements. Focusing on the reduction of lead time (MCT) within a company's internal processes can result in a wide array of other beneficial outcomes, including better quality (due to faster feedback loops, cross-trained workers, and small batch flow), improved on-time delivery, and lower operational costs.

**MCT – Manufacturing Critical-path Time** is the key metric. It measures the wall-clock time from start to finish of a process, not just the "touch time" when someone is actively working.

:::info[The shocking ratio]
On average, actual touch time represents only 1–5% of total MCT.
The remaining 95–99% is waiting, queuing, handoffs, and rework.
This applies equally to software development phases, document reviews, and approval chains.
:::

### MCT diagram – calendar time (1 week) vs actual work needed (2 hours) and QRM target (1 day)

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/00-mct-timeline.png').default} alt="MCT diagram – calendar time (1 week) vs actual work needed (2 hours) and QRM target (1 day)" style={{maxWidth: '800px', width: '100%'}} />
</div>



### Four core QRM concepts

**1. Time as the primary lens**
Stop optimising for cost or utilisation. Optimise for speed. When lead time drops, costs follow.

**2. Dysfunctional vs strategic variability**
Dysfunctional variability arises from operational problems — rework, errors, machine downtime, long setup times. Strategic variability exists to make customers happy — different product options, custom configurations. QRM's aim: eliminate dysfunctional variability and exploit strategic variability.

In SDLC: rework from misunderstood requirements = dysfunctional. Customised solutions for different clients = strategic.

**3. QRM Cells — organisational restructuring**
Instead of functional departments (Analysis Dept → Design Dept → Dev Dept → Test Dept), form cross-functional cells focused on a product or service family. Each cell owns the full flow.

**4. Q-ROC – Quick Response Office Cells**
Cell restructuring works in the office too. Office activities like quoting and order processing can account for more than 50% of lead time and more than 25% of costs. Quick Response Office Cells (Q-ROCs) can be established to focus on a product family. The resources are co-located and accomplish a sequence of activities. The workers are cross-trained and given authority to make decisions.

This is the direct bridge to IT delivery — a Q-ROC for an SDLC phase is a cross-functional team with full authority to complete their stage without handoffs.

---

## 🧪 How to use it

### Step 1 – Map your current MCT

Draw the current state: from requirement arrival to phase output. Mark:
- Where does work sit waiting? (queue time)
- Where does it get batched? (batch delay)
- Where does it go back? (rework loop)
- What is the actual touch time vs total elapsed time?

### Step 2 – Identify the Response Time Spiral

The Response Time Spiral occurs when compartmentalised function-based departments result in increasing work in progress, backlogs and rush orders.

Signs in SDLC: every sprint ends with carry-over, requirements reviews take weeks, "urgent" always jumps the queue.

### Step 3 – Design a Q-ROC for your SDLC phase

- Identify one SDLC phase or flow (e.g. requirements → design)
- Form a cross-functional cell: BA + architect + lead dev + test rep
- Co-locate (physically or virtually with dedicated channels)
- Give them authority to complete without escalation
- Measure MCT before and after

### Step 4 – Reduce dysfunctional variability

- Standardise inputs (what a "ready requirement" looks like — taxonomy!)
- Reduce batch sizes (one story at a time, not a sprint's worth)
- Establish pull signals (team pulls work when ready, not when pushed)

---

## ⚡ Quick Guide

| QRM concept | SDLC equivalent |
|---|---|
| MCT (Manufacturing Critical-path Time) | Phase lead time: requirement in → output verified |
| Dysfunctional variability | Rework from unclear requirements, missing definitions |
| Strategic variability | Custom solutions for different client contexts |
| QRM Cell | Cross-functional SDLC team (BA + Arch + Dev + Test) |
| Q-ROC | Knowledge work cell for a specific SDLC phase |
| Response Time Spiral | Sprint carry-over, backlog growth, "always urgent" culture |
| POLCA (card-based flow control) | Kanban, WIP limits |
| Touch time ratio (1–5%) | % of sprint actually working vs waiting/in review |

---

## 📜 Detailed Article

### Why QRM complements Lean and Six Sigma — not replaces them

Many companies have successfully used QRM alongside Lean, Six Sigma, and other improvement methods, finding that QRM's unique time-reduction tools complement and enhance these efforts.

QRM is particularly effective for companies making low-volume, high-variability or custom-engineered products. Some Lean concepts, such as takt time, Kanban, and production smoothing do not work well in these contexts.

IT delivery is inherently high-variability, custom-engineered. This is why pure Lean struggles in software — and why QRM's approach to variability is more relevant.

### The utilisation trap

One of QRM's most counterintuitive insights: pushing resources to 100% utilisation **increases** lead time. When everyone is always busy, no capacity exists to absorb variability. Every new request waits in queue.

In SDLC: the architect who is always 100% booked becomes the bottleneck that slows every project.

### Virupa case: Q-ROC in practice

Virupa Visual Solutions experienced significant growth but keeping up the level of turnover was taking increasingly more energy. The root cause was the business processes, which had been compartmentalised into function-based departments. To break this, Virupa disbanded the office departments and replaced them with four Quick Response Office Cells. In each Q-ROC a multidisciplinary team deals with all the processes and administration for a specific group of customers.

The principle translates directly: instead of Requirements Dept → Architecture Dept → Development Dept, form a Q-ROC that handles all phases for a specific solution type or client segment.

### The taxonomy connection

QRM cannot function without a shared vocabulary.

MCT mapping requires that every participant understands the same definition of "start" and "end" for each process step. Without taxonomy:
- Different people measure different things
- MCT improvements cannot be validated
- Q-ROC teams cannot communicate across boundaries

This is why QRM and taxonomy (K107) are related — not competing — methodologies.

---

## 💡 Tips and Notes

:::tip[Start with MCT mapping, not restructuring]
Before designing cells, map current MCT for one flow.
The map alone creates shared understanding and reveals obvious quick wins.
Teams often find 40–60% of lead time sitting in a single handoff or approval step.
:::

:::tip[Q-ROC for knowledge work]
A major advantage of applying Q-ROC to office work over shop floor cells: moving people and desks is much less costly than moving machines.
Start with one team. Prove it works. Then expand.
:::

:::caution[QRM ≠ just doing things faster]
QRM is not about rushing. It is about removing the time that adds no value.
Speed comes from eliminating queues and rework — not from working harder.
:::

---

## ✅ Summary

QRM reframes the question from "how do we reduce cost?" to "how do we reduce time?"

When lead time drops:
- Quality improves (faster feedback loops, smaller batches)
- Cost follows (less rework, less WIP, lower overhead)
- Customer satisfaction increases (faster, more reliable delivery)

For SDLC practitioners: QRM provides a time-based lens that complements Lean, Six Sigma, and Agile — especially for high-variability, custom-solution environments.

The Q-ROC model for office and knowledge work is the direct bridge from manufacturing to IT delivery.

:::info[Related KNIFE articles]
- [K000107 – Taxonomy and Ontology in SDLC](../K000107_TaxonomyAndOntology/) — the vocabulary foundation that enables QRM measurement
- [K000103 – Context Aware Approach in SDLC](../K000103-CAA_IN_SDLC/) — CAA provides the contextual layer for QRM implementation
:::

---

### Further reading

- Rajan Suri – QRM origin and consulting: https://rajansuri.com
- Center for QRM – University of Wisconsin: https://qrm.engr.wisc.edu
- QRM Institute (Europe): https://qrminstitute.org
- "It's About Time" – Rajan Suri (2010, Productivity Press) — the foundational book on QRM for office and knowledge work

---

### Sources

1. https://rajansuri.com
2. https://interpro.wisc.edu/ten-things-you-should-know-about-quick-response-manufacturing/
3. https://qrm.engr.wisc.edu/blog/ten-things-you-should-know-about-quick-response-manufacturing/
4. https://qrminstitute.org/working-in-teams-qrm-and-work-cells-q-rocs/
5. https://www.business-improvement.eu/qrm/Virupa_QRM.php
6. https://interpro.wisc.edu/courses/qrm-business-process-optimization-improving-support-operations-with-advanced-cell-design/

---

<!-- body:start -->
<!-- nav:knifes -->
