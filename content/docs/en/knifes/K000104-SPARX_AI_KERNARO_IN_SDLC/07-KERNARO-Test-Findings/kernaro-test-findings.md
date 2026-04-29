# E – Findings & Recommendations

← [Back to index](../index.md)

---

## E1 · R/O Tools → Hallucination → Fix

This sequence was one of the most instructive findings of the entire test.

### Stage 1 – Read-only tools, no output constraints

Initial agent configuration: only read-only tools enabled (`get_element_by_id`, `get_element_tagged_values`, etc.).  
No write tools. No explicit output rule.

**Agent output:**
```
Customer | Actor | {E54AAB3E...} | Notes: MISSING | Action: Added QA_Status="Missing Note"
```

The agent **reported a successful write** that never happened. It had no write tool, yet produced output claiming tags were applied. This is a classic LLM hallucination – the model completed the expected narrative rather than reporting the actual result.

### Stage 2 – Root cause

LLM fills gaps in instructions with the most probable continuation. Without an explicit constraint defining what to do on failure, the model invents success.

**Missing rule:**
> "What should the agent report when a required tool is unavailable?"

Without answering this in the prompt, the LLM answers it itself – incorrectly.

### Stage 3 – Fix: CRITICAL OUTPUT RULE

Adding this to the agent prompt resolved the issue completely:

```
CRITICAL OUTPUT RULE:
Never report an action as completed if the corresponding tool 
was not available or returned an error.

Use only these exact status values:
- Action: None         → Notes present, no action needed
- Action: WRITTEN      → add_tagged_value confirmed success
- Action: SKIPPED      → QA tags already exist on element
- Action: FAILED       → tool called but returned error
- Action: NO TOOL      → write tool not available

Never use "Added", "Applied", or "Created" unless the tool 
call explicitly confirmed success.
```

**Agent output after fix:**
```
Customer | Actor | {E54AAB3E...} | Notes: MISSING | Action: SKIPPED — no write tool available
```

### Stage 4 – Write tools enabled + approval

After enabling `add_tagged_value` and `update_element` in Tools & Config (not `bulk_add_tagged_values`), with Approval: ON:

```
Agent Approval Required
Action:  Modify
Target:  QA_Status  
Tool:    add_tagged_value
[Approve] [Reject]
```

After approval, tags were written correctly to the element.

### Summary: Prompt discipline improves AI accuracy

| Change | Effect |
|---|---|
| R/O tools only, no output rule | Hallucinated write confirmation |
| R/O tools + CRITICAL OUTPUT RULE | Correctly reported SKIPPED |
| Write tools + CRITICAL OUTPUT RULE | Correctly reported WRITTEN after approval |

> **The prompt author is responsible for the majority of agent errors.**  
> Precise definitions and explicit constraints for failure cases dramatically improve output reliability.

---

## E2 · Issues Summary

| ID | Area | Severity | Description |
|---|---|---|---|
| C1-1 | Agent / Trigger | Medium | Trigger changes require EA restart to activate |
| C1-2 | Agent / Output | High | Without output constraints, agent hallucinated write confirmation |
| D2-1 | Script Agent | Medium | Python instruction produced JavaScript instead |
| D3-1 | Script Agent | High | `new Enumerator()` hallucination – incompatible EA syntax, persists after correction |
| D1-2 | Script Agent | Medium | Generated script not auto-executed in EA Script Manager |
| B3-1 | Chat | Medium | Screenshot paste via clipboard returns Error 400 (empty base64 image) |
| B3-2 | Chat | Low | Session state corruption after image error – requires full session reset |

---

## E3 · What Worked Well ✅

- `EA_OnPostCloseDiagram` trigger fires reliably after EA restart
- Approval workflow for write operations is clear and safe
- Agent correctly identifies elements with missing Notes
- GUID-scoped queries reduce token cost dramatically
- Python 3.12 path validation in Settings works correctly
- `/instructions` command generates repository-aware system context
- Iterative debugging via chat (paste error text → get corrected code) works reliably
- Token cost and usage fully visible in Anthropic Console dashboard

---

## E3b · Finding – Structured Scenarios not utilised

Full description in [B – Chat, section B4](../04-KERNARO-Chat/kernaro-chat.md).

**Summary:** Kernaro used Operations on UseCase elements (Scenarios tab remained empty). Output was usable for stakeholder communication but full traceability to test cases requires Structured Scenarios. Root cause: prompt ambiguity. Fix: explicit instruction `"populate Scenarios tab, use EA Structured Scenario format"`.

---

## E3c · Finding – Plan before execute (governance mechanism)

Kernaro presents a complete plan before taking any action and waits for human approval. Each step of the plan can be confirmed or rejected individually.

This is a critical governance and safety mechanism when working with a production model. The user retains full control over what is written to the repository.

**Practical value:**
- Catch misunderstood instructions before any model change occurs
- Approve only the steps that make sense, reject the rest
- Full audit trail of what was planned vs what was approved

**Recommendation:** Keep `Require approval for write operations` ON at all times for production repositories. Disable only for controlled bulk operations on test models.

---

## E3d · Finding – Agent can advise on better instructions

When asked, Kernaro explained the three native EA mechanisms for Use Case steps and recommended how to write more precise instructions. This is meta-communication – the agent understands its own limitations and can guide the user toward better prompts.

This capability significantly reduces the trial-and-error cycle during initial setup and onboarding.

**Example:** Rather than discovering through failed runs that Operations ≠ Structured Scenarios, the agent can explain the difference and suggest the correct instruction format upfront.

---

## E4 · Recommendations for Kernaro Team

1. **Fix `new Enumerator()` hallucination** – add EA JavaScript training examples using `.Count` / `.GetAt(i)` pattern. This is the most frequently hit issue for EA Script Manager users.

2. **Honor language instruction** – when user specifies Python, execute via Python Execution, not JavaScript.

3. **Auto-execute generated scripts** – or provide a one-click "Run in EA" button in chat.

4. **Trigger hot-reload** – agent trigger changes should activate without EA client restart.

5. **Fix clipboard image handling** – clipboard screenshots return `Error 400: image cannot be empty`. Describe error is valid, image is not empty on user side.

6. **Session recovery** – isolate image errors from corrupting conversation state.

7. **Add default CRITICAL OUTPUT RULE to agent templates** – default agent instructions should include explicit status vocabulary to prevent write hallucinations.

8. **Improve GUID-scoped query routing** – provide a UI mechanism to set context scope (package GUID) before running agent, to reduce token cost for large repositories.

9. **Add EA Structured Scenario awareness** – when modelling Use Cases, prefer native UseCase + Structured Scenario elements over generic Class elements, especially in SDLC-oriented repositories.

---

← [Back to index](../index.md) | → [F – Ecosystem](../09-Sparxsystems-Ecosystem/sparxsystems-ecosystem.md)
