---
fm_version: "1.0.1"
fm_build: "2026-06-02T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000103_SK"
guid: ""

dao: "knife"
title: "K000103 – Context Aware Approach v SDLC"
description: "Context Aware Approach (CAA) aplikovaný na Solution Development Life Cycle — prečo kontext musí byť pochopený skôr, než sa urobí akékoľvek technologické rozhodnutie."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [SDLC, CAA, EnterpriseArchitecture]

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

# KNIFE – Context Aware Approach v SDLC

(SDLC – Solution Development Life Cycle)

## 🎯 Čo to rieši

Žiadne riešenie v žiadnej doméne neexistuje izolovane — žije v konkrétnom kontexte, ktorý zásadne ovplyvňuje to, čo sa buduje.
Z toho prirodzene vyplýva, že každé riešenie musí začínať porozumením tohto kontextu.
Téma je široká: ľudia, procesy, technológie, politika, podmienky trhu a oveľa viac.
V tomto článku sa zameriavame na popis kontextu pri dodávaní IT riešení — princípy však platia všeobecne.

---

## V-Model – Verification and Validation Model – historický základ SDLC

:::info[Definícia V-Modelu]
**V-model je grafické znázornenie životného cyklu vývoja systémov**, v ktorom aktivity ako analýza požiadaviek, návrh systému a implementácia priamo zodpovedajú validačným aktivitám — akceptačnému testovaniu, systémovému testovaniu a integračnému testovaniu. Vzniká tvar „V": ľavá strana predstavuje špecifikáciu a návrh, spodok implementáciu a pravá strana testovanie a validáciu.
:::

Napriek tomu, že moderné Agile a DevOps prístupy priniesli iteratívnejšie postupy, mnohé základné princípy V-Modelu pretrvávajú v súčasných SDLC praktikách — najmä silné prepojenie medzi požiadavkami, implementáciou a verifikáciou.

V-Model sa využíva pri tvorbe rigoróznych modelov životného cyklu vývoja a modelov riadenia projektov.
Delí sa do troch hlavných kategórií:
- nemecký V-Modell,
- všeobecný testovací model,
- a americký vládny štandard.

Zdroj: https://en.wikipedia.org/wiki/V-model

### Vznik

V-Model má dva paralelné a nezávislé pôvody:

**Barry Boehm (USA, 1979)** – americký softvérový inžinier, ktorý ako prvý popísal V-tvarovaný životný cyklus s dôrazom na verifikáciu a validáciu v každej fáze vývoja.

**Americká vetva** – Kevin Forsberg a Hal Mooz ho vyvíjali paralelne, vychádzajúc zo systémového inžinierstva pre obranné a letecké projekty. V-Model sa prvýkrát objavil okolo roku 1982 v Hughes Aircraft pre program FAA, neskôr sa rozšíril cez NASA a americké obranné zákazky.

**Nemecká vetva (V-Modell)** – Vyvinula ho IABG v Ottobrune pri Mníchove v spolupráci s Federálnym úradom pre obrannú techniku — pôvodne pre nemeckú armádu. V roku 1992 ho nemecké ministerstvo vnútra prijalo pre civilnú verejnú správu. V roku 2005 vyšla aktualizovaná verzia: **V-Modell XT** (eXtended).

### Prečo ho dnes málokto pozná

Agile vytlačil V-Model na okraj od začiatku 2000-tych rokov. V korporátnom a bankovom prostredí však V-Model nikdy nezmizol — len dostal nové meno alebo bol absorbovaný do iných rámcov: PRINCE2, regulačné metodológie, validácia FDA, automotive SPICE.

:::caution[Regulované prostredia]
V regulovaných prostrediach (bankovníctvo, zdravotníctvo, obrana) zostáva V-Model **de facto štandardom** — pretože regulátori vyžadujú plnú sledovateľnosť medzi požiadavkou a testom. Ignorovanie tohto základu ho neodstraňuje; robí medzeru neviditeľnou až do auditu.
:::

:::tip
*Model nezomrel. Zmenil meno.*
:::

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('../../../en/knifes/K000103-CAA_IN_SDLC/img/00-V-Model.png').default} alt="V-Model – Verification and Validation Model" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

## 🧩 Ako to rieši

V-Model poskytuje štrukturálnu chrbticu — ale kontext, v ktorom sa aplikuje, definuje všetko.

Vizualizácia kontextu výrazne pomáha jeho pochopeniu — čo v praxi znamená mapovanie reálneho sveta do digitálnej podoby.
Na tento účel existuje široké spektrum nástrojov a aplikácií. Ktorý zvoliť a podľa akých kritérií?

V našom prípade zdôrazňujeme nasledujúce princípy a vlastnosti. Technológie by ich mali podporovať čo najširšie.

**1. Princípy**

:::info[Základný princíp CAA]
- Bez Komunikácie — niet Porozumenia
- Bez Porozumenia — niet Dôvery
- Bez Dôvery — niet dobrej Spolupráce
- Bez dobrej Spolupráce — niet Synergii
- Bez Synergii — niet Úspechu
:::

1. Jeden obrázok má hodnotu tisíc slov.
2. Jeden model má hodnotu tisíc obrázkov.
3. Neexistuje dobré riešenie bez obrázkov.
   - To si vyžaduje ujasniť:
     - čo znamená „dobré riešenie"
     - čo znamená „obrázok / diagram"
4. Každé riešenie prechádza základnými fázami definovanými vo V-Modeli:
   Nápad → High-Level Design → Analýza → Detailný návrh → Implementácia → Verifikácia & Testovanie → Prevádzka → Change Management
   - Poradie, hĺbka a čas strávený v každej fáze závisí od riešenia — ale každé riešenie musí aspoň mentálne prejsť od nápadu po prevádzku, bez ohľadu na prístup dodávky (Waterfall, Agile, hybridný).

**2. Funkčné požiadavky na podporné nástroje naprieč SDLC rolami**
*(stručný a selektívny výber — závisí od kontextu riešenia a charakteru tímu/organizácie)*

- Jednoduchosť a intuitívnosť
- Koľko SDLC rolí nástroj podporuje?
- Miera, do akej jedna technológia pokrýva potreby jednotlivých rolí
- Univerzálny vs. špecializovaný nástroj
- Otvorenosť technológie:
  - Interoperabilita
    - Integrácie tretích strán
  - Modularita
  - Možnosť rozširovania systému o nové schopnosti
  - Podpora automatizácie workflow

**3. Nefunkčné požiadavky**

- Prítomnosť na trhu:
  - Dosah produktu/systému na trhu / v konkrétnych doménach
  - Dostupnosť know-how
  - Komunita
  - Znalí jednotlivci v organizácii
- Dlhovekosť na trhu:
  - Startup vs. etablovaná spoločnosť
- Kvalitná podpora
- Uznanie na trhu a v segmente
- Podpora zo strany univerzít a širšej komunity
- Možnosti nasadenia:
  - On-premise
  - On-client
  - Cloudové riešenie
  - Mobilné zariadenia
- Licenčný model:
  - Plávajúce licencie
  - Dedikované licencie
- Platobný model:
  - Jednorazový + upgrade/obnova
  - Predplatné
- Osobné preferencie:
  - Pozitívna predchádzajúca skúsenosť s funkciami technológie
  - Existujúce znalosti produktu vrátane jeho silných a slabých stránok

---

## 🧪 Ako to použiť

Pri hodnotení konkrétnej technológie je vhodné zvážiť čo najviac kritérií ešte pred začatím hodnotenia.
Každý výber je individuálny a platí len v konkrétnom kontexte danej organizácie, tímu alebo osoby.
Pri porovnávaní musia byť stanovené porovnateľné kritériá a porovnateľné kontexty — inak sú výsledky zavádzajúce.

---

## ⚡ Rýchly návod

Nasledujúce diagramy mapujú SDLC kontext z viacerých perspektív — od vzťahu dodávateľa a zákazníka, cez výstupy medzi fázami, až po kritériá hodnotenia nástrojov.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('../../../en/knifes/K000103-CAA_IN_SDLC/img/00-V-Model.png').default} alt="CAA – Context Aware Approach v SDLC" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

## 📜 Detailný článok

### Prečo kreslíme obrázky? (náčrty, diagramy, modely)

Mapovanie reality do digitálnej podoby.

Obrázok publikovaný s láskavým súhlasom IASA:
Aaron Tan Dani, FSCS — Chief Architect, Digital Enterprise Architecture Office
Mtech (NUS), CITA-F, CITA-A, TOGAF, ArchiMate, COBIT, PMP
https://iasaglobal.org/Services/Public/News/Articles/Establishing-Digital-Transformation-and-Smart-Factory-Blueprint-with-EA.aspx

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('../../../en/knifes/K000103-CAA_IN_SDLC/img/01-DigitalMappingOdReality.png').default} alt="01 – Mapovanie reálneho sveta do digitálneho sveta" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

Prečo do toho vkladáme toľko úsilia?
Verím, že je to preto, lebo:
- Zvyšuje šancu na zdieľané porozumenie medzi rolami a ľuďmi v rámci životného cyklu riešenia.
- Podporuje rozhodovateľov.
  - 3P: Správna Informácia – pre Správnu Rolu – v Správnom Čase

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('../../../en/knifes/K000103-CAA_IN_SDLC/img/02-Market-SDLC.png').default} alt="02 – Vzťah dodávateľa a zákazníka v kontexte SDLC" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('../../../en/knifes/K000103-CAA_IN_SDLC/img/03-SDLC-Deliverables.png').default} alt="03 – SDLC a výstupy medzi fázami SDLC" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('../../../en/knifes/K000103-CAA_IN_SDLC/img/04-Tools-Focus_AI.png').default} alt="04 – Oblasti hodnotenia nástrojov z viacerých perspektív (neúplné)" style={{maxWidth: '800px', width: '100%'}} />
</div>

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('../../../en/knifes/K000103-CAA_IN_SDLC/img/05-All_in_One.png').default} alt="05 – Všetko na jednom obrázku" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

## 💡 Tipy a poznámky

Prezentovaná téma je vysoko komplexná a vyžaduje techniky vhodné pre komplexné výzvy.
Pozri KNIFE [Cynefin](../K000101-CYNEFIN_Framework/).

:::tip[Cynefin prístup pre komplexné problémy]
Základná myšlienka pre riešenie komplexných otázok sleduje tento vzor:

**Probe → Sense → Respond**

Skús → Pozoruj prvé skúsenosti → Vedome reaguj a upresni svoje pôvodné porozumenie.
:::

---

## ✅ Hodnota / Zhrnutie

### Pohľad na kontext

Čo je lepšie?
Bentley alebo ŠKODA?
Mac alebo Windows?

Čo je aplikácia? Čo je platforma?

Koľko nekonečných diskusií a argumentov, za a proti.
Ale prečo? Nie je to zbytočná debata bez víťaza?

Pokiaľ nie je definovaný **kontext** otázky, problému alebo výzvy — nemá zmysel pokračovať v diskusii ani v riešení.

Akonáhle sa aspoň pokúsime pochopiť kontext riešenia do dostatočnej hĺbky, získame obmedzenia a hranice, ktoré nám zásadne pomáhajú pochopiť riešenie, nájsť správne odpovede — a urobiť to konštruktívne.
Bez zbytočných hádok, sporov a straty drahocenného času.

### Pohľad na prístup

Ktorý prístup je lepší?
- V-Model (Waterfall)
- Iteračný model (Agile, ...)

Ktorú fázu vo V-Modeli môžeme ignorovať? Kedy? V akom kontexte?

Namiesto hádania sa o tom, ktorý prístup je lepší, navrhujem:

**Prispôsob prístup kontextu svojho riešenia.**

:::info[Kľúčový záver]
Žiadny nástroj, žiadna technológia nikdy nebude dokonalá pre všetky kontexty.
Naša úloha je pochopiť kontext a zvoliť **dostatočne dobré** riešenie pre daný konkrétny kontext.
:::

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
