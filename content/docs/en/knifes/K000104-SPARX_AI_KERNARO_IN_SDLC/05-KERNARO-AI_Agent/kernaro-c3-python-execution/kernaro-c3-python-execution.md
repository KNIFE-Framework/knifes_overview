---
fm_version: "1.0.1"
fm_build: "2026-05-04T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000104-05-python-execution"
guid: "b3f7a2d1-9c04-4e8b-a1f5-2d6e8c3b0f94"

dao: "knife"
title: "C3 – Python Execution"
description: "Testing whether Kernaro can invoke actual Python code (execute_python) vs. built-in EA tools. One use case, three attempts, two side effects."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: "KNIFE"
type: ""
priority: ""
tags: [SDLC, AI, KERNARO]

locale: "en"

created: "2026-05-04 00:00"
modified: "2026-05-04 00:00"
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

# C3 – Python Execution

← [Back to index](../../index.md) | ← [C – Agents](../kernaro-AI-agents.md) | ← [C2 – APV Integrity Check](../kernaro-agent-c2-apv-check/kernaro-agent-c2-apv-check.md)

---

**Session:** 2026-04-30 · 12:23–14:39  
**Use Case:** Detect elements with empty Notes on the current diagram — same as C1, but via Python execution instead of built-in EA tools.  
**Question:** Does Kernaro invoke `execute_python`, or does it always fall back to built-in EA tools?

---

## Attempt 1 – Basic Python Role + Prompt

**Role:**
```
You are an Enterprise Architect modeling assistant with access to the EA repository via Python scripting.
Your task is to analyze the currently open diagram and find all elements where the Notes field is empty or contains only whitespace.
Rules:
- Work only with elements visible on the current diagram
- Use EA Python API (ea_tools) available in Kernaro
- Return results as a structured list: Element Name | Element Type | GUID
- Do not modify any elements
```

**Result:** Kernaro called `Get Diagram By Guid` (built-in EA tool) and analyzed data via LLM text — `execute_python` was never invoked.

**Finding:** The output looked like a clean AI text report, not raw Python stdout. Built-in EA tools returned correct data; LLM composed the report.

---

## Attempt 2 – CRITICAL RULES (Force execute_python)

Role rewritten with explicit bans:

```
You are an Enterprise Architect Python automation expert.
CRITICAL RULES - NO EXCEPTIONS:
- You MUST use execute_python tool to run actual Python code
- You MUST NOT use Get Diagram, Get Element, or any other EA built-in tools
- You MUST NOT analyze data from memory or previous context
- If execute_python tool is not available, report error and stop
```

Script template in prompt used `win32com.client.GetActiveObject("EA.App")` as the correct entry point for Python→EA COM automation on Windows.

**Python configuration:** Python 3.12.10 ✅ installed and verified in Kernaro settings.  
**Result:** Agent still called `Get Diagram By Guid`. CRITICAL RULES were ignored.

**Finding:** LLM chose built-in EA tools even when the prompt explicitly prohibited them. When built-in tools are available and sufficient, the LLM prefers them regardless of prompt constraints.

---

## Attempt 3 – Agent 04 on EA_OnPostCloseDiagram

Agent: `04-ElementsOnCurrentDiagramwithEmptyNotes`  
Trigger: `EA_OnPostCloseDiagram`

### Test run 1 – Coffee Machine Activity diagram

**Diagram:** `Coffee Machine - Activity` (ID: 3)  
**Total elements:** 8  
**Empty Notes:** 0

✅ All elements documented. No action required.

| Element Name | Type | Notes Status |
|---|---|---|
| `Start` | Action | ✅ Populated |
| `Power On` | Action | ✅ Populated |
| `Heat Water` | Action | ✅ Populated |
| `Select Drink` | Action | ✅ Populated |
| `Brew` | Action | ✅ Populated |
| `Dispense Coffee` | Action | ✅ Populated |
| `Power Off` | Action | ✅ Populated |
| `End` | Action | ✅ Populated |

### Test run 2 – Starter Use Case Model

**Diagram:** `Starter Use Case Model` (ID: 1)  
**Total elements:** 8  
**Empty Notes:** 3

| Element Name | Type | Element ID |
|---|---|---|
| `Customer` | Actor | 404 |
| `Customer1` | Actor | 405 |
| `Customer2` | Actor | 406 |

> Note: `Customer1` and `Customer2` appear to be duplicate or test elements. `Coffee Machine` (Boundary) had only a placeholder `[Description of the System]` — flagged in earlier runs as pseudo-empty.

**Finding:** Correct results on both diagrams. Still via built-in tools, not Python execution.

---

## Side Effect 1 – Event Collision on EA_OnPostCloseDiagram

Each new agent in this session targeted the same trigger: `EA_OnPostCloseDiagram`.

**Problem:** Kernaro does not allow multiple agents to share one event directly.

**Resolution applied:**
1. Priority escalated incrementally → reached 4 (lowest available)
2. Previous agents set to **inactive**

**Observation:** Priority + inactive flag is the workaround — not native multi-agent event support.

---

## Side Effect 2 – Parallel Agent Execution (Observed Once)

At one point during the session, **two agents ran simultaneously** on the same `EA_OnPostCloseDiagram` trigger — with different execution durations visible in the Agent Executions log.

This occurred before the inactive flag was applied to the previous agent.

> ⚠ Input/output details were captured but not fully analyzed. The behavior suggests Kernaro may allow brief parallel execution during the transition period between agent configurations.

<!-- TODO: analyze parallel run screenshot — inputs, outputs, durations, which agents ran -->

---

## Observations

| # | Observation | Classification |
|---|---|---|
| 1 | Python 3.12 configured ✅, but `execute_python` never invoked — LLM chose built-in EA tools in all 3 attempts | Curiosity, not a bug |
| 2 | Built-in EA tools returned correct results — the outcome was functionally equivalent | Expected behavior |
| 3 | Prompt constraints (`MUST NOT use...`) did not override LLM tool preference when built-ins were available | LLM behavior characteristic |
| 4 | One `EA_OnPostCloseDiagram` event = one active agent at a time | Platform constraint |
| 5 | Brief parallel execution observed during agent transition | Unanalyzed — needs screenshot review |

---

← [Back to index](../../index.md) | ← [C – Agents](../kernaro-AI-agents.md) | ← [C2 – APV Integrity Check](../kernaro-agent-c2-apv-check/kernaro-agent-c2-apv-check.md)



<!-- IMAGES:BEGIN -->

---

## Images

<!-- COPY-PASTE REFERENCE
  Inline image (no caption):
    <img src={require('./img/...').default} style={{maxWidth:'800px',width:'100%'}} />

  Endnote image with caption (replace [IMG-xx] with #### heading):
    <a id="img-07"></a>
    #### IMG-07 · Short descriptive title
    <img src={require('./img/...').default} style={{maxWidth:'800px',width:'100%'}} />

  Reference from text:
    [[IMG-07]](#img-07)
    → see [[IMG-07]](#img-07)
-->

<a id="img-01"></a>
[IMG-01]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/02-PYTHON.png').default} alt="img/02-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-02"></a>
[IMG-02]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/03-PYTHON.png').default} alt="img/03-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-03"></a>
[IMG-03]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/04-PYTHON.png').default} alt="img/04-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-04"></a>
[IMG-04]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/04-javascripts.png').default} alt="img/04-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-05"></a>
[IMG-05]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/05-PYTHON.png').default} alt="img/05-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-06"></a>
[IMG-06]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/06-PYTHON.png').default} alt="img/06-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-07"></a>
[IMG-07]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/07-PYTHON.png').default} alt="img/07-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-08"></a>
[IMG-08]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/08-PYTHON.png').default} alt="img/08-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-09"></a>
[IMG-09]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/09-PYTHON.png').default} alt="img/09-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-10"></a>
[IMG-10]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/10-PYTHON.png').default} alt="img/10-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-11"></a>
[IMG-11]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/11-PYTHON.png').default} alt="img/11-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-12"></a>
[IMG-12]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/12-PYTHON.png').default} alt="img/12-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-13"></a>
[IMG-13]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/13-PYTHON.png').default} alt="img/13-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-14"></a>
[IMG-14]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/14-PYTHON.png').default} alt="img/14-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-15"></a>
[IMG-15]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/15-PYTHON.png').default} alt="img/15-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-16"></a>
[IMG-16]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/16-PYTHON.png').default} alt="img/16-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-17"></a>
[IMG-17]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/17-PYTHON.png').default} alt="img/17-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-18"></a>
[IMG-18]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/18-PYTHON.png').default} alt="img/18-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-19"></a>
[IMG-19]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/19-PYTHON.png').default} alt="img/19-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-20"></a>
[IMG-20]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/20-PYTHON.png').default} alt="img/20-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-21"></a>
[IMG-21]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/21-PYTHON.png').default} alt="img/21-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-22"></a>
[IMG-22]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/22-PYTHON.png').default} alt="img/22-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-23"></a>
[IMG-23]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/23-PYTHON.png').default} alt="img/23-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-24"></a>
[IMG-24]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/24-PYTHON.png').default} alt="img/24-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-25"></a>
[IMG-25]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/25-PYTHON.png').default} alt="img/25-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-26"></a>
[IMG-26]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/26-PYTHON.png').default} alt="img/26-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-27"></a>
[IMG-27]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/27-PYTHON.png').default} alt="img/27-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-28"></a>
[IMG-28]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/28-PYTHON.png').default} alt="img/28-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-29"></a>
[IMG-29]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/29-PYTHON.png').default} alt="img/29-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-30"></a>
[IMG-30]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/30-PYTHON.png').default} alt="img/30-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-31"></a>
[IMG-31]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/31-PYTHON.png').default} alt="img/31-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-32"></a>
[IMG-32]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/32-PYTHON.png').default} alt="img/32-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-33"></a>
[IMG-33]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/33-PYTHON.png').default} alt="img/33-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-34"></a>
[IMG-34]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/34-PYTHON.png').default} alt="img/34-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-35"></a>
[IMG-35]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/35-PYTHON.png').default} alt="img/35-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-36"></a>
[IMG-36]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/36-PYTHON.png').default} alt="img/36-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-37"></a>
[IMG-37]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/37-PYTHON.png').default} alt="img/37-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-38"></a>
[IMG-38]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/38-PYTHON.png').default} alt="img/38-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-39"></a>
[IMG-39]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/39-PYTHON.png').default} alt="img/39-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-40"></a>
[IMG-40]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/40-PYTHON.png').default} alt="img/40-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-41"></a>
[IMG-41]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/41-PYTHON.png').default} alt="img/41-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-42"></a>
[IMG-42]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/42-PYTHON.png').default} alt="img/42-PYTHON.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<!-- IMAGES:END -->
