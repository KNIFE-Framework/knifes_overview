---
title: AI trh 2026 — porovnanie Client vs Enterprise segmentov (podklady pre Lenovo BA & AI Orchestrator)
type: KNIFE-podklad
status: draft
owner: Roman
context: príprava na výberové konanie — Business Analyst & AI Orchestrator, Lenovo
last_updated: 2026-09-07
---

# AI trh 2026: Client vs Enterprise segmenty — podklady pre Lenovo (BA & AI Orchestrator)

> Formálne spracované ako [K000114 – AI trh 2026 — Client vs Enterprise segmenty (Lenovo)](../K000114-AI-Trh-2026-Client-vs-Enterprise/index.md). Tento súbor zostáva ako pôvodný research podklad (raw zdroje, Preconditions, overovacia poznámka).

## Preconditions

- Segmenty chápem ako: **Client** = spotrebiteľská/on-device AI (AI PC, telefóny, osobní asistenti) a **Enterprise** = firemné AI platformy a agent orchestration (cloud, on-prem, edge).
- Predpoklad, že Lenovo bude preferovať čínske technológie, som overil — **potvrdzuje sa čiastočne**: Lenovo má duálnu stratégiu (pozri kap. 1), nie čisto čínsku.
- Všetky trhové podiely nižšie sú z rôznych trackerov (Similarweb/Sensor Tower/Omdia/Menlo Ventures/OpenRouter) s odlišnou metodikou — beriem ich ako rádové orientácie, nie presné čísla. Kde som si neistý presnosťou, píšem „približne".
- Dátum referencie: september 2026.

---

## 1. Kontext: Ako Lenovo skutočne pristupuje k „čínskym technológiám"

Tvoj predpoklad sa potvrdzuje **len na strane spotrebiteľského/personálneho AI**, nie na strane enterprise infraštruktúry:

- Lenovo verejne pozicuje stratégiu ako **„Hybrid AI"** — kombináciu personálnych, firemných a verejných modelov, ktoré majú fungovať ako „digitálne dvojčatá" orchestrujúce akcie naprieč ekosystémami [1].
- Na strane **enterprise hardvéru/infraštruktúry** Lenovo sadí prevažne na **západných partnerov**: Intel (Aura Edition AI PC, Core Ultra Series 3), NVIDIA (AI Cloud Gigafactory, Grace Blackwell/Vera Rubin), AMD (EPYC pre ThinkSystem servery) [1][2].
- Na strane **personálneho/spotrebiteľského AI (Lenovo Qira globálne, Xiaotian v Číne)** Lenovo naopak **plne integrovalo DeepSeek-R1** (plnú „online" verziu modelu) do notebookov aj Motorola smartfónov — ide o jednu z najhlbších spoluprác čínskeho LLM lídra s hardvérovým výrobcom [3][4].
- Interpretácia (moje zhrnutie, nie citovaný fakt): Lenovo beží **duálnu/hybridnú stratégiu podľa trhu** — čínske modely pre personálny AI a čínsky trh, západný stack (Intel/NVIDIA/AMD/pravdepodobne aj OpenAI/Microsoft pre Copilot+ PC) pre globálny enterprise biznis. To je presne priestor, kde by mal fungovať **AI Orchestrator** — rozhodovanie, ktorý model/stack nasadiť podľa regiónu, compliance a nákladov.
- Governance gap ako rámec pre celú rolu: 96 % firiem zvyšuje investície do AI, no len 27 % má komplexný governance rámec [2] — presne priestor, kde by mala fungovať pozícia BA & AI Orchestrator.
- **[KNIFE kandidat rozpracovaný → [K000115 – Hybrid AI ako architektonický vzor](../K000115-Hybrid-AI-Architektonicky-Vzor/index.md)]**

---

## 2. Client segment (spotrebiteľský / on-device AI)

| Hráč | Ekosystém | Poznámka |
|---|---|---|
| Microsoft | Copilot+ PC, Windows Copilot | Dominantný štandard pre AI PC na Windows platforme |
| Apple | Apple Intelligence | Silný rast podielu na PC trhu (pozri nižšie) |
| Google | Gemini Nano (on-device, Android) | Súčasť Android/Chromebook stacku |
| Qualcomm/Intel/AMD | NPU platformy (Snapdragon X, Core Ultra, Ryzen AI) | Silikónová vrstva pod AI PC |
| **Lenovo (Motorola)** | **Qira** (globálne) / **Xiaotian** (Čína) | Xiaotian plne integrovaný s DeepSeek-R1 [3][4] |
| ByteDance | Doubao | 382 mil. MAU (najväčšia čínska AI appka) [5] |
| Alibaba | Qwen app | 167 mil. MAU [5] |
| DeepSeek | DeepSeek app | 130 mil. MAU [5] |

**Čínsky spotrebiteľský AI trh (aplikácie):** dosiahol ~499 mil. mesačných aktívnych používateľov (máj 2026), medziročný rast +85 % [5]. Priemerný používateľ otvorí AI appku ~93×/mesiac, cca 183 minút mesačne [5].

**Globálny podiel na „chatbot/AI asistent" trhu** (líši sa podľa metodiky trackera — Similarweb vs Sensor Tower):

| Zdroj / metodika | ChatGPT | Gemini | Claude | Ostatní |
|---|---|---|---|---|
| Sensor Tower, máj 2026 (mobilné appky) [8] | 46,4 % | 27,7 % | 10,3 % | Grok/Perplexity/DeepSeek/Meta AI < 5 % každý |
| First Page Sage, sept. 2026 (web traffic) [7] | 51,5 % | 27,6 % | 10,2 % | Grok 2,8 %, Perplexity 2,0 %, Copilot 1,3 %, DeepSeek 0,4 % |

Záver: v oboch metodikách drží **ChatGPT + Gemini + Claude spolu ~89 %** trhu — Copilot aj čínske appky sú na globálnej (mimo-čínskej) úrovni marginálne, hoci v Číne samotnej sú DeepSeek/Doubao/Qwen dominantné.

**PC trh (hardvér, Q2 2026, Omdia) [12]:**

| Výrobca | Podiel | Medziročne |
|---|---|---|
| Lenovo | 25,3 % (16,62 mil. ks) | −2,1 % |
| HP | 19,8 % | −9,0 % |
| Dell | 14,1 % | −4,9 % |
| Apple | 11,1 % | +15,9 % (najsilnejší rast) |
| Asus | 7,6 % | +0,9 % |

Lenovo drží **#1 pozíciu na globálnom PC trhu**, čo je dôležitý kontext pre rolu — AI PC stratégia (Aura Edition, Hybrid AI) sa opiera o už existujúcu distribučnú silu.

---

## 3. Enterprise segment (platformy, agent orchestration)

### 3.1 Enterprise LLM API trh — kto vyhráva firemné výdavky

Podľa Menlo Ventures, „State of Generative AI in the Enterprise" (prieskum ~500 amer. enterprise rozhodovateľov, nov. 2025, publikované dec. 2025) [9]:

| Poskytovateľ | Podiel enterprise LLM výdavkov | Zmena oproti 2023/2024 |
|---|---|---|
| Anthropic | 40 % | ↑ z 24 % (2024) / 12 % (2023) |
| OpenAI | 27 % | ↓ z 50 % (2023) |
| Google (Gemini) | 21 % | ↑ z 7 % |
| Meta/Llama + ostatní (Cohere, Mistral...) | ~12 % | — |

V segmente **coding**: Anthropic 54 % vs. OpenAI 21 % [9]. Zaujímavé zistenie z rovnakého prieskumu: **iba 16 % enterprise nasadení** (a 27 % startupov) je „skutočný agent" (plánuje, vykonáva, pozoruje spätnú väzbu, adaptuje sa) — väčšina produkčných systémov sú fixed-sequence/routing workflow okolo jedného LLM volania [9]. Toto je dôležitý argument proti agent-hype v pohovore — realita nasadení je skromnejšia než marketing.

### 3.2 Platformy pre agent orchestration (US-centrické, ale globálne dostupné)

| Platforma | Pozicovanie | Silné stránky | Cena (orientačne) | Najlepšie pre |
|---|---|---|---|---|
| Google Gemini Enterprise / Agentspace | Jednotná spravovaná platforma | Memory Bank (rieši „amnéziu" agentov), sub-sekundové cold starty | task-completion model | Firmy s BigQuery/Workspace |
| Salesforce Agentforce + Agent Fabric | CRM-natívna agentická platforma | natívna podpora MCP, cross-vendor kontrola agentov | agent + usage credits | Revenue ops, CRM-centrické firmy |
| AWS Bedrock AgentCore | „Bring-your-own-framework" runtime | podpora LangGraph/CrewAI/vlastný kód, VPC/PrivateLink | ~0,0007 USD/session | AWS-natívne tímy |
| Microsoft Azure AI Foundry + Agent365 | Dvojvrstvový model (build-run + cross-platform governance) | SharePoint ACL sync, Entra ID, riadi aj agentov iných dodávateľov | ~30 USD/user/mesiac alebo 200 USD/25k credits | Microsoft-štandardizované enterprise |

[11]

Salesforce Agentforce reportoval **540 mil. USD ARR a 18 500 enterprise zákazníkov** — konkrétny dôkaz, že enterprise agentic AI už generuje reálne tržby, nielen POC [10].

### 3.3 Čínsky enterprise/cloud AI stack

| Poskytovateľ | Platforma | Poznámka |
|---|---|---|
| Alibaba Cloud | Bailian (Qwen enterprise) | Najširší medzinárodný dosah spomedzi čínskych hráčov — dostupné aj v EÚ regióne a priamo cez US API [6] |
| Baidu | Qianfan | Enterprise LLM platforma |
| Huawei | Pangu + Ascend čipy | Kľúčové pre čínskych štátnych/regulovaných odberateľov pod exportnými obmedzeniami USA [6] |
| Zhipu/Z.ai | GLM-5 (MIT licencia) | Optimalizované pre čínsky enterprise, najmä štátom vlastnené firmy, trénované na Huawei Ascend [6] |
| Tencent, ByteDance | Hunyuan, Doubao enterprise | Prevažne domáci ekosystém, menej medzinárodnej expanzie [6] |

Zaujímavé číslo: podiel čínskych poskytovateľov na tokenoch cez OpenRouter (nezávislý model-routing marketplace) vzrástol **z <2 % na >45 % za rok** (do Q2 2026) [6] — hoci treba brať do úvahy, že OpenRouter je len jeden (developer-facing) kanál, nie celý trh. Vedie **Xiaomi** (model MiMo-V2-Pro, 21,1 % týždenných tokenov, viac než OpenAI so 7,5 %), nasleduje Alibaba/Qwen (13,9 %), MiniMax (8,1 %), Zhipu/GLM-5 a DeepSeek (po 5,6 %) [6]. Toto je prekvapivé zistenie oproti bežnej predstave „DeepSeek = líder" — over si ho pred prezentáciou, keďže ide o jeden konkrétny report.

Čínske modely podľa tohto reportu **konkurujú cenou a výkonom v coding/long-context úlohách, ale zaostávajú v compliance postoji, anglickom jazykovom tóne a enterprise tooling integráciách** [6] — to je presne typ rizika, ktoré by mal AI Orchestrator vedieť posúdiť pri výbere modelu pre globálny enterprise nasadenie.

### 3.4 USA vs Čína — odlišné stratégie pre enterprise agentov

| | Čína | USA |
|---|---|---|
| Business model | rýchla spotrebiteľská adopcia cez platformy (napr. Tencent/WeChat), mestské dotácie | enterprise monetizácia, prémiové ceny za governance |
| Nasadenie | edge + konzumné platformy, rýchlosť a škála | cloud enterprise infraštruktúra, compliance „baked-in" |
| Governance | ľahšie compliance rámce, rýchlejšia inovácia | SOC 2, RBAC, audit trails — nutnosť pre regulované odvetvia |
| Cieľové odvetvia | spotrebiteľské služby, malé podniky, priemysel | finančné služby, zdravotníctvo, Fortune 500 |

[10]

---

## 4. Geopolitický kontext (relevantný pre výber technológie)

- Nvidia podiel na čínskom AI čipovom trhu sa má podľa prognóz prepadnúť **zo 40 % na približne 8 %**, keďže Huawei (Ascend čipy) rýchlo naberá podiel pod tlakom amerických exportných obmedzení [13]. Toto je priamy dôvod, prečo čínske enterprise nasadenia (najmä štátom vlastnené firmy) čoraz viac bežia na Huawei/domácom stacku namiesto Nvidia/západných GPU [6][13].
- Pre Lenovo (globálna firma s čínskymi koreňmi) to znamená nutnosť **dvoch paralelných hardvérovo-softvérových stackov** — jeden pre čínsky trh (Ascend/domáce modely), jeden pre zvyšok sveta (Nvidia/Intel/AMD + OpenAI/Microsoft/Anthropic podľa zákazníka).
- **[KNIFE kandidat rozpracovaný → [K000116 – Dual-stack AI compliance ako enterprise architektonická požiadavka](../K000116-Dual-Stack-AI-Compliance/index.md)]**

---

## 5. Zhrnutie — čo si z toho odniesť na pohovor

1. **Tvoj predpoklad o čínskych technológiách je čiastočne správny, ale nie úplný** — Lenovo ich reálne nasadzuje na strane personálneho/spotrebiteľského AI (DeepSeek v Qira/Xiaotian), no enterprise infraštruktúra stojí na NVIDIA/Intel/AMD. Vedieť toto rozlíšenie ťa odlíši od povrchnej prípravy.
2. Rola „AI Orchestrator" pravdepodobne znamená rozhodovanie **který model/platformu nasadiť kde** — podľa regiónu (Čína vs. zvyšok sveta), compliance, nákladov a use-case (coding → Anthropic dominuje; spotrebiteľský asistent → OpenAI/Google; čínsky trh → DeepSeek/Qwen/Zhipu).
3. Realita enterprise agentov je skromnejšia než marketing (len 16 % nasadení sú „skutoční" agenti) — dobrý business analyst argument je fokus na merateľné ROI a governance, nie hype.
4. Governance gap je odporúčaný „vstupný bod" pre rolu: 96 % firiem zvyšuje investície do AI, len 27 % má komplexný governance rámec [2] — presne priestor pre BA & AI Orchestrator pozíciu.

---

## Sources

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
