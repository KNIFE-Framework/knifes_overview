---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2026-11-16T12:00:00.000000+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript
id: "K000123"

# Unikátne UUID – generuje skript
guid: "e2c66349-82f1-41b1-96af-37e4935961e1"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "knife"

# Názov zápisu – dopĺňa používateľ
title: "K000123 – Islamské financie pre technikov: sukuk, tokenizácia a šaría v praxi (Finweek KL 2026)"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "Pojmový základ islamských financií (riba, gharar, sukuk, maqasid, zakát, waqf), Labuan ako regulovaný hub, tokenizovaný sukuk a rozdiely Malajzia – Turecko – Saudská Arábia. Pre architektov a tvorcov produktov, ktorí potrebujú rozumieť jazyku konferencie Finweek Kuala Lumpur 2026."


# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Roman Kazicka"

# Zoznam autorov – generuje skript
authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: ""

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: "guide"

# Priorita (low/medium/high) – voliteľné
priority: "medium"

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: ["islamic-finance","sukuk","tokenization","maqasid","zakat","waqf","labuan","malaysia","fintech"]


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2026-11-16 12:00"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2026-11-16 12:00"

# Stav dokumentu – default "backlog"
status: "done"

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

> **KNIFE** – Knowledge In Friendly Examples
> **Séria:** Systemic Thinking in IT & Digital Fabrication
> **Úroveň:** Beginner
> **Tagy:** `islamic-finance` `sukuk` `tokenization` `maqasid` `zakat` `waqf` `labuan` `malaysia` `fintech`

# Islamské financie pre technikov: sukuk, tokenizácia a šaría v praxi

> Vzniklo z poznámok z konferencie **Finweek Kuala Lumpur 2026** (11. – 13. 11. 2026). Je to **pojmový základ a mapa**, nie záznam prednášok. Čo konkrétne na pódiu zaznelo, tu netvrdíme.

## 🎯 Čo rieši (účel, cieľ)

Na fintech konferencii v Kuala Lumpur sa o islamských financiách hovorí ako o bežnom jazyku: sukuk, maqasid, waqf, tokenizácia. Architekt, analytik alebo tvorca produktu zo Západu často nevie, čo je skutočný rozdiel oproti konvenčnému bankovníctvu a kde sa zbiehajú s technológiou (blockchain, smart contract).

Tento KNIFE dáva jednu stranu orientácie: **základné pojmy, tabuľku porovnania, tokenizovaný sukuk a to, v čom sa líšia tri kľúčové trhy** (Malajzia, Turecko, Saudská Arábia).

## 🧩 Ako to rieši (princíp)

Islamské financie stoja na jednej myšlienke: **peniaze nemajú zarábať samy, zisk má vznikať z reálnej ekonomickej činnosti a zdieľaného rizika.** Z toho vyplývajú pravidlá, ktoré sa dajú čítať ako návrhové obmedzenia produktu:

| Princíp | Význam |
|---|---|
| **Riba** | zákaz úroku |
| **Gharar** a **maysir** | zákaz nadmernej neistoty a čistej špekulácie |
| **Haram odvetvia** | zákaz financovať napr. alkohol, hazard, zbrane |
| **Reálne aktívum** | transakcia musí stáť na niečom hmotnom |
| **Šaría board** | nezávislý orgán produkt schvaľuje a kontroluje |

### Islamská vs. konvenčná banka

| Oblasť | Islamská banka | Konvenčná banka |
|---|---|---|
| Cena peňazí | Zisk z obchodu, prenájmu, podielu | Úrok |
| Vzťah s klientom | Obchodný partner | Veriteľ a dlžník |
| Úver | Murabaha, Ijara | Úver s úrokom |
| Zdieľanie rizika | Musharaka, Mudaraba: zisk aj strata sa delia | Nesie hlavne dlžník |
| Podklad | Reálne aktívum | Nie je podmienkou |
| Dlhopis | Sukuk | Dlhopis |
| Dohľad | Regulátor + šaría board | Regulátor |

Poctivá poznámka: ekonomický výsledok napr. murabahy môže pripomínať úver s fixnou sadzbou. Nakoľko je to „skutočne islamské“, je predmetom odbornej debaty. Práve na to sa viaže pojem **maqasid** nižšie.

## 🧪 Ako to použiť (aplikácia)

### Sukuk, tokenizácia a smart contract

- **Sukuk**: certifikát podielu na reálnom aktíve (budova, infraštruktúra). Investor dostáva časť výnosu z aktíva, nie úrok. Rozdiel „asset-backed“ a „asset-based“ je predmetom diskusie: vlastní investor aktívum, alebo má len nárok na tok platieb?
- **Tokenizácia**: práva na aktívum zapísané ako digitálny token (frakčné vlastníctvo, rýchle vyrovnanie, programovateľné výplaty).
- **Tokenizovaný sukuk**: sukuk vydaný alebo evidovaný ako token, výnos vypláca smart contract. **Šaría board ho musí schváliť** a názory učených na digitálne aktíva sa líšia.
- **Blockchain** je distribuovaná kniha záznamov, ktorá sa spätne nedá meniť. **Smart contract** je program na nej, ktorý sa vykoná po splnení podmienok. Automatizuje dohodu, **nie je automaticky právne záväznou zmluvou**. Kód vykoná aj svoju chybu, preto sa audituje.

### Offshore, Labuan a transparentnosť

Offshore samo o sebe nie je nelegálne. Nelegálne je nepriznanie príjmov a účtov, daňový únik a pranie špinavých peňazí. Dnes si krajiny automaticky vymieňajú dáta o účtoch (CRS, FATCA), takže daňový rezident SR/EÚ musí príjmy a majetok v zahraničí priznať.

**Labuan IBFC** je malajzijské medzinárodné finančné centrum (od 1990) s jediným regulátorom Labuan FSA. Samo sa označuje ako „mid-shore“: regulovaná jurisdikcia s dohľadom, nie daňový raj bez kontroly [2][3][4]. Zameriava sa na banking, wealth management, poistenie (captive), digitálne služby a islamské financie [4]. Uvádza aj stratégiu „Shariah-compliant blockchain hub“ a prvý klimatický sukuk [5][6].

### Maqasid a maslahah

**Maqasid al-Shariah** sú vyššie ciele šaríe, teda zmysel pravidiel, nie len ich litera. V islamských financiách sa uvádzajú obeh bohatstva, férové a transparentné praktiky a spravodlivosť [7]. **Maslahah** je verejný záujem, s maqasid úzko spätý pojem [8]. Praktický dôsledok je argument „podstata pred formou“: produkt, ktorý formálne vyhovuje, ale ekonomicky pripomína úver, sa dá kritizovať.

### Zakát a waqf (islamic social finance)

- **Zakát**: povinný islamský dar potrebným (v bežnom výklade zhruba 2,5 % z oprávneného majetku, presné pravidlá sa líšia).
- **Waqf**: trvalý fond. Majetok sa daruje natrvalo a jeho výnos slúži verejnoprospešným cieľom (škola, nemocnica).
- **World Zakat and Waqf Forum (WZWF)**: platforma inštitúcií, ktoré tieto fondy spravujú. Vznikol 2010 ako World Zakat Forum, od 2021 má dnešný názov, 14. ročník bol 13. – 15. 10. 2025 v Kuchingu a Malajzia je jeho stálym sekretariátom [9][10][11]. Rada Global Zakat and Waqf Policy Advisory Council vydáva Zakat Core Principles a Waqf Core Principles [12].
- Spojenie waqf so sukukom alebo tokenizáciou sa v odbornej diskusii spomína. Nie je to zavedený štandard.

### Tri trhy, tri akcenty

| | Malajzia | Turecko | Saudská Arábia |
|---|---|---|---|
| Rola | Centrálny hub, Labuan IBFC, silný islamský kapitálový trh | Participačné banky, sukuk pod názvom *kira sertifikaları* (lease certificates) [13][14] | Jeden z najväčších emitentov sukuk na svete, 2025: ≈ 72,5 mld. USD (S&P) [15] |
| Governance | Centralizované šaría rady (SAC) pri regulátoroch | Regulácia cez kapitálový trh (CMB), sukuk cez lease-certificate štruktúry [13] | Decentralizovanejší model šaría rád, silný vplyv štandardov AAOIFI |
| Postoj k sporným štruktúram | Zvyčajne liberálnejší (napr. podmienečne povolený *bai inah* a *tawarruq*) [16] | Štruktúry typu ijara, murabaha, musharaka, mudaraba pre certifikáty [13] | Zálivový prístup je zvyčajne prísnejší [16] |

Čísla a charakteristiky sú orientačné, zo sekundárnych zdrojov. Pred použitím v zmluve alebo produkte ich over u regulátora a šaría poradcu.

## ⚡ Rýchly návod (Top)

Pred prvým stretnutím s partnerom z islamských financií si odpovedz:

1. Ktorý trh cieliš (Malajzia, Turecko, Záliv)? Šaría interpretácia sa medzi nimi líši.
2. Je produkt postavený na reálnom aktíve a zdieľaní rizika, alebo len „prelepený“ konvenčný úver?
3. Kto bude tvoj šaría board alebo poradca a čo od neho potrebuješ písomne?
4. Ak tokenizuješ: čo je skutočne na blockchaine a čo nie? Osobné údaje **nikdy on-chain** (GDPR, právo na vymazanie), ide najviac hash.
5. Aká je právna povaha tokenu v danej jurisdikcii (v EÚ napr. MiCA, overiť s právnikom)?

## 💡 Tipy a poznámky

- **Tokenizuj až keď to úloha žiada.** Smart contract dáva zmysel tam, kde rieši konkrétny problém (napr. automatické delenie výnosov medzi viacerých partnerov), nie ako samoúčel. Dovtedy stačí v architektúre jedno rozhranie (evidencia a vyúčtovanie), ktoré sa dá neskôr vymeniť.
- Pri pojmoch zo zvuku/prezentácie si overuj pravopis. „Makashi“ z prednášky bolo pravdepodobne *maqasid*. O lokálnom prepise nahrávok pozri [K000122](../K000122-Local-Audio-Transcription/).
- Čo tu **nie je**: záznam z panelu o tokenizácii waqf a sukuk, regulácia islamských bánk a digitálnych aktív v Labuane a podrobný šaría pohľad na tokenizované aktíva. Sú to otvorené otázky na ďalší KNIFE.

## ✅ Hodnota / Zhrnutie

Islamské financie sú **reálne aktívum + zdieľané riziko + šaría dohľad**. Sukuk je ich „dlhopis“, tokenizácia a smart contract sú technická vrstva nad ním, nie náhrada právneho rámca ani šaría schválenia. Malajzia, Turecko a Saudská Arábia používajú rovnaké pojmy, ale s rôznym akcentom, a preto treba trh a poradcu zvoliť vopred.

## Zdroje

[1] https://fintechnews.my/fintech-events-conference-forum-expo-malaysia/event/finweek-kuala-lumpur-2026/

[2] https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/infographics/35th%20Anniversary/LabuanIBFC-35th-Infographic-in_A4size_v11_2209.pdf

[3] https://newswav.com/article/mission-to-reset-labuan-ibfc-A2609_ACxg1c

[4] https://theedgemalaysia.com/node/812647

[5] https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/infographics/35th%20Anniversary/LabuanIBFC-35th-Infographic-in_A4size_v11_2209.pdf

[6] https://www.labuanibfc.com/clients/asset_52E835CC-1342-4701-B6FA-E2CD03AD74B4/contentms/img/publications/annual-reports/2026/Labuan-FSA-MR-2025.pdf

[7] https://ikr.inceif.org/handle/INCEIF/3417

[8] https://jmifr.usim.edu.my/index.php/jmifr/article/download/334/224

[9] https://pressreleases.responsesource.com/newsroom/SusieAsburyPR/release/103064

[10] https://azka.zakat.com.my/2025/ppz-maiwp-supports-world-zakat-waqf-forum-2025-as-corporate-partner/

[11] https://azka.zakat.com.my/?p=12715

[12] https://islamiceconomicsproject.com/2024/11/11/roundup-of-world-zakat-waqf-forum-2024/

[13] https://erdem-erdem.av.tr/en/insights/prominence-of-sukuk-in-turkey-as-an-islamic-finance-instrument

[14] https://f.invest.gov.tr/en/library/publications/lists/investpublications/turkiye-nexus-of-participation-finance.pdf

[15] https://www.arabnews.pk/node/2629160/business-economy

[16] https://www.malaymail.com/news/money/2014/05/21/malaysia-gulf-coming-closer-on-islamic-bai-inah-deals/673105

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
