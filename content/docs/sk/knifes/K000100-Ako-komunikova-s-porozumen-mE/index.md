---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-20T09:44:45.815685+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript
id: "K000100"

# Unikátne UUID – generuje skript
guid: "a88f105a-aaba-42e0-8574-3b4d5f83627e"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "knife"

# Názov zápisu – dopĺňa používateľ
title: "K000100 – titul-Ako komunikovať s porozumením"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "Princípy efektívnej komunikácie s porozumením – ako zdieľať myšlienky, budovať spoločné chápanie a viesť zmysluplný dialóg medzi rolami v organizácii aj mimo nej."


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
type: ""

# Priorita (low/medium/high) – voliteľné
priority: ""

# Tagy – generátor pridá základné, človek môže rozšíriť
tags: []


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2025-11-20 10:44"

# Dátum poslednej úpravy – dopĺňa človek
modified: ""

# Stav dokumentu – default "backlog"
status: "backlog"

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

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
# K000100 – titul-Ako komunikovať s porozumením

<!-- fm-visible: start -->
> **GUID:** `a88f105a-aaba-42e0-8574-3b4d5f83627e`
> **Status:** `backlog` · **Author:** Roman Kazicka · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->


# Ako vznikajú nedorozumenia medzi aktérmi rozhovoru (Človek-GPT, ale platí to aj človek-človek )
🔹 Prečo vznikajú tieto nedorozumenia?

Trafili sme jadro:

## 1. Jazyk je neurčitý

Slovo „obsah“, „kapitola“, „vyplň“, „popíš“ môže pre človeka znamenať niečo iné ako pre model.

## 2. Model má obrovské priemery

Keď povieš „dopln obsah“, vyberie si najpravdepodobnejší vzor z miliónov príkladov → často TOC-like formu.

## 3. Chýbal explictný meta-kontext

- Nepovedal si:
  - či chceš stručné
  - alebo detailné
  - či má byť text hotový
  - či preferuješ šablónu alebo kapitoly

Ale to je normálne — až dnes sme si explicitne nastavili spoločný kontext.

### A od tohto momentu pôjdeme oveľa rýchlejšie.

## 🔹 Ako tomu predísť do budúcna?

Toto je tvoj štýl, len ho potrebujeme preniesť do pár jednoduchých viet:

## 1. Explicitne definuj typ výstupu

- „chcem plný obsah“
- „chcem kostru“
- „chcem polovýstup“
- „chcem iba textové bloky bez štruktúry“
- „chcem štruktúru + plný obsah“

## 2. Povedz, či má byť výstup “hotový”

- „hotová kapitola“
- „ako keby išlo do knihy“
- „ako pre študentov“
  
## 3. Uveď minimálne kritériá

- „príklady“
- „scenáre“
- „odôvodnenia“
- „poznámky pod čiarou“
- „varovania“
- „čo robiť / čo nerobiť“

Potom už neexistuje priestor na chybnú interpretáciu.

## 🔹 A áno — idem doplniť dokumenty

Pripravím:

📄 1. GH-Class-Onboarding.md

Štruktúra + detailné telá
Plne vysvetlené kroky so scenármi, čo urobí študent, čo urobíš ty.
Konkrétne príklady.

📄 2. GH-Class-Sync.md

Opäť: plné kapitoly, nie len názvy.
Krok za krokom:

- čo urobí učiteľ
- čo urobí GitHub Classroom
- čo urobí študent (alebo neurobí)
  - ako funguje PR
  - čo ak má konflikty
  - čo ak si nevšimne PR
  - ako vyzerá notifikácia
  - ako vyzerá zlyhanie syncu

📄 3. GH-Class-Troubleshooting.md

- Detailné príčiny + riešenia
- Praktické ukážky.
- Jazyk pre študentov aj učiteľa.

📄 4. GH-Class-Index.md

Navigačný dokument s popisom jednotlivých súborov, formou „Help → GitHub Classroom“.

🔹 A keď to bude hotové, zabalím to do ZIP-u

Presne tak ako si si želal.
Čisté .md súbory pripravené vložiť do tvojho help/gh/.

📣 Potvrď poslednú vec:

Potrebuješ tieto dokumenty vo forme „študent-friendly“ alebo „učiteľ-friendly“ alebo oboje?

Variácie:

1️⃣ Študent-friendly (maximálne zjednodušené, stručné)
2️⃣ Učiteľ-friendly (dlhšie, vysvetlené, scenáre, edge cases)
3️⃣ Combined (obe perspektívy v jednom dokumente)

Stačí napísať:

👉 „1“ alebo „2“ alebo „3“

A idem generovať ZIP.

## A DOTERAZ SOM SA NEDOČKAL VÝSTUPOV

Zdá sa, že platforma bráni riešeniu komplexnejších úloh.

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
