---
fm_version: "1.0.1"
fm_build: "2026-04-29T06:56:28.587132+00:00"
fm_version_comment: ""

id: "K000104-02-kernaro-config"
guid: "fbf94131-51ff-4334-bcac-fcaa4132db7d"

dao: "knife"
title: "A – Configuration"
description: "Enterprise Architect and Kernaro Beta setup: prerequisites, installation steps, and initial configuration checklist."

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
# A – Configuration

← [Back to index](../../index.md) | ← [A – Configuration](../02-configuration.md)

---

## A1 · Prerequisites

| Component | Version / Detail |
|---|---|
| Enterprise Architect | 17.1 Build 1716 (64-bit, ULTIMATE) |
| OS | Windows 11 (VM – VMware Fusion on macOS) |
| Repository | MariaDB (~800 MB) + QEA SQLite (test model) |
| .NET Desktop Runtime | 9.0.5 or newer (required before install) |
| Python | 3.12.10 (for Python Execution feature) |

> **Note on Python version:** Windows Python Install Manager installs 3.14 by default. Install 3.12 explicitly – `pywin32` (EA COM interface) is not yet verified for Python 3.14.

---

## A2 · Installation

Download: `.msi` installer from Kernaro Beta link (email from kernaro@sparxsystems.com, valid 3 days).

Installation path: `C:\Program Files\Sparx Systems\Kernaro AI for EA\`  
Port: `9090` on localhost (configurable during setup).

**Publisher verified in Windows UAC:** Sixth Force Solutions Pty Ltd.
<!-- 
<figure><img src="/knifes/kernaro-beta/img/A2-install-wizard.png" width="600" alt="Kernaro AI for EA Setup Wizard" /></figure>

![Kernaro installation wizard](./img/A2-install-wizard.png)

<figure><img src="/knifes/kernaro-beta/img/A2-install-complete.png" width="600" alt="Kernaro installation completed" /></figure>

![Kernaro installation completed](./img/A2-install-complete.png) 
-->

After installation, EA must be restarted. Kernaro appears in `Add-Ins` ribbon.

---

## A3 · API Key – Claude Sonnet 4.6

1. Create account at `https://console.anthropic.com` [1]
2. Purchase API credits (minimum $5, prepaid model)
3. Generate API key: `Account Settings → API Keys`
4. In EA: `Add-Ins → Kernaro AI (Beta) → Configuration → Models → + Add New`
5. Provider: **Anthropic**, Model: **Claude Sonnet 4.6**
6. Paste API key → Save

The key is stored encrypted locally. No server-side setup required on Kernaro side.




> **Cost model:** Pay-as-you-go, prepaid credits. Real-time usage visible in Anthropic Console dashboard. Set a spend limit to prevent surprises on large repositories.

---

## A4 · Chat Agent Settings

`Settings → Chat Agent Settings`

| Toggle | Function | Recommended |
|---|---|---|
| Enable Script Agent | Delegates EA scripting tasks to Script Agent | ✅ ON |
| Enable Document Agent | File and document operations | ✅ ON |
| Enable Layout Agent | Diagram layout tasks | ON for layout tests |
| Enable Visual Verification | Analyses diagram screenshots – **consumes additional tokens** | ⚠️ OFF by default |
<!-- 
<figure><img src="/knifes/kernaro-beta/img/A4-chat-agent-settings.png" width="600" alt="Kernaro Chat Agent Settings" /></figure>

![Kernaro Chat Agent Settings](./img/A4-chat-agent-settings.png)
 -->
---

## A5 · Python Execution

`Settings → Python Execution`

1. Enable toggle: `Enable Python Execution`
2. Enter interpreter path:
```
C:\Users\Roman\AppData\Local\Python\pythoncore-3.12-64\python.exe
```
3. Click `Validate` → confirm `Verified successfully – Python 3.12.10`
4. `Save Changes`
<!-- 
<figure><img src="/knifes/kernaro-beta/img/A5-python-verified.png" width="600" alt="Python Execution – verified successfully" /></figure>

![Python Execution – Python 3.12.10 verified](./img/A5-python-verified.png)

 -->
 **Required Python packages** (if using external scripts alongside Kernaro):
```cmd
py -3.12 -m pip install pywin32 python-docx
py -3.12 C:\...\Scripts\pywin32_postinstall.py -install
```

> **Important:** External Python scripts calling EA via `win32com.client` will deadlock if Kernaro add-in is active simultaneously. EA is single-threaded COM – Kernaro holds the main thread. Use Kernaro Python Execution (internal) instead. See [D – JavaScript](../../06-KERNARO-JavaScripts/kernaro-javascripts.md) for details.

---

## A6 · First run – /instructions

After configuration, run `/instructions` in Kernaro Chat. Kernaro will:

1. Scan the full repository (element types, naming patterns, package structure, stereotypes, tags)
2. Generate a rulebook as persistent system context
3. Load it automatically at the start of every future chat session

This is a one-time setup. Re-run if modelling standards change significantly.

> **Token cost:** `/instructions` on a large repository (~800 MB) can consume several thousand tokens. Run it once on the production model, then work primarily on scoped packages.

---

## Product links

[1] Anthropic Console – https://console.anthropic.com  
[2] Kernaro AI for EA – https://kernaro.sparxsystems.com  

---

← [Back to index](../../index.md) | ← [A – Configuration](../02-configuration.md) | → [B – Chat](../../04-KERNARO-Chat/kernaro-chat.md)



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
  <img src={require('./img/KERNARO-AGENTS/01CFG_KERNARO_AGENT.png').default} alt="img/KERNARO-AGENTS/01CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-02"></a>
[IMG-02]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png').default} alt="img/KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-03"></a>
[IMG-03]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png').default} alt="img/KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-04"></a>
[IMG-04]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png').default} alt="img/KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-05"></a>
[IMG-05]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png').default} alt="img/KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-06"></a>
[IMG-06]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/01-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/01-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-07"></a>
[IMG-07]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/02-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/02-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-08"></a>
[IMG-08]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/03-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/03-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-09"></a>
[IMG-09]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/04-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/04-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-10"></a>
[IMG-10]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/05-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/05-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-11"></a>
[IMG-11]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/06-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/06-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-12"></a>
[IMG-12]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/07-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/07-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-13"></a>
[IMG-13]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/08-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/08-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-14"></a>
[IMG-14]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/09-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/09-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-15"></a>
[IMG-15]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/10-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/10-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-16"></a>
[IMG-16]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/11-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/11-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-17"></a>
[IMG-17]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/12-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/12-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-18"></a>
[IMG-18]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Installation/13-INSTALL_KERNARO.png').default} alt="img/KERNARO-Installation/13-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-19"></a>
[IMG-19]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png').default} alt="img/KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-20"></a>
[IMG-20]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png').default} alt="img/KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-21"></a>
[IMG-21]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png').default} alt="img/KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-22"></a>
[IMG-22]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png').default} alt="img/KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-23"></a>
[IMG-23]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings/01-KERNARO-Settings.png').default} alt="img/KERNARO-Settings/01-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-24"></a>
[IMG-24]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings/02-KERNARO-Settings.png').default} alt="img/KERNARO-Settings/02-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-25"></a>
[IMG-25]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings/03-KERNARO-Settings.png').default} alt="img/KERNARO-Settings/03-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-26"></a>
[IMG-26]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings/04-KERNARO-Settings.png').default} alt="img/KERNARO-Settings/04-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-27"></a>
[IMG-27]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings/05-KERNARO-Settings.png').default} alt="img/KERNARO-Settings/05-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-28"></a>
[IMG-28]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings/06-KERNARO-Settings.png').default} alt="img/KERNARO-Settings/06-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-29"></a>
[IMG-29]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/KERNARO-Settings/07-KERNARO-Settings.png').default} alt="img/KERNARO-Settings/07-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-30"></a>
[IMG-30]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/Python/A2-python-312-installed.png').default} alt="img/Python/A2-python-312-installed.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-31"></a>
[IMG-31]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/Python/A2-python-install-manager.png').default} alt="img/Python/A2-python-install-manager.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-32"></a>
[IMG-32]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/Python/A2-python-installing-312.png').default} alt="img/Python/A2-python-installing-312.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-33"></a>
[IMG-33]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/Python/A4-chat-agent-settings.png').default} alt="img/Python/A4-chat-agent-settings.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-34"></a>
[IMG-34]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/Python/A5-python-execution-empty.png').default} alt="img/Python/A5-python-execution-empty.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-35"></a>
[IMG-35]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/Python/A5-python-execution-empty2.png').default} alt="img/Python/A5-python-execution-empty2.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<a id="img-36"></a>
[IMG-36]
<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/Python/A5-python-verified.png').default} alt="img/Python/A5-python-verified.png" style={{maxWidth: '800px', width: '100%'}} />
</div>

<!-- IMAGES:END -->