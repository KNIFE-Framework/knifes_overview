---
fm_version: "1.0.1"
fm_build: "2026-06-02T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000108_SK"
guid: "e8c0ee53-23a5-44a7-9515-2a206bf3255e"

dao: "knife"
title: "K000108 – Quick Response Manufacturing (QRM)"
description: "QRM je celopodniková stratégia pre skracovanie lead time — vynájdená Rajanom Surim v 90. rokoch. Pôvodne navrhnutá pre výrobu, QRM explicitne rozširuje svoje princípy na kancelárske a znalostné procesy, čo ju robí priamo relevantnou pre SDLC a IT dodávku."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [QRM, LeadTime, Manufacturing, SDLC, KnowledgeWork, Lean, SixSigma, MCT, QROC, CAA]

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

# KNIFE – Quick Response Manufacturing (QRM)

## Trpí tvoj SDLC rovnakým problémom, ktorý takmer zničil high-mix výrobu?

:::note[Skôr než budeš čítať ďalej — štyri otázky, nad ktorými sa oplatí zamyslieť]
- Je vývoj softvéru len výroba bez strojov?

- Prečo automobilová továreň pozná svoj lead time na hodinu — a tvoj IT projekt nie?

- Tvoja továreň vyriešila problémy s kvalitou v 80. rokoch. Prečo tvoj IT tím stále vedie tie isté porady?

- Výroba mala 8D, Lean, Six Sigma, QRM. Čo má tvoj SDLC?
:::

---

## 🎯 Čo to rieši

QRM vynašiel Rajan Suri v 90. rokoch. Primárnym cieľom je neúnavné skracovanie lead time — interných procesných prietočných časov. Aplikácia týchto konceptov umožňuje spoločnosti súťažiť na základe rýchlosti, flexibility a agilnosti.

V IT a SDLC pojmoch: **lead time je čas od vstupu požiadavky do fázy po overený výstup z nej.** Každý odovzdávací bod, každá fronta, každé „je to v review" je plytvaním lead time.

:::caution[SDLC paralela]
SDLC projekty zlyhávajú z rovnakých dôvodov, z akých výroba zlyhávala pred QRM:
- Funkčné silá vytvárajúce oneskorenia pri odovzdávaní
- „Pasce využiteľnosti" — udržiavanie ľudí na 100 % vytvára úzke hrdlá
- Dávkovanie práce namiesto jej prietoku
- Žiadna spoločná metrika pre skutočnú dĺžku procesov
:::

---

## 🧩 Ako to rieši

### Základný princíp: jedna metrika nad všetkými

Skracovanie lead time môže byť hybnou silou pre ďalšie výkonnostné zlepšenia. Zameranie sa na skracovanie lead time (MCT) v rámci interných procesov spoločnosti môže priniesť celý rad ďalších pozitívnych výsledkov vrátane lepšej kvality (vďaka rýchlejším spätným väzbám, krížovo vyškoleným pracovníkom a malému dávkovaniu), lepšej dodávky načas a nižších prevádzkových nákladov.

**MCT – Manufacturing Critical-path Time** je kľúčová metrika. Meria skutočný čas od začiatku do konca procesu, nie len „dotykovú dobu", keď niekto aktívne pracuje.

:::info[Šokujúci pomer]
V priemere skutočná dotyková doba predstavuje iba 1–5 % celkového MCT.
Zvyšných 95–99 % je čakanie, fronty, odovzdávacie body a prerábka.
Toto platí rovnako pre fázy vývoja softvéru, recenzie dokumentov a schvaľovacie reťazce.
:::

### MCT diagram – kalendárny čas vs. skutočná potrebná práca a cieľ QRM

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/00-mct-timeline.png').default} alt="MCT diagram – kalendárny čas (1 týždeň) vs. skutočná potrebná práca (2 hodiny) a cieľ QRM (1 deň)" style={{maxWidth: '800px', width: '100%'}} />
</div>

### Štyri základné QRM koncepty

**1. Čas ako primárna šošovka**
Prestaň optimalizovať na náklady alebo využiteľnosť. Optimalizuj na rýchlosť. Keď lead time klesá, náklady nasledujú.

**2. Dysfunkčná vs. strategická variabilita**
Dysfunkčná variabilita vzniká z prevádzkových problémov — prerábka, chyby, prestoje strojov, dlhé časy prípravy. Strategická variabilita existuje, aby uspokojila zákazníkov — rôzne možnosti produktu, vlastné konfigurácie. Cieľom QRM je eliminovať dysfunkčnú variabilitu a využívať strategickú variabilitu.

V SDLC: prerábka z nepochopených požiadaviek = dysfunkčná. Prispôsobené riešenia pre rôznych klientov = strategická.

**3. QRM Cells — organizačná reštrukturalizácia**
Namiesto funkčných oddelení (Oddelenie analýzy → Oddelenie návrhu → Oddelenie vývoja → Oddelenie testovania) vytvor cross-funkčné bunky zamerané na rodinu produktov alebo služieb. Každá bunka vlastní celý prietok.

**4. Q-ROC – Quick Response Office Cells**
Reštrukturalizácia buniek funguje aj v kancelárii. Kancelárske aktivity ako cenové ponuky a spracovanie objednávok môžu tvoriť viac ako 50 % lead time a viac ako 25 % nákladov. Q-ROCs možno zriadiť so zameraním na rodinu produktov. Zdroje sú na jednom mieste a vykonávajú sekvenciu aktivít. Pracovníci sú krížovo vyškolení a majú právomoc rozhodovať.

Toto je priamy most k IT dodávke — Q-ROC pre fázu SDLC je cross-funkčný tím s plnou právomocou dokončiť svoju fázu bez odovzdávacích bodov.

---

## 🧪 Ako to použiť

### Krok 1 – Zmapuj aktuálne MCT

Nakresli aktuálny stav: od príchodu požiadavky po výstup fázy. Označ:
- Kde práca čaká? (čas vo fronte)
- Kde sa dávkuje? (oneskorenie dávkovania)
- Kde sa vracia? (slučka prerábky)
- Aká je skutočná dotyková doba vs. celkový uplynulý čas?

### Krok 2 – Identifikuj Response Time Spiral

Response Time Spiral nastáva, keď kompartmentalizované funkčné oddelenia vedú k rastúcemu množstvu rozpracovanosti, nevybavených položiek a urgentných objednávok.

Príznaky v SDLC: každý sprint končí prenosom položiek, recenzie požiadaviek trvajú týždne, „urgentné" vždy skáče do frontu.

### Krok 3 – Navrhni Q-ROC pre svoju SDLC fázu

- Identifikuj jednu SDLC fázu alebo prietok (napr. požiadavky → návrh)
- Zostav cross-funkčnú bunku: BA + architekt + vedúci vývojár + zástupca testovania
- Umiestni na jedno miesto (fyzicky alebo virtuálne s dedikovanými kanálmi)
- Daj im právomoc dokončiť bez eskalácie
- Meraj MCT pred a po

### Krok 4 – Znižuj dysfunkčnú variabilitu

- Štandardizuj vstupy (ako vyzerá „pripravená požiadavka" — taxonómia!)
- Znižuj veľkosti dávok (jedna story naraz, nie celý sprint)
- Zaveď pull signály (tím ťahá prácu keď je pripravený, nie keď je tlačený)

---

## ⚡ Rýchly návod

| QRM koncept | SDLC ekvivalent |
|---|---|
| MCT (Manufacturing Critical-path Time) | Lead time fázy: požiadavka dovnútra → overený výstup |
| Dysfunkčná variabilita | Prerábka z nejasných požiadaviek, chýbajúcich definícií |
| Strategická variabilita | Prispôsobené riešenia pre rôzne klientské kontexty |
| QRM Cell | Cross-funkčný SDLC tím (BA + Arch + Dev + Test) |
| Q-ROC | Bunka pre znalostné práce pre konkrétnu SDLC fázu |
| Response Time Spiral | Prenos zo sprintu, rast backlogu, kultúra „vždy urgentné" |
| POLCA (kartový riadenie prietoku) | Kanban, WIP limity |
| Pomer dotykovej doby (1–5 %) | % sprintu skutočne v práci vs. čakanie/v review |

---

## 📜 Detailný článok

### Prečo QRM dopĺňa Lean a Six Sigma — nie ich nahrádza

Mnohé spoločnosti úspešne používajú QRM spolu s Lean, Six Sigma a inými zlepšovacími metódami, pričom zistili, že jedinečné nástroje QRM na skracovanie času dopĺňajú a posilňujú tieto snahy.

QRM je obzvlášť efektívny pre spoločnosti vyrábajúce nízke objemy, vysokú variabilitu alebo zákazkové výrobky. Niektoré Lean koncepty, ako takt time, Kanban a vyrovnávanie výroby, nefungujú dobre v týchto kontextoch.

IT dodávka je inherentne vysokovariabilná, zákazková. Preto čistý Lean v softvéri zápasí — a preto je QRM prístup k variabilite relevantnejší.

### Pasca využiteľnosti

Jeden z najkontraintuitívnejších poznatkov QRM: tlačenie zdrojov na 100 % využiteľnosť **zvyšuje** lead time. Keď je každý vždy zaneprázdnený, neexistuje kapacita na absorbovanie variability. Každá nová požiadavka čaká vo fronte.

V SDLC: architekt, ktorý je vždy na 100 % rezervovaný, sa stáva úzkym hrdlom, ktoré spomaľuje každý projekt.

### Prípad Virupa: Q-ROC v praxi

Virupa Visual Solutions zažila výrazný rast, ale udržiavanie úrovne obratu vyžadovalo stále viac energie. Koreňovou príčinou boli obchodné procesy, kompartmentalizované do funkčných oddelení. Na prelomenie tohto stavu Virupa zrušila kancelárske oddelenia a nahradila ich štyrmi Quick Response Office Cells. V každom Q-ROC multidisciplinárny tím rieši všetky procesy a administratívu pre konkrétnu skupinu zákazníkov.

Princíp sa priamo prenáša: namiesto Oddelenia požiadaviek → Oddelenia architektúry → Oddelenia vývoja vytvor Q-ROC, ktorý zvláda všetky fázy pre konkrétny typ riešenia alebo klientský segment.

### Prepojenie s taxonómiou

QRM nemôže fungovať bez spoločného slovníka.

MCT mapovanie vyžaduje, aby každý účastník rozumel rovnakej definícii „začiatku" a „konca" pre každý krok procesu. Bez taxonómie:
- Rôzni ľudia merajú rôzne veci
- Zlepšenia MCT nemožno validovať
- Q-ROC tímy nemôžu komunikovať naprieč hranicami

Preto sú QRM a taxonómia (K107) príbuzné — nie konkurenčné — metodológie.

---

## 💡 Tipy a poznámky

:::tip[Začni s MCT mapovaním, nie s reštrukturalizáciou]
Pred navrhnutím buniek zmapuj aktuálne MCT pre jeden prietok.
Samotná mapa vytvára spoločné porozumenie a odhaľuje zrejmé rýchle výhry.
Tímy často nájdu 40–60 % lead time sediacich v jednom odovzdávacom bode alebo schvaľovacom kroku.
:::

:::tip[Q-ROC pre znalostné práce]
Hlavná výhoda aplikácie Q-ROC na kancelársku prácu oproti výrobným bunkám: presúvanie ľudí a stolov je oveľa menej nákladné ako presúvanie strojov.
Začni s jedným tímom. Dokáž, že to funguje. Potom rozšír.
:::

:::caution[QRM ≠ len robiť veci rýchlejšie]
QRM nie je o ponáhľaní sa. Je o odstraňovaní času, ktorý nepridáva hodnotu.
Rýchlosť prichádza z eliminácie frontov a prerábky — nie z tvrdšej práce.
:::

---

## ✅ Zhrnutie

QRM preformuluje otázku z „ako znižujeme náklady?" na „ako znižujeme čas?"

Keď lead time klesá:
- Kvalita sa zlepšuje (rýchlejšie spätné väzby, menšie dávky)
- Náklady nasledujú (menej prerábky, menej WIP, nižšia réžia)
- Spokojnosť zákazníkov rastie (rýchlejšia, spoľahlivejšia dodávka)

Pre SDLC praktikov: QRM poskytuje časovú šošovku, ktorá dopĺňa Lean, Six Sigma a Agile — obzvlášť pre prostredia s vysokou variabilitou a zákazkovými riešeniami.

Model Q-ROC pre kancelárske a znalostné práce je priamy most od výroby k IT dodávke.

:::info[Súvisiace KNIFE články]
- [K000107 – Taxonómia a ontológia v SDLC](../K000107_TaxonomyAndOntology/) — slovníkový základ, ktorý umožňuje meranie QRM
- [K000103 – Context Aware Approach v SDLC](../K000103-CAA_IN_SDLC/) — CAA poskytuje kontextuálnu vrstvu pre implementáciu QRM
:::

---

### Ďalšie čítanie

- Rajan Suri – QRM origin a consulting: https://rajansuri.com
- Center for QRM – University of Wisconsin: https://qrm.engr.wisc.edu
- QRM Institute (Európa): https://qrminstitute.org
- „It's About Time" – Rajan Suri (2010, Productivity Press) — základná kniha o QRM pre kancelárske a znalostné práce

---

### Zdroje

1. https://rajansuri.com
2. https://interpro.wisc.edu/ten-things-you-should-know-about-quick-response-manufacturing/
3. https://qrm.engr.wisc.edu/blog/ten-things-you-should-know-about-quick-response-manufacturing/
4. https://qrminstitute.org/working-in-teams-qrm-and-work-cells-q-rocs/
5. https://www.business-improvement.eu/qrm/Virupa_QRM.php
6. https://interpro.wisc.edu/courses/qrm-business-process-optimization-improving-support-operations-with-advanced-cell-design/

---

<!-- body:start -->
<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
