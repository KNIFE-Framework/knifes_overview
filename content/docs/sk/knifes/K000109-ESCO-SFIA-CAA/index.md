---
fm_version: "1.0.1"
fm_build: "2026-06-02T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000109_SK"
guid: "4e8c78c2-27da-4a57-ae5f-49583290e74a"

dao: "knife"
title: "K000109 – ESCO, SFIA a CAA: Tri vrstvy správy zručností v IT organizáciách"
description: "Trojvrstvový model správy zručností v IT: ESCO ako ontologický základ, SFIA ako operačný rámec a CAA ako aplikačná vrstva. Prečo kvalita taxonómie priamo určuje kvalitu výstupov AI."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [ESCO, SFIA, CAA, Taxonomy, Ontology, SkillsGovernance, SDLC, AI]

locale: "sk"

created: "2026-06-02 00:00"
modified: "2026-06-02 00:00"
status: "published"
privacy: "public"

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2026 Roman Kazicka"

origin_system: "CAA"
origin_author: "Roman Kazicka"
---

# ESCO, SFIA a CAA: Tri vrstvy správy zručností v IT organizáciách

---

## 1. Kontext: Prečo pojmová jasnosť nie je len terminologický problém

Každá disciplína, ktorá sa chce nazývať vedou, buduje pojmový aparát. Od Aristotela po Linnéa — takmer 2 000 rokov systematickej práce. Biológia nemohla napredovať bez taxonómie. Chémia nemohla škálovať bez periodickej tabuľky.

IT organizácie čelia rovnakej výzve — a väčšinou ju ignorujú.

To isté slovo nesie päť rôznych významov naprieč piatimi tímami. Päť významov produkuje päť interpretácií. Päť interpretácií produkuje jeden zlyhávajúci projekt. Toto nie je mäkký problém. Je to štrukturálne riziko zabudované do každej fázy SDLC.

Odvetvia ako automotive to riešili systematicky — cez 8D, Lean, Six Sigma a QRM. V IT bola reakcia väčšinou deklaratívna. Rámce existujú. Adopcia je nerovnomerná.

:::caution[AI robí túto medzeru kritickou]
AI nepracuje s intuíciou. Ak dostane pojmový chaos, reprodukuje ho a zosilňuje — rýchlo a sebavedome. Kvalita taxonómie priamo určuje kvalitu výstupov AI.
:::

Tento článok predstavuje trojvrstvový model správy zručností v IT organizáciách, postavený na troch komplementárnych rámcoch: **ESCO**, **SFIA** a **CAA**.

---

## 2. Vrstva 1 – ESCO: Ontologický základ

### Čo je ESCO?

ESCO (European Skills, Competences, Qualifications and Occupations) je európska viacjazyčná klasifikácia zručností, kompetencií, kvalifikácií a povolaní. Vyvinula ho Európska komisia (GR pre zamestnanosť, sociálne záležitosti a začlenenie) od roku 2010 [1]. Prvá plná verzia (ESCO v1) bola zverejnená 28. júla 2017 [1].

Aktuálna verzia, **ESCO v1.2**, bola vydaná v máji 2024 [2]. Bola vybudovaná pomocou dátami riadeného prístupu, ktorý kombinuje ľudskú odbornosť s technikami AI na tvorbu a zlepšovanie obsahu [2].

### Čo ESCO obsahuje

- **3 039 povolaní** — každé namapované na ISCO-08 (Medzinárodná štandardná klasifikácia zamestnaní) [1]
- **13 939 konceptov zručností a znalostí** prepojených s týmito povolaniami [1]
- Dostupné vo **viacerých jazykoch** — všetky úradné jazyky EÚ plus nórčina, islandčina, ukrajinčina, arabčina a ďalšie [1]
- Bezplatné použitie, prístupné cez portál a API [1]

### Prečo je ESCO ontológia, nie len zoznam

ESCO je technicky publikované ako **RDF (Resource Description Framework)** — konkrétne vo formáte Turtle, s podporou SKOS, OWL, JSON-LD, CSV a XML [3][4].

Kompletný dataset ESCO obsahuje approximately **6,5 milióna RDF trojíc** [3]. To znamená, že každý koncept má:

- Unikátny URI identifikátor
- Formálne hierarchické vzťahy (`broader` / `narrower`)
- Asociatívne vzťahy (`related`)
- Viacjazyčné označenia
- Strojovo čitateľné metadáta

Práve to odlišuje ESCO od tabuľky alebo slovníka. Je to **štruktúra prepojených dát** — dotazovateľná cez SPARQL, integrovateľná cez API, spracovateľná sémantickými systémami [3].

### ESCO v praxi

ESCO používajú:
- **EURES** — európsky portál pracovnej mobility
- Národné verejné služby zamestnanosti (PES) naprieč členskými štátmi EÚ
- AI-driven platformy pre nábor a párovanie pracovníkov
- Poskytovatelia vzdelávania a odbornej prípravy na zosúladenie osnov

---

## 3. Vrstva 2 – SFIA: Operačný rámec

### Čo je SFIA?

SFIA (Skills Framework for the Information Age) je globálny rámec zručností a kompetencií pre digitálny svet. Prvýkrát publikovaný v roku 2000 [5], vyvíja sa prostredníctvom postupných verzií formovaných vstupmi od praktikov.

Aktuálna verzia je **SFIA 9**, publikovaná v októbri 2024 [5].

### Čo SFIA obsahuje

- **147 profesionálnych zručností** (oproti 121 v SFIA 8) [5]
- **672 unikátnych popisov zručností na úrovniach** (oproti 495 v SFIA 8) [5]
- **7 úrovní zodpovednosti** — definovaných generickými atribútmi: Autonómia, Vplyv, Komplexita, Znalosti a Spolupráca/Komunikácia [5]
- Technologicky neutrálny a nezávislý od dodávateľov [5]

SFIA 9 pridala nové zručnosti v oblastiach vrátane AI/ML, kybernetickej bezpečnosti, digitálneho zdravotníctva, finančnej analýzy a cloud computingu [5]. Výrazne rozšírila aj pokrytie vstupných úrovní — 99 zo 147 zručností je teraz opísaných na Úrovni 1 alebo Úrovni 2 [5].

### Ako sa SFIA používa

SFIA definuje, aké zručnosti existujú, čo znamenajú a na akej úrovni odbornosti sú vykonávané. Nešpecifikuje pracovné pozície. Namiesto toho poskytuje stabilný slovník pre:

- Definovanie požiadaviek na role
- Hodnotenie individuálnych schopností
- Navrhovanie ciest vzdelávania a rozvoja
- Podporu plánovania pracovnej sily a organizačného dizajnu

SFIA je široko adoptovaná vládami, podnikmi a profesijnými orgánmi po celom svete [5]. Pozri [K000107 – SFIA](../K000107_TaxonomyAndOntology/K000107-SFIA-index) pre praktický návod na používanie SFIA v SDLC tímoch.

---

## 4. ESCO vs. SFIA: Porovnanie

| Dimenzia | ESCO | SFIA |
|---|---|---|
| Rozsah | Všetky profesie + zručnosti (trh práce EÚ) | IT a digitálne profesie |
| Vlastník | Európska komisia (GR EMPL) | SFIA Foundation (UK) |
| Primárne použitie | Trh práce, AI nábor, párovanie pracovných miest | HR, dizajn IT organizácií, definícia rolí |
| Granularita | Široká, plytká pre IT | Hlboká, úrovňová pre IT |
| Strojová čitateľnosť | Natívna — RDF, SKOS, OWL, JSON-LD | Obmedzená — PDF, Excel, RDF (vyžaduje registráciu) |
| Jazyky | Všetky úradné jazyky EÚ + niekoľko ďalších | Primárne angličtina |
| Cena | Bezplatné | Bezplatné použitie; nástroje môžu vyžadovať licenciu |
| Model vzťahov | Sieť (broader/narrower/related) | Lineárny (zručnosť → úroveň) |
| Pokrytie IT zručností | Čiastočné | Komplexné |

:::info[ESCO a SFIA nie sú konkurenti]
Pôsobia na rôznych vrstvách abstrakcie a slúžia rôznym účelom. Použité spolu sú výkonnejšie ako každý z nich zvlášť.
:::

---

## 5. Vrstva 3 – CAA: Aplikačná vrstva

### Čo je CAA?

CAA (Context-Aware Approach) je aplikačná vrstva v tomto trojvrstvovom modeli. Je to myšlienkový a dizajnový prístup, ktorý vedie ku **kontextovo uvedomelým systémom** a v konečnom dôsledku ku **kontextovo uvedomelým riešeniam** — pozri [K000103](../K000103-CAA_IN_SDLC/).

V kontexte správy zručností CAA rieši operačnú otázku: **Ako sa zručnosti aplikujú na konkrétnych ľudí, roly a projektové kontexty — keď kontext mení to, čo je dôležité?**

Tá istá zručnosť na tej istej úrovni SFIA môže mať veľmi odlišnú relevanciu v závislosti od typu projektu, fázy SDLC, organizačného kontextu alebo zloženia tímu. CAA robí tento kontext explicitným namiesto predpokladaného.

CAA pôsobí na úrovni:

- Mapovania profilov individuálnych schopností na požiadavky projektovej roly v danom kontexte
- Riešenia kontextovo špecifických priorít zručností (napr. tá istá zručnosť SFIA na rôznych efektívnych úrovniach pre rôzne typy projektov)
- Podpory rozhodnutí založených na kompetenciách naprieč SDLC
- Preklenutia medzery medzi tým, čo rámce definujú a čo konkrétna situácia vyžaduje

---

## 6. Trojvrstvový model

```
┌─────────────────────────────────────────────────────────┐
│  Vrstva 1: ESCO                                         │
│  Ontologický základ — aké zručnosti existujú, EU-wide   │
│  RDF, prepojené dáta, viacjazyčné, 13 939 konceptov     │
├─────────────────────────────────────────────────────────┤
│  Vrstva 2: SFIA                                         │
│  Operačný rámec — čo IT zručnosti znamenajú a na        │
│  akej úrovni sú vykonávané (147 zručností, 7 úrovní)    │
├─────────────────────────────────────────────────────────┤
│  Vrstva 3: CAA                                          │
│  Aplikačná vrstva — ako sa zručnosti priraďujú          │
│  ľuďom, rolám a projektovým kontextom v praxi           │
└─────────────────────────────────────────────────────────┘
```

Každá vrstva odpovedá na odlišnú otázku:

| Vrstva | Odpovedaná otázka |
|---|---|
| ESCO | Aké zručnosti existujú? (EU-scale, strojovo čitateľné) |
| SFIA | Čo IT zručnosti znamenajú a na akej úrovni? |
| CAA | Ako sa zručnosti aplikujú pri konkrétnom kontexte, role a projekte? |

Tri vrstvy spolu tvoria kompletný stack správy zručností — od ontológie po operáciu.

---

## 7. AI implikácia: Kvalita taxonómie určuje kvalitu výstupov AI

AI systémy neinterpretujú zámer. Spracúvajú štruktúru. Keď AI systém pre nábor, platforma pre párovanie zručností alebo asistent na báze LLM dostane dobre štruktúrovaný, ontologicky správny vstup — ESCO-aligned, SFIA-leveled — výstup je zodpovedajúco presný.

Keď dostane nejednoznačnú, nekonzistentnú alebo nedefinovanú terminológiu — ten istý systém zosilňuje a šíri túto nejednoznačnosť vo veľkom.

Toto nie je hypotetické riziko. ESCO v1.2 bolo samotné vybudované pomocou AI techník aplikovaných na štruktúrované dáta zručností [2]. AI pracovalo s taxonómiou — nie s voľným textom. To je model.

:::tip[Odporúčanie]
Organizácie, ktoré zamýšľajú používať AI pre plánovanie pracovnej sily, párovanie zručností alebo SDLC nástroje, by mali najskôr zaviesť svoju taxonómickú vrstvu. ESCO + SFIA poskytuje overený, štandardmi podložený základ.
:::

---

## 8. Súvisiace KNIFE články

- [K000107 – Taxonómia a ontológia v SDLC](../K000107_TaxonomyAndOntology/) — ako sa taxonómia implementuje v organizáciách: príklady, metodológie, nástroje
- [K000107 – SFIA hlboký ponor](../K000107_TaxonomyAndOntology/K000107-SFIA-index) — praktický návod na SFIA v SDLC tímoch
- [K000103 – CAA v SDLC](../K000103-CAA_IN_SDLC/) — CAA komunikačný reťazec a kontextovo uvedomelý prístup

---

### Zdroje

1. https://esco.ec.europa.eu/en/about-esco/what-esco
2. https://esco.ec.europa.eu/en/about-esco/escopedia/escopedia/esco-v12
3. https://esco.ec.europa.eu/en/about-esco/escopedia/escopedia/rdf
4. https://esco.ec.europa.eu/en/use-esco/download
5. https://sfia-online.org/en/sfia-9/sfia-9

---

<!-- body:start -->
<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
