---
fm_version: "1.0.1"
fm_build: "2026-05-01T10:00:00Z"
fm_version_comment: "Initial version"

id: "K000105"
guid: "210ad2bd-8fc4-4aac-9338-25d78fe580c3"
dao: "knife"

title: "K000105 – Zlaté zrnko: Ako riešiť 'neriešiteľné' situácie"
description: "Keď logika nestačí, treba zmeniť vrstvu. Príbeh technického debuggingu, ktorý sa stal lekciou z epistemológie — o tom, prečo mapa nie je územie a ako nájsť zlaté zrnko v akejkoľvek zdanlivo neriešiteľnej situácii."

author: "Roman Kazička"
authors: ["Roman Kazička"]
category: "methodology"
type: "reflection"
priority: "high"
tags: [epistemology, problem-solving, methodology, CYNEFIN, KNIFE]

locale: "sk"
created: "2026-05-01"
modified: "2026-05-01"
status: "inprogress"
privacy: "public"

rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2026 Roman Kazička / SystemThinking"

origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_system: "CAA"
origin_author: "Roman Kazička"
origin_imported_from: ""
origin_import_date: ""

fm_reserved1: ""
fm_reserved2: ""

sidebar_position: 105
sidebar_label: "K000105 – Zlaté zrnko"
---

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---

# KNIFE K000105 – Zlaté zrnko: Ako riešiť "neriešiteľné" situácie

<!-- fm-visible: start -->
> **GUID:** `210ad2bd-8fc4-4aac-9338-25d78fe580c3`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

---

## 🎯 Čo rieši (účel, cieľ)

Stávaš sa niekedy v situácii, keď si vyčerpal všetky logické kroky — a problém pretrváva?
Keď každá hypotéza dáva zmysel, ale žiadna nevysvetlí realitu?

Tento KNIFE popisuje **vzorec myslenia**, ktorý pomáha v takýchto momentoch.
Nie metódu krok-za-krokom. Skôr **epistemologický kompas** — nástroj na orientáciu v neistote.

Príbeh začína technickým varovaním v softvéri. Končí obecnou pravdou o tom, ako funguje poznanie.

---

## 🧩 Ako to rieši (princíp)

### Mapa nie je územie

Každý systém má vrstvy. Keď riešime problém, väčšinou čítame **mapy** — dokumentáciu, zdrojový kód, konfiguráciu, pravidlá, procesy. Sú presné. Sú logické. A predsa — niekedy nesedia s realitou.

Zlaté zrnko je vždy v **území** — v skutočných dátach, v živom správaní systému, v tom čo sa naozaj deje, nie čo by sa diať malo.

> *"The map is not the territory."* — Alfred Korzybski

### Vrstvovosť poznania

Každá vrstva abstrakcie ti hovorí niečo iné a má svoju **hranicu výpovednej hodnoty**.

```
Vrstva 4 — Filozofia / princípy   → "prečo to tak je"
Vrstva 3 — Architektúra / design  → "ako by to malo fungovať"
Vrstva 2 — Zdrojový kód / config  → "čo je naprogramované"
Vrstva 1 — Runtime dáta           → "čo sa naozaj deje"
```

Väčšina debuggingu prebieha na vrstvách 2–3. Zlaté zrnko sa skrýva na vrstve 1.

### Popperova falsifikácia v praxi

Nesprávna otázka: *"Ako dokážem, že moja hypotéza je správna?"*
Správna otázka: *"Ako rýchlo dokážem, že je NESPRÁVNA?"*

Každá vyvrátená hypotéza ti dáva dve veci:
- Eliminuje priestor možností
- Núti ťa ísť o vrstvu nižšie

---

## 🧪 Ako to použiť (aplikácia)

### Technický príbeh — Docusaurus Duplicate Route

**Symptóm:** Softvér hlásil pri každom build-e varovanie `Duplicate routes found! /doc-tags`. Len varovanie. Nič nepadlo. Klasická pasca — zdanlivá neriešiteľnosť.

**Probe 1 — logická hypotéza (nesprávna):**
Zdieľajú SK a EN súbory rovnaké `id:` hodnoty? Logicky áno. Opravil som. Varovanie pretrváva.

**Probe 2 — zúženie priestoru:**
Zmenil som konfiguráciu `tagsBasePath: 'doc-tags'` → `x-knife-tags`. Varovanie sa presunulo na `/x-knife-tags`. Teda obidve duplicitné trasy pochádzajú z tej istej funkcie. Vylúčené: externé pluginy, konfiguračné súbory, priečinkové konflikty.

**Probe 3 — čítanie zdrojového kódu (mapa):**
Prečítal som zdrojový kód Docusaurus. Kód vyzeral čisto. Jedna trasa na jedno volanie funkcie. Slepá ulička.

**Probe 4 — webpack chunks ako stopka:**
Interný súbor `routesChunkNames.json` ukázal dve rôzne hash hodnoty pre `/doc-tags`. Rôzne komponenty. Otázka sa zmenila: *prečo sú dva webpack chunks pre jednu stránku?*

**Probe 5 — čítanie runtime props dát (územie):**
Prečítal som skutočné skompilované dáta, nie zdrojový kód. Jeden riadok JSON zmenil všetko:

```json
{"label": "-", "permalink": "/doc-tags"}
```

**Tag s labelom `-` (pomlčka)** mal permalink `/doc-tags` — rovnaký ako systémová stránka zoznamu tagov.

**Príčina:** 6 dokumentov malo v metadátach `tags: ["-"]` — pomlčka ako placeholder pre "zatiaľ bez tagu". Systém slugifikoval `-` na prázdny reťazec → permalink tagu = `/doc-tags` → kolízia so systémovou stranou.

**Fix:** `tags: ["-"]` → `tags: []` v 6 súboroch. Build čistý. Varovanie zmizlo.

---

### Epistemologické zlaté zrnko

Celý čas som čítal **mapy** — zdrojový kód, konfiguráciu, architektúru. Všetky logicky konzistentné. Všetky správne popisujúce *čo by sa malo stať*.

Zlaté zrnko prišlo keď som prvýkrát čítal **územie** — skutočné runtime dáta, nie ich popis.

Nie šírka znalostí rozhodla. Rozhodlo **poznanie kedy prestať čítať mapy a ísť do terénu**.

---

## ⚡ Rýchly návod — Kompas pre neriešiteľné situácie

Keď si zaseknutý, polož si tieto otázky v tomto poradí:

**1. Čo som predpokladal a NEoveril priamo?**
Nie čo si myslíš že je pravda — čo si skutočne videl na vlastné oči (resp. v dátach)?

**2. Na ktorej vrstve riešim?**
Ak čítaš dokumentáciu a zdrojáky, si na mape. Kde je územie v tomto systéme?

**3. Ako rýchlo viem vyvrátiť aktuálnu hypotézu?**
Nehľadaj potvrdenie. Hľadaj vyvrátenie. Je to rýchlejšie a poctivejšie.

**4. O vrstvu nižšie — čo tam je?**
Každá slepá ulička ťa pozýva ísť hlbšie. Nie širšie — hlbšie.

---

## 📜 Detailný článok

### Tri myšlienkové rámce za jedným príbehom

**Cynefin — Complex doména:**
Príčina nie je viditeľná vopred. Objavuje sa až skúmaním. Nie analýza pred akciou — ale konanie → pozorovanie → posun. Probe–Sense–Respond.

**OODA Loop (Boyd):**
Observe → Orient → Decide → Act. Kľúčová fáza je **Orient** — ako nová informácia mení môj model reality? Nie čo robím, ale ako prehodnocujem čo som si myslel.

**Popperova falsifikácia:**
Vedecké tvrdenia nie sú pravdivé pretože ich potvrdíme. Sú dočasne platné pretože ich ešte nevyvrátime. Každý neúspešný probe je pokrok — nie zlyhanie.

### Prečo je to obecná pravda

Tento vzorec sa nevzťahuje len na technické problémy:

- Manažér riešiaci konflikt v tíme číta "mapu" (správy, reporty). Zlaté zrnko je v teréne (priamy rozhovor, konkrétna situácia).
- Lekár diagnostikujúci pacienta číta "mapu" (príznaky, testy). Zlaté zrnko je v anamnéze ktorú ešte nespýtal.
- Podnikateľ riešiaci zákaznícky problém číta "mapu" (analytika, metriky). Zlaté zrnko je v rozhovore so skutočným zákazníkom.

**Vrstva kde sedí pravda je vždy o úroveň bližšie k realite ako tam, kde si teraz.**

---

## 💡 Tipy a poznámky

- Zlaté zrnko nájdeš skôr kladením otázky *"Čo som NEvidel?"* než *"Čo viem?"*
- Varovanie bez padnutia systému je najnebezpečnejší typ problému — ľahko sa ignoruje. Niet trvalejších riešení ako tie dočasné.
- Dobré riešenie je také, ktoré problém **vyriešilo**, nie také, ktoré ho **obišlo**.
- Každý slepý koniec je informácia. Nie zlyhanie — data point.

---

## 📱 LinkedIn Post

---

**Ako som riešil "neriešiteľný" problém — a čo som sa naučil o poznaní**

Týždeň som mal varovanie v softvéri. Nič nepadlo. Všetko fungovalo. Len malý žltý text pri každom build-e.

`Duplicate routes found! /doc-tags`

Ignoroval? Nie. Niet trvalejších riešení ako tie dočasné.

---

**Probe 1:** Logická hypotéza. Opravil som. Varovanie pretrváva.
**Probe 2:** Zúženie priestoru. Vylúčil som pluginy, konfiguráciu, súbory. Stále tam.
**Probe 3:** Prečítal som zdrojový kód systému. Všetko správne. Slepá ulička.
**Probe 4:** Interné systémové súbory ukázali dve rôzne komponenty pre jednu stránku.
**Probe 5:** Prečítal som skutočné runtime dáta, nie ich popis.

Jeden riadok JSON:
```
{"label": "-", "permalink": "/doc-tags"}
```

Pomlčka `-` ako placeholder v metadátach 6 dokumentov. Systém ju slugifikoval na prázdny reťazec. Kolízia.

Fix: 10 sekúnd. Varovanie zmizlo.

---

**Čo som si zobral:**

Celý čas som čítal **mapy** — zdrojový kód, dokumentáciu, konfiguráciu.
Správne mapy. Logické mapy. Mapy ktoré nepopisovali skutočnosť.

Zlaté zrnko prišlo keď som začal čítať **územie** — živé dáta, nie ich popis.

> *Mapa nie je územie.* — Korzybski

Každý systém má vrstvy. Každá vrstva má svoju hranicu výpovednej hodnoty.
Keď si zaseknutý — nejdi širšie. Choď **hlbšie**.

A keď logika nestačí, prestań hľadať potvrdenie. Hľadaj **vyvrátenie**.

Popper to vedel. Cynefin to pomenoval. OODA to operacionalizovalo.

Ale naučiš sa to len tak, že sa raz naozaj zaseknete — a namiesto obídenia problému sa rozhodneš ho **vyriešiť**.

---

*Čo bolo tvoje zlaté zrnko? Situácia kde si sa musel prestať pozerať na mapu a ísť do terénu?*

`#epistemology` `#problemsolving` `#leadership` `#systemsthinking` `#CYNEFIN`

---

## ✅ Hodnota / Zhrnutie

- **Zlaté zrnko** je vždy o vrstvu bližšie k realite ako tam kde hľadáš
- **Mapa ≠ Územie** — dokumentácia, kód, procesy sú mapy; dáta, ľudia, skutočné správanie je územie
- **Falsifikácia > Konfirmácia** — rýchlejšie vyvratiť hypotézu ako ju potvrdiť
- **Hĺbka > Šírka** — pri slepej uličke ísť o vrstvu nižšie, nie horizontálne
- **Varovania ignorovať netreba** — neriešené malé problémy rastú v neviditeľné veľké
