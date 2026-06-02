---
fm_version: "1.0.1"
fm_build: "2026-06-02T00:00:00.000000+00:00"
fm_version_comment: ""

id: "K000106_SK"
guid: "c37927c6-b969-436a-8c79-27207e14e6e7"

dao: "knife"
title: "K000106 – SSOT a TSSOT: Koľko právd treba na úspešné riešenie?"
description: "Single Source of Truth a Trusted Single Source of Truth — prečo konzistentné, overené dáta sú predpokladom úspešných riešení, efektívnej AI a zdieľaného porozumenia naprieč fázami SDLC."

author: "Roman Kazicka"
authors:
  - "Roman Kazicka"

category: ""
type: ""
priority: ""
tags: [SSOT, TSSOT, DataQuality, SDLC, CAA, EnterpriseArchitecture, AI]

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

# KNIFE – SSOT a TSSOT

## Koľko právd treba na úspešné dodanie riešenia?

---

## 🎯 Čo to rieši

Vo väčšine organizácií existuje ten istý zákazník v piatich systémoch pod piatimi rôznymi menami.
Ten istý produkt má tri rôzne ceny podľa toho, koho sa spýtaš.
Ten istý stav projektu vyzerá inak v tabuľke, v CRM a v prezentácii pre manažment.

Toto nie je technický problém. Je to organizačný a kultúrny problém — a ticho zabíja projekty, rozhodnutia a dôveru.

:::caution[Základný problém]
Keď každý pracuje s inou verziou reality, koordinácia sa mení na vyjednávanie.
Každá porada začína otázkou: *„Ktoré číslo používame?"*
Každé rozhodnutie je spochybňované. Každý výstup AI je nespoľahlivý.
:::

---

**SSOT** a **TSSOT** sú odpoveďou na tento problém.

## 🧩 Ako to rieši

### SSOT – Single Source of Truth

**Jeden zdroj. Jeden záznam. Jeden vlastník.**

SSOT znamená, že pre každú informáciu existuje presne jedno autoritatívne miesto, kde žije.
Všetky ostatné systémy ju buď referencujú alebo z nej odvodzujú — neduplikujú ju.

:::info[Definícia SSOT]
**Single Source of Truth (SSOT)** je prax štruktúrovania informačných modelov a dátových schém tak, aby každý dátový prvok bol spravovaný (editovaný) iba na jednom mieste. Akékoľvek prepojenia na tento prvok sú výhradne cez referenciu.
:::

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/00-Islands.png').default} alt="00 – Ostrovy poznania: fragmentované podnikové systémy bez spoločného zdroja" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

### TSSOT – Trusted Single Source of Truth

SSOT ti hovorí **kde** pravda žije.
TSSOT ti hovorí **či jej môžeš dôverovať.**

Zdroj môže byť jediný bez toho, aby bol dôveryhodný — ak je zastaraný, neúplný alebo neoverený.
TSSOT pridáva dimenziu **verifikácie a aktuálnosti**: digitálne zobrazenie reality je aktívne udržiavané, validované a uznané ako spoľahlivé.

:::info[Definícia TSSOT]
**Trusted Single Source of Truth (TSSOT)** je SSOT, kde sú dáta navyše overené, aktuálne a uznané ako autoritatívny základ pre rozhodnutia — nielen technicky singulárny, ale organizačne dôveryhodný.
:::

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/05-ants.png').default} alt="05 – Mravce: Komunikácia → Porozumenie → Dôvera → Spolupráca → Úspech – CAA reťaz" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

### Tri metafory, ktoré vysvetľujú problém

**🪣 Viacero studní**

Každé oddelenie si vykope vlastnú studňu.
Financie majú svoju studňu. Obchod má svoju. IT má svoju.
Každá studňa môže obsahovať vodu — ale voda je iná.

Cieľom nie je mať menej studní.
Cieľom je vedieť:
- Čo je v každej studni
- Čím sa každá studňa napája
- Ktoré studne zdieľajú rovnaký zdroj
- Ktorá studňa je hlavná

SSOT definuje hlavnú studňu.
TSSOT certifikuje, že voda v nej je čistá.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/01-multiple-wells.png').default} alt="01 – Viacero studní v púšti: každé oddelenie má vlastný zdroj pravdy" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

**🧊 Ľadovec**

To, čo vidíš nad hladinou — reporty, dashboardy, výstupy AI — predstavuje približne 10 % informačného priestoru.

90 % pod povrchom: požiadavky, rozhodnutia, predpoklady, vzťahy, história, kontext.

:::caution[AI a ľadovec]
AI pracuje s tým, čo je viditeľné a dostupné.
Ak je 90 % pod hladinou nekonzistentné, neoverené alebo chýba — AI bude s istotou produkovať výstupy na základe skresleného obrazu reality.
Rýchlosť to neopraví. Problém iba zrýchli.
:::

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/04-iceberg-ssot.png').default} alt="04 – SDLC ľadovec: 10 % viditeľný produkt, 90 % skrytý životný cyklus pod povrchom" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

**🗼 Babylonská veža**

Keď rôzne tímy, roly a systémy používajú to isté slovo s rôznym významom — alebo rôzne slová pre to isté — komunikácia sa rozpadá.

Nie preto, že ľudia sú neschopní.
Preto, že sa nikdy nedohodli na spoločnom slovníku.

Babylonská veža nespadla preto, že staviteľom chýbali zručnosti.
Spadla preto, že si prestali rozumieť.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/02-babylon.png').default} alt="02 – Babylonská veža: dôsledok rôznych slovníkov a chýbajúceho spoločného základu" style={{maxWidth: '800px', width: '100%'}} />
</div>

V kontexte SDLC: každá fáza produkuje artefakty, na ktorých závisí nasledujúca fáza.
Ak sa slovník medzi fázami mení, reťaz sa preruší.

<div style={{backgroundColor: '#ffffff', padding: '16px', borderRadius: '8px', display: 'inline-block', width: '100%', boxSizing: 'border-box'}}>
  <img src={require('./img/03-Solid-Building.png').default} alt="03 – Pevná budova s hlbokými základmi: TSSOT ako overený, dôveryhodný základ" style={{maxWidth: '800px', width: '100%'}} />
</div>

---

### SSOT v kontexte SDLC

Každá fáza V-Modelu (pozri [K000103](../K000103-CAA_IN_SDLC/)) produkuje výstupy, ktoré sa stávajú vstupmi pre nasledujúcu fázu.

| Fáza | Produkuje | Závisí na |
|---|---|---|
| Business | Požiadavky, ciele | Trhový kontext |
| Architektúra | Architektonické rozhodnutia | Business požiadavky |
| Analýza | Špecifikácie | Architektonické rozhodnutia |
| Návrh | Detailné modely | Špecifikácie |
| Implementácia | Funkčné riešenie | Modely návrhu |
| Testovanie | Overené správanie | Implementácia + požiadavky |
| Prevádzka | Bežiaca služba | Všetko vyššie |

:::caution[Prerušená reťaz]
Ak akákoľvek fáza pracuje z neovereného alebo nekonzistentného zdroja, chyba sa šíri dopredu — a násobí sa.
V čase, keď sa objaví pri testovaní alebo prevádzke, sú náklady na opravu exponenciálne vyššie.
:::

---

## 🧪 Ako to použiť

### Otázky pred vyhlásením SSOT

1. **Kto vlastní tento dátový prvok?** Každý záznam musí mať jediného vlastníka zodpovedného za jeho presnosť.
2. **Kde je spravovaný?** Ktorý systém je autoritatívny zdroj? Všetky ostatné musia referencovať, nie duplikovať.
3. **Čím je napájaný?** Aký proces vytvára, aktualizuje alebo ruší tento záznam? Je zdokumentovaný a dodržiavaný?
4. **Ako je overený?** Aký mechanizmus potvrdzuje, že záznam je presný a aktuálny? Kto overenie vykonáva?
5. **Kto ho konzumuje?** Ktoré roly, systémy a fázy závisia od tohto záznamu? Vedia o tom, odkiaľ pochádza?
6. **Čo sa stane pri zmene?** Existuje mechanizmus notifikácie zmeny? Závislé systémy sa aktualizujú automaticky alebo manuálne?

---

### Úrovne zrelosti SSOT

| Úroveň | Popis |
|---|---|
| 0 – Chaos | Viacero konfliktných zdrojov, žiadne vlastníctvo |
| 1 – Povedomie | Zdroje identifikované, vlastníctvo nejasné |
| 2 – Definované | Jeden zdroj určený, ostatné stále existujú |
| 3 – Riadené | Jeden zdroj presadený, ostatné deprecated |
| 4 – Dôveryhodné (TSSOT) | Zdroj overený, aktuálny, organizačne uznaný |

Väčšina organizácií je na Úrovni 1–2 keď začínajú AI iniciatívu.
AI vyžaduje Úroveň 3–4 pre spoľahlivé výstupy.

---

## 📜 Detailný článok

### Prečo je to dôležité pre AI

:::caution[AI zosilňuje to, čo dostane]
AI nehodnotí kvalitu svojho vstupu.
Spracuje to, čo dostane — a produkuje výstup úmerný tej kvalite.

*Garbage in, garbage out* nie je nič nové.
Čo je nové, je rýchlosť a istota, s akou AI ten odpad doručuje.
:::

AI asistent dotazujúci podnikový model (napríklad cez KERNARO — pozri [K000104](../K000104-SPARX_AI_KERNARO_IN_SDLC/)) vyprodukuje:
- Presné, užitočné výsledky — ak je model SSOT/TSSOT
- Vierohodne znejúce, ale nespoľahlivé výsledky — ak model obsahuje nekonzistencie

Nástroj nie je problém.
Základ je problém — alebo riešenie.

---

### Spoločná metodológia — čo spája všetky studne

Cieľom nie je jedna studňa pre celú organizáciu.
Komplexné organizácie majú mnoho domén, mnoho systémov, mnoho tímov.

Čo potrebujú, je **spoločná sada pravidiel**, ktorá riadi správanie všetkých studní:
- Konvencie pomenovania
- Pravidlá vlastníctva
- Procesy verifikácie
- Správa zmien
- Integračné vzory

Táto spoločná metodológia umožňuje **spoločné porozumenie** — ktoré umožňuje **dôveru** — ktorá umožňuje **spoluprácu** — ktorá umožňuje **synergie**.

:::info[CAA prepojenie]
Toto priamo nadväzuje na CAA komunikačný reťazec z [K000103](../K000103-CAA_IN_SDLC/):

- Bez Komunikácie — niet Porozumenia
- Bez Porozumenia — niet Dôvery
- Bez Dôvery — niet dobrej Spolupráce
- Bez dobrej Spolupráce — niet Synergií
- Bez Synergií — niet Úspechu

SSOT/TSSOT je informačný základ, ktorý tento reťazec umožňuje.
:::

---

## 💡 Tipy a poznámky

:::tip[Začni v malom]
Nepotrebuješ SSOT pre celú organizáciu od prvého dňa.
Začni s jednou doménou, jednou kritickou dátovou entitou, jednou fázou SDLC.
Dokáž hodnotu. Potom rozšír.

*Kvapka vyvŕta kameň — nie silou, ale vytrvalosťou.*
:::

:::tip[SSOT nie je technologický projekt]
Najväčšia chyba organizácií: kúpia nástroj a nazývajú ho SSOT.
SSOT je v prvom rade rozhodnutie o governance. V druhom rade procesné rozhodnutie. V treťom rade technologické rozhodnutie.
:::

---

## ✅ Hodnota / Zhrnutie

SSOT a TSSOT nie sú o tom, mať menej zdrojov informácií.
Sú o tom, vedieť čo každý zdroj obsahuje, dôverovať mu a prepojiť ich cez spoločné pravidlá.

Bez tohto základu:
- Projekty stavajú na piesku
- AI produkuje sebavedomý šum
- Fázy SDLC si navzájom nerozumejú
- Babylonská veža rastie vyššie

S týmto základom:
- Rozhodnutia sú rýchlejšie a lepšie
- AI zosilňuje skutočné porozumenie
- Každá fáza SDLC stavia na overených vstupoch
- Spoločný slovník umožňuje spoločný zámer

---

### Most k ďalšej téme

SSOT ti hovorí **kde pravda žije** a či jej môžeš dôverovať.

Ale ani dôveryhodný zdroj nezaručuje zdieľané porozumenie.

> *Rozumie každý vo vašej organizácii slovu „zákazník" rovnako?*
> *Znamená „riziko" to isté pre business analytika a security architekta?*

Toto je doménou **taxonómie, ontológie a metodológie APV** — pozri [K000107](../K000107_TaxonomyAndOntology/).

---
<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
