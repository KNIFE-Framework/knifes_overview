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

<!-- TODO: IMAGES – presunúť na správne miesto -->

![01-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/01-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/01-Claude-paltform-config.png" alt="01-Claude-paltform-config.png" />

![02-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/02-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/02-Claude-paltform-config.png" alt="02-Claude-paltform-config.png" />

![03-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/03-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/03-Claude-paltform-config.png" alt="03-Claude-paltform-config.png" />

![04-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/04-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/04-Claude-paltform-config.png" alt="04-Claude-paltform-config.png" />

![05-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/05-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/05-Claude-paltform-config.png" alt="05-Claude-paltform-config.png" />

![06-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/06-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/06-Claude-paltform-config.png" alt="06-Claude-paltform-config.png" />

![07-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/07-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/07-Claude-paltform-config.png" alt="07-Claude-paltform-config.png" />

![08-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/08-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/08-Claude-paltform-config.png" alt="08-Claude-paltform-config.png" />

![09-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/09-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/09-Claude-paltform-config.png" alt="09-Claude-paltform-config.png" />

![1-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/1-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/1-Claude-paltform-config.png" alt="1-Claude-paltform-config.png" />

![10-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/10-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/10-Claude-paltform-config.png" alt="10-Claude-paltform-config.png" />

![11-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/11-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/11-Claude-paltform-config.png" alt="11-Claude-paltform-config.png" />

![12-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/12-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/12-Claude-paltform-config.png" alt="12-Claude-paltform-config.png" />

![13-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/13-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/13-Claude-paltform-config.png" alt="13-Claude-paltform-config.png" />

![14-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/14-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/14-Claude-paltform-config.png" alt="14-Claude-paltform-config.png" />

![15-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/15-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/15-Claude-paltform-config.png" alt="15-Claude-paltform-config.png" />

![16-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/16-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/16-Claude-paltform-config.png" alt="16-Claude-paltform-config.png" />

![01CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/01CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/01CFG_KERNARO_AGENT.png" alt="01CFG_KERNARO_AGENT.png" />

![02-CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png" alt="02-CFG_KERNARO_AGENT.png" />

![03-CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png" alt="03-CFG_KERNARO_AGENT.png" />

![04-CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png" alt="04-CFG_KERNARO_AGENT.png" />

![05-CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png" alt="05-CFG_KERNARO_AGENT.png" />

![01-INSTALL_KERNARO.png](./KERNARO-Installation/01-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/01-INSTALL_KERNARO.png" alt="01-INSTALL_KERNARO.png" />

![02-INSTALL_KERNARO.png](./KERNARO-Installation/02-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/02-INSTALL_KERNARO.png" alt="02-INSTALL_KERNARO.png" />

![03-INSTALL_KERNARO.png](./KERNARO-Installation/03-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/03-INSTALL_KERNARO.png" alt="03-INSTALL_KERNARO.png" />

![04-INSTALL_KERNARO.png](./KERNARO-Installation/04-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/04-INSTALL_KERNARO.png" alt="04-INSTALL_KERNARO.png" />

![05-INSTALL_KERNARO.png](./KERNARO-Installation/05-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/05-INSTALL_KERNARO.png" alt="05-INSTALL_KERNARO.png" />

![06-INSTALL_KERNARO.png](./KERNARO-Installation/06-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/06-INSTALL_KERNARO.png" alt="06-INSTALL_KERNARO.png" />

![07-INSTALL_KERNARO.png](./KERNARO-Installation/07-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/07-INSTALL_KERNARO.png" alt="07-INSTALL_KERNARO.png" />

![08-INSTALL_KERNARO.png](./KERNARO-Installation/08-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/08-INSTALL_KERNARO.png" alt="08-INSTALL_KERNARO.png" />

![09-INSTALL_KERNARO.png](./KERNARO-Installation/09-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/09-INSTALL_KERNARO.png" alt="09-INSTALL_KERNARO.png" />

![10-INSTALL_KERNARO.png](./KERNARO-Installation/10-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/10-INSTALL_KERNARO.png" alt="10-INSTALL_KERNARO.png" />

![11-INSTALL_KERNARO.png](./KERNARO-Installation/11-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/11-INSTALL_KERNARO.png" alt="11-INSTALL_KERNARO.png" />

![12-INSTALL_KERNARO.png](./KERNARO-Installation/12-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/12-INSTALL_KERNARO.png" alt="12-INSTALL_KERNARO.png" />

![13-INSTALL_KERNARO.png](./KERNARO-Installation/13-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/13-INSTALL_KERNARO.png" alt="13-INSTALL_KERNARO.png" />

![01-KERNARO-Settings-ChatAgent.png](./KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png" alt="01-KERNARO-Settings-ChatAgent.png" />

![02-KERNARO-Settings-Workspace.png](./KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png" alt="02-KERNARO-Settings-Workspace.png" />

![03-KERNARO-Settings-Python.png](./KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png" alt="03-KERNARO-Settings-Python.png" />

![04-KERNARO-Settings-Logging.png](./KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png" alt="04-KERNARO-Settings-Logging.png" />

![01-KERNARO-Settings.png](./KERNARO-Settings/01-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/01-KERNARO-Settings.png" alt="01-KERNARO-Settings.png" />

![02-KERNARO-Settings.png](./KERNARO-Settings/02-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/02-KERNARO-Settings.png" alt="02-KERNARO-Settings.png" />

![03-KERNARO-Settings.png](./KERNARO-Settings/03-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/03-KERNARO-Settings.png" alt="03-KERNARO-Settings.png" />

![04-KERNARO-Settings.png](./KERNARO-Settings/04-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/04-KERNARO-Settings.png" alt="04-KERNARO-Settings.png" />

![05-KERNARO-Settings.png](./KERNARO-Settings/05-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/05-KERNARO-Settings.png" alt="05-KERNARO-Settings.png" />

![06-KERNARO-Settings.png](./KERNARO-Settings/06-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/06-KERNARO-Settings.png" alt="06-KERNARO-Settings.png" />

![07-KERNARO-Settings.png](./KERNARO-Settings/07-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/07-KERNARO-Settings.png" alt="07-KERNARO-Settings.png" />

![A2-python-312-installed.png](./Python/A2-python-312-installed.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A2-python-312-installed.png" alt="A2-python-312-installed.png" />

![A2-python-install-manager.png](./Python/A2-python-install-manager.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A2-python-install-manager.png" alt="A2-python-install-manager.png" />

![A2-python-installing-312.png](./Python/A2-python-installing-312.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A2-python-installing-312.png" alt="A2-python-installing-312.png" />

![A4-chat-agent-settings.png](./Python/A4-chat-agent-settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A4-chat-agent-settings.png" alt="A4-chat-agent-settings.png" />

![A5-python-execution-empty.png](./Python/A5-python-execution-empty.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A5-python-execution-empty.png" alt="A5-python-execution-empty.png" />

![A5-python-execution-empty2.png](./Python/A5-python-execution-empty2.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A5-python-execution-empty2.png" alt="A5-python-execution-empty2.png" />

![A5-python-verified.png](./Python/A5-python-verified.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A5-python-verified.png" alt="A5-python-verified.png" />



<!-- IMAGES:BEGIN -->

---

## Images

[IMG-01]
![CLAUDE-Preparation/01-Config/01-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/01-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/01-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/01-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-02]
![CLAUDE-Preparation/01-Config/02-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/02-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/02-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/02-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-03]
![CLAUDE-Preparation/01-Config/03-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/03-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/03-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/03-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-04]
![CLAUDE-Preparation/01-Config/04-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/04-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/04-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/04-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-05]
![CLAUDE-Preparation/01-Config/05-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/05-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/05-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/05-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-06]
![CLAUDE-Preparation/01-Config/06-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/06-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/06-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/06-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-07]
![CLAUDE-Preparation/01-Config/07-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/07-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/07-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/07-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-08]
![CLAUDE-Preparation/01-Config/08-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/08-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/08-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/08-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-09]
![CLAUDE-Preparation/01-Config/09-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/09-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/09-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/09-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-10]
![CLAUDE-Preparation/01-Config/1-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/1-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/1-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/1-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-11]
![CLAUDE-Preparation/01-Config/10-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/10-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/10-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/10-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-12]
![CLAUDE-Preparation/01-Config/11-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/11-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/11-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/11-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-13]
![CLAUDE-Preparation/01-Config/12-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/12-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/12-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/12-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-14]
![CLAUDE-Preparation/01-Config/13-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/13-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/13-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/13-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-15]
![CLAUDE-Preparation/01-Config/14-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/14-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/14-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/14-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-16]
![CLAUDE-Preparation/01-Config/15-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/15-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/15-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/15-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-17]
![CLAUDE-Preparation/01-Config/16-Claude-paltform-config.png](./CLAUDE-Preparation/01-Config/16-Claude-paltform-config.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/CLAUDE-Preparation/01-Config/16-Claude-paltform-config.png" alt="CLAUDE-Preparation/01-Config/16-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-18]
![KERNARO-AGENTS/01CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/01CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/01CFG_KERNARO_AGENT.png" alt="KERNARO-AGENTS/01CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-19]
![KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png" alt="KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-20]
![KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png" alt="KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-21]
![KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png" alt="KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-22]
![KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png](./KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png" alt="KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-23]
![KERNARO-Installation/01-INSTALL_KERNARO.png](./KERNARO-Installation/01-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/01-INSTALL_KERNARO.png" alt="KERNARO-Installation/01-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-24]
![KERNARO-Installation/02-INSTALL_KERNARO.png](./KERNARO-Installation/02-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/02-INSTALL_KERNARO.png" alt="KERNARO-Installation/02-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-25]
![KERNARO-Installation/03-INSTALL_KERNARO.png](./KERNARO-Installation/03-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/03-INSTALL_KERNARO.png" alt="KERNARO-Installation/03-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-26]
![KERNARO-Installation/04-INSTALL_KERNARO.png](./KERNARO-Installation/04-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/04-INSTALL_KERNARO.png" alt="KERNARO-Installation/04-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-27]
![KERNARO-Installation/05-INSTALL_KERNARO.png](./KERNARO-Installation/05-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/05-INSTALL_KERNARO.png" alt="KERNARO-Installation/05-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-28]
![KERNARO-Installation/06-INSTALL_KERNARO.png](./KERNARO-Installation/06-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/06-INSTALL_KERNARO.png" alt="KERNARO-Installation/06-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-29]
![KERNARO-Installation/07-INSTALL_KERNARO.png](./KERNARO-Installation/07-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/07-INSTALL_KERNARO.png" alt="KERNARO-Installation/07-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-30]
![KERNARO-Installation/08-INSTALL_KERNARO.png](./KERNARO-Installation/08-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/08-INSTALL_KERNARO.png" alt="KERNARO-Installation/08-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-31]
![KERNARO-Installation/09-INSTALL_KERNARO.png](./KERNARO-Installation/09-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/09-INSTALL_KERNARO.png" alt="KERNARO-Installation/09-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-32]
![KERNARO-Installation/10-INSTALL_KERNARO.png](./KERNARO-Installation/10-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/10-INSTALL_KERNARO.png" alt="KERNARO-Installation/10-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-33]
![KERNARO-Installation/11-INSTALL_KERNARO.png](./KERNARO-Installation/11-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/11-INSTALL_KERNARO.png" alt="KERNARO-Installation/11-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-34]
![KERNARO-Installation/12-INSTALL_KERNARO.png](./KERNARO-Installation/12-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/12-INSTALL_KERNARO.png" alt="KERNARO-Installation/12-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-35]
![KERNARO-Installation/13-INSTALL_KERNARO.png](./KERNARO-Installation/13-INSTALL_KERNARO.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Installation/13-INSTALL_KERNARO.png" alt="KERNARO-Installation/13-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-36]
![KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png](./KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png" alt="KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-37]
![KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png](./KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png" alt="KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-38]
![KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png](./KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png" alt="KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-39]
![KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png](./KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png" alt="KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-40]
![KERNARO-Settings/01-KERNARO-Settings.png](./KERNARO-Settings/01-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/01-KERNARO-Settings.png" alt="KERNARO-Settings/01-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-41]
![KERNARO-Settings/02-KERNARO-Settings.png](./KERNARO-Settings/02-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/02-KERNARO-Settings.png" alt="KERNARO-Settings/02-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-42]
![KERNARO-Settings/03-KERNARO-Settings.png](./KERNARO-Settings/03-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/03-KERNARO-Settings.png" alt="KERNARO-Settings/03-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-43]
![KERNARO-Settings/04-KERNARO-Settings.png](./KERNARO-Settings/04-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/04-KERNARO-Settings.png" alt="KERNARO-Settings/04-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-44]
![KERNARO-Settings/05-KERNARO-Settings.png](./KERNARO-Settings/05-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/05-KERNARO-Settings.png" alt="KERNARO-Settings/05-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-45]
![KERNARO-Settings/06-KERNARO-Settings.png](./KERNARO-Settings/06-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/06-KERNARO-Settings.png" alt="KERNARO-Settings/06-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-46]
![KERNARO-Settings/07-KERNARO-Settings.png](./KERNARO-Settings/07-KERNARO-Settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/KERNARO-Settings/07-KERNARO-Settings.png" alt="KERNARO-Settings/07-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-47]
![Python/A2-python-312-installed.png](./Python/A2-python-312-installed.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A2-python-312-installed.png" alt="Python/A2-python-312-installed.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-48]
![Python/A2-python-install-manager.png](./Python/A2-python-install-manager.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A2-python-install-manager.png" alt="Python/A2-python-install-manager.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-49]
![Python/A2-python-installing-312.png](./Python/A2-python-installing-312.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A2-python-installing-312.png" alt="Python/A2-python-installing-312.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-50]
![Python/A4-chat-agent-settings.png](./Python/A4-chat-agent-settings.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A4-chat-agent-settings.png" alt="Python/A4-chat-agent-settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-51]
![Python/A5-python-execution-empty.png](./Python/A5-python-execution-empty.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A5-python-execution-empty.png" alt="Python/A5-python-execution-empty.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-52]
![Python/A5-python-execution-empty2.png](./Python/A5-python-execution-empty2.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A5-python-execution-empty2.png" alt="Python/A5-python-execution-empty2.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-53]
![Python/A5-python-verified.png](./Python/A5-python-verified.png)
<img src="/knifes/K000104-SPARX_AI_KERNARO_IN_SDLC/02-Configuration/Python/A5-python-verified.png" alt="Python/A5-python-verified.png" style={{maxWidth: '800px', width: '100%'}} />

<!-- IMAGES:END -->