---
id: "K-TASK-UAT-001"
guid: "-"
dao: "knife"
title: "UAT Promotion – postup z FIX do UAT cez Pull Request"
description: "Krok-za-krokom návod, ako bezpečne dostať zmeny z vetvy FIX do UAT cez PR, vrátane kontroly buildov, CSV snapshotu a tagovania RC."
author: "Roman Kazička"
authors: ["Roman Kazička"]
category: "governance"
type: "user-guide"
priority: "top"
tags: ["KNIFE", "UAT", "Git", "Release"]
created: "2025-10-05"
modified: "-"
status: "inprogress"
locale: "sk"
sidebar_label: "UAT Promotion – FIX → UAT (PR)"
rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazička"
author_id: "-"
author_did: "-"
# slug: ""
---

## 🎯 Cieľ
Dostať overené zmeny z **FIX** do **UAT** **cez Pull Request** (PR), so zachovaním čistoty histórie a kontrolovateľným checkpointom (RC tag).

---

## ✅ Predpoklady (sanity check)
Spusť lokálne (nič neprepisuje):
```bash
make knifes-gen-dry
make knifes-overview-dry
npm run build