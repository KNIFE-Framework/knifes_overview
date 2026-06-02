---
fm_version: "1.0.1"
fm_build: "2026-06-02T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000107_SK"
guid: "1c5d26e7-c7b7-4698-9ccc-ce8e3f2b155e"

dao: "knife"
title: "K000107 – Taxonómia a ontológia v SDLC"
description: "Prečo každá veda, ktorá sa chce nazývať vedou, buduje pojmový slovník — a prečo informatika stále dobieha. Praktické rámce: APV, SFIA, TBM a ich využitie naprieč SDLC."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [Taxonomy, Ontology, SDLC, APV, SFIA, TBM, AI, EnterpriseArchitecture, CAA, ContextAwareApproach]

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

# KNIFE – Taxonómia a ontológia v SDLC

## Kedy informatika dobehne prírodné vedy?

---

## 🎯 Čo to rieši

Pamätáš si na hodiny biológie?
Druh, poddruh, rod, čeľaď, rad...

Každá disciplína, ktorá sa chce nazývať vedou, buduje pojmový slovník.
Aristoteles začal klasifikovať živé organizmy okolo roku 350 pred Kr.
Linné to dokončil do systému v roku 1735 — 11 strán, ktoré zmenili vedu.
Od Aristotela po Linnéa: takmer 2 000 rokov systematickej práce.

:::caution[Každodenná realita v SDLC]
Každý deň sa praktici naprieč SDLC stretávajú s pojmovou nejednoznačnosťou.
To isté slovo. Päť interpretácií.
Päť interpretácií. Jeden zlyhávajúci projekt.

Toto nie je technologický problém. Je to problém slovníka.
:::

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/07-People-ProfitsFromAPV.png').default} alt="Zákazník vs. IT dodávateľ – bez komunikácie niet porozumenia, bez porozumenia niet dôvery" style={{maxWidth: '800px', width: '100%'}} />
</div>

Diagram vyššie ukazuje komplexnosť typického vzťahu IT služieb.
Zákazník vľavo: Board, CFO, Process Owners, IT manažment, Prevádzka.
IT dodávateľ vpravo: CEO, Operations Managers, Account Executive, desiatky procesných rolí.

Nie každý musí taxonómiu vytvárať.
Každý sa na ňu však musí spoľahnúť.

---

## 🧩 Pokryté rámce

Tento článok je rozdelený do samostatných sekcií:

| Rámec | Čo rieši | Detaily |
|---|---|---|
| **APV** | Slovník pre aktíva riešenia — čo existuje, z čej perspektívy, čo vidia | [K000107 – APV](./K000107-APV-index.md) |
| **SFIA** | Slovník pre ľudí a zručnosti naprieč IT rolami | [K000107 – SFIA](./K000107-SFIA-index) |
| **TBM** | Slovník IT nákladov prepájajúci technológiu s obchodnou hodnotou | [K000107 – TBM](./K000107-TBM-index) |

:::tip[APV v troch otázkach]
Pred tým, než začneš budovať akýkoľvek model alebo dokument v SDLC:
1. Aké **aktívum** opisujeme?
2. Z čej **perspektívy** sa naň pozeráme?
3. Aký **pohľad** tento stakeholder skutočne potrebuje vidieť?
:::

---

## 📜 Logaritmická akcelerácia

Informatika má 80 rokov. Od Aristotela po Linnéa to trvalo približne 2 000 rokov.
Ale pozri sa na tempo zmien:

| Prechod | Trvanie | Kontext |
|---|---|---|
| 1. → 2. priemyselná revolúcia | ~100 rokov | Para → elektrina a hromadná výroba |
| 2. → 3. | ~80 rokov | Elektrina → počítače a automatizácia |
| 3. → 4. | ~30 rokov | Počítače → Industry 4.0, IoT |
| 4. → masívne nasadenie AI | 9 rokov | Industry 4.0 → generatívna AI |

Skracuje sa logaritmicky. Dnes to môžu byť už mesiace.

Naliehavosť je reálna: AI nepracuje na intuícii.
Nakŕm ju pojmovým chaosom a reprodukuje ten chaos — rýchlo a sebavedome.
**Kvalita tvojej taxonómie priamo určuje kvalitu výstupov AI.**

:::caution[AI bez taxonómie]
AI zosilňuje to, čo dostane.
Ak je slovník SDLC naprieč rolami a fázami nekonzistentný, AI bude konzistentne zosilňovať túto nekonzistentnosť — rýchlo a vo veľkom.
:::

---

## ✅ Zhrnutie

Taxonómia a ontológia v SDLC nie sú akademické koncepty.
Sú predpokladom pre každú organizáciu, ktorá chce:
- Efektívne komunikovať naprieč rolami a fázami
- Merať to, na čom záleží
- Budovať AI systémy, ktoré produkujú spoľahlivé výstupy

APV poskytuje rámec pre slovník aktív riešenia.
SFIA poskytuje rámec pre slovník ľudí a zručností.
TBM poskytuje rámec pre slovník nákladov a hodnoty.

Žiadny z nich nevyžaduje začínať od nuly.
Všetky vyžadujú organizačný záväzok k spoločnému jazyku.

:::info[CAA prepojenie]
Toto priamo nadväzuje na CAA komunikačný reťazec z [K000103](../K000103-CAA_IN_SDLC/):
Bez Komunikácie → niet Porozumenia
Bez Porozumenia → niet Dôvery
Bez Dôvery → niet Spolupráce
Bez Spolupráce → niet Synergie
Bez Synergie → niet Úspechu

Taxonómia je infraštruktúra Komunikácie.
:::

---

### Most k ďalším témam

Taxonómia ti hovorí, čo slová znamenajú.
KERNARO ukazuje, ako AI vie v praxi navigovať v tomto slovníku — pozri [K000104](../K000104-SPARX_AI_KERNARO_IN_SDLC/).

Bez spoločného slovníka nemôžeš merať lead time.
QRM ukazuje, ako toto meranie využiť na zrýchlenie dodávky — pozri [K000108 – Quick Response Manufacturing](../K000108-QRM/).

---

### Zdroje

1. https://www.britannica.com/biography/Carolus-Linnaeus
2. https://www.visionlearning.com/en/library/Biology/2/Taxonomy-I/70/
3. https://sfia-online.org
4. https://www.tbmcouncil.org
5. https://quality-one.com/8d/
6. https://rajansuri.com
7. https://www.yarken.com/home

---

<!-- body:start -->
<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
