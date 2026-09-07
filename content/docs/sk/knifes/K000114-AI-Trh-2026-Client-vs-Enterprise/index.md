---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2026-09-07T10:36:05.586139+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript
id: "K000114"

# Unikátne UUID – generuje skript
guid: "2670a9e5-f5d0-4b91-97a2-7cec21f08ae4"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "knife"

# Názov zápisu – dopĺňa používateľ
title: "K000114 – AI trh 2026 — Client vs Enterprise segmenty (Lenovo)"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "Mapa AI trhu 2026 rozdelená na Client (spotrebiteľský/on-device) a Enterprise (firemné platformy, agent orchestration) segment — s takmer disjunktnými rebríčkami hráčov, dynamikou aj metrikami. Ilustrované na Lenovo (duálna stratégia: DeepSeek na strane personálneho AI, NVIDIA/Intel/AMD na strane enterprise infraštruktúry), 13 sourced referencií."


# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Roman Kazicka"

# Zoznam autorov – generuje skript
authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: "KNIFE"

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: "case-study"

# Priorita (low/medium/high) – voliteľné
priority: "medium"

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: [ai, market-analysis, enterprise, lenovo, career-prep]


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2026-09-07 12:36"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2026-09-07 12:36"

# Stav dokumentu – default "backlog"
status: "inProgress"

# Viditeľnosť – default "public"
privacy: "public"


# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

# Držiteľ práv k obsahu – dopĺňa skript
rights_holder_content: "Roman Kazicka"

# Systémový vlastník práv
rights_holder_system: "CAA / KNIFE / LetItGrow"

# Licencia
license: "CC-BY-NC-SA-4.0"

# Disclaimer
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."

# Copyright
copyright: "© 2025 Roman Kazicka"


# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

# Repozitár pôvodu
origin_repo: ""

# URL pôvodného repozitára
origin_repo_url: ""

# Commit pôvodu
origin_commit: ""

# Branch pôvodu
origin_branch: ""

# Systém pôvodu (CAA/KNIFE/STHDF…)
origin_system: "CAA"

# Pôvodný autor
origin_author: "Roman Kazicka"

# Importovaný zdroj
origin_imported_from: ""

# Dátum importu
origin_import_date: ""


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

# K000114 – AI trh 2026 — Client vs Enterprise segmenty (Lenovo)

> **KNIFE** – Knowledge In Friendly Examples
> **Séria:** Systemic Thinking in IT & Digital Fabrication
> **Úroveň:** Stredná
> **Tagy:** `ai` `market-analysis` `enterprise` `lenovo` `career-prep`

:::caution In Progress
Trhové podiely nižšie pochádzajú z rôznych trackerov (Similarweb/Sensor Tower/Omdia/Menlo Ventures/OpenRouter) s odlišnou metodikou — beriem ich ako rádové orientácie, nie presné čísla. Dátum referencie: september 2026.
:::

## 🎯 Čo rieši (účel, cieľ)

Bežná chyba je hovoriť o "AI trhu" ako o jednej veci s jedným rebríčkom víťazov. V praxi existujú minimálne dva takmer disjunktné trhy: **Client** (spotrebiteľská/on-device AI — AI PC, telefóny, osobní asistenti) a **Enterprise** (firemné AI platformy, agent orchestration). Hráč, ktorý vedie v jednom segmente (napr. ChatGPT v spotrebiteľskom chatbot trhu), nemusí vôbec viesť v druhom (v enterprise LLM výdavkoch vedie Anthropic) — a naopak. Kto pripravuje AI stratégiu, obchodný prípad alebo sa pripravuje na rolu naprieč oboma segmentmi (typicky **Business Analyst & AI Orchestrator**), potrebuje obe mapy oddelene, nie jednu spriemerovanú.

Tento KNIFE mapuje oba segmenty na konkrétnom prípade — Lenovo — vrátane overenia bežného predpokladu, že firma s čínskymi koreňmi automaticky sadí na čínske technológie.

## 🧩 Ako to rieši (princíp)

- **Client segment** = spotrebiteľská/on-device AI (AI PC, telefóny, osobní asistenti) — hodnotí sa cez MAU, engagement, podiel na chatbot/asistent trhu, podiel na PC hardvéri.
- **Enterprise segment** = firemné AI platformy a agent orchestration (cloud, on-prem, edge) — hodnotí sa cez podiel na enterprise LLM výdavkoch, ARR platforiem, mieru skutočnej agentic adopcie.
- Naprieč oboma segmentmi beží **tretia os** — geopolitická (export controls, čínsky vs. západný hardvérový stack) — ktorá ovplyvňuje oba segmenty odlišne.

Overenie predpokladu "Lenovo = čínske technológie": potvrdzuje sa **len čiastočne** — Lenovo beží duálnu stratégiu, nie čisto čínsku (pozri nižšie).

## 🧪 Ako to použiť (aplikácia)

### Friendly example — Ako Lenovo skutočne pristupuje k „čínskym technológiám"

- Lenovo verejne pozicuje stratégiu ako **„Hybrid AI"** — kombináciu personálnych, firemných a verejných modelov, ktoré majú fungovať ako „digitálne dvojčatá" orchestrujúce akcie naprieč ekosystémami [1].
- Na strane **enterprise hardvéru/infraštruktúry** Lenovo sadí prevažne na **západných partnerov**: Intel (Aura Edition AI PC, Core Ultra Series 3), NVIDIA (AI Cloud Gigafactory, Grace Blackwell/Vera Rubin), AMD (EPYC pre ThinkSystem servery) [1][2].
- Na strane **personálneho/spotrebiteľského AI** (Lenovo Qira globálne, Xiaotian v Číne) Lenovo naopak **plne integrovalo DeepSeek-R1** (plnú „online" verziu modelu) do notebookov aj Motorola smartfónov — jedna z najhlbších spoluprác čínskeho LLM lídra s hardvérovým výrobcom [3][4].
- Governance gap ako rámec pre celú rolu: 96 % firiem zvyšuje investície do AI, no len 27 % má komplexný governance rámec [2] — presne priestor, kde by mala fungovať pozícia BA & AI Orchestrator.

Zovšeobecnenie tohto pozorovania (kedy a prečo firmy bežia dve paralelné vrstvy AI stacku podľa trhu/regiónu) je rozpracované samostatne v [[K000115-Hybrid-AI-Architektonicky-Vzor|K000115 – Hybrid AI ako architektonický vzor]] a [[K000116-Dual-Stack-AI-Compliance|K000116 – Dual-stack AI compliance ako enterprise architektonická požiadavka]].

## ⚡ Rýchly návod (Top)

Kľúčové čísla na zapamätanie (nie na citovanie naslepo — pozri Tipy nižšie):

1. **Client:** ChatGPT + Gemini + Claude spolu ~89 % globálneho (mimo-čínskeho) chatbot trhu [7][8]; čínsky spotrebiteľský AI trh ~499 mil. MAU, +85 % r/r [5].
2. **Enterprise:** Anthropic vedie enterprise LLM výdavky (40 %, najmä coding 54 %), pred OpenAI (27 %) a Google (21 %) [9]; len 16 % nasadení sú "skutoční" agenti [9].
3. **Hardvér:** Lenovo #1 na globálnom PC trhu (25,3 %) [12]; podiel Nvidia na čínskom AI čipovom trhu má klesnúť zo 40 % na ~8 % [13].
4. **Prekvapenie na overenie:** v OpenRouter tokenoch vedie čínsky Xiaomi (MiMo-V2-Pro), nie DeepSeek [6] — jeden konkrétny report, over pred použitím.

## 📜 Detailný článok

### Client segment (spotrebiteľský / on-device AI)

| Hráč | Ekosystém | Poznámka |
|---|---|---|
| Microsoft | Copilot+ PC, Windows Copilot | Dominantný štandard pre AI PC na Windows platforme |
| Apple | Apple Intelligence | Silný rast podielu na PC trhu |
| Google | Gemini Nano (on-device, Android) | Súčasť Android/Chromebook stacku |
| Qualcomm/Intel/AMD | NPU platformy (Snapdragon X, Core Ultra, Ryzen AI) | Silikónová vrstva pod AI PC |
| **Lenovo (Motorola)** | **Qira** (globálne) / **Xiaotian** (Čína) | Xiaotian plne integrovaný s DeepSeek-R1 [3][4] |
| ByteDance | Doubao | 382 mil. MAU (najväčšia čínska AI appka) [5] |
| Alibaba | Qwen app | 167 mil. MAU [5] |
| DeepSeek | DeepSeek app | 130 mil. MAU [5] |

Čínsky spotrebiteľský AI trh (aplikácie) dosiahol ~499 mil. mesačných aktívnych používateľov (máj 2026), medziročný rast +85 % [5]. Priemerný používateľ otvorí AI appku ~93×/mesiac, cca 183 minút mesačne [5].

**Globálny podiel na „chatbot/AI asistent" trhu** (líši sa podľa metodiky trackera):

| Zdroj / metodika | ChatGPT | Gemini | Claude | Ostatní |
|---|---|---|---|---|
| Sensor Tower, máj 2026 (mobilné appky) [8] | 46,4 % | 27,7 % | 10,3 % | Grok/Perplexity/DeepSeek/Meta AI < 5 % každý |
| First Page Sage, sept. 2026 (web traffic) [7] | 51,5 % | 27,6 % | 10,2 % | Grok 2,8 %, Perplexity 2,0 %, Copilot 1,3 %, DeepSeek 0,4 % |

V oboch metodikách drží **ChatGPT + Gemini + Claude spolu ~89 %** trhu — Copilot aj čínske appky sú na globálnej (mimo-čínskej) úrovni marginálne, hoci v Číne samotnej sú DeepSeek/Doubao/Qwen dominantné.

**PC trh (hardvér, Q2 2026, Omdia) [12]:**

| Výrobca | Podiel | Medziročne |
|---|---|---|
| Lenovo | 25,3 % (16,62 mil. ks) | −2,1 % |
| HP | 19,8 % | −9,0 % |
| Dell | 14,1 % | −4,9 % |
| Apple | 11,1 % | +15,9 % (najsilnejší rast) |
| Asus | 7,6 % | +0,9 % |

Lenovo drží **#1 pozíciu na globálnom PC trhu** — AI PC stratégia (Aura Edition, Hybrid AI) sa opiera o už existujúcu distribučnú silu.

### Enterprise segment (platformy, agent orchestration)

**Enterprise LLM API trh — kto vyhráva firemné výdavky.** Podľa Menlo Ventures, „State of Generative AI in the Enterprise" (prieskum ~500 amer. enterprise rozhodovateľov, nov. 2025, publikované dec. 2025) [9]:

| Poskytovateľ | Podiel enterprise LLM výdavkov | Zmena oproti 2023/2024 |
|---|---|---|
| Anthropic | 40 % | ↑ z 24 % (2024) / 12 % (2023) |
| OpenAI | 27 % | ↓ z 50 % (2023) |
| Google (Gemini) | 21 % | ↑ z 7 % |
| Meta/Llama + ostatní (Cohere, Mistral...) | ~12 % | — |

V segmente **coding**: Anthropic 54 % vs. OpenAI 21 % [9]. Iba **16 % enterprise nasadení** (a 27 % startupov) je „skutočný agent" (plánuje, vykonáva, pozoruje spätnú väzbu, adaptuje sa) — väčšina produkčných systémov sú fixed-sequence/routing workflow okolo jedného LLM volania [9]. Dobrý argument proti agent-hype: realita nasadení je skromnejšia než marketing.

**Platformy pre agent orchestration** (US-centrické, globálne dostupné):

| Platforma | Pozicovanie | Silné stránky | Cena (orientačne) | Najlepšie pre |
|---|---|---|---|---|
| Google Gemini Enterprise / Agentspace | Jednotná spravovaná platforma | Memory Bank, sub-sekundové cold starty | task-completion model | Firmy s BigQuery/Workspace |
| Salesforce Agentforce + Agent Fabric | CRM-natívna agentická platforma | natívna podpora MCP, cross-vendor kontrola agentov | agent + usage credits | Revenue ops, CRM-centrické firmy |
| AWS Bedrock AgentCore | „Bring-your-own-framework" runtime | podpora LangGraph/CrewAI/vlastný kód, VPC/PrivateLink | ~0,0007 USD/session | AWS-natívne tímy |
| Microsoft Azure AI Foundry + Agent365 | Dvojvrstvový model (build-run + cross-platform governance) | SharePoint ACL sync, Entra ID, riadi aj agentov iných dodávateľov | ~30 USD/user/mesiac alebo 200 USD/25k credits | Microsoft-štandardizované enterprise |

[11] Salesforce Agentforce reportoval **540 mil. USD ARR a 18 500 enterprise zákazníkov** — konkrétny dôkaz, že enterprise agentic AI už generuje reálne tržby, nielen POC [10].

**Čínsky enterprise/cloud AI stack:**

| Poskytovateľ | Platforma | Poznámka |
|---|---|---|
| Alibaba Cloud | Bailian (Qwen enterprise) | Najširší medzinárodný dosah spomedzi čínskych hráčov — aj EÚ región, priamo cez US API [6] |
| Baidu | Qianfan | Enterprise LLM platforma |
| Huawei | Pangu + Ascend čipy | Kľúčové pre čínskych štátnych/regulovaných odberateľov pod exportnými obmedzeniami USA [6] |
| Zhipu/Z.ai | GLM-5 (MIT licencia) | Optimalizované pre čínsky enterprise, trénované na Huawei Ascend [6] |
| Tencent, ByteDance | Hunyuan, Doubao enterprise | Prevažne domáci ekosystém, menej medzinárodnej expanzie [6] |

Podiel čínskych poskytovateľov na tokenoch cez OpenRouter vzrástol **z menej ako 2 % na viac ako 45 % za rok** (do Q2 2026) [6] — OpenRouter je len jeden (developer-facing) kanál, nie celý trh. Vedie **Xiaomi** (MiMo-V2-Pro, 21,1 % týždenných tokenov, viac než OpenAI so 7,5 %), nasleduje Alibaba/Qwen (13,9 %), MiniMax (8,1 %), Zhipu/GLM-5 a DeepSeek (po 5,6 %) [6] — prekvapivé oproti bežnej predstave „DeepSeek = líder", over pred prezentáciou.

Čínske modely podľa tohto reportu **konkurujú cenou a výkonom v coding/long-context úlohách, ale zaostávajú v compliance postoji, anglickom jazykovom tóne a enterprise tooling integráciách** [6] — typ rizika, ktoré musí AI Orchestrator vedieť posúdiť pri výbere modelu pre globálny enterprise nasadenie.

**USA vs Čína — odlišné stratégie pre enterprise agentov:**

| | Čína | USA |
|---|---|---|
| Business model | rýchla spotrebiteľská adopcia cez platformy (napr. Tencent/WeChat), mestské dotácie | enterprise monetizácia, prémiové ceny za governance |
| Nasadenie | edge + konzumné platformy, rýchlosť a škála | cloud enterprise infraštruktúra, compliance „baked-in" |
| Governance | ľahšie compliance rámce, rýchlejšia inovácia | SOC 2, RBAC, audit trails — nutnosť pre regulované odvetvia |
| Cieľové odvetvia | spotrebiteľské služby, malé podniky, priemysel | finančné služby, zdravotníctvo, Fortune 500 |

[10]

### Geopolitický kontext (relevantný pre výber technológie)

Nvidia podiel na čínskom AI čipovom trhu sa má podľa prognóz prepadnúť **zo 40 % na približne 8 %**, keďže Huawei (Ascend čipy) rýchlo naberá podiel pod tlakom amerických exportných obmedzení [13]. To je priamy dôvod, prečo čínske enterprise nasadenia (najmä štátom vlastnené firmy) čoraz viac bežia na Huawei/domácom stacku namiesto Nvidia/západných GPU [6][13]. Pre Lenovo (globálna firma s čínskymi koreňmi) to znamená nutnosť **dvoch paralelných hardvérovo-softvérových stackov** — jeden pre čínsky trh, jeden pre zvyšok sveta. Rozpracované ako samostatný architektonický vzor v [[K000116-Dual-Stack-AI-Compliance|K000116]].

## 💡 Tipy a poznámky

- Trhové podiely nižšie sú z rôznych trackerov (Similarweb/Sensor Tower/Omdia/Menlo Ventures/OpenRouter) s odlišnou metodikou — beriem ich ako rádové orientácie, nie presné čísla.
- Xiaomi ako líder čínskych OpenRouter tokenov (namiesto mediálne známejšieho DeepSeeku) je pripomienka, že "kto je najznámejší" a "kto reálne beží najviac inferencie" môžu byť dva rôzne rebríčky — over pred použitím v prezentácii, ide o jeden konkrétny report [6].
- Client a Enterprise segment majú takmer disjunktné rebríčky víťazov (ChatGPT vedie v Client, Anthropic v Enterprise coding) — nekombinuj čísla naprieč segmentmi bez toho, aby si to explicitne označil.
- Governance gap (96 % investuje / 27 % má governance rámec [2]) je dobrý "vstupný bod" pre akúkoľvek rolu naviazanú na AI stratégiu — nielen pre Lenovo.

## ✅ Hodnota / Zhrnutie

1. Predpoklad "firma s čínskymi koreňmi = čínske technológie" je čiastočne správny, ale nie úplný — Lenovo ich reálne nasadzuje na strane personálneho/spotrebiteľského AI, no enterprise infraštruktúra stojí na NVIDIA/Intel/AMD.
2. Rola „AI Orchestrator" znamená rozhodovanie **ktorý model/platformu nasadiť kde** — podľa regiónu, compliance, nákladov a use-case (coding → Anthropic dominuje; spotrebiteľský asistent → OpenAI/Google; čínsky trh → DeepSeek/Qwen/Zhipu).
3. Realita enterprise agentov je skromnejšia než marketing (len 16 % nasadení sú „skutoční" agenti) — dobrý business analyst argument je fokus na merateľné ROI a governance, nie hype.
4. Client a Enterprise segment treba mapovať oddelene — kombinovaním vzniká skreslený obraz o tom, kto na AI trhu skutočne "vedie".

## Zdroje

[1] https://news.lenovo.com/pressroom/press-releases/hybrid-ai-personalized-perceptive-proactive-ai-portfolio-tech-world-ces-2026/

[2] https://futurumgroup.com/insights/lenovos-ai-strategy-drives-enterprise-transformation-in-a-crowded-market/

[3] https://www.channelnews.com.au/lenovo-goes-all-in-with-deepseek-for-notebooks-motorola-smartphones/

[4] https://longbridge.com/en/news/228701820

[5] https://technode.com/2026/07/14/questmobile-chinas-ai-native-apps-reach-499-million-monthly-active-users/

[6] https://www.digitalapplied.com/blog/chinese-ai-models-q2-2026-market-share-report

[7] https://firstpagesage.com/reports/top-generative-ai-chatbots/

[8] https://techcrunch.com/2026/06/16/chatgpts-market-share-slips-below-50-for-first-time/

[9] https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/

[10] https://beam.ai/agentic-insights/ai-agents-in-2026-how-the-us-and-china-are-building-two-very-different-futures

[11] https://linesncircles.com/Blog/Enterprise/Enterprise_Agent_Platforms_2026

[12] https://infotechlead.com/devices/worldwide-pc-shipments-apple-gains-share-as-lenovo-retains-lead-in-q2-2026-96988

[13] https://www.marketscale.com/industries/transportation/nvidias-china-ai-chip-share-is-forecast-to-collapse-from-40-to-8-as-huawei-scales

Pôvodný research podklad (rovnaké zdroje, plné znenie vrátane Preconditions a poznámok k overeniu): interný podklad `content/docs/sk/knifes/_unclasified/AI-trh-2026-client-vs-enterprise-Lenovo.md`.

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
