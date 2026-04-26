# [KNIFE] Claude ako kolaboračný priestor pre SDLC v bankovom prostredí

**Typ:** Koncept / Architektonická úvaha  
**Status:** Draft  
**Autor:** Roman [EA, 14-Spirit project]  
**Dátum:** 2026-04-26  
**Tags:** `SDLC` `collaboration` `knowledge-sharing` `banking` `AI-adoption` `governance`

---

## 1. Motivácia: Otvorený Mindset ako vstupná podmienka

Akákoľvek kolaboračná platforma zlyháva, ak ľudia nie sú ochotní do nej vkladať znalosti.

Claude nie je len ďalší chatbot. V kontexte SDLC môže fungovať ako **neutrálny, jazykovo bohatý mediátor** medzi fázami a rolami – ale iba ak existuje kultúrna pripravenosť. Prvou podmienkou adopcie je teda **zmena postoja, nie technológia**.

> Otvorený mindset = ochota zdieľať znalosti naprieč fázami SDLC, aj keď to nie je diktované procesom.

---

## 2. Problém: Ostrovy vedomostí v SDLC

### 2.1 Štrukturálne príčiny

Organizačné siloá vo vývoji nie sú náhoda. Vytvárajú ich:

- **Zámerná ochrana pozície:** Špecialista, ktorého znalosti sú jedinečné a netransparentné, je ťažko nahraditeľný. Knowledge hoarding je racionálna kariérna stratégia.
- **Fázová fragmentácia:** Každá fáza SDLC (Requirements → Design → Development → Testing → Operations) používa iné nástroje, iný jazyk, iné artefakty.
- **Nástrojová roztrieštenosť:** JIRA, Confluence, Git, Sparx EA, Word dokumenty, e-mail – každý nástroj je ostrovom. Znalosti sa strácajú v prekladoch.

### 2.2 Dôsledky pre banku

- Onboarding nových členov trvá mesiace, nie týždne.
- Kritické rozhodnutia z dizajnovej fázy nie sú dostupné testerom ani operácii.
- Regulačné audity odhaľujú medzery práve preto, že dokumentácia a realita sa rozišli niekde medzi fázami.
- Znalosti odchádzajú s ľuďmi.

---

## 3. Claude ako kolaboračný priestor: Čo to znamená konkrétne

### 3.1 Nie náhrada nástrojov, ale prekladová vrstva

Claude nenahrádza JIRA, Confluence ani Sparx EA.  
Funguje ako **kontextovo bohatý most**:

```
Požiadavky (Business Analyst)
        ↓
Claude: štruktúrovaný summary + otázky na medzery
        ↓
Dizajn (Architekt / EA)
        ↓
Claude: preklad do technického zadania + diagram draft
        ↓
Development (Developer)
        ↓
Claude: code review komentáre + konzistencia s dizajnom
        ↓
Testing (QA)
        ↓
Claude: test scenáre generované z requirements
        ↓
Operations (Ops / Security)
        ↓
Claude: runbook draft, security checklist
```

### 3.2 Konkrétne use cases naprieč SDLC

| Fáza | UC | Čo Claude robí |
|---|---|---|
| Requirements | Business → technický preklad | Generuje štruktúrovaný user story draft zo surového textu |
| Design | EA → Developer briefing | Transformuje Sparx EA export do zrozumiteľného technického summaru |
| Development | Code review | Kontroluje konzistenciu implementácie s dohodnutými patterns |
| Testing | Test design | Generuje test scenáre z acceptance criteria |
| Operations | Incident handling | Pomáha diagnostikovať logy, navrhuje runbook kroky |
| Cross-fázy | Knowledge capture | Extrahuje rozhodnutia z neštruktúrovaných diskusií (chat, e-mail) |

### 3.3 Projekt ako trvalá pamäť tímu

Claude Project = zdieľaný kontext pre celý tím.  
Nie len individuálny asistent – ale **kolektívna pamäť projektu**, dostupná naprieč rolami.

---

## 4. Zapojenie špecialistov rôznych domén

### 4.1 Problém fragmentovaného jazyka

Architekt hovorí inak ako developer, developer inak ako tester, tester inak ako business owner.  
Claude vie **prekladať medzi doménovými jazykmi** bez straty obsahu.

### 4.2 Framework pre zapojenie

1. **Spoločný kontext projektu** – všetky role majú prístup k zdieľaným artefaktom v Claude Projecte.
2. **Rolovo špecifické queries** – každý sa pýta v svojom jazyku, Claude odpovedá kontextovo.
3. **Rozhodovací log** – kľúčové rozhodnutia sa zapisujú ako strukturované MD záznamy (ADR pattern).
4. **Iteratívne upresňovanie** – nejasnosti sa riešia v Claude, nie e-mailom.

---

## 5. Infraštruktúrne a prevádzkové nároky

### 5.1 SaaS model (claude.ai / API)

| Aspekt | Požiadavka |
|---|---|
| Sieťový prístup | Outbound HTTPS na api.anthropic.com |
| Autentifikácia | API key manažment (rotácia, vault integrácia) |
| Logging | API call logy pre audit trail |
| Dostupnosť | SLA Anthropic: 99.9% (bez garantovaného RTO pre banku) |
| Dátová lokalita | ⚠️ Dáta spracovávané mimo EU – viz bod 8 |

### 5.2 On-Premise model

| Aspekt | Požiadavka |
|---|---|
| Hardware | GPU server (min. A100/H100 pre produkčnú kvalitu) |
| Model | Mistral Large 3, Llama 3.x, IBM Granite 3.3, Aleph Alpha / PhariaAI |
| Integrácia | REST API wrapper, interná PKI, firewall rules |
| Prevádzkové náklady | MLOps tím, monitoring, fine-tuning pipeline |
| Air-gap | Možné pre klasifikované prostredia |

---

## 6. Licenčné a finančné nároky

### 6.1 SaaS (Anthropic API / claude.ai Teams/Enterprise)

- **claude.ai Teams:** fixný mesačný poplatok per seat
- **claude.ai Enterprise:** custom zmluva, SSO, pokročilé administračné funkcie
- **API:** pay-per-token model – vhodný pre piloty, rizikovejší pri scale-up bez cost controls
- **Odporúčanie:** Pre banku Enterprise tier s DPA (Data Processing Agreement)

### 6.2 On-Premise OSS modely

- Mistral, Llama 3.x: open weights, komerčné použitie povolené (licencia špecifická per model)
- IBM Granite 3.3: Apache 2.0, enterprise-friendly
- Aleph Alpha / PhariaAI: komerčná licencia, EU-natívny vendor

### 6.3 Skryté náklady

- Fine-tuning a RAG pipeline development
- GPU infra (CapEx alebo cloud GPU – Azure NDv4/H100)
- MLOps a security review
- Change management a školenia

---

## 7. On-Premise riešenia: Kedy a pre aké use cases

### 7.1 Kedy je On-Premise nutnosťou

| Situácia | Dôvod |
|---|---|
| Klasifikované dáta (interné regulácie) | Žiadny SaaS nesmie spracovávať |
| Air-gap prostredia (napr. core banking systémy) | Fyzická izolácia siete |
| Regulačný requirement na dátovú lokalitu | EU AI Act, NBS, ECB požiadavky |
| Citlivé M&A dokumenty | Obchodné tajomstvo |

### 7.2 Odporúčané modely pre banku

| Model | Silná stránka | Poznámka |
|---|---|---|
| **IBM Granite 3.3** | Enterprise compliance, Apache 2.0 | Priamo zameraný na regulated industries |
| **Mistral Large 3** | Kvalita blízka GPT-4, EU vendor | Komerčná licencia potrebná pri SaaS použití |
| **Llama 3.3 70B** | Najsilnejší OSS model vo svojej triede | Meta licencia, overiť pre banking |
| **Aleph Alpha / PhariaAI** | EU-natívny, nemecký vendor | GDPR natívne, enterprise support |
| **DeepSeek R1** | Silný v reasoning úlohách | ⚠️ Čínsky vendor – regulačne problematický pre banku |

### 7.3 Hybridný model (odporúčaný)

```
Verejné / interné necitilivé use cases → Anthropic API / Azure OpenAI
Citlivé interné use cases              → On-Premise (Granite / Mistral)
Air-gap / klasifikované                → On-Premise, izolovaná sieť
```

---

## 8. Regulačné nároky v bankovom prostredí

### 8.1 Kľúčové regulačné rámce

| Rámec | Dopad na AI v banke |
|---|---|
| **EU AI Act** | Klasifikácia AI systémov, high-risk kategória pre credit/fraud |
| **GDPR / DORA** | Spracovanie osobných údajov, operačná odolnosť |
| **NBS / ECB Guidelines** | Lokálne regulačné požiadavky pre slovenské banky |
| **EBA Guidelines on ICT** | Risk management pre ICT a AI systémy |

### 8.2 Aktuálny stav: Claude a EU dátová lokalita

> ⚠️ **Kritická poznámka (stav k 2026-04):**  
> Anthropic aktuálne **nemá EU dátové centrum**. Dáta odoslané cez API sú spracovávané v USA.  
> Pre banku to znamená: **Claude SaaS nie je vhodný pre osobné údaje a interné citlivé informácie** bez explicitného DPA a posúdenia transferu dát mimo EÚ (SCCs).

### 8.3 Alternatívne cesty pre banku

1. **Azure OpenAI Service** – Microsoft garantuje EU dátovú lokalitu, Private Endpoint / VNet integrácia, compliance certifikáty (ISO 27001, SOC 2, PCI DSS). **Odporúčaná primárna cesta pre banku.**
2. **On-Premise modely** – plná kontrola, bez dátového transferu.
3. **Anthropic Enterprise s DPA** – ak bude EU región dostupný, sledovať roadmapu.

### 8.4 Governance checklist pre AI v SDLC

- [ ] AI systém klasifikovaný podľa EU AI Act (high-risk / limited-risk)
- [ ] DPIA (Data Protection Impact Assessment) dokončený
- [ ] DPA s vendorom podpísaný
- [ ] Dátová lokalita overená a zdokumentovaná
- [ ] Model risk management framework aplikovaný
- [ ] Audit trail pre AI-asistované rozhodnutia zavedený
- [ ] Exit stratégia (vendor lock-in mitigation) definovaná

---

## 9. Záver: Čo to znamená pre banku prakticky

**Krátky horizont (pilot):**
- Azure OpenAI + interné necitilivé use cases (dokumentácia, test scenáre, code review)
- Jasné guardrails: čo môže ísť do AI, čo nesmie
- Meranie hodnoty: čas ušetrený v SDLC fázach

**Stredný horizont (scale-up):**
- On-Premise model pre citlivé use cases
- Integrácia s existujúcimi nástrojmi (JIRA, Confluence, Sparx EA)
- Knowledge base building cez Claude Projects

**Dlhý horizont (transformácia):**
- AI ako štandard SDLC fázy, nie výnimka
- Merateľné zníženie knowledge silos
- Regulačná dokumentácia generovaná ako vedľajší produkt procesu

---

*Tento dokument je KNIFE príspevok – nie finálny návrh riešenia. Slúži na diskusiu a iteráciu.*
