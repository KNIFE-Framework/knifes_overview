---
fm_version: "1.0.1"
fm_build: "2026-04-29T06:56:28.587132+00:00"
fm_version_comment: ""

id: "K000104-02-claude-prep"
guid: "f3c725e0-b2ae-444f-b224-f07cf1abde9c"

dao: "knife"
title: "CLAUDE Platform Preparation"
description: "Step-by-step screenshots of Claude platform configuration required before starting the Kernaro Beta test."

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

:::caution In Progress
This article is being actively worked on. Content may be incomplete or subject to change.
:::





<!-- IMAGES:BEGIN -->

---

## Images

[IMG-01]
<img src={require('./CLAUDE-Preparation/01-Config/01-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/01-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-02]
<img src={require('./CLAUDE-Preparation/01-Config/02-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/02-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-03]
<img src={require('./CLAUDE-Preparation/01-Config/03-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/03-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-04]
<img src={require('./CLAUDE-Preparation/01-Config/04-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/04-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-05]
<img src={require('./CLAUDE-Preparation/01-Config/05-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/05-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-06]
<img src={require('./CLAUDE-Preparation/01-Config/06-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/06-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-07]
<img src={require('./CLAUDE-Preparation/01-Config/07-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/07-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-08]
<img src={require('./CLAUDE-Preparation/01-Config/08-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/08-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-09]
<img src={require('./CLAUDE-Preparation/01-Config/09-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/09-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-10]
<img src={require('./CLAUDE-Preparation/01-Config/1-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/1-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-11]
<img src={require('./CLAUDE-Preparation/01-Config/10-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/10-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-12]
<img src={require('./CLAUDE-Preparation/01-Config/11-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/11-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-13]
<img src={require('./CLAUDE-Preparation/01-Config/12-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/12-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-14]
<img src={require('./CLAUDE-Preparation/01-Config/13-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/13-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-15]
<img src={require('./CLAUDE-Preparation/01-Config/14-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/14-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-16]
<img src={require('./CLAUDE-Preparation/01-Config/15-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/15-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-17]
<img src={require('./CLAUDE-Preparation/01-Config/16-Claude-paltform-config.png').default} alt="CLAUDE-Preparation/01-Config/16-Claude-paltform-config.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-18]
<img src={require('./KERNARO-AGENTS/01CFG_KERNARO_AGENT.png').default} alt="KERNARO-AGENTS/01CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-19]
<img src={require('./KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png').default} alt="KERNARO-AGENTS/02-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-20]
<img src={require('./KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png').default} alt="KERNARO-AGENTS/03-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-21]
<img src={require('./KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png').default} alt="KERNARO-AGENTS/04-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-22]
<img src={require('./KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png').default} alt="KERNARO-AGENTS/05-CFG_KERNARO_AGENT.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-23]
<img src={require('./KERNARO-Installation/01-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/01-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-24]
<img src={require('./KERNARO-Installation/02-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/02-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-25]
<img src={require('./KERNARO-Installation/03-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/03-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-26]
<img src={require('./KERNARO-Installation/04-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/04-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-27]
<img src={require('./KERNARO-Installation/05-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/05-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-28]
<img src={require('./KERNARO-Installation/06-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/06-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-29]
<img src={require('./KERNARO-Installation/07-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/07-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-30]
<img src={require('./KERNARO-Installation/08-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/08-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-31]
<img src={require('./KERNARO-Installation/09-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/09-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-32]
<img src={require('./KERNARO-Installation/10-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/10-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-33]
<img src={require('./KERNARO-Installation/11-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/11-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-34]
<img src={require('./KERNARO-Installation/12-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/12-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-35]
<img src={require('./KERNARO-Installation/13-INSTALL_KERNARO.png').default} alt="KERNARO-Installation/13-INSTALL_KERNARO.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-36]
<img src={require('./KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png').default} alt="KERNARO-Settings-Admin-Console/01-KERNARO-Settings-ChatAgent.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-37]
<img src={require('./KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png').default} alt="KERNARO-Settings-Admin-Console/02-KERNARO-Settings-Workspace.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-38]
<img src={require('./KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png').default} alt="KERNARO-Settings-Admin-Console/03-KERNARO-Settings-Python.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-39]
<img src={require('./KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png').default} alt="KERNARO-Settings-Admin-Console/04-KERNARO-Settings-Logging.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-40]
<img src={require('./KERNARO-Settings/01-KERNARO-Settings.png').default} alt="KERNARO-Settings/01-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-41]
<img src={require('./KERNARO-Settings/02-KERNARO-Settings.png').default} alt="KERNARO-Settings/02-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-42]
<img src={require('./KERNARO-Settings/03-KERNARO-Settings.png').default} alt="KERNARO-Settings/03-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-43]
<img src={require('./KERNARO-Settings/04-KERNARO-Settings.png').default} alt="KERNARO-Settings/04-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-44]
<img src={require('./KERNARO-Settings/05-KERNARO-Settings.png').default} alt="KERNARO-Settings/05-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-45]
<img src={require('./KERNARO-Settings/06-KERNARO-Settings.png').default} alt="KERNARO-Settings/06-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-46]
<img src={require('./KERNARO-Settings/07-KERNARO-Settings.png').default} alt="KERNARO-Settings/07-KERNARO-Settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-47]
<img src={require('./Python/A2-python-312-installed.png').default} alt="Python/A2-python-312-installed.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-48]
<img src={require('./Python/A2-python-install-manager.png').default} alt="Python/A2-python-install-manager.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-49]
<img src={require('./Python/A2-python-installing-312.png').default} alt="Python/A2-python-installing-312.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-50]
<img src={require('./Python/A4-chat-agent-settings.png').default} alt="Python/A4-chat-agent-settings.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-51]
<img src={require('./Python/A5-python-execution-empty.png').default} alt="Python/A5-python-execution-empty.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-52]
<img src={require('./Python/A5-python-execution-empty2.png').default} alt="Python/A5-python-execution-empty2.png" style={{maxWidth: '800px', width: '100%'}} />

[IMG-53]
<img src={require('./Python/A5-python-verified.png').default} alt="Python/A5-python-verified.png" style={{maxWidth: '800px', width: '100%'}} />

<!-- IMAGES:END -->