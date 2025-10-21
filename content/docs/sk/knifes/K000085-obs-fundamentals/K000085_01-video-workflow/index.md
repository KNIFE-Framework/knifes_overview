---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000085_01"
guid: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
dao: "knife"
title: "OBS Fundamentals – Video Workflow (SK originál → EN titulky/voice"
description: " Základy práce s OBS v kontexte tvorny multimediálneho obsahu"
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: "howto"
type: "tutorial"
priority: "top"
tags: ["webinars","tutorials"]
locale: "en"
sidebar_label: "HOBS-Fundamentals"
created: "2025-10-19"
modified: "YYYY-MM-DDTHH:MM:SSZ"
status: "inprogress"
privacy: "private"
rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazička / SystemThinking"
origin_repo: "knifes_overview"
origin_repo_url: "https://github.com/KNIFE-Framework/knifes_overview"
origin_commit: ""
origin_system: ""
author_id: "RomanKazicka"
author_did: ""
fm_reserved1: ""
fm_reserved2: ""
---
# 🎬 Video Workflow (SK originál → EN titulky/voice)

<!-- fm-visible: start -->
> **GUID:** `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## 1️⃣ Záznam (OBS)
- PiP scény, marker `Q` (beep.wav), dlhé sekvencie.

## 2️⃣ Strih (Active Presenter)
- import MP4, strih podľa markerov, doplnenie titulkov a kvízov.

## 3️⃣ Titulky
- **Variant A:** YouTube auto-captions (stiahnuť `.srt`)
- **Variant B:** Whisper CLI (`--task transcribe` a `--task translate`)

## 4️⃣ Preklad do EN
- preklad `.srt` (DeepL/ChatGPT), kontrola terminológie.

## 5️⃣ Voice-over EN (voliteľné)
- TTS (ElevenLabs / OpenAI TTS) → import do AP → export `video_en.mp4`

## 6️⃣ Publikovanie a evidencia
- GitHub `index.md` s FM (SSOT), YouTube link, `video_registry.csv`, `markers.csv`

**Šablóna FM pre webinár/video**:
```yaml
id: "K0061-WEB01"
title: "Názov webinára"
language: "sk"
record_date: "2025-10-19"
outputs:
  mp4_sk: "videos/2025/final/K0061_WEB01_sk.mp4"
  srt_sk: "videos/2025/final/K0061_WEB01_sk.srt"
  srt_en: "videos/2025/final/K0061_WEB01_en.srt"
  mp4_en: "videos/2025/final/K0061_WEB01_en.mp4"
```

[Diagram OBS štruktúry](../Multimedia_KXXXXXX-obs-fundamentals/OBS-Structure.drawio)
