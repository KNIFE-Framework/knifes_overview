---
fm_version: "1.0.1"
fm_build: "2026-04-29T06:56:28.587132+00:00"
fm_version_comment: ""

id: "K000104-09-sparx-ecosystem"
guid: "be146d58-1899-4c58-8e6c-f9953f339129"

dao: "knife"
title: "F – Sparx AI Ecosystem"
description: "Context for Kernaro's position within the broader Sparx Systems AI ecosystem, including EA Native AI Assist and third-party integrations."

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
# F – Sparx AI Ecosystem

:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::

← [Back to index](../index.md)

> This section was not part of the Beta test scope. It provides context for Kernaro's position within the broader Sparx Systems AI ecosystem.

---

## F1 · EA Native AI Assist (built-in from EA 17.0+)

Available directly in EA ribbon: `Specialize → AI Assist`.  
Requires your own OpenAI or Google API key. No add-in needed. [1]

| Property | Value |
|---|---|
| Type | Built-in EA feature |
| LLM support | OpenAI (ChatGPT), Google (Gemini) |
| Write to model | ❌ Read-only assist |
| Agents / Events | ❌ No |
| Persistent instructions | ❌ No |
| Token cost | Low – manual element selection |
| Setup effort | ⭐ Minimal |

**Best for:** Quick documentation assist, element descriptions, ad-hoc natural language queries on selected elements.

**Limitation:** Does not know your custom MDG stereotypes or naming conventions. Each session starts from scratch.

---

## F2 · Prolaborate and AI (Genie)

Prolaborate is the Sparx Systems web portal for stakeholder access to EA models. It includes **Prolaborate Genie** – an AI assistant built into the web interface. [2]

| Property | Value |
|---|---|
| Type | Web portal add-on |
| LLM support | Azure OpenAI, Amazon SageMaker (Llama, Cohere, Claude via SageMaker) |
| Target users | Stakeholders, non-modellers |
| Write to model | Limited – via Prolaborate UI |
| Metamodel awareness | Yes – Genie can be trained on MDG and knowledge-base documents |

**Best for:** Stakeholder-facing AI queries, architecture summaries for non-technical audiences.

**Not tested in this Beta evaluation.**

---

## F3 · Sparx Systems Japan MCP Server

**Product:** MCP Server for Enterprise Architect  
**Publisher:** Sparx Systems Japan  
**URL:** https://www.sparxsystems.jp/en/MCP/ [3]  
**Price:** Free  
**License:** Registration required, download via email link

### What it is

An EA add-in (`MCP_EA.dll` / `MCP3.exe`) that exposes the EA repository as an MCP (Model Context Protocol) server. Compatible MCP clients can then read and write EA model data using natural language via their LLM of choice.

### Compatible clients

- Claude Desktop [4]
- Gemini CLI
- VS Code Copilot Chat

### Architecture (STDIO transport)

```
[MCP Client – e.g. Claude Desktop]
        ↓  STDIO pipe (local)
[MCP3.exe + MCP_EA.dll]
        ↓  EA COM API
[Enterprise Architect + open model]
```

Data flow to LLM: EA → MCP Server (local) → MCP Client → LLM API (external).  
The MCP Server itself does not send data externally. The MCP Client does.

### Key features (as of April 2026)

- Read/write elements, connectors, diagrams, packages
- Structured Use Case scenario support (read-only)
- Import/export Linked Documents as RTF
- SQL compatibility fixes for MariaDB and SQL Server

### Requirements

- EA 16.0+ (64-bit build recommended)
- Windows only (EA is Windows COM-based)
- .NET Desktop Runtime 9.0.5 or newer

### Comparison with Kernaro

| | Kernaro [5] | JP MCP Server [3] |
|---|---|---|
| Architecture | Managed SaaS + add-in | Local add-in + any MCP client |
| LLM flexibility | Configurable (Anthropic, Azure OAI) | Depends on MCP client |
| Functionality | Rich (agents, Word export, Power BI) | Basic (read/write model) |
| Pricing | Commercial license | Free |
| Setup effort | Medium | Technical |
| EU data residency | Configurable | Depends on MCP client |

**For PoC in corporate environment:**  
JP MCP Server + Claude Desktop is recommended as a first step to understand the MCP pipeline at zero cost. For production, Kernaro configured with Azure OpenAI backend provides richer functionality with enterprise compliance.

---

## F4 · EVOLVIntel EA GraphLink

**Product:** EA GraphLink / EA Genie (third-party, not Sparx official)  
**Publisher:** EVOLVIntel, India  
**URL:** https://www.evolvintel.com [6]

Provides AI-powered impact analysis, tool integrations (Jira, Confluence, DevOps), and diagram generation. Independent product building on the EA COM API.

**Not tested in this evaluation.**

---

## Natural escalation path for AI in EA

```
1. EA Native AI Assist      → quick start, zero setup, read-only
        ↓
2. JP MCP Server            → free, understand the pipeline, read/write
        ↓
3. Kernaro (Anthropic API)  → rich agents, validation, document generation
        ↓
4. Kernaro (Azure OAI)      → enterprise compliance, EU data residency
```

---

## Product links

[1] EA AI Assist – https://genie.sparxsystems.com/ai-assist-for-ea/  
[2] Prolaborate Genie – https://prolaborate.sparxsystems.com/genie-generativeai-assistant  
[3] Sparx Systems Japan MCP Server – https://www.sparxsystems.jp/en/MCP/  
[4] Claude Desktop – https://claude.ai/download  
[5] Kernaro AI for EA – https://kernaro.sparxsystems.com  
[6] EVOLVIntel EA GraphLink – https://www.evolvintel.com  

---

← [Back to index](../index.md) | → [G – Conclusions](../10-KERNARO-TEST-Conclusion/kernaro-tests-conclusion.md)
