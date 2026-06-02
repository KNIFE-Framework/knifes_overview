---
fm_version: "1.0.1"
fm_build: "2026-06-02T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000107-SFIA-index_SK"
guid: "60c2e77d-b34d-42b5-9973-b7a3dbe54fc9"

dao: "knife"
title: "K000107 – SFIA: Skills Framework for the Information Age"
description: "SFIA ešte nie je ISO štandardom — ale je to najbližšie, čo IT priemysel má k spoločnému slovníku pre zručnosti. Praktický návod na používanie SFIA v SDLC tímoch."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [SFIA, Taxonomy, Skills, SDLC, Roles, CAA]

locale: "sk"

created: "2026-06-02 00:00"
modified: "2026-06-02 00:00"
status: "draft"
privacy: "public"

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2026 Roman Kazicka"

origin_system: "CAA"
origin_author: "Roman Kazicka"
---

# SFIA – Skills Framework for the Information Age

> Súčasť [K000107 – Taxonómia a ontológia v SDLC](./)

---

## 🎯 Aký problém SFIA rieši?

V každom SDLC projekte sú definované roly.
Ale spôsob, akým sú definované, sa divoko líši — naprieč organizáciami, dodávateľmi, ba aj tímami v rámci tej istej spoločnosti.

„Business Analyst" v jednej organizácii pokrýva požiadavky, facilitáciu a čiastočne architektúru.
V ďalšej ten istý titul znamená dátové reporty a automatizáciu v Exceli.

Výsledok: projekty podceňujú medzery v schopnostiach, preplatia za nezhodné zručnosti a ticho zlyhávajú na hraniciach rolí.

SFIA je rámec, ktorý to rieši. Poskytuje spoločný slovník pre popis a meranie toho, čo ľudia v IT skutočne robia — a na akej úrovni.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/SFIA-01.png').default} alt="SFIA 9 – prehľad rámca" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

## 📜 Stručná história

SFIA vznikla v roku 1999 ako iniciatíva konzorcia vedená British Computer Society (BCS) spolu s e-skills UK a ďalšími profesijnými organizáciami. Vznikla z praktickej potreby: britský IT priemysel potreboval spoločný jazyk pre zručnosti, ktorý by sa dal používať naprieč zamestnávateľmi, poskytovateľmi školení a vládnymi orgánmi.

Rámec prešiel viacerými verziami:
- SFIA 1 (2000) — prvé vydanie, 55 zručností naprieč 7 úrovňami
- SFIA 6 (2015) — výrazná reštrukturalizácia, širšie pokrytie
- SFIA 8 (2021) — pridané digitálne, dátové a emerging technology zručnosti
- SFIA 9 (2024) — aktuálna verzia, 102 zručností naprieč 7 úrovňami, používaná v ~200 krajinách

SFIA Foundation (založená 2003) spravuje rámec nezávisle od akejkoľvek jednotlivej organizácie. Adopcia je zadarmo pre jednotlivcov a organizácie; komerčné licencovanie sa vzťahuje na nástroje a poskytovateľov školení.

---

## 🏛 Je SFIA štandard?

Formálne nie. SFIA **nie je ISO štandardom**.

Je to de facto priemyselný rámec — široko adoptovaný, medzinárodne uznávaný, ale nie nariadený žiadnym normalizačným orgánom. Mysli na to ako na ITIL zručností: široká adopcia bez formálnej štandardizácie.

:::info[Čo to znamená v praxi]
SFIA môžeš slobodne používať ako referenčný rámec bez certifikačných alebo compliance záväzkov.
Toto je výhoda: môžeš ho adoptovať selektívne, aplikovať ho na časti SDLC, kde slovníkové medzery najviac škodia, a rozšíriť ho tam, kde je to potrebné.
Žiadny audit, žiadny odznak, žiadne povinné zavedenie.
:::

Niektoré národné vlády a veľké podniky nariaďujú SFIA-based definície rolí v kontraktoch a obstarávaní. Ak pracuješ s verejným sektorom v UK, Austrálii alebo Singapure, môže sa od teba očakávať jeho používanie.

---

## 🧩 Štruktúra SFIA

SFIA klasifikuje zručnosti pozdĺž dvoch osí:

**Zručnosti** — 102 profesionálnych zručností, organizovaných do 9 kategórií:

| Kategória | Príklady zručností |
|---|---|
| Stratégia a architektúra | Enterprise a business architektúra, Information security |
| Zmena a transformácia | Project management, Change management |
| Vývoj a implementácia | Software development, Testing, Database administration |
| Dodávka a prevádzka | Service desk, Infrastructure management |
| Ľudia a zručnosti | Learning design, People management |
| Vzťahy a angažovanosť | Stakeholder management, Sales support |
| Dáta a informácie | Data management, Business intelligence |
| Technológia | Emerging technology monitoring, Cloud services |
| Obstarávanie a manažérska podpora | Contract management, Financial management |

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/SFIA-02.png').default} alt="SFIA 9 – všetky zručnosti A-Z s kategóriami" style={{maxWidth: '800px', width: '100%'}} />
</div>

**Úrovne** — 7 úrovní zodpovednosti (nie seniority per se):

| Úroveň | Popis |
|---|---|
| 1 | Sleduj — aplikuje rutinné inštrukcie |
| 2 | Pomáhaj — pracuje pod dohľadom |
| 3 | Aplikuj — pracuje s návod­om, čiastočná autonómia |
| 4 | Umožni — pracuje samostatne, prispieva tímu |
| 5 | Zabezpeč, poraď — ovplyvňuje, riadi ostatných |
| 6 | Iniciuj, ovplyvňuj — riadi stratégiu, vedie zmenu |
| 7 | Nastav stratégiu, inšpiruj — formuje smer na úrovni organizácie |

---

## 🧪 Praktické use cases v SDLC

Na získanie hodnoty z rámca nepotrebuješ plný SFIA program. Tu sú konkrétne vstupné body:

### 1. Kickoff projektu — definuj profily rolí

Pred začatím projektu namapuj požadované roly na SFIA zručnosti a úrovne.

Príklad: pre projekt migrácie dát môžeš potrebovať:
- **Data management** (DATM) na úrovni 4 — samostatné dátové modelovanie
- **Testing** (TEST) na úrovni 3 — aplikuje testovacie rámce s navedením
- **Change management** (CHMG) na úrovni 5 — radí ohľadom adoptívnej stratégie

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/SFIA-03.png').default} alt="SFIA 9 – profily zručností pre rodiny rolí a pracovné pozície" style={{maxWidth: '800px', width: '100%'}} />
</div>

### 2. Analýza medzier v zručnostiach

Porovnaj SFIA profil aktuálneho tímu s profilom projektu.
Medzery sa stanú viditeľnými skôr, než sa stanú rizikami.

### 3. Komunikácia naprieč tímami

Keď referencuješ SFIA v kontraktoch, statement of work alebo odovzdávacích dokumentoch, obe strany hovoria o tom istom.

„Data Engineer na SFIA úrovni 4" znamená to isté pre procurement tím klienta, delivery manažéra dodávateľa aj náborovú agentúru.

### 4. AI-asistované párovanie rolí

Ak tvoje SDLC nástroje alebo HR systémy používajú AI pre párovanie rolí alebo analýzu medzier v zručnostiach, zadávanie SFIA-štruktúrovaných dát výrazne zlepšuje kvalitu výstupov.
AI vie spoľahlivo spracovávať SFIA taxonómiu. Nevie spoľahlivo interpretovať „Senior Developer s 5-ročnou praxou."

---

## ⚡ Rýchly štart

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/SFIA-04.png').default} alt="SFIA 9 – súhrnný chart s rolami naprieč kategóriami zručností a úrovňami" style={{maxWidth: '800px', width: '100%'}} />
</div>

Nepotrebuješ implementovať všetkých 102 zručností. Začni so zručnosťami, ktoré prechádzajú najviac hranicami rolí v tvojom aktuálnom projekte.

Typické začiatočné body:
- **REQM** (Requirements definition and management) — často najväčší zdroj slovníkových medzier
- **ARCH** (Solution architecture) — kde sa zráža IT a business jazyk
- **TEST** (Testing) — kde prebývajú odovzdávacie body zodpovednosti
- **RLMT** (Relationship management) — v IT tímoch často nedefinované

---

:::tip[SFIA ako spoločná referencia, nie compliance cvičenie]
Hodnota SFIA nie je v certifikáte.
Je v tom, mať dokument — profil roly, statement of work, hodnotenie schopností — kde obe strany súhlasia s tým, čo slová znamenajú.
To je rovnaký princíp ako APV, TBM a CAA komunikačný reťazec: spoločný slovník umožňuje komunikáciu, komunikácia umožňuje dôveru.
:::

---

### Zdroje

- [SFIA 9 – Prehľad rámca](https://sfia-online.org/en/sfia-9)
- [SFIA 9 – Všetky zručnosti A-Z](https://sfia-online.org/en/sfia-9/skills/all-skills-a-z)
- [SFIA 9 – Profily zručností pre rodiny rolí a pracovné pozície](https://sfia-online.org/en/tools-and-resources/standard-industry-skills-profiles/sfia-9-skills-for-role-families-job-titles)
- [SFIA 9 – Súhrnný chart s rolami](https://sfia-online.org/en/sfia-9/sfia-views/sfia-9-multi-view/sfia-9-en-summary-chart-with-roles)

---

> ← [Späť na prehľad K000107](./) · [APV – Assets, Perspectives, Views](./K000107-APV-index) · [TBM →](./K000107-TBM-index)

<!-- body:start -->
<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
