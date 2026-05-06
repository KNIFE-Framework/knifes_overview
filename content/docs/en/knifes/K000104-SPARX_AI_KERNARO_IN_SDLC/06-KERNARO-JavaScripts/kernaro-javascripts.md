---
fm_version: "1.0.1"
fm_build: "2026-04-29T06:56:28.587132+00:00"
fm_version_comment: ""

id: "K000104-06-javascripts"
guid: "2a2acd98-8355-49ef-b491-01e6d9db3d11"

dao: "knife"
title: "D – JavaScript in EA Script Manager"
description: "Testing Kernaro's Script Agent for JavaScript code generation inside Enterprise Architect Script Manager — a practical scenario with empty Notes detection."

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
# D – JavaScript in EA Script Manager

← [Back to index](../index.md)

> **Note:** EA Script Manager supports JavaScript (not to be confused with Java). In this test, Kernaro's Script Agent generated JavaScript code – Python was not executed.

---

## D1 · What was tested

<!-- TODO: Translate

Včera som vytvoril a modifikoval UC pre coffe machine. Dopĺňam diagram o elementy, ktorým nedopĺňam popis.
Mojim cieľom te teraz validovať diagram, a zistiť, ktorým elementom chýna komentár.
Dotknutým elementom je potrebné nastaviť TAG value pre reportovanie a n ásledné napravenie nedostatku.

Treba zdôrazniť, že AI rešpektuje nastavenia a. V nastavení sa dá vybrať, akú mieru autonémnosti a na kotré akcie (TOOLS) dostane oprávnenie.


-->

**Scenario:** List all elements in a given package that have an empty Notes field.

**Approach:**
1. Request sent to Kernaro Chat with GUID scope
2. Kernaro Script Agent generated JavaScript code
3. Code was manually copied to EA Script Manager and executed
4. Errors were identified and resolved with Kernaro's assistance

**Python Execution was NOT tested.** Although Python 3.12 was configured and validated in Kernaro Settings, the Script Agent chose JavaScript for this use case. Python execution via Kernaro remains to be evaluated.

---

## D2 · Script generation via Chat

**Query sent to Kernaro:**
```
GUID ={8208DC8D-B283-10B3-86D0-E8D891DD8861}. Using Python, 
list all elements in the root package defined by GUID 
that have empty Notes field. Show element name and type.
```

**Result:** Kernaro generated **JavaScript** (not Python as requested). The code was presented in chat with instructions to run it manually via `Specialize → Scripting`.

**Finding D2-1 – Language instruction not respected:**  
When explicitly asked for Python, the Script Agent generated JavaScript. This may be intentional (JavaScript is natively supported in EA) but conflicts with the explicit user instruction.

---

## D3 · Enumerator hallucination

Kernaro generated code using `new Enumerator()` – a syntax from Internet Explorer / WSH environments that is **not supported** in EA's JavaScript engine.

**Generated (broken):**
```javascript
var elementEnumerator = new Enumerator(thePackage.Elements); // ❌
while (!elementEnumerator.atEnd()) {
    var el = elementEnumerator.item();
    // ...
    elementEnumerator.moveNext();
}
```

**EA error:** `Enumerator is not defined`

Kernaro was informed via chat with the error message text. After correction request, the agent regenerated the same broken pattern. The fix was applied manually.

**Correct EA JavaScript syntax:**
```javascript
for (var i = 0; i < thePackage.Elements.Count; i++) {
    var el = thePackage.Elements.GetAt(i); // ✅
}

for (var j = 0; j < thePackage.Packages.Count; j++) {
    CollectEmptyNotes(thePackage.Packages.GetAt(j), results); // ✅
}
```

**Finding D3-1:** Kernaro repeatedly regenerates `new Enumerator()` even after explicit correction. This is a training data issue – EA JavaScript uses COM collections with `.Count` / `.GetAt()`, not WSH Enumerator objects.

---

## D4 · Debugging with Kernaro assistance

Although Kernaro could not automatically execute the script or directly fix the error after seeing a screenshot (clipboard image was rejected – see [E – Findings](../07-KERNARO-Test-Findings/kernaro-test-findings.md), the workflow was:

1. Run script in EA → error appears in Debug output
2. Copy error text to Kernaro Chat
3. Kernaro provides corrected code
4. Manually replace in Script Manager and re-run

This iterative approach **worked** and is a valid workflow for script development.

---

## D5 · Successful output

After applying the correct EA JavaScript syntax, the script produced the expected result:

```
Elements With Empty Notes
Root Package: Starter Use Case Model
=====================================================
Element Name                                  | Element Type
----------------------------------------------|--------------
Customer                                      | Actor
Customer1                                     | Actor
Customer2                                     | Actor
-----------------------------------------------------
Total elements with empty Notes: 3
```
<!-- 
<figure><img src="/knifes/kernaro-beta/img/D5-script-output.png" width="700" alt="EA Script Manager – correct output" /></figure>

![EA Script Manager – correct output](./img/D5-script-output.png)
 -->
---

## D6 · Script Manager vs Kernaro Agent – clarification

| | EA Script Manager | Kernaro Agent |
|---|---|---|
| Execution | Manual (user clicks Run) | Automatic (event trigger) |
| Storage | Script Library in model | Kernaro internal |
| Language | JavaScript / VBScript | LLM-generated, runs via Kernaro |
| Write to model | Via EA API directly | Via approved Kernaro tools |
| Use case | Batch, on-demand | Governance, quality gates |

Scripts saved to Script Library are **independent** from Kernaro Agents. They serve different purposes.

---

← [Back to index](../index.md) | → [E – Findings](../07-KERNARO-Test-Findings/kernaro-test-findings.md)



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
  <img src={require('./img/01-javascripts.png').default} alt="img/01-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-02"></a>
[IMG-02]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/02-javascripts.png').default} alt="img/02-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-03"></a>
[IMG-03]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/03-javascripts.png').default} alt="img/03-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-04"></a>
[IMG-04]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/04-javascripts.png').default} alt="img/04-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-05"></a>
[IMG-05]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/05-javascripts.png').default} alt="img/05-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-06"></a>
[IMG-06]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/06-javascripts.png').default} alt="img/06-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-07"></a>
[IMG-07]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/07-javascripts.png').default} alt="img/07-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-08"></a>
[IMG-08]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/08-javascripts.png').default} alt="img/08-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-09"></a>
[IMG-09]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/09-javascripts.png').default} alt="img/09-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-10"></a>
[IMG-10]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/10-javascripts.png').default} alt="img/10-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-11"></a>
[IMG-11]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/11-javascripts.png').default} alt="img/11-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-12"></a>
[IMG-12]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/12-CLAUDE-Dashboard.png').default} alt="img/12-CLAUDE-Dashboard.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-13"></a>
[IMG-13]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/13-CLAUDE-Dashboard.png').default} alt="img/13-CLAUDE-Dashboard.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-14"></a>
[IMG-14]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/14-javascripts.png').default} alt="img/14-javascripts.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<!-- IMAGES:END -->
