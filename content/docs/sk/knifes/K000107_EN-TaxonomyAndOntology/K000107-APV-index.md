---
fm_version: "1.0.1"
fm_build: "2026-06-02T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000107-APV-index_SK"
guid: "9a31b47e-a952-49b2-9a6f-858e1db7fb1b"

dao: "knife"
title: "K000107 – APV: Assets, Perspectives, Views"
description: "APV nevznikol z akademického výskumu. Vznikol na výrobných linkách. Ako rámec postavený na Technickej kybernetike, Six Sigma a výrobnej kvalite rieši medzeru v slovníku IT a SDLC."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [APV, SFIA, Taxonomy, SDLC, EnterpriseArchitecture, CAA]

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

# APV – Assets, Perspectives, Views

> Súčasť [K000107 – Taxonómia a ontológia v SDLC](./)

---

## 🧩 Prečo slovník má väčší význam ako technológia

Automotive to vyriešil systematicky — 8D (Ford Motor Company, 80. roky), Lean, Six Sigma, QRM.
Vo výrobných podnikoch je náklad zlej kvality štandardná agenda.
V IT podnikoch som sa väčšinou stretával s deklaráciami, nie s konaním.

:::info[QRM prepojenie]
Quick Response Manufacturing (Rajan Suri, 90. roky) explicitne rozšíril svoje princípy na kancelárske a znalostné pracovné procesy — presne na doménu, kde žije SDLC.
Odkaz je rovnaký: bez spoločného slovníka nemôžeš merať. Bez merania nemôžeš zlepšovať.
:::

---

## Odkiaľ APV pochádza

APV nevznikol z akademického výskumu. Vznikol na výrobných linkách.

Môj titul bol z Technickej kybernetiky — meracej technológie a automatizácie.
Základné princípy: rýchla spätná väzba, detekcia odchýlok, proporcionálna nápravná akcia.
Tieto princípy platia nielen pre priemyselné riadiace systémy. Platia rovnako pre riadenie organizácií.

Po škole som strávil niekoľko rokov vo výrobe — spotrebná elektronika (Philips, Sagem) a automobilové komponenty (Wabash Technology). Pracoval som na kvalite produktov pomocou SPC (Statistical Process Control), GR&R (Gage Reproducibility and Repeatability), Six Sigma, 5S a 8D.

Toto neboli len nástroje. Bol to **spoločný slovník**.
Každý na výrobnej linke — od technika po manažéra — rozumel, čo znamená „mimo kontroly", čo znamená „koreňová príčina", čo znamená „nápravná akcia".

Keď som prešiel do IT, narazil som na niečo nečakané: slovník chýbal.
To isté slovo znamenalo rôzne veci pre rôzne roly.
„Architektúra" pre infraštruktúrneho inžiniera a „architektúra" pre business analytika boli dve rôzne veci.
Projekty zlyhávali nie preto, že chýbala technológia, ale preto, že chýbalo spoločné porozumenie.

**APV je rámec, ktorý som vyvinul na riešenie tohto problému.**

---

## Rámec APV

- **Assets (Aktíva)** — čo existuje a čo treba spravovať
- **Perspectives (Perspektívy)** — kto sa na to pozerá a z akého uhla
- **Views (Pohľady)** — čo skutočne vidia, filtrované pre ich rolu a kontext

Cieľ: udržiavať aktíva riešenia v poriadku, naprieč všetkými rolami, naprieč všetkými fázami SDLC.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/01-Digital-Reality.png').default} alt="Fyzická mapa podniku vs. digitálna mapa – dve reality, ktoré APV prepája" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/02-Ref_Inst.png').default} alt="Referenčný model vs. inštančný model – ako APV oddeľuje plán od reality" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/03-APV-Layers.png').default} alt="Vrstvy rámca APV – Assets, Perspectives, Views v štrukturálnom kontexte" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/04-APV-Pillars.png').default} alt="Piliere APV – štyri podporné dimenzie rámca" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/05-APV-Relationship-REF-INST.png').default} alt="Vzťah APV medzi referenčným a inštančným modelom" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/06-APV-Example.png').default} alt="Praktický príklad APV – aplikácia Assets, Perspectives, Views v reálnom projekte" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/08-APV-DailyProcess.png').default} alt="APV proces v každodennej praxi – od pojmového prvku po slovník" style={{maxWidth: '800px', width: '100%'}} />
</div>

:::tip[APV v troch otázkach]
Pred tým, než začneš budovať akýkoľvek model alebo dokument v SDLC:
1. Aké **aktívum** opisujeme?
2. Z čej **perspektívy** sa naň pozeráme?
3. Aký **pohľad** tento stakeholder skutočne potrebuje vidieť?
:::

---

## Implementačné kroky APV

1. Identifikuj kľúčové **Aktíva** — aké prvky riešenia treba modelovať a spravovať
2. Namapuj **Stakeholderov** a ich perspektívy — koho čo zaujíma
3. Definuj **Pohľady** — čo každý stakeholder skutočne potrebuje vidieť (nie všetko, len relevantný výrez)
4. Implementuj v tvojom nástroji (Enterprise Architect, GitHub alebo akýkoľvek štruktúrovaný repozitár)
5. Iteruj — slovník sa vyvíja spolu s riešením

---

## SFIA – Skills Framework for the Information Age

Ak APV rieši slovník aktív riešenia, SFIA rieši slovník ľudí, ktorí ich dodávajú.

Kde APV udržiava aktíva riešenia v poriadku, SFIA udržiava schopnosti tímu v poriadku.
Oba rámce riešia ten istý koreňový problém z rôznych uhlov: bez spoločného slovníka nemôžeš merať a bez merania nemôžeš riadiť.

→ Pozri samostatnú stránku: [K000107 – SFIA](./K000107-SFIA-index)

---

:::tip[Nie každý vytvára — ale každý konzumuje]
Nepotrebuješ budovať úplnú taxonómiu, aby si z nej mal úžitok.
Cieľom je mať jeden autoritatívny zdroj, na ktorý sa môžu spoľahnúť všetky roly.
Začni so slovníkom, ktorý prechádza najviac hranicami vo vašej organizácii.
:::

---

> ← [Späť na prehľad K000107](./) · [TBM – Technology Business Management →](./K000107-TBM-index)

<!-- body:start -->
<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
