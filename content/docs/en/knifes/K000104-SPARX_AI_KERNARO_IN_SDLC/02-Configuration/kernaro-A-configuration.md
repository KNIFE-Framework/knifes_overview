# A – Configuration

← [Back to index](../index.md)

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

<figure><img src="/knifes/kernaro-beta/img/A3-model-configured.png" width="600" alt="Kernaro Models – Claude Sonnet 4.6 active" /></figure>

![Kernaro Models – Claude Sonnet 4.6 active](./img/A3-model-configured.png)

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

> **Important:** External Python scripts calling EA via `win32com.client` will deadlock if Kernaro add-in is active simultaneously. EA is single-threaded COM – Kernaro holds the main thread. Use Kernaro Python Execution (internal) instead. See [D – JavaScript](../06-KERNARO-JavaScripts/kernaro-javascripts.md) for details.

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

← [Back to index](../index.md) | → [B – Chat](../04-KERNARO-Chat/kernaro-chat.md)
